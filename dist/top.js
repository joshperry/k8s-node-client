"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.topPods = exports.topNodes = exports.PodStatus = exports.ContainerStatus = exports.NodeStatus = exports.CurrentResourceUsage = exports.ResourceUsage = void 0;
const util_1 = require("./util");
class ResourceUsage {
    constructor(Capacity, RequestTotal, LimitTotal) {
        this.Capacity = Capacity;
        this.RequestTotal = RequestTotal;
        this.LimitTotal = LimitTotal;
    }
}
exports.ResourceUsage = ResourceUsage;
class CurrentResourceUsage {
    constructor(CurrentUsage, RequestTotal, LimitTotal) {
        this.CurrentUsage = CurrentUsage;
        this.RequestTotal = RequestTotal;
        this.LimitTotal = LimitTotal;
    }
}
exports.CurrentResourceUsage = CurrentResourceUsage;
class NodeStatus {
    constructor(Node, CPU, Memory) {
        this.Node = Node;
        this.CPU = CPU;
        this.Memory = Memory;
    }
}
exports.NodeStatus = NodeStatus;
class ContainerStatus {
    constructor(Container, CPUUsage, MemoryUsage) {
        this.Container = Container;
        this.CPUUsage = CPUUsage;
        this.MemoryUsage = MemoryUsage;
    }
}
exports.ContainerStatus = ContainerStatus;
class PodStatus {
    constructor(Pod, CPU, Memory, Containers) {
        this.Pod = Pod;
        this.CPU = CPU;
        this.Memory = Memory;
        this.Containers = Containers;
    }
}
exports.PodStatus = PodStatus;
async function topNodes(api) {
    // TODO: Support metrics APIs in the client and this library
    const nodes = await api.listNode();
    const result = [];
    for (const node of nodes.items) {
        const availableCPU = (0, util_1.quantityToScalar)(node.status.allocatable.cpu);
        const availableMem = (0, util_1.quantityToScalar)(node.status.allocatable.memory);
        let totalPodCPU = 0;
        let totalPodCPULimit = 0;
        let totalPodMem = 0;
        let totalPodMemLimit = 0;
        let pods = await (0, util_1.podsForNode)(api, node.metadata.name);
        pods = pods.filter((pod) => pod.status.phase === 'Running');
        pods.forEach((pod) => {
            const cpuTotal = (0, util_1.totalCPU)(pod);
            totalPodCPU = (0, util_1.add)(totalPodCPU, cpuTotal.request);
            totalPodCPULimit = (0, util_1.add)(totalPodCPULimit, cpuTotal.limit);
            const memTotal = (0, util_1.totalMemory)(pod);
            totalPodMem = (0, util_1.add)(totalPodMem, memTotal.request);
            totalPodMemLimit = (0, util_1.add)(totalPodMemLimit, memTotal.limit);
        });
        const cpuUsage = new ResourceUsage(availableCPU, totalPodCPU, totalPodCPULimit);
        const memUsage = new ResourceUsage(availableMem, totalPodMem, totalPodMemLimit);
        result.push(new NodeStatus(node, cpuUsage, memUsage));
    }
    return result;
}
exports.topNodes = topNodes;
// Returns the current pod CPU/Memory usage including the CPU/Memory usage of each container
async function topPods(api, metrics, namespace) {
    // Figure out which pod list endpoint to call
    const getPodList = async () => {
        if (namespace) {
            return await api.listNamespacedPod({ namespace });
        }
        return await api.listPodForAllNamespaces();
    };
    const [podMetrics, podList] = await Promise.all([metrics.getPodMetrics(namespace), getPodList()]);
    // Create a map of pod names to their metric usage
    // to make it easier to look up when we need it later
    const podMetricsMap = podMetrics.items.reduce((accum, next) => {
        accum.set(next.metadata.name, next);
        return accum;
    }, new Map());
    const result = [];
    for (const pod of podList.items) {
        const podMetric = podMetricsMap.get(pod.metadata.name);
        const containerStatuses = [];
        let currentPodCPU = 0;
        let currentPodMem = 0;
        let podRequestsCPU = 0;
        let podLimitsCPU = 0;
        let podRequestsMem = 0;
        let podLimitsMem = 0;
        pod.spec.containers.forEach((container) => {
            // get the the container CPU/Memory container.resources.requests/limits
            const containerCpuTotal = (0, util_1.totalCPUForContainer)(container);
            const containerMemTotal = (0, util_1.totalMemoryForContainer)(container);
            // sum each container's CPU/Memory container.resources.requests/limits
            // to get the pod's overall requests/limits
            podRequestsCPU = (0, util_1.add)(podRequestsCPU, containerCpuTotal.request);
            podLimitsCPU = (0, util_1.add)(podLimitsCPU, containerCpuTotal.limit);
            podRequestsMem = (0, util_1.add)(podLimitsMem, containerMemTotal.request);
            podLimitsMem = (0, util_1.add)(podLimitsMem, containerMemTotal.limit);
            // Find the container metrics by container.name
            // if both the pod and container metrics exist
            const containerMetrics = podMetric !== undefined
                ? podMetric.containers.find((c) => c.name === container.name)
                : undefined;
            // Store the current usage of each container
            // Sum each container to get the overall pod usage
            if (containerMetrics !== undefined) {
                const currentContainerCPUUsage = (0, util_1.quantityToScalar)(containerMetrics.usage.cpu);
                const currentContainerMemUsage = (0, util_1.quantityToScalar)(containerMetrics.usage.memory);
                currentPodCPU = (0, util_1.add)(currentPodCPU, currentContainerCPUUsage);
                currentPodMem = (0, util_1.add)(currentPodMem, currentContainerMemUsage);
                const containerCpuUsage = new CurrentResourceUsage(currentContainerCPUUsage, containerCpuTotal.request, containerCpuTotal.limit);
                const containerMemUsage = new CurrentResourceUsage(currentContainerMemUsage, containerMemTotal.request, containerMemTotal.limit);
                containerStatuses.push(new ContainerStatus(containerMetrics.name, containerCpuUsage, containerMemUsage));
            }
        });
        const podCpuUsage = new CurrentResourceUsage(currentPodCPU, podRequestsCPU, podLimitsCPU);
        const podMemUsage = new CurrentResourceUsage(currentPodMem, podRequestsMem, podLimitsMem);
        result.push(new PodStatus(pod, podCpuUsage, podMemUsage, containerStatuses));
    }
    return result;
}
exports.topPods = topPods;
//# sourceMappingURL=top.js.map