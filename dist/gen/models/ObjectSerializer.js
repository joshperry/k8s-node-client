"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("../models/AdmissionregistrationV1ServiceReference"), exports);
tslib_1.__exportStar(require("../models/AdmissionregistrationV1WebhookClientConfig"), exports);
tslib_1.__exportStar(require("../models/ApiextensionsV1ServiceReference"), exports);
tslib_1.__exportStar(require("../models/ApiextensionsV1WebhookClientConfig"), exports);
tslib_1.__exportStar(require("../models/ApiregistrationV1ServiceReference"), exports);
tslib_1.__exportStar(require("../models/AuthenticationV1TokenRequest"), exports);
tslib_1.__exportStar(require("../models/CoreV1EndpointPort"), exports);
tslib_1.__exportStar(require("../models/CoreV1Event"), exports);
tslib_1.__exportStar(require("../models/CoreV1EventList"), exports);
tslib_1.__exportStar(require("../models/CoreV1EventSeries"), exports);
tslib_1.__exportStar(require("../models/DiscoveryV1EndpointPort"), exports);
tslib_1.__exportStar(require("../models/EventsV1Event"), exports);
tslib_1.__exportStar(require("../models/EventsV1EventList"), exports);
tslib_1.__exportStar(require("../models/EventsV1EventSeries"), exports);
tslib_1.__exportStar(require("../models/StorageV1TokenRequest"), exports);
tslib_1.__exportStar(require("../models/V1APIGroup"), exports);
tslib_1.__exportStar(require("../models/V1APIGroupList"), exports);
tslib_1.__exportStar(require("../models/V1APIResource"), exports);
tslib_1.__exportStar(require("../models/V1APIResourceList"), exports);
tslib_1.__exportStar(require("../models/V1APIService"), exports);
tslib_1.__exportStar(require("../models/V1APIServiceCondition"), exports);
tslib_1.__exportStar(require("../models/V1APIServiceList"), exports);
tslib_1.__exportStar(require("../models/V1APIServiceSpec"), exports);
tslib_1.__exportStar(require("../models/V1APIServiceStatus"), exports);
tslib_1.__exportStar(require("../models/V1APIVersions"), exports);
tslib_1.__exportStar(require("../models/V1AWSElasticBlockStoreVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1Affinity"), exports);
tslib_1.__exportStar(require("../models/V1AggregationRule"), exports);
tslib_1.__exportStar(require("../models/V1AttachedVolume"), exports);
tslib_1.__exportStar(require("../models/V1AzureDiskVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1AzureFilePersistentVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1AzureFileVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1Binding"), exports);
tslib_1.__exportStar(require("../models/V1BoundObjectReference"), exports);
tslib_1.__exportStar(require("../models/V1CSIDriver"), exports);
tslib_1.__exportStar(require("../models/V1CSIDriverList"), exports);
tslib_1.__exportStar(require("../models/V1CSIDriverSpec"), exports);
tslib_1.__exportStar(require("../models/V1CSINode"), exports);
tslib_1.__exportStar(require("../models/V1CSINodeDriver"), exports);
tslib_1.__exportStar(require("../models/V1CSINodeList"), exports);
tslib_1.__exportStar(require("../models/V1CSINodeSpec"), exports);
tslib_1.__exportStar(require("../models/V1CSIPersistentVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1CSIVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1Capabilities"), exports);
tslib_1.__exportStar(require("../models/V1CephFSPersistentVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1CephFSVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1CertificateSigningRequest"), exports);
tslib_1.__exportStar(require("../models/V1CertificateSigningRequestCondition"), exports);
tslib_1.__exportStar(require("../models/V1CertificateSigningRequestList"), exports);
tslib_1.__exportStar(require("../models/V1CertificateSigningRequestSpec"), exports);
tslib_1.__exportStar(require("../models/V1CertificateSigningRequestStatus"), exports);
tslib_1.__exportStar(require("../models/V1CinderPersistentVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1CinderVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1ClientIPConfig"), exports);
tslib_1.__exportStar(require("../models/V1ClusterRole"), exports);
tslib_1.__exportStar(require("../models/V1ClusterRoleBinding"), exports);
tslib_1.__exportStar(require("../models/V1ClusterRoleBindingList"), exports);
tslib_1.__exportStar(require("../models/V1ClusterRoleList"), exports);
tslib_1.__exportStar(require("../models/V1ComponentCondition"), exports);
tslib_1.__exportStar(require("../models/V1ComponentStatus"), exports);
tslib_1.__exportStar(require("../models/V1ComponentStatusList"), exports);
tslib_1.__exportStar(require("../models/V1Condition"), exports);
tslib_1.__exportStar(require("../models/V1ConfigMap"), exports);
tslib_1.__exportStar(require("../models/V1ConfigMapEnvSource"), exports);
tslib_1.__exportStar(require("../models/V1ConfigMapKeySelector"), exports);
tslib_1.__exportStar(require("../models/V1ConfigMapList"), exports);
tslib_1.__exportStar(require("../models/V1ConfigMapNodeConfigSource"), exports);
tslib_1.__exportStar(require("../models/V1ConfigMapProjection"), exports);
tslib_1.__exportStar(require("../models/V1ConfigMapVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1Container"), exports);
tslib_1.__exportStar(require("../models/V1ContainerImage"), exports);
tslib_1.__exportStar(require("../models/V1ContainerPort"), exports);
tslib_1.__exportStar(require("../models/V1ContainerState"), exports);
tslib_1.__exportStar(require("../models/V1ContainerStateRunning"), exports);
tslib_1.__exportStar(require("../models/V1ContainerStateTerminated"), exports);
tslib_1.__exportStar(require("../models/V1ContainerStateWaiting"), exports);
tslib_1.__exportStar(require("../models/V1ContainerStatus"), exports);
tslib_1.__exportStar(require("../models/V1ControllerRevision"), exports);
tslib_1.__exportStar(require("../models/V1ControllerRevisionList"), exports);
tslib_1.__exportStar(require("../models/V1CronJob"), exports);
tslib_1.__exportStar(require("../models/V1CronJobList"), exports);
tslib_1.__exportStar(require("../models/V1CronJobSpec"), exports);
tslib_1.__exportStar(require("../models/V1CronJobStatus"), exports);
tslib_1.__exportStar(require("../models/V1CrossVersionObjectReference"), exports);
tslib_1.__exportStar(require("../models/V1CustomResourceColumnDefinition"), exports);
tslib_1.__exportStar(require("../models/V1CustomResourceConversion"), exports);
tslib_1.__exportStar(require("../models/V1CustomResourceDefinition"), exports);
tslib_1.__exportStar(require("../models/V1CustomResourceDefinitionCondition"), exports);
tslib_1.__exportStar(require("../models/V1CustomResourceDefinitionList"), exports);
tslib_1.__exportStar(require("../models/V1CustomResourceDefinitionNames"), exports);
tslib_1.__exportStar(require("../models/V1CustomResourceDefinitionSpec"), exports);
tslib_1.__exportStar(require("../models/V1CustomResourceDefinitionStatus"), exports);
tslib_1.__exportStar(require("../models/V1CustomResourceDefinitionVersion"), exports);
tslib_1.__exportStar(require("../models/V1CustomResourceSubresourceScale"), exports);
tslib_1.__exportStar(require("../models/V1CustomResourceSubresources"), exports);
tslib_1.__exportStar(require("../models/V1CustomResourceValidation"), exports);
tslib_1.__exportStar(require("../models/V1DaemonEndpoint"), exports);
tslib_1.__exportStar(require("../models/V1DaemonSet"), exports);
tslib_1.__exportStar(require("../models/V1DaemonSetCondition"), exports);
tslib_1.__exportStar(require("../models/V1DaemonSetList"), exports);
tslib_1.__exportStar(require("../models/V1DaemonSetSpec"), exports);
tslib_1.__exportStar(require("../models/V1DaemonSetStatus"), exports);
tslib_1.__exportStar(require("../models/V1DaemonSetUpdateStrategy"), exports);
tslib_1.__exportStar(require("../models/V1DeleteOptions"), exports);
tslib_1.__exportStar(require("../models/V1Deployment"), exports);
tslib_1.__exportStar(require("../models/V1DeploymentCondition"), exports);
tslib_1.__exportStar(require("../models/V1DeploymentList"), exports);
tslib_1.__exportStar(require("../models/V1DeploymentSpec"), exports);
tslib_1.__exportStar(require("../models/V1DeploymentStatus"), exports);
tslib_1.__exportStar(require("../models/V1DeploymentStrategy"), exports);
tslib_1.__exportStar(require("../models/V1DownwardAPIProjection"), exports);
tslib_1.__exportStar(require("../models/V1DownwardAPIVolumeFile"), exports);
tslib_1.__exportStar(require("../models/V1DownwardAPIVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1EmptyDirVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1Endpoint"), exports);
tslib_1.__exportStar(require("../models/V1EndpointAddress"), exports);
tslib_1.__exportStar(require("../models/V1EndpointConditions"), exports);
tslib_1.__exportStar(require("../models/V1EndpointHints"), exports);
tslib_1.__exportStar(require("../models/V1EndpointSlice"), exports);
tslib_1.__exportStar(require("../models/V1EndpointSliceList"), exports);
tslib_1.__exportStar(require("../models/V1EndpointSubset"), exports);
tslib_1.__exportStar(require("../models/V1Endpoints"), exports);
tslib_1.__exportStar(require("../models/V1EndpointsList"), exports);
tslib_1.__exportStar(require("../models/V1EnvFromSource"), exports);
tslib_1.__exportStar(require("../models/V1EnvVar"), exports);
tslib_1.__exportStar(require("../models/V1EnvVarSource"), exports);
tslib_1.__exportStar(require("../models/V1EphemeralContainer"), exports);
tslib_1.__exportStar(require("../models/V1EphemeralVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1EventSource"), exports);
tslib_1.__exportStar(require("../models/V1Eviction"), exports);
tslib_1.__exportStar(require("../models/V1ExecAction"), exports);
tslib_1.__exportStar(require("../models/V1ExternalDocumentation"), exports);
tslib_1.__exportStar(require("../models/V1FCVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1FlexPersistentVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1FlexVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1FlockerVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1ForZone"), exports);
tslib_1.__exportStar(require("../models/V1GCEPersistentDiskVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1GitRepoVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1GlusterfsPersistentVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1GlusterfsVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1GroupVersionForDiscovery"), exports);
tslib_1.__exportStar(require("../models/V1HTTPGetAction"), exports);
tslib_1.__exportStar(require("../models/V1HTTPHeader"), exports);
tslib_1.__exportStar(require("../models/V1HTTPIngressPath"), exports);
tslib_1.__exportStar(require("../models/V1HTTPIngressRuleValue"), exports);
tslib_1.__exportStar(require("../models/V1Handler"), exports);
tslib_1.__exportStar(require("../models/V1HorizontalPodAutoscaler"), exports);
tslib_1.__exportStar(require("../models/V1HorizontalPodAutoscalerList"), exports);
tslib_1.__exportStar(require("../models/V1HorizontalPodAutoscalerSpec"), exports);
tslib_1.__exportStar(require("../models/V1HorizontalPodAutoscalerStatus"), exports);
tslib_1.__exportStar(require("../models/V1HostAlias"), exports);
tslib_1.__exportStar(require("../models/V1HostPathVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1IPBlock"), exports);
tslib_1.__exportStar(require("../models/V1ISCSIPersistentVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1ISCSIVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1Ingress"), exports);
tslib_1.__exportStar(require("../models/V1IngressBackend"), exports);
tslib_1.__exportStar(require("../models/V1IngressClass"), exports);
tslib_1.__exportStar(require("../models/V1IngressClassList"), exports);
tslib_1.__exportStar(require("../models/V1IngressClassParametersReference"), exports);
tslib_1.__exportStar(require("../models/V1IngressClassSpec"), exports);
tslib_1.__exportStar(require("../models/V1IngressList"), exports);
tslib_1.__exportStar(require("../models/V1IngressRule"), exports);
tslib_1.__exportStar(require("../models/V1IngressServiceBackend"), exports);
tslib_1.__exportStar(require("../models/V1IngressSpec"), exports);
tslib_1.__exportStar(require("../models/V1IngressStatus"), exports);
tslib_1.__exportStar(require("../models/V1IngressTLS"), exports);
tslib_1.__exportStar(require("../models/V1JSONSchemaProps"), exports);
tslib_1.__exportStar(require("../models/V1Job"), exports);
tslib_1.__exportStar(require("../models/V1JobCondition"), exports);
tslib_1.__exportStar(require("../models/V1JobList"), exports);
tslib_1.__exportStar(require("../models/V1JobSpec"), exports);
tslib_1.__exportStar(require("../models/V1JobStatus"), exports);
tslib_1.__exportStar(require("../models/V1JobTemplateSpec"), exports);
tslib_1.__exportStar(require("../models/V1KeyToPath"), exports);
tslib_1.__exportStar(require("../models/V1LabelSelector"), exports);
tslib_1.__exportStar(require("../models/V1LabelSelectorRequirement"), exports);
tslib_1.__exportStar(require("../models/V1Lease"), exports);
tslib_1.__exportStar(require("../models/V1LeaseList"), exports);
tslib_1.__exportStar(require("../models/V1LeaseSpec"), exports);
tslib_1.__exportStar(require("../models/V1Lifecycle"), exports);
tslib_1.__exportStar(require("../models/V1LimitRange"), exports);
tslib_1.__exportStar(require("../models/V1LimitRangeItem"), exports);
tslib_1.__exportStar(require("../models/V1LimitRangeList"), exports);
tslib_1.__exportStar(require("../models/V1LimitRangeSpec"), exports);
tslib_1.__exportStar(require("../models/V1ListMeta"), exports);
tslib_1.__exportStar(require("../models/V1LoadBalancerIngress"), exports);
tslib_1.__exportStar(require("../models/V1LoadBalancerStatus"), exports);
tslib_1.__exportStar(require("../models/V1LocalObjectReference"), exports);
tslib_1.__exportStar(require("../models/V1LocalSubjectAccessReview"), exports);
tslib_1.__exportStar(require("../models/V1LocalVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1ManagedFieldsEntry"), exports);
tslib_1.__exportStar(require("../models/V1MutatingWebhook"), exports);
tslib_1.__exportStar(require("../models/V1MutatingWebhookConfiguration"), exports);
tslib_1.__exportStar(require("../models/V1MutatingWebhookConfigurationList"), exports);
tslib_1.__exportStar(require("../models/V1NFSVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1Namespace"), exports);
tslib_1.__exportStar(require("../models/V1NamespaceCondition"), exports);
tslib_1.__exportStar(require("../models/V1NamespaceList"), exports);
tslib_1.__exportStar(require("../models/V1NamespaceSpec"), exports);
tslib_1.__exportStar(require("../models/V1NamespaceStatus"), exports);
tslib_1.__exportStar(require("../models/V1NetworkPolicy"), exports);
tslib_1.__exportStar(require("../models/V1NetworkPolicyEgressRule"), exports);
tslib_1.__exportStar(require("../models/V1NetworkPolicyIngressRule"), exports);
tslib_1.__exportStar(require("../models/V1NetworkPolicyList"), exports);
tslib_1.__exportStar(require("../models/V1NetworkPolicyPeer"), exports);
tslib_1.__exportStar(require("../models/V1NetworkPolicyPort"), exports);
tslib_1.__exportStar(require("../models/V1NetworkPolicySpec"), exports);
tslib_1.__exportStar(require("../models/V1Node"), exports);
tslib_1.__exportStar(require("../models/V1NodeAddress"), exports);
tslib_1.__exportStar(require("../models/V1NodeAffinity"), exports);
tslib_1.__exportStar(require("../models/V1NodeCondition"), exports);
tslib_1.__exportStar(require("../models/V1NodeConfigSource"), exports);
tslib_1.__exportStar(require("../models/V1NodeConfigStatus"), exports);
tslib_1.__exportStar(require("../models/V1NodeDaemonEndpoints"), exports);
tslib_1.__exportStar(require("../models/V1NodeList"), exports);
tslib_1.__exportStar(require("../models/V1NodeSelector"), exports);
tslib_1.__exportStar(require("../models/V1NodeSelectorRequirement"), exports);
tslib_1.__exportStar(require("../models/V1NodeSelectorTerm"), exports);
tslib_1.__exportStar(require("../models/V1NodeSpec"), exports);
tslib_1.__exportStar(require("../models/V1NodeStatus"), exports);
tslib_1.__exportStar(require("../models/V1NodeSystemInfo"), exports);
tslib_1.__exportStar(require("../models/V1NonResourceAttributes"), exports);
tslib_1.__exportStar(require("../models/V1NonResourceRule"), exports);
tslib_1.__exportStar(require("../models/V1ObjectFieldSelector"), exports);
tslib_1.__exportStar(require("../models/V1ObjectMeta"), exports);
tslib_1.__exportStar(require("../models/V1ObjectReference"), exports);
tslib_1.__exportStar(require("../models/V1Overhead"), exports);
tslib_1.__exportStar(require("../models/V1OwnerReference"), exports);
tslib_1.__exportStar(require("../models/V1PersistentVolume"), exports);
tslib_1.__exportStar(require("../models/V1PersistentVolumeClaim"), exports);
tslib_1.__exportStar(require("../models/V1PersistentVolumeClaimCondition"), exports);
tslib_1.__exportStar(require("../models/V1PersistentVolumeClaimList"), exports);
tslib_1.__exportStar(require("../models/V1PersistentVolumeClaimSpec"), exports);
tslib_1.__exportStar(require("../models/V1PersistentVolumeClaimStatus"), exports);
tslib_1.__exportStar(require("../models/V1PersistentVolumeClaimTemplate"), exports);
tslib_1.__exportStar(require("../models/V1PersistentVolumeClaimVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1PersistentVolumeList"), exports);
tslib_1.__exportStar(require("../models/V1PersistentVolumeSpec"), exports);
tslib_1.__exportStar(require("../models/V1PersistentVolumeStatus"), exports);
tslib_1.__exportStar(require("../models/V1PhotonPersistentDiskVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1Pod"), exports);
tslib_1.__exportStar(require("../models/V1PodAffinity"), exports);
tslib_1.__exportStar(require("../models/V1PodAffinityTerm"), exports);
tslib_1.__exportStar(require("../models/V1PodAntiAffinity"), exports);
tslib_1.__exportStar(require("../models/V1PodCondition"), exports);
tslib_1.__exportStar(require("../models/V1PodDNSConfig"), exports);
tslib_1.__exportStar(require("../models/V1PodDNSConfigOption"), exports);
tslib_1.__exportStar(require("../models/V1PodDisruptionBudget"), exports);
tslib_1.__exportStar(require("../models/V1PodDisruptionBudgetList"), exports);
tslib_1.__exportStar(require("../models/V1PodDisruptionBudgetSpec"), exports);
tslib_1.__exportStar(require("../models/V1PodDisruptionBudgetStatus"), exports);
tslib_1.__exportStar(require("../models/V1PodIP"), exports);
tslib_1.__exportStar(require("../models/V1PodList"), exports);
tslib_1.__exportStar(require("../models/V1PodReadinessGate"), exports);
tslib_1.__exportStar(require("../models/V1PodSecurityContext"), exports);
tslib_1.__exportStar(require("../models/V1PodSpec"), exports);
tslib_1.__exportStar(require("../models/V1PodStatus"), exports);
tslib_1.__exportStar(require("../models/V1PodTemplate"), exports);
tslib_1.__exportStar(require("../models/V1PodTemplateList"), exports);
tslib_1.__exportStar(require("../models/V1PodTemplateSpec"), exports);
tslib_1.__exportStar(require("../models/V1PolicyRule"), exports);
tslib_1.__exportStar(require("../models/V1PortStatus"), exports);
tslib_1.__exportStar(require("../models/V1PortworxVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1Preconditions"), exports);
tslib_1.__exportStar(require("../models/V1PreferredSchedulingTerm"), exports);
tslib_1.__exportStar(require("../models/V1PriorityClass"), exports);
tslib_1.__exportStar(require("../models/V1PriorityClassList"), exports);
tslib_1.__exportStar(require("../models/V1Probe"), exports);
tslib_1.__exportStar(require("../models/V1ProjectedVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1QuobyteVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1RBDPersistentVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1RBDVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1ReplicaSet"), exports);
tslib_1.__exportStar(require("../models/V1ReplicaSetCondition"), exports);
tslib_1.__exportStar(require("../models/V1ReplicaSetList"), exports);
tslib_1.__exportStar(require("../models/V1ReplicaSetSpec"), exports);
tslib_1.__exportStar(require("../models/V1ReplicaSetStatus"), exports);
tslib_1.__exportStar(require("../models/V1ReplicationController"), exports);
tslib_1.__exportStar(require("../models/V1ReplicationControllerCondition"), exports);
tslib_1.__exportStar(require("../models/V1ReplicationControllerList"), exports);
tslib_1.__exportStar(require("../models/V1ReplicationControllerSpec"), exports);
tslib_1.__exportStar(require("../models/V1ReplicationControllerStatus"), exports);
tslib_1.__exportStar(require("../models/V1ResourceAttributes"), exports);
tslib_1.__exportStar(require("../models/V1ResourceFieldSelector"), exports);
tslib_1.__exportStar(require("../models/V1ResourceQuota"), exports);
tslib_1.__exportStar(require("../models/V1ResourceQuotaList"), exports);
tslib_1.__exportStar(require("../models/V1ResourceQuotaSpec"), exports);
tslib_1.__exportStar(require("../models/V1ResourceQuotaStatus"), exports);
tslib_1.__exportStar(require("../models/V1ResourceRequirements"), exports);
tslib_1.__exportStar(require("../models/V1ResourceRule"), exports);
tslib_1.__exportStar(require("../models/V1Role"), exports);
tslib_1.__exportStar(require("../models/V1RoleBinding"), exports);
tslib_1.__exportStar(require("../models/V1RoleBindingList"), exports);
tslib_1.__exportStar(require("../models/V1RoleList"), exports);
tslib_1.__exportStar(require("../models/V1RoleRef"), exports);
tslib_1.__exportStar(require("../models/V1RollingUpdateDaemonSet"), exports);
tslib_1.__exportStar(require("../models/V1RollingUpdateDeployment"), exports);
tslib_1.__exportStar(require("../models/V1RollingUpdateStatefulSetStrategy"), exports);
tslib_1.__exportStar(require("../models/V1RuleWithOperations"), exports);
tslib_1.__exportStar(require("../models/V1RuntimeClass"), exports);
tslib_1.__exportStar(require("../models/V1RuntimeClassList"), exports);
tslib_1.__exportStar(require("../models/V1SELinuxOptions"), exports);
tslib_1.__exportStar(require("../models/V1Scale"), exports);
tslib_1.__exportStar(require("../models/V1ScaleIOPersistentVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1ScaleIOVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1ScaleSpec"), exports);
tslib_1.__exportStar(require("../models/V1ScaleStatus"), exports);
tslib_1.__exportStar(require("../models/V1Scheduling"), exports);
tslib_1.__exportStar(require("../models/V1ScopeSelector"), exports);
tslib_1.__exportStar(require("../models/V1ScopedResourceSelectorRequirement"), exports);
tslib_1.__exportStar(require("../models/V1SeccompProfile"), exports);
tslib_1.__exportStar(require("../models/V1Secret"), exports);
tslib_1.__exportStar(require("../models/V1SecretEnvSource"), exports);
tslib_1.__exportStar(require("../models/V1SecretKeySelector"), exports);
tslib_1.__exportStar(require("../models/V1SecretList"), exports);
tslib_1.__exportStar(require("../models/V1SecretProjection"), exports);
tslib_1.__exportStar(require("../models/V1SecretReference"), exports);
tslib_1.__exportStar(require("../models/V1SecretVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1SecurityContext"), exports);
tslib_1.__exportStar(require("../models/V1SelfSubjectAccessReview"), exports);
tslib_1.__exportStar(require("../models/V1SelfSubjectAccessReviewSpec"), exports);
tslib_1.__exportStar(require("../models/V1SelfSubjectRulesReview"), exports);
tslib_1.__exportStar(require("../models/V1SelfSubjectRulesReviewSpec"), exports);
tslib_1.__exportStar(require("../models/V1ServerAddressByClientCIDR"), exports);
tslib_1.__exportStar(require("../models/V1Service"), exports);
tslib_1.__exportStar(require("../models/V1ServiceAccount"), exports);
tslib_1.__exportStar(require("../models/V1ServiceAccountList"), exports);
tslib_1.__exportStar(require("../models/V1ServiceAccountTokenProjection"), exports);
tslib_1.__exportStar(require("../models/V1ServiceBackendPort"), exports);
tslib_1.__exportStar(require("../models/V1ServiceList"), exports);
tslib_1.__exportStar(require("../models/V1ServicePort"), exports);
tslib_1.__exportStar(require("../models/V1ServiceSpec"), exports);
tslib_1.__exportStar(require("../models/V1ServiceStatus"), exports);
tslib_1.__exportStar(require("../models/V1SessionAffinityConfig"), exports);
tslib_1.__exportStar(require("../models/V1StatefulSet"), exports);
tslib_1.__exportStar(require("../models/V1StatefulSetCondition"), exports);
tslib_1.__exportStar(require("../models/V1StatefulSetList"), exports);
tslib_1.__exportStar(require("../models/V1StatefulSetSpec"), exports);
tslib_1.__exportStar(require("../models/V1StatefulSetStatus"), exports);
tslib_1.__exportStar(require("../models/V1StatefulSetUpdateStrategy"), exports);
tslib_1.__exportStar(require("../models/V1Status"), exports);
tslib_1.__exportStar(require("../models/V1StatusCause"), exports);
tslib_1.__exportStar(require("../models/V1StatusDetails"), exports);
tslib_1.__exportStar(require("../models/V1StorageClass"), exports);
tslib_1.__exportStar(require("../models/V1StorageClassList"), exports);
tslib_1.__exportStar(require("../models/V1StorageOSPersistentVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1StorageOSVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1Subject"), exports);
tslib_1.__exportStar(require("../models/V1SubjectAccessReview"), exports);
tslib_1.__exportStar(require("../models/V1SubjectAccessReviewSpec"), exports);
tslib_1.__exportStar(require("../models/V1SubjectAccessReviewStatus"), exports);
tslib_1.__exportStar(require("../models/V1SubjectRulesReviewStatus"), exports);
tslib_1.__exportStar(require("../models/V1Sysctl"), exports);
tslib_1.__exportStar(require("../models/V1TCPSocketAction"), exports);
tslib_1.__exportStar(require("../models/V1Taint"), exports);
tslib_1.__exportStar(require("../models/V1TokenRequestSpec"), exports);
tslib_1.__exportStar(require("../models/V1TokenRequestStatus"), exports);
tslib_1.__exportStar(require("../models/V1TokenReview"), exports);
tslib_1.__exportStar(require("../models/V1TokenReviewSpec"), exports);
tslib_1.__exportStar(require("../models/V1TokenReviewStatus"), exports);
tslib_1.__exportStar(require("../models/V1Toleration"), exports);
tslib_1.__exportStar(require("../models/V1TopologySelectorLabelRequirement"), exports);
tslib_1.__exportStar(require("../models/V1TopologySelectorTerm"), exports);
tslib_1.__exportStar(require("../models/V1TopologySpreadConstraint"), exports);
tslib_1.__exportStar(require("../models/V1TypedLocalObjectReference"), exports);
tslib_1.__exportStar(require("../models/V1UncountedTerminatedPods"), exports);
tslib_1.__exportStar(require("../models/V1UserInfo"), exports);
tslib_1.__exportStar(require("../models/V1ValidatingWebhook"), exports);
tslib_1.__exportStar(require("../models/V1ValidatingWebhookConfiguration"), exports);
tslib_1.__exportStar(require("../models/V1ValidatingWebhookConfigurationList"), exports);
tslib_1.__exportStar(require("../models/V1Volume"), exports);
tslib_1.__exportStar(require("../models/V1VolumeAttachment"), exports);
tslib_1.__exportStar(require("../models/V1VolumeAttachmentList"), exports);
tslib_1.__exportStar(require("../models/V1VolumeAttachmentSource"), exports);
tslib_1.__exportStar(require("../models/V1VolumeAttachmentSpec"), exports);
tslib_1.__exportStar(require("../models/V1VolumeAttachmentStatus"), exports);
tslib_1.__exportStar(require("../models/V1VolumeDevice"), exports);
tslib_1.__exportStar(require("../models/V1VolumeError"), exports);
tslib_1.__exportStar(require("../models/V1VolumeMount"), exports);
tslib_1.__exportStar(require("../models/V1VolumeNodeAffinity"), exports);
tslib_1.__exportStar(require("../models/V1VolumeNodeResources"), exports);
tslib_1.__exportStar(require("../models/V1VolumeProjection"), exports);
tslib_1.__exportStar(require("../models/V1VsphereVirtualDiskVolumeSource"), exports);
tslib_1.__exportStar(require("../models/V1WatchEvent"), exports);
tslib_1.__exportStar(require("../models/V1WebhookConversion"), exports);
tslib_1.__exportStar(require("../models/V1WeightedPodAffinityTerm"), exports);
tslib_1.__exportStar(require("../models/V1WindowsSecurityContextOptions"), exports);
tslib_1.__exportStar(require("../models/V1alpha1AggregationRule"), exports);
tslib_1.__exportStar(require("../models/V1alpha1CSIStorageCapacity"), exports);
tslib_1.__exportStar(require("../models/V1alpha1CSIStorageCapacityList"), exports);
tslib_1.__exportStar(require("../models/V1alpha1ClusterRole"), exports);
tslib_1.__exportStar(require("../models/V1alpha1ClusterRoleBinding"), exports);
tslib_1.__exportStar(require("../models/V1alpha1ClusterRoleBindingList"), exports);
tslib_1.__exportStar(require("../models/V1alpha1ClusterRoleList"), exports);
tslib_1.__exportStar(require("../models/V1alpha1Overhead"), exports);
tslib_1.__exportStar(require("../models/V1alpha1PolicyRule"), exports);
tslib_1.__exportStar(require("../models/V1alpha1PriorityClass"), exports);
tslib_1.__exportStar(require("../models/V1alpha1PriorityClassList"), exports);
tslib_1.__exportStar(require("../models/V1alpha1Role"), exports);
tslib_1.__exportStar(require("../models/V1alpha1RoleBinding"), exports);
tslib_1.__exportStar(require("../models/V1alpha1RoleBindingList"), exports);
tslib_1.__exportStar(require("../models/V1alpha1RoleList"), exports);
tslib_1.__exportStar(require("../models/V1alpha1RoleRef"), exports);
tslib_1.__exportStar(require("../models/V1alpha1RuntimeClass"), exports);
tslib_1.__exportStar(require("../models/V1alpha1RuntimeClassList"), exports);
tslib_1.__exportStar(require("../models/V1alpha1RuntimeClassSpec"), exports);
tslib_1.__exportStar(require("../models/V1alpha1Scheduling"), exports);
tslib_1.__exportStar(require("../models/V1alpha1ServerStorageVersion"), exports);
tslib_1.__exportStar(require("../models/V1alpha1StorageVersion"), exports);
tslib_1.__exportStar(require("../models/V1alpha1StorageVersionCondition"), exports);
tslib_1.__exportStar(require("../models/V1alpha1StorageVersionList"), exports);
tslib_1.__exportStar(require("../models/V1alpha1StorageVersionStatus"), exports);
tslib_1.__exportStar(require("../models/V1alpha1Subject"), exports);
tslib_1.__exportStar(require("../models/V1alpha1VolumeAttachment"), exports);
tslib_1.__exportStar(require("../models/V1alpha1VolumeAttachmentList"), exports);
tslib_1.__exportStar(require("../models/V1alpha1VolumeAttachmentSource"), exports);
tslib_1.__exportStar(require("../models/V1alpha1VolumeAttachmentSpec"), exports);
tslib_1.__exportStar(require("../models/V1alpha1VolumeAttachmentStatus"), exports);
tslib_1.__exportStar(require("../models/V1alpha1VolumeError"), exports);
tslib_1.__exportStar(require("../models/V1beta1AllowedCSIDriver"), exports);
tslib_1.__exportStar(require("../models/V1beta1AllowedFlexVolume"), exports);
tslib_1.__exportStar(require("../models/V1beta1AllowedHostPath"), exports);
tslib_1.__exportStar(require("../models/V1beta1CSIStorageCapacity"), exports);
tslib_1.__exportStar(require("../models/V1beta1CSIStorageCapacityList"), exports);
tslib_1.__exportStar(require("../models/V1beta1CronJob"), exports);
tslib_1.__exportStar(require("../models/V1beta1CronJobList"), exports);
tslib_1.__exportStar(require("../models/V1beta1CronJobSpec"), exports);
tslib_1.__exportStar(require("../models/V1beta1CronJobStatus"), exports);
tslib_1.__exportStar(require("../models/V1beta1Endpoint"), exports);
tslib_1.__exportStar(require("../models/V1beta1EndpointConditions"), exports);
tslib_1.__exportStar(require("../models/V1beta1EndpointHints"), exports);
tslib_1.__exportStar(require("../models/V1beta1EndpointPort"), exports);
tslib_1.__exportStar(require("../models/V1beta1EndpointSlice"), exports);
tslib_1.__exportStar(require("../models/V1beta1EndpointSliceList"), exports);
tslib_1.__exportStar(require("../models/V1beta1Event"), exports);
tslib_1.__exportStar(require("../models/V1beta1EventList"), exports);
tslib_1.__exportStar(require("../models/V1beta1EventSeries"), exports);
tslib_1.__exportStar(require("../models/V1beta1FSGroupStrategyOptions"), exports);
tslib_1.__exportStar(require("../models/V1beta1FlowDistinguisherMethod"), exports);
tslib_1.__exportStar(require("../models/V1beta1FlowSchema"), exports);
tslib_1.__exportStar(require("../models/V1beta1FlowSchemaCondition"), exports);
tslib_1.__exportStar(require("../models/V1beta1FlowSchemaList"), exports);
tslib_1.__exportStar(require("../models/V1beta1FlowSchemaSpec"), exports);
tslib_1.__exportStar(require("../models/V1beta1FlowSchemaStatus"), exports);
tslib_1.__exportStar(require("../models/V1beta1ForZone"), exports);
tslib_1.__exportStar(require("../models/V1beta1GroupSubject"), exports);
tslib_1.__exportStar(require("../models/V1beta1HostPortRange"), exports);
tslib_1.__exportStar(require("../models/V1beta1IDRange"), exports);
tslib_1.__exportStar(require("../models/V1beta1JobTemplateSpec"), exports);
tslib_1.__exportStar(require("../models/V1beta1LimitResponse"), exports);
tslib_1.__exportStar(require("../models/V1beta1LimitedPriorityLevelConfiguration"), exports);
tslib_1.__exportStar(require("../models/V1beta1NonResourcePolicyRule"), exports);
tslib_1.__exportStar(require("../models/V1beta1Overhead"), exports);
tslib_1.__exportStar(require("../models/V1beta1PodDisruptionBudget"), exports);
tslib_1.__exportStar(require("../models/V1beta1PodDisruptionBudgetList"), exports);
tslib_1.__exportStar(require("../models/V1beta1PodDisruptionBudgetSpec"), exports);
tslib_1.__exportStar(require("../models/V1beta1PodDisruptionBudgetStatus"), exports);
tslib_1.__exportStar(require("../models/V1beta1PodSecurityPolicy"), exports);
tslib_1.__exportStar(require("../models/V1beta1PodSecurityPolicyList"), exports);
tslib_1.__exportStar(require("../models/V1beta1PodSecurityPolicySpec"), exports);
tslib_1.__exportStar(require("../models/V1beta1PolicyRulesWithSubjects"), exports);
tslib_1.__exportStar(require("../models/V1beta1PriorityLevelConfiguration"), exports);
tslib_1.__exportStar(require("../models/V1beta1PriorityLevelConfigurationCondition"), exports);
tslib_1.__exportStar(require("../models/V1beta1PriorityLevelConfigurationList"), exports);
tslib_1.__exportStar(require("../models/V1beta1PriorityLevelConfigurationReference"), exports);
tslib_1.__exportStar(require("../models/V1beta1PriorityLevelConfigurationSpec"), exports);
tslib_1.__exportStar(require("../models/V1beta1PriorityLevelConfigurationStatus"), exports);
tslib_1.__exportStar(require("../models/V1beta1QueuingConfiguration"), exports);
tslib_1.__exportStar(require("../models/V1beta1ResourcePolicyRule"), exports);
tslib_1.__exportStar(require("../models/V1beta1RunAsGroupStrategyOptions"), exports);
tslib_1.__exportStar(require("../models/V1beta1RunAsUserStrategyOptions"), exports);
tslib_1.__exportStar(require("../models/V1beta1RuntimeClass"), exports);
tslib_1.__exportStar(require("../models/V1beta1RuntimeClassList"), exports);
tslib_1.__exportStar(require("../models/V1beta1RuntimeClassStrategyOptions"), exports);
tslib_1.__exportStar(require("../models/V1beta1SELinuxStrategyOptions"), exports);
tslib_1.__exportStar(require("../models/V1beta1Scheduling"), exports);
tslib_1.__exportStar(require("../models/V1beta1ServiceAccountSubject"), exports);
tslib_1.__exportStar(require("../models/V1beta1Subject"), exports);
tslib_1.__exportStar(require("../models/V1beta1SupplementalGroupsStrategyOptions"), exports);
tslib_1.__exportStar(require("../models/V1beta1UserSubject"), exports);
tslib_1.__exportStar(require("../models/V2beta1ContainerResourceMetricSource"), exports);
tslib_1.__exportStar(require("../models/V2beta1ContainerResourceMetricStatus"), exports);
tslib_1.__exportStar(require("../models/V2beta1CrossVersionObjectReference"), exports);
tslib_1.__exportStar(require("../models/V2beta1ExternalMetricSource"), exports);
tslib_1.__exportStar(require("../models/V2beta1ExternalMetricStatus"), exports);
tslib_1.__exportStar(require("../models/V2beta1HorizontalPodAutoscaler"), exports);
tslib_1.__exportStar(require("../models/V2beta1HorizontalPodAutoscalerCondition"), exports);
tslib_1.__exportStar(require("../models/V2beta1HorizontalPodAutoscalerList"), exports);
tslib_1.__exportStar(require("../models/V2beta1HorizontalPodAutoscalerSpec"), exports);
tslib_1.__exportStar(require("../models/V2beta1HorizontalPodAutoscalerStatus"), exports);
tslib_1.__exportStar(require("../models/V2beta1MetricSpec"), exports);
tslib_1.__exportStar(require("../models/V2beta1MetricStatus"), exports);
tslib_1.__exportStar(require("../models/V2beta1ObjectMetricSource"), exports);
tslib_1.__exportStar(require("../models/V2beta1ObjectMetricStatus"), exports);
tslib_1.__exportStar(require("../models/V2beta1PodsMetricSource"), exports);
tslib_1.__exportStar(require("../models/V2beta1PodsMetricStatus"), exports);
tslib_1.__exportStar(require("../models/V2beta1ResourceMetricSource"), exports);
tslib_1.__exportStar(require("../models/V2beta1ResourceMetricStatus"), exports);
tslib_1.__exportStar(require("../models/V2beta2ContainerResourceMetricSource"), exports);
tslib_1.__exportStar(require("../models/V2beta2ContainerResourceMetricStatus"), exports);
tslib_1.__exportStar(require("../models/V2beta2CrossVersionObjectReference"), exports);
tslib_1.__exportStar(require("../models/V2beta2ExternalMetricSource"), exports);
tslib_1.__exportStar(require("../models/V2beta2ExternalMetricStatus"), exports);
tslib_1.__exportStar(require("../models/V2beta2HPAScalingPolicy"), exports);
tslib_1.__exportStar(require("../models/V2beta2HPAScalingRules"), exports);
tslib_1.__exportStar(require("../models/V2beta2HorizontalPodAutoscaler"), exports);
tslib_1.__exportStar(require("../models/V2beta2HorizontalPodAutoscalerBehavior"), exports);
tslib_1.__exportStar(require("../models/V2beta2HorizontalPodAutoscalerCondition"), exports);
tslib_1.__exportStar(require("../models/V2beta2HorizontalPodAutoscalerList"), exports);
tslib_1.__exportStar(require("../models/V2beta2HorizontalPodAutoscalerSpec"), exports);
tslib_1.__exportStar(require("../models/V2beta2HorizontalPodAutoscalerStatus"), exports);
tslib_1.__exportStar(require("../models/V2beta2MetricIdentifier"), exports);
tslib_1.__exportStar(require("../models/V2beta2MetricSpec"), exports);
tslib_1.__exportStar(require("../models/V2beta2MetricStatus"), exports);
tslib_1.__exportStar(require("../models/V2beta2MetricTarget"), exports);
tslib_1.__exportStar(require("../models/V2beta2MetricValueStatus"), exports);
tslib_1.__exportStar(require("../models/V2beta2ObjectMetricSource"), exports);
tslib_1.__exportStar(require("../models/V2beta2ObjectMetricStatus"), exports);
tslib_1.__exportStar(require("../models/V2beta2PodsMetricSource"), exports);
tslib_1.__exportStar(require("../models/V2beta2PodsMetricStatus"), exports);
tslib_1.__exportStar(require("../models/V2beta2ResourceMetricSource"), exports);
tslib_1.__exportStar(require("../models/V2beta2ResourceMetricStatus"), exports);
tslib_1.__exportStar(require("../models/VersionInfo"), exports);
const AdmissionregistrationV1ServiceReference_1 = require("../models/AdmissionregistrationV1ServiceReference");
const AdmissionregistrationV1WebhookClientConfig_1 = require("../models/AdmissionregistrationV1WebhookClientConfig");
const ApiextensionsV1ServiceReference_1 = require("../models/ApiextensionsV1ServiceReference");
const ApiextensionsV1WebhookClientConfig_1 = require("../models/ApiextensionsV1WebhookClientConfig");
const ApiregistrationV1ServiceReference_1 = require("../models/ApiregistrationV1ServiceReference");
const AuthenticationV1TokenRequest_1 = require("../models/AuthenticationV1TokenRequest");
const CoreV1EndpointPort_1 = require("../models/CoreV1EndpointPort");
const CoreV1Event_1 = require("../models/CoreV1Event");
const CoreV1EventList_1 = require("../models/CoreV1EventList");
const CoreV1EventSeries_1 = require("../models/CoreV1EventSeries");
const DiscoveryV1EndpointPort_1 = require("../models/DiscoveryV1EndpointPort");
const EventsV1Event_1 = require("../models/EventsV1Event");
const EventsV1EventList_1 = require("../models/EventsV1EventList");
const EventsV1EventSeries_1 = require("../models/EventsV1EventSeries");
const StorageV1TokenRequest_1 = require("../models/StorageV1TokenRequest");
const V1APIGroup_1 = require("../models/V1APIGroup");
const V1APIGroupList_1 = require("../models/V1APIGroupList");
const V1APIResource_1 = require("../models/V1APIResource");
const V1APIResourceList_1 = require("../models/V1APIResourceList");
const V1APIService_1 = require("../models/V1APIService");
const V1APIServiceCondition_1 = require("../models/V1APIServiceCondition");
const V1APIServiceList_1 = require("../models/V1APIServiceList");
const V1APIServiceSpec_1 = require("../models/V1APIServiceSpec");
const V1APIServiceStatus_1 = require("../models/V1APIServiceStatus");
const V1APIVersions_1 = require("../models/V1APIVersions");
const V1AWSElasticBlockStoreVolumeSource_1 = require("../models/V1AWSElasticBlockStoreVolumeSource");
const V1Affinity_1 = require("../models/V1Affinity");
const V1AggregationRule_1 = require("../models/V1AggregationRule");
const V1AttachedVolume_1 = require("../models/V1AttachedVolume");
const V1AzureDiskVolumeSource_1 = require("../models/V1AzureDiskVolumeSource");
const V1AzureFilePersistentVolumeSource_1 = require("../models/V1AzureFilePersistentVolumeSource");
const V1AzureFileVolumeSource_1 = require("../models/V1AzureFileVolumeSource");
const V1Binding_1 = require("../models/V1Binding");
const V1BoundObjectReference_1 = require("../models/V1BoundObjectReference");
const V1CSIDriver_1 = require("../models/V1CSIDriver");
const V1CSIDriverList_1 = require("../models/V1CSIDriverList");
const V1CSIDriverSpec_1 = require("../models/V1CSIDriverSpec");
const V1CSINode_1 = require("../models/V1CSINode");
const V1CSINodeDriver_1 = require("../models/V1CSINodeDriver");
const V1CSINodeList_1 = require("../models/V1CSINodeList");
const V1CSINodeSpec_1 = require("../models/V1CSINodeSpec");
const V1CSIPersistentVolumeSource_1 = require("../models/V1CSIPersistentVolumeSource");
const V1CSIVolumeSource_1 = require("../models/V1CSIVolumeSource");
const V1Capabilities_1 = require("../models/V1Capabilities");
const V1CephFSPersistentVolumeSource_1 = require("../models/V1CephFSPersistentVolumeSource");
const V1CephFSVolumeSource_1 = require("../models/V1CephFSVolumeSource");
const V1CertificateSigningRequest_1 = require("../models/V1CertificateSigningRequest");
const V1CertificateSigningRequestCondition_1 = require("../models/V1CertificateSigningRequestCondition");
const V1CertificateSigningRequestList_1 = require("../models/V1CertificateSigningRequestList");
const V1CertificateSigningRequestSpec_1 = require("../models/V1CertificateSigningRequestSpec");
const V1CertificateSigningRequestStatus_1 = require("../models/V1CertificateSigningRequestStatus");
const V1CinderPersistentVolumeSource_1 = require("../models/V1CinderPersistentVolumeSource");
const V1CinderVolumeSource_1 = require("../models/V1CinderVolumeSource");
const V1ClientIPConfig_1 = require("../models/V1ClientIPConfig");
const V1ClusterRole_1 = require("../models/V1ClusterRole");
const V1ClusterRoleBinding_1 = require("../models/V1ClusterRoleBinding");
const V1ClusterRoleBindingList_1 = require("../models/V1ClusterRoleBindingList");
const V1ClusterRoleList_1 = require("../models/V1ClusterRoleList");
const V1ComponentCondition_1 = require("../models/V1ComponentCondition");
const V1ComponentStatus_1 = require("../models/V1ComponentStatus");
const V1ComponentStatusList_1 = require("../models/V1ComponentStatusList");
const V1Condition_1 = require("../models/V1Condition");
const V1ConfigMap_1 = require("../models/V1ConfigMap");
const V1ConfigMapEnvSource_1 = require("../models/V1ConfigMapEnvSource");
const V1ConfigMapKeySelector_1 = require("../models/V1ConfigMapKeySelector");
const V1ConfigMapList_1 = require("../models/V1ConfigMapList");
const V1ConfigMapNodeConfigSource_1 = require("../models/V1ConfigMapNodeConfigSource");
const V1ConfigMapProjection_1 = require("../models/V1ConfigMapProjection");
const V1ConfigMapVolumeSource_1 = require("../models/V1ConfigMapVolumeSource");
const V1Container_1 = require("../models/V1Container");
const V1ContainerImage_1 = require("../models/V1ContainerImage");
const V1ContainerPort_1 = require("../models/V1ContainerPort");
const V1ContainerState_1 = require("../models/V1ContainerState");
const V1ContainerStateRunning_1 = require("../models/V1ContainerStateRunning");
const V1ContainerStateTerminated_1 = require("../models/V1ContainerStateTerminated");
const V1ContainerStateWaiting_1 = require("../models/V1ContainerStateWaiting");
const V1ContainerStatus_1 = require("../models/V1ContainerStatus");
const V1ControllerRevision_1 = require("../models/V1ControllerRevision");
const V1ControllerRevisionList_1 = require("../models/V1ControllerRevisionList");
const V1CronJob_1 = require("../models/V1CronJob");
const V1CronJobList_1 = require("../models/V1CronJobList");
const V1CronJobSpec_1 = require("../models/V1CronJobSpec");
const V1CronJobStatus_1 = require("../models/V1CronJobStatus");
const V1CrossVersionObjectReference_1 = require("../models/V1CrossVersionObjectReference");
const V1CustomResourceColumnDefinition_1 = require("../models/V1CustomResourceColumnDefinition");
const V1CustomResourceConversion_1 = require("../models/V1CustomResourceConversion");
const V1CustomResourceDefinition_1 = require("../models/V1CustomResourceDefinition");
const V1CustomResourceDefinitionCondition_1 = require("../models/V1CustomResourceDefinitionCondition");
const V1CustomResourceDefinitionList_1 = require("../models/V1CustomResourceDefinitionList");
const V1CustomResourceDefinitionNames_1 = require("../models/V1CustomResourceDefinitionNames");
const V1CustomResourceDefinitionSpec_1 = require("../models/V1CustomResourceDefinitionSpec");
const V1CustomResourceDefinitionStatus_1 = require("../models/V1CustomResourceDefinitionStatus");
const V1CustomResourceDefinitionVersion_1 = require("../models/V1CustomResourceDefinitionVersion");
const V1CustomResourceSubresourceScale_1 = require("../models/V1CustomResourceSubresourceScale");
const V1CustomResourceSubresources_1 = require("../models/V1CustomResourceSubresources");
const V1CustomResourceValidation_1 = require("../models/V1CustomResourceValidation");
const V1DaemonEndpoint_1 = require("../models/V1DaemonEndpoint");
const V1DaemonSet_1 = require("../models/V1DaemonSet");
const V1DaemonSetCondition_1 = require("../models/V1DaemonSetCondition");
const V1DaemonSetList_1 = require("../models/V1DaemonSetList");
const V1DaemonSetSpec_1 = require("../models/V1DaemonSetSpec");
const V1DaemonSetStatus_1 = require("../models/V1DaemonSetStatus");
const V1DaemonSetUpdateStrategy_1 = require("../models/V1DaemonSetUpdateStrategy");
const V1DeleteOptions_1 = require("../models/V1DeleteOptions");
const V1Deployment_1 = require("../models/V1Deployment");
const V1DeploymentCondition_1 = require("../models/V1DeploymentCondition");
const V1DeploymentList_1 = require("../models/V1DeploymentList");
const V1DeploymentSpec_1 = require("../models/V1DeploymentSpec");
const V1DeploymentStatus_1 = require("../models/V1DeploymentStatus");
const V1DeploymentStrategy_1 = require("../models/V1DeploymentStrategy");
const V1DownwardAPIProjection_1 = require("../models/V1DownwardAPIProjection");
const V1DownwardAPIVolumeFile_1 = require("../models/V1DownwardAPIVolumeFile");
const V1DownwardAPIVolumeSource_1 = require("../models/V1DownwardAPIVolumeSource");
const V1EmptyDirVolumeSource_1 = require("../models/V1EmptyDirVolumeSource");
const V1Endpoint_1 = require("../models/V1Endpoint");
const V1EndpointAddress_1 = require("../models/V1EndpointAddress");
const V1EndpointConditions_1 = require("../models/V1EndpointConditions");
const V1EndpointHints_1 = require("../models/V1EndpointHints");
const V1EndpointSlice_1 = require("../models/V1EndpointSlice");
const V1EndpointSliceList_1 = require("../models/V1EndpointSliceList");
const V1EndpointSubset_1 = require("../models/V1EndpointSubset");
const V1Endpoints_1 = require("../models/V1Endpoints");
const V1EndpointsList_1 = require("../models/V1EndpointsList");
const V1EnvFromSource_1 = require("../models/V1EnvFromSource");
const V1EnvVar_1 = require("../models/V1EnvVar");
const V1EnvVarSource_1 = require("../models/V1EnvVarSource");
const V1EphemeralContainer_1 = require("../models/V1EphemeralContainer");
const V1EphemeralVolumeSource_1 = require("../models/V1EphemeralVolumeSource");
const V1EventSource_1 = require("../models/V1EventSource");
const V1Eviction_1 = require("../models/V1Eviction");
const V1ExecAction_1 = require("../models/V1ExecAction");
const V1ExternalDocumentation_1 = require("../models/V1ExternalDocumentation");
const V1FCVolumeSource_1 = require("../models/V1FCVolumeSource");
const V1FlexPersistentVolumeSource_1 = require("../models/V1FlexPersistentVolumeSource");
const V1FlexVolumeSource_1 = require("../models/V1FlexVolumeSource");
const V1FlockerVolumeSource_1 = require("../models/V1FlockerVolumeSource");
const V1ForZone_1 = require("../models/V1ForZone");
const V1GCEPersistentDiskVolumeSource_1 = require("../models/V1GCEPersistentDiskVolumeSource");
const V1GitRepoVolumeSource_1 = require("../models/V1GitRepoVolumeSource");
const V1GlusterfsPersistentVolumeSource_1 = require("../models/V1GlusterfsPersistentVolumeSource");
const V1GlusterfsVolumeSource_1 = require("../models/V1GlusterfsVolumeSource");
const V1GroupVersionForDiscovery_1 = require("../models/V1GroupVersionForDiscovery");
const V1HTTPGetAction_1 = require("../models/V1HTTPGetAction");
const V1HTTPHeader_1 = require("../models/V1HTTPHeader");
const V1HTTPIngressPath_1 = require("../models/V1HTTPIngressPath");
const V1HTTPIngressRuleValue_1 = require("../models/V1HTTPIngressRuleValue");
const V1Handler_1 = require("../models/V1Handler");
const V1HorizontalPodAutoscaler_1 = require("../models/V1HorizontalPodAutoscaler");
const V1HorizontalPodAutoscalerList_1 = require("../models/V1HorizontalPodAutoscalerList");
const V1HorizontalPodAutoscalerSpec_1 = require("../models/V1HorizontalPodAutoscalerSpec");
const V1HorizontalPodAutoscalerStatus_1 = require("../models/V1HorizontalPodAutoscalerStatus");
const V1HostAlias_1 = require("../models/V1HostAlias");
const V1HostPathVolumeSource_1 = require("../models/V1HostPathVolumeSource");
const V1IPBlock_1 = require("../models/V1IPBlock");
const V1ISCSIPersistentVolumeSource_1 = require("../models/V1ISCSIPersistentVolumeSource");
const V1ISCSIVolumeSource_1 = require("../models/V1ISCSIVolumeSource");
const V1Ingress_1 = require("../models/V1Ingress");
const V1IngressBackend_1 = require("../models/V1IngressBackend");
const V1IngressClass_1 = require("../models/V1IngressClass");
const V1IngressClassList_1 = require("../models/V1IngressClassList");
const V1IngressClassParametersReference_1 = require("../models/V1IngressClassParametersReference");
const V1IngressClassSpec_1 = require("../models/V1IngressClassSpec");
const V1IngressList_1 = require("../models/V1IngressList");
const V1IngressRule_1 = require("../models/V1IngressRule");
const V1IngressServiceBackend_1 = require("../models/V1IngressServiceBackend");
const V1IngressSpec_1 = require("../models/V1IngressSpec");
const V1IngressStatus_1 = require("../models/V1IngressStatus");
const V1IngressTLS_1 = require("../models/V1IngressTLS");
const V1JSONSchemaProps_1 = require("../models/V1JSONSchemaProps");
const V1Job_1 = require("../models/V1Job");
const V1JobCondition_1 = require("../models/V1JobCondition");
const V1JobList_1 = require("../models/V1JobList");
const V1JobSpec_1 = require("../models/V1JobSpec");
const V1JobStatus_1 = require("../models/V1JobStatus");
const V1JobTemplateSpec_1 = require("../models/V1JobTemplateSpec");
const V1KeyToPath_1 = require("../models/V1KeyToPath");
const V1LabelSelector_1 = require("../models/V1LabelSelector");
const V1LabelSelectorRequirement_1 = require("../models/V1LabelSelectorRequirement");
const V1Lease_1 = require("../models/V1Lease");
const V1LeaseList_1 = require("../models/V1LeaseList");
const V1LeaseSpec_1 = require("../models/V1LeaseSpec");
const V1Lifecycle_1 = require("../models/V1Lifecycle");
const V1LimitRange_1 = require("../models/V1LimitRange");
const V1LimitRangeItem_1 = require("../models/V1LimitRangeItem");
const V1LimitRangeList_1 = require("../models/V1LimitRangeList");
const V1LimitRangeSpec_1 = require("../models/V1LimitRangeSpec");
const V1ListMeta_1 = require("../models/V1ListMeta");
const V1LoadBalancerIngress_1 = require("../models/V1LoadBalancerIngress");
const V1LoadBalancerStatus_1 = require("../models/V1LoadBalancerStatus");
const V1LocalObjectReference_1 = require("../models/V1LocalObjectReference");
const V1LocalSubjectAccessReview_1 = require("../models/V1LocalSubjectAccessReview");
const V1LocalVolumeSource_1 = require("../models/V1LocalVolumeSource");
const V1ManagedFieldsEntry_1 = require("../models/V1ManagedFieldsEntry");
const V1MutatingWebhook_1 = require("../models/V1MutatingWebhook");
const V1MutatingWebhookConfiguration_1 = require("../models/V1MutatingWebhookConfiguration");
const V1MutatingWebhookConfigurationList_1 = require("../models/V1MutatingWebhookConfigurationList");
const V1NFSVolumeSource_1 = require("../models/V1NFSVolumeSource");
const V1Namespace_1 = require("../models/V1Namespace");
const V1NamespaceCondition_1 = require("../models/V1NamespaceCondition");
const V1NamespaceList_1 = require("../models/V1NamespaceList");
const V1NamespaceSpec_1 = require("../models/V1NamespaceSpec");
const V1NamespaceStatus_1 = require("../models/V1NamespaceStatus");
const V1NetworkPolicy_1 = require("../models/V1NetworkPolicy");
const V1NetworkPolicyEgressRule_1 = require("../models/V1NetworkPolicyEgressRule");
const V1NetworkPolicyIngressRule_1 = require("../models/V1NetworkPolicyIngressRule");
const V1NetworkPolicyList_1 = require("../models/V1NetworkPolicyList");
const V1NetworkPolicyPeer_1 = require("../models/V1NetworkPolicyPeer");
const V1NetworkPolicyPort_1 = require("../models/V1NetworkPolicyPort");
const V1NetworkPolicySpec_1 = require("../models/V1NetworkPolicySpec");
const V1Node_1 = require("../models/V1Node");
const V1NodeAddress_1 = require("../models/V1NodeAddress");
const V1NodeAffinity_1 = require("../models/V1NodeAffinity");
const V1NodeCondition_1 = require("../models/V1NodeCondition");
const V1NodeConfigSource_1 = require("../models/V1NodeConfigSource");
const V1NodeConfigStatus_1 = require("../models/V1NodeConfigStatus");
const V1NodeDaemonEndpoints_1 = require("../models/V1NodeDaemonEndpoints");
const V1NodeList_1 = require("../models/V1NodeList");
const V1NodeSelector_1 = require("../models/V1NodeSelector");
const V1NodeSelectorRequirement_1 = require("../models/V1NodeSelectorRequirement");
const V1NodeSelectorTerm_1 = require("../models/V1NodeSelectorTerm");
const V1NodeSpec_1 = require("../models/V1NodeSpec");
const V1NodeStatus_1 = require("../models/V1NodeStatus");
const V1NodeSystemInfo_1 = require("../models/V1NodeSystemInfo");
const V1NonResourceAttributes_1 = require("../models/V1NonResourceAttributes");
const V1NonResourceRule_1 = require("../models/V1NonResourceRule");
const V1ObjectFieldSelector_1 = require("../models/V1ObjectFieldSelector");
const V1ObjectMeta_1 = require("../models/V1ObjectMeta");
const V1ObjectReference_1 = require("../models/V1ObjectReference");
const V1Overhead_1 = require("../models/V1Overhead");
const V1OwnerReference_1 = require("../models/V1OwnerReference");
const V1PersistentVolume_1 = require("../models/V1PersistentVolume");
const V1PersistentVolumeClaim_1 = require("../models/V1PersistentVolumeClaim");
const V1PersistentVolumeClaimCondition_1 = require("../models/V1PersistentVolumeClaimCondition");
const V1PersistentVolumeClaimList_1 = require("../models/V1PersistentVolumeClaimList");
const V1PersistentVolumeClaimSpec_1 = require("../models/V1PersistentVolumeClaimSpec");
const V1PersistentVolumeClaimStatus_1 = require("../models/V1PersistentVolumeClaimStatus");
const V1PersistentVolumeClaimTemplate_1 = require("../models/V1PersistentVolumeClaimTemplate");
const V1PersistentVolumeClaimVolumeSource_1 = require("../models/V1PersistentVolumeClaimVolumeSource");
const V1PersistentVolumeList_1 = require("../models/V1PersistentVolumeList");
const V1PersistentVolumeSpec_1 = require("../models/V1PersistentVolumeSpec");
const V1PersistentVolumeStatus_1 = require("../models/V1PersistentVolumeStatus");
const V1PhotonPersistentDiskVolumeSource_1 = require("../models/V1PhotonPersistentDiskVolumeSource");
const V1Pod_1 = require("../models/V1Pod");
const V1PodAffinity_1 = require("../models/V1PodAffinity");
const V1PodAffinityTerm_1 = require("../models/V1PodAffinityTerm");
const V1PodAntiAffinity_1 = require("../models/V1PodAntiAffinity");
const V1PodCondition_1 = require("../models/V1PodCondition");
const V1PodDNSConfig_1 = require("../models/V1PodDNSConfig");
const V1PodDNSConfigOption_1 = require("../models/V1PodDNSConfigOption");
const V1PodDisruptionBudget_1 = require("../models/V1PodDisruptionBudget");
const V1PodDisruptionBudgetList_1 = require("../models/V1PodDisruptionBudgetList");
const V1PodDisruptionBudgetSpec_1 = require("../models/V1PodDisruptionBudgetSpec");
const V1PodDisruptionBudgetStatus_1 = require("../models/V1PodDisruptionBudgetStatus");
const V1PodIP_1 = require("../models/V1PodIP");
const V1PodList_1 = require("../models/V1PodList");
const V1PodReadinessGate_1 = require("../models/V1PodReadinessGate");
const V1PodSecurityContext_1 = require("../models/V1PodSecurityContext");
const V1PodSpec_1 = require("../models/V1PodSpec");
const V1PodStatus_1 = require("../models/V1PodStatus");
const V1PodTemplate_1 = require("../models/V1PodTemplate");
const V1PodTemplateList_1 = require("../models/V1PodTemplateList");
const V1PodTemplateSpec_1 = require("../models/V1PodTemplateSpec");
const V1PolicyRule_1 = require("../models/V1PolicyRule");
const V1PortStatus_1 = require("../models/V1PortStatus");
const V1PortworxVolumeSource_1 = require("../models/V1PortworxVolumeSource");
const V1Preconditions_1 = require("../models/V1Preconditions");
const V1PreferredSchedulingTerm_1 = require("../models/V1PreferredSchedulingTerm");
const V1PriorityClass_1 = require("../models/V1PriorityClass");
const V1PriorityClassList_1 = require("../models/V1PriorityClassList");
const V1Probe_1 = require("../models/V1Probe");
const V1ProjectedVolumeSource_1 = require("../models/V1ProjectedVolumeSource");
const V1QuobyteVolumeSource_1 = require("../models/V1QuobyteVolumeSource");
const V1RBDPersistentVolumeSource_1 = require("../models/V1RBDPersistentVolumeSource");
const V1RBDVolumeSource_1 = require("../models/V1RBDVolumeSource");
const V1ReplicaSet_1 = require("../models/V1ReplicaSet");
const V1ReplicaSetCondition_1 = require("../models/V1ReplicaSetCondition");
const V1ReplicaSetList_1 = require("../models/V1ReplicaSetList");
const V1ReplicaSetSpec_1 = require("../models/V1ReplicaSetSpec");
const V1ReplicaSetStatus_1 = require("../models/V1ReplicaSetStatus");
const V1ReplicationController_1 = require("../models/V1ReplicationController");
const V1ReplicationControllerCondition_1 = require("../models/V1ReplicationControllerCondition");
const V1ReplicationControllerList_1 = require("../models/V1ReplicationControllerList");
const V1ReplicationControllerSpec_1 = require("../models/V1ReplicationControllerSpec");
const V1ReplicationControllerStatus_1 = require("../models/V1ReplicationControllerStatus");
const V1ResourceAttributes_1 = require("../models/V1ResourceAttributes");
const V1ResourceFieldSelector_1 = require("../models/V1ResourceFieldSelector");
const V1ResourceQuota_1 = require("../models/V1ResourceQuota");
const V1ResourceQuotaList_1 = require("../models/V1ResourceQuotaList");
const V1ResourceQuotaSpec_1 = require("../models/V1ResourceQuotaSpec");
const V1ResourceQuotaStatus_1 = require("../models/V1ResourceQuotaStatus");
const V1ResourceRequirements_1 = require("../models/V1ResourceRequirements");
const V1ResourceRule_1 = require("../models/V1ResourceRule");
const V1Role_1 = require("../models/V1Role");
const V1RoleBinding_1 = require("../models/V1RoleBinding");
const V1RoleBindingList_1 = require("../models/V1RoleBindingList");
const V1RoleList_1 = require("../models/V1RoleList");
const V1RoleRef_1 = require("../models/V1RoleRef");
const V1RollingUpdateDaemonSet_1 = require("../models/V1RollingUpdateDaemonSet");
const V1RollingUpdateDeployment_1 = require("../models/V1RollingUpdateDeployment");
const V1RollingUpdateStatefulSetStrategy_1 = require("../models/V1RollingUpdateStatefulSetStrategy");
const V1RuleWithOperations_1 = require("../models/V1RuleWithOperations");
const V1RuntimeClass_1 = require("../models/V1RuntimeClass");
const V1RuntimeClassList_1 = require("../models/V1RuntimeClassList");
const V1SELinuxOptions_1 = require("../models/V1SELinuxOptions");
const V1Scale_1 = require("../models/V1Scale");
const V1ScaleIOPersistentVolumeSource_1 = require("../models/V1ScaleIOPersistentVolumeSource");
const V1ScaleIOVolumeSource_1 = require("../models/V1ScaleIOVolumeSource");
const V1ScaleSpec_1 = require("../models/V1ScaleSpec");
const V1ScaleStatus_1 = require("../models/V1ScaleStatus");
const V1Scheduling_1 = require("../models/V1Scheduling");
const V1ScopeSelector_1 = require("../models/V1ScopeSelector");
const V1ScopedResourceSelectorRequirement_1 = require("../models/V1ScopedResourceSelectorRequirement");
const V1SeccompProfile_1 = require("../models/V1SeccompProfile");
const V1Secret_1 = require("../models/V1Secret");
const V1SecretEnvSource_1 = require("../models/V1SecretEnvSource");
const V1SecretKeySelector_1 = require("../models/V1SecretKeySelector");
const V1SecretList_1 = require("../models/V1SecretList");
const V1SecretProjection_1 = require("../models/V1SecretProjection");
const V1SecretReference_1 = require("../models/V1SecretReference");
const V1SecretVolumeSource_1 = require("../models/V1SecretVolumeSource");
const V1SecurityContext_1 = require("../models/V1SecurityContext");
const V1SelfSubjectAccessReview_1 = require("../models/V1SelfSubjectAccessReview");
const V1SelfSubjectAccessReviewSpec_1 = require("../models/V1SelfSubjectAccessReviewSpec");
const V1SelfSubjectRulesReview_1 = require("../models/V1SelfSubjectRulesReview");
const V1SelfSubjectRulesReviewSpec_1 = require("../models/V1SelfSubjectRulesReviewSpec");
const V1ServerAddressByClientCIDR_1 = require("../models/V1ServerAddressByClientCIDR");
const V1Service_1 = require("../models/V1Service");
const V1ServiceAccount_1 = require("../models/V1ServiceAccount");
const V1ServiceAccountList_1 = require("../models/V1ServiceAccountList");
const V1ServiceAccountTokenProjection_1 = require("../models/V1ServiceAccountTokenProjection");
const V1ServiceBackendPort_1 = require("../models/V1ServiceBackendPort");
const V1ServiceList_1 = require("../models/V1ServiceList");
const V1ServicePort_1 = require("../models/V1ServicePort");
const V1ServiceSpec_1 = require("../models/V1ServiceSpec");
const V1ServiceStatus_1 = require("../models/V1ServiceStatus");
const V1SessionAffinityConfig_1 = require("../models/V1SessionAffinityConfig");
const V1StatefulSet_1 = require("../models/V1StatefulSet");
const V1StatefulSetCondition_1 = require("../models/V1StatefulSetCondition");
const V1StatefulSetList_1 = require("../models/V1StatefulSetList");
const V1StatefulSetSpec_1 = require("../models/V1StatefulSetSpec");
const V1StatefulSetStatus_1 = require("../models/V1StatefulSetStatus");
const V1StatefulSetUpdateStrategy_1 = require("../models/V1StatefulSetUpdateStrategy");
const V1Status_1 = require("../models/V1Status");
const V1StatusCause_1 = require("../models/V1StatusCause");
const V1StatusDetails_1 = require("../models/V1StatusDetails");
const V1StorageClass_1 = require("../models/V1StorageClass");
const V1StorageClassList_1 = require("../models/V1StorageClassList");
const V1StorageOSPersistentVolumeSource_1 = require("../models/V1StorageOSPersistentVolumeSource");
const V1StorageOSVolumeSource_1 = require("../models/V1StorageOSVolumeSource");
const V1Subject_1 = require("../models/V1Subject");
const V1SubjectAccessReview_1 = require("../models/V1SubjectAccessReview");
const V1SubjectAccessReviewSpec_1 = require("../models/V1SubjectAccessReviewSpec");
const V1SubjectAccessReviewStatus_1 = require("../models/V1SubjectAccessReviewStatus");
const V1SubjectRulesReviewStatus_1 = require("../models/V1SubjectRulesReviewStatus");
const V1Sysctl_1 = require("../models/V1Sysctl");
const V1TCPSocketAction_1 = require("../models/V1TCPSocketAction");
const V1Taint_1 = require("../models/V1Taint");
const V1TokenRequestSpec_1 = require("../models/V1TokenRequestSpec");
const V1TokenRequestStatus_1 = require("../models/V1TokenRequestStatus");
const V1TokenReview_1 = require("../models/V1TokenReview");
const V1TokenReviewSpec_1 = require("../models/V1TokenReviewSpec");
const V1TokenReviewStatus_1 = require("../models/V1TokenReviewStatus");
const V1Toleration_1 = require("../models/V1Toleration");
const V1TopologySelectorLabelRequirement_1 = require("../models/V1TopologySelectorLabelRequirement");
const V1TopologySelectorTerm_1 = require("../models/V1TopologySelectorTerm");
const V1TopologySpreadConstraint_1 = require("../models/V1TopologySpreadConstraint");
const V1TypedLocalObjectReference_1 = require("../models/V1TypedLocalObjectReference");
const V1UncountedTerminatedPods_1 = require("../models/V1UncountedTerminatedPods");
const V1UserInfo_1 = require("../models/V1UserInfo");
const V1ValidatingWebhook_1 = require("../models/V1ValidatingWebhook");
const V1ValidatingWebhookConfiguration_1 = require("../models/V1ValidatingWebhookConfiguration");
const V1ValidatingWebhookConfigurationList_1 = require("../models/V1ValidatingWebhookConfigurationList");
const V1Volume_1 = require("../models/V1Volume");
const V1VolumeAttachment_1 = require("../models/V1VolumeAttachment");
const V1VolumeAttachmentList_1 = require("../models/V1VolumeAttachmentList");
const V1VolumeAttachmentSource_1 = require("../models/V1VolumeAttachmentSource");
const V1VolumeAttachmentSpec_1 = require("../models/V1VolumeAttachmentSpec");
const V1VolumeAttachmentStatus_1 = require("../models/V1VolumeAttachmentStatus");
const V1VolumeDevice_1 = require("../models/V1VolumeDevice");
const V1VolumeError_1 = require("../models/V1VolumeError");
const V1VolumeMount_1 = require("../models/V1VolumeMount");
const V1VolumeNodeAffinity_1 = require("../models/V1VolumeNodeAffinity");
const V1VolumeNodeResources_1 = require("../models/V1VolumeNodeResources");
const V1VolumeProjection_1 = require("../models/V1VolumeProjection");
const V1VsphereVirtualDiskVolumeSource_1 = require("../models/V1VsphereVirtualDiskVolumeSource");
const V1WatchEvent_1 = require("../models/V1WatchEvent");
const V1WebhookConversion_1 = require("../models/V1WebhookConversion");
const V1WeightedPodAffinityTerm_1 = require("../models/V1WeightedPodAffinityTerm");
const V1WindowsSecurityContextOptions_1 = require("../models/V1WindowsSecurityContextOptions");
const V1alpha1AggregationRule_1 = require("../models/V1alpha1AggregationRule");
const V1alpha1CSIStorageCapacity_1 = require("../models/V1alpha1CSIStorageCapacity");
const V1alpha1CSIStorageCapacityList_1 = require("../models/V1alpha1CSIStorageCapacityList");
const V1alpha1ClusterRole_1 = require("../models/V1alpha1ClusterRole");
const V1alpha1ClusterRoleBinding_1 = require("../models/V1alpha1ClusterRoleBinding");
const V1alpha1ClusterRoleBindingList_1 = require("../models/V1alpha1ClusterRoleBindingList");
const V1alpha1ClusterRoleList_1 = require("../models/V1alpha1ClusterRoleList");
const V1alpha1Overhead_1 = require("../models/V1alpha1Overhead");
const V1alpha1PolicyRule_1 = require("../models/V1alpha1PolicyRule");
const V1alpha1PriorityClass_1 = require("../models/V1alpha1PriorityClass");
const V1alpha1PriorityClassList_1 = require("../models/V1alpha1PriorityClassList");
const V1alpha1Role_1 = require("../models/V1alpha1Role");
const V1alpha1RoleBinding_1 = require("../models/V1alpha1RoleBinding");
const V1alpha1RoleBindingList_1 = require("../models/V1alpha1RoleBindingList");
const V1alpha1RoleList_1 = require("../models/V1alpha1RoleList");
const V1alpha1RoleRef_1 = require("../models/V1alpha1RoleRef");
const V1alpha1RuntimeClass_1 = require("../models/V1alpha1RuntimeClass");
const V1alpha1RuntimeClassList_1 = require("../models/V1alpha1RuntimeClassList");
const V1alpha1RuntimeClassSpec_1 = require("../models/V1alpha1RuntimeClassSpec");
const V1alpha1Scheduling_1 = require("../models/V1alpha1Scheduling");
const V1alpha1ServerStorageVersion_1 = require("../models/V1alpha1ServerStorageVersion");
const V1alpha1StorageVersion_1 = require("../models/V1alpha1StorageVersion");
const V1alpha1StorageVersionCondition_1 = require("../models/V1alpha1StorageVersionCondition");
const V1alpha1StorageVersionList_1 = require("../models/V1alpha1StorageVersionList");
const V1alpha1StorageVersionStatus_1 = require("../models/V1alpha1StorageVersionStatus");
const V1alpha1Subject_1 = require("../models/V1alpha1Subject");
const V1alpha1VolumeAttachment_1 = require("../models/V1alpha1VolumeAttachment");
const V1alpha1VolumeAttachmentList_1 = require("../models/V1alpha1VolumeAttachmentList");
const V1alpha1VolumeAttachmentSource_1 = require("../models/V1alpha1VolumeAttachmentSource");
const V1alpha1VolumeAttachmentSpec_1 = require("../models/V1alpha1VolumeAttachmentSpec");
const V1alpha1VolumeAttachmentStatus_1 = require("../models/V1alpha1VolumeAttachmentStatus");
const V1alpha1VolumeError_1 = require("../models/V1alpha1VolumeError");
const V1beta1AllowedCSIDriver_1 = require("../models/V1beta1AllowedCSIDriver");
const V1beta1AllowedFlexVolume_1 = require("../models/V1beta1AllowedFlexVolume");
const V1beta1AllowedHostPath_1 = require("../models/V1beta1AllowedHostPath");
const V1beta1CSIStorageCapacity_1 = require("../models/V1beta1CSIStorageCapacity");
const V1beta1CSIStorageCapacityList_1 = require("../models/V1beta1CSIStorageCapacityList");
const V1beta1CronJob_1 = require("../models/V1beta1CronJob");
const V1beta1CronJobList_1 = require("../models/V1beta1CronJobList");
const V1beta1CronJobSpec_1 = require("../models/V1beta1CronJobSpec");
const V1beta1CronJobStatus_1 = require("../models/V1beta1CronJobStatus");
const V1beta1Endpoint_1 = require("../models/V1beta1Endpoint");
const V1beta1EndpointConditions_1 = require("../models/V1beta1EndpointConditions");
const V1beta1EndpointHints_1 = require("../models/V1beta1EndpointHints");
const V1beta1EndpointPort_1 = require("../models/V1beta1EndpointPort");
const V1beta1EndpointSlice_1 = require("../models/V1beta1EndpointSlice");
const V1beta1EndpointSliceList_1 = require("../models/V1beta1EndpointSliceList");
const V1beta1Event_1 = require("../models/V1beta1Event");
const V1beta1EventList_1 = require("../models/V1beta1EventList");
const V1beta1EventSeries_1 = require("../models/V1beta1EventSeries");
const V1beta1FSGroupStrategyOptions_1 = require("../models/V1beta1FSGroupStrategyOptions");
const V1beta1FlowDistinguisherMethod_1 = require("../models/V1beta1FlowDistinguisherMethod");
const V1beta1FlowSchema_1 = require("../models/V1beta1FlowSchema");
const V1beta1FlowSchemaCondition_1 = require("../models/V1beta1FlowSchemaCondition");
const V1beta1FlowSchemaList_1 = require("../models/V1beta1FlowSchemaList");
const V1beta1FlowSchemaSpec_1 = require("../models/V1beta1FlowSchemaSpec");
const V1beta1FlowSchemaStatus_1 = require("../models/V1beta1FlowSchemaStatus");
const V1beta1ForZone_1 = require("../models/V1beta1ForZone");
const V1beta1GroupSubject_1 = require("../models/V1beta1GroupSubject");
const V1beta1HostPortRange_1 = require("../models/V1beta1HostPortRange");
const V1beta1IDRange_1 = require("../models/V1beta1IDRange");
const V1beta1JobTemplateSpec_1 = require("../models/V1beta1JobTemplateSpec");
const V1beta1LimitResponse_1 = require("../models/V1beta1LimitResponse");
const V1beta1LimitedPriorityLevelConfiguration_1 = require("../models/V1beta1LimitedPriorityLevelConfiguration");
const V1beta1NonResourcePolicyRule_1 = require("../models/V1beta1NonResourcePolicyRule");
const V1beta1Overhead_1 = require("../models/V1beta1Overhead");
const V1beta1PodDisruptionBudget_1 = require("../models/V1beta1PodDisruptionBudget");
const V1beta1PodDisruptionBudgetList_1 = require("../models/V1beta1PodDisruptionBudgetList");
const V1beta1PodDisruptionBudgetSpec_1 = require("../models/V1beta1PodDisruptionBudgetSpec");
const V1beta1PodDisruptionBudgetStatus_1 = require("../models/V1beta1PodDisruptionBudgetStatus");
const V1beta1PodSecurityPolicy_1 = require("../models/V1beta1PodSecurityPolicy");
const V1beta1PodSecurityPolicyList_1 = require("../models/V1beta1PodSecurityPolicyList");
const V1beta1PodSecurityPolicySpec_1 = require("../models/V1beta1PodSecurityPolicySpec");
const V1beta1PolicyRulesWithSubjects_1 = require("../models/V1beta1PolicyRulesWithSubjects");
const V1beta1PriorityLevelConfiguration_1 = require("../models/V1beta1PriorityLevelConfiguration");
const V1beta1PriorityLevelConfigurationCondition_1 = require("../models/V1beta1PriorityLevelConfigurationCondition");
const V1beta1PriorityLevelConfigurationList_1 = require("../models/V1beta1PriorityLevelConfigurationList");
const V1beta1PriorityLevelConfigurationReference_1 = require("../models/V1beta1PriorityLevelConfigurationReference");
const V1beta1PriorityLevelConfigurationSpec_1 = require("../models/V1beta1PriorityLevelConfigurationSpec");
const V1beta1PriorityLevelConfigurationStatus_1 = require("../models/V1beta1PriorityLevelConfigurationStatus");
const V1beta1QueuingConfiguration_1 = require("../models/V1beta1QueuingConfiguration");
const V1beta1ResourcePolicyRule_1 = require("../models/V1beta1ResourcePolicyRule");
const V1beta1RunAsGroupStrategyOptions_1 = require("../models/V1beta1RunAsGroupStrategyOptions");
const V1beta1RunAsUserStrategyOptions_1 = require("../models/V1beta1RunAsUserStrategyOptions");
const V1beta1RuntimeClass_1 = require("../models/V1beta1RuntimeClass");
const V1beta1RuntimeClassList_1 = require("../models/V1beta1RuntimeClassList");
const V1beta1RuntimeClassStrategyOptions_1 = require("../models/V1beta1RuntimeClassStrategyOptions");
const V1beta1SELinuxStrategyOptions_1 = require("../models/V1beta1SELinuxStrategyOptions");
const V1beta1Scheduling_1 = require("../models/V1beta1Scheduling");
const V1beta1ServiceAccountSubject_1 = require("../models/V1beta1ServiceAccountSubject");
const V1beta1Subject_1 = require("../models/V1beta1Subject");
const V1beta1SupplementalGroupsStrategyOptions_1 = require("../models/V1beta1SupplementalGroupsStrategyOptions");
const V1beta1UserSubject_1 = require("../models/V1beta1UserSubject");
const V2beta1ContainerResourceMetricSource_1 = require("../models/V2beta1ContainerResourceMetricSource");
const V2beta1ContainerResourceMetricStatus_1 = require("../models/V2beta1ContainerResourceMetricStatus");
const V2beta1CrossVersionObjectReference_1 = require("../models/V2beta1CrossVersionObjectReference");
const V2beta1ExternalMetricSource_1 = require("../models/V2beta1ExternalMetricSource");
const V2beta1ExternalMetricStatus_1 = require("../models/V2beta1ExternalMetricStatus");
const V2beta1HorizontalPodAutoscaler_1 = require("../models/V2beta1HorizontalPodAutoscaler");
const V2beta1HorizontalPodAutoscalerCondition_1 = require("../models/V2beta1HorizontalPodAutoscalerCondition");
const V2beta1HorizontalPodAutoscalerList_1 = require("../models/V2beta1HorizontalPodAutoscalerList");
const V2beta1HorizontalPodAutoscalerSpec_1 = require("../models/V2beta1HorizontalPodAutoscalerSpec");
const V2beta1HorizontalPodAutoscalerStatus_1 = require("../models/V2beta1HorizontalPodAutoscalerStatus");
const V2beta1MetricSpec_1 = require("../models/V2beta1MetricSpec");
const V2beta1MetricStatus_1 = require("../models/V2beta1MetricStatus");
const V2beta1ObjectMetricSource_1 = require("../models/V2beta1ObjectMetricSource");
const V2beta1ObjectMetricStatus_1 = require("../models/V2beta1ObjectMetricStatus");
const V2beta1PodsMetricSource_1 = require("../models/V2beta1PodsMetricSource");
const V2beta1PodsMetricStatus_1 = require("../models/V2beta1PodsMetricStatus");
const V2beta1ResourceMetricSource_1 = require("../models/V2beta1ResourceMetricSource");
const V2beta1ResourceMetricStatus_1 = require("../models/V2beta1ResourceMetricStatus");
const V2beta2ContainerResourceMetricSource_1 = require("../models/V2beta2ContainerResourceMetricSource");
const V2beta2ContainerResourceMetricStatus_1 = require("../models/V2beta2ContainerResourceMetricStatus");
const V2beta2CrossVersionObjectReference_1 = require("../models/V2beta2CrossVersionObjectReference");
const V2beta2ExternalMetricSource_1 = require("../models/V2beta2ExternalMetricSource");
const V2beta2ExternalMetricStatus_1 = require("../models/V2beta2ExternalMetricStatus");
const V2beta2HPAScalingPolicy_1 = require("../models/V2beta2HPAScalingPolicy");
const V2beta2HPAScalingRules_1 = require("../models/V2beta2HPAScalingRules");
const V2beta2HorizontalPodAutoscaler_1 = require("../models/V2beta2HorizontalPodAutoscaler");
const V2beta2HorizontalPodAutoscalerBehavior_1 = require("../models/V2beta2HorizontalPodAutoscalerBehavior");
const V2beta2HorizontalPodAutoscalerCondition_1 = require("../models/V2beta2HorizontalPodAutoscalerCondition");
const V2beta2HorizontalPodAutoscalerList_1 = require("../models/V2beta2HorizontalPodAutoscalerList");
const V2beta2HorizontalPodAutoscalerSpec_1 = require("../models/V2beta2HorizontalPodAutoscalerSpec");
const V2beta2HorizontalPodAutoscalerStatus_1 = require("../models/V2beta2HorizontalPodAutoscalerStatus");
const V2beta2MetricIdentifier_1 = require("../models/V2beta2MetricIdentifier");
const V2beta2MetricSpec_1 = require("../models/V2beta2MetricSpec");
const V2beta2MetricStatus_1 = require("../models/V2beta2MetricStatus");
const V2beta2MetricTarget_1 = require("../models/V2beta2MetricTarget");
const V2beta2MetricValueStatus_1 = require("../models/V2beta2MetricValueStatus");
const V2beta2ObjectMetricSource_1 = require("../models/V2beta2ObjectMetricSource");
const V2beta2ObjectMetricStatus_1 = require("../models/V2beta2ObjectMetricStatus");
const V2beta2PodsMetricSource_1 = require("../models/V2beta2PodsMetricSource");
const V2beta2PodsMetricStatus_1 = require("../models/V2beta2PodsMetricStatus");
const V2beta2ResourceMetricSource_1 = require("../models/V2beta2ResourceMetricSource");
const V2beta2ResourceMetricStatus_1 = require("../models/V2beta2ResourceMetricStatus");
const VersionInfo_1 = require("../models/VersionInfo");
/* tslint:disable:no-unused-variable */
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
const supportedMediaTypes = {
    "application/json": Infinity,
    "application/json-patch+json": 1,
    "application/merge-patch+json": 1,
    "application/strategic-merge-patch+json": 1,
    "application/octet-stream": 0,
    "application/x-www-form-urlencoded": 0
};
let enumsMap = new Set([]);
let typeMap = {
    "AdmissionregistrationV1ServiceReference": AdmissionregistrationV1ServiceReference_1.AdmissionregistrationV1ServiceReference,
    "AdmissionregistrationV1WebhookClientConfig": AdmissionregistrationV1WebhookClientConfig_1.AdmissionregistrationV1WebhookClientConfig,
    "ApiextensionsV1ServiceReference": ApiextensionsV1ServiceReference_1.ApiextensionsV1ServiceReference,
    "ApiextensionsV1WebhookClientConfig": ApiextensionsV1WebhookClientConfig_1.ApiextensionsV1WebhookClientConfig,
    "ApiregistrationV1ServiceReference": ApiregistrationV1ServiceReference_1.ApiregistrationV1ServiceReference,
    "AuthenticationV1TokenRequest": AuthenticationV1TokenRequest_1.AuthenticationV1TokenRequest,
    "CoreV1EndpointPort": CoreV1EndpointPort_1.CoreV1EndpointPort,
    "CoreV1Event": CoreV1Event_1.CoreV1Event,
    "CoreV1EventList": CoreV1EventList_1.CoreV1EventList,
    "CoreV1EventSeries": CoreV1EventSeries_1.CoreV1EventSeries,
    "DiscoveryV1EndpointPort": DiscoveryV1EndpointPort_1.DiscoveryV1EndpointPort,
    "EventsV1Event": EventsV1Event_1.EventsV1Event,
    "EventsV1EventList": EventsV1EventList_1.EventsV1EventList,
    "EventsV1EventSeries": EventsV1EventSeries_1.EventsV1EventSeries,
    "StorageV1TokenRequest": StorageV1TokenRequest_1.StorageV1TokenRequest,
    "V1APIGroup": V1APIGroup_1.V1APIGroup,
    "V1APIGroupList": V1APIGroupList_1.V1APIGroupList,
    "V1APIResource": V1APIResource_1.V1APIResource,
    "V1APIResourceList": V1APIResourceList_1.V1APIResourceList,
    "V1APIService": V1APIService_1.V1APIService,
    "V1APIServiceCondition": V1APIServiceCondition_1.V1APIServiceCondition,
    "V1APIServiceList": V1APIServiceList_1.V1APIServiceList,
    "V1APIServiceSpec": V1APIServiceSpec_1.V1APIServiceSpec,
    "V1APIServiceStatus": V1APIServiceStatus_1.V1APIServiceStatus,
    "V1APIVersions": V1APIVersions_1.V1APIVersions,
    "V1AWSElasticBlockStoreVolumeSource": V1AWSElasticBlockStoreVolumeSource_1.V1AWSElasticBlockStoreVolumeSource,
    "V1Affinity": V1Affinity_1.V1Affinity,
    "V1AggregationRule": V1AggregationRule_1.V1AggregationRule,
    "V1AttachedVolume": V1AttachedVolume_1.V1AttachedVolume,
    "V1AzureDiskVolumeSource": V1AzureDiskVolumeSource_1.V1AzureDiskVolumeSource,
    "V1AzureFilePersistentVolumeSource": V1AzureFilePersistentVolumeSource_1.V1AzureFilePersistentVolumeSource,
    "V1AzureFileVolumeSource": V1AzureFileVolumeSource_1.V1AzureFileVolumeSource,
    "V1Binding": V1Binding_1.V1Binding,
    "V1BoundObjectReference": V1BoundObjectReference_1.V1BoundObjectReference,
    "V1CSIDriver": V1CSIDriver_1.V1CSIDriver,
    "V1CSIDriverList": V1CSIDriverList_1.V1CSIDriverList,
    "V1CSIDriverSpec": V1CSIDriverSpec_1.V1CSIDriverSpec,
    "V1CSINode": V1CSINode_1.V1CSINode,
    "V1CSINodeDriver": V1CSINodeDriver_1.V1CSINodeDriver,
    "V1CSINodeList": V1CSINodeList_1.V1CSINodeList,
    "V1CSINodeSpec": V1CSINodeSpec_1.V1CSINodeSpec,
    "V1CSIPersistentVolumeSource": V1CSIPersistentVolumeSource_1.V1CSIPersistentVolumeSource,
    "V1CSIVolumeSource": V1CSIVolumeSource_1.V1CSIVolumeSource,
    "V1Capabilities": V1Capabilities_1.V1Capabilities,
    "V1CephFSPersistentVolumeSource": V1CephFSPersistentVolumeSource_1.V1CephFSPersistentVolumeSource,
    "V1CephFSVolumeSource": V1CephFSVolumeSource_1.V1CephFSVolumeSource,
    "V1CertificateSigningRequest": V1CertificateSigningRequest_1.V1CertificateSigningRequest,
    "V1CertificateSigningRequestCondition": V1CertificateSigningRequestCondition_1.V1CertificateSigningRequestCondition,
    "V1CertificateSigningRequestList": V1CertificateSigningRequestList_1.V1CertificateSigningRequestList,
    "V1CertificateSigningRequestSpec": V1CertificateSigningRequestSpec_1.V1CertificateSigningRequestSpec,
    "V1CertificateSigningRequestStatus": V1CertificateSigningRequestStatus_1.V1CertificateSigningRequestStatus,
    "V1CinderPersistentVolumeSource": V1CinderPersistentVolumeSource_1.V1CinderPersistentVolumeSource,
    "V1CinderVolumeSource": V1CinderVolumeSource_1.V1CinderVolumeSource,
    "V1ClientIPConfig": V1ClientIPConfig_1.V1ClientIPConfig,
    "V1ClusterRole": V1ClusterRole_1.V1ClusterRole,
    "V1ClusterRoleBinding": V1ClusterRoleBinding_1.V1ClusterRoleBinding,
    "V1ClusterRoleBindingList": V1ClusterRoleBindingList_1.V1ClusterRoleBindingList,
    "V1ClusterRoleList": V1ClusterRoleList_1.V1ClusterRoleList,
    "V1ComponentCondition": V1ComponentCondition_1.V1ComponentCondition,
    "V1ComponentStatus": V1ComponentStatus_1.V1ComponentStatus,
    "V1ComponentStatusList": V1ComponentStatusList_1.V1ComponentStatusList,
    "V1Condition": V1Condition_1.V1Condition,
    "V1ConfigMap": V1ConfigMap_1.V1ConfigMap,
    "V1ConfigMapEnvSource": V1ConfigMapEnvSource_1.V1ConfigMapEnvSource,
    "V1ConfigMapKeySelector": V1ConfigMapKeySelector_1.V1ConfigMapKeySelector,
    "V1ConfigMapList": V1ConfigMapList_1.V1ConfigMapList,
    "V1ConfigMapNodeConfigSource": V1ConfigMapNodeConfigSource_1.V1ConfigMapNodeConfigSource,
    "V1ConfigMapProjection": V1ConfigMapProjection_1.V1ConfigMapProjection,
    "V1ConfigMapVolumeSource": V1ConfigMapVolumeSource_1.V1ConfigMapVolumeSource,
    "V1Container": V1Container_1.V1Container,
    "V1ContainerImage": V1ContainerImage_1.V1ContainerImage,
    "V1ContainerPort": V1ContainerPort_1.V1ContainerPort,
    "V1ContainerState": V1ContainerState_1.V1ContainerState,
    "V1ContainerStateRunning": V1ContainerStateRunning_1.V1ContainerStateRunning,
    "V1ContainerStateTerminated": V1ContainerStateTerminated_1.V1ContainerStateTerminated,
    "V1ContainerStateWaiting": V1ContainerStateWaiting_1.V1ContainerStateWaiting,
    "V1ContainerStatus": V1ContainerStatus_1.V1ContainerStatus,
    "V1ControllerRevision": V1ControllerRevision_1.V1ControllerRevision,
    "V1ControllerRevisionList": V1ControllerRevisionList_1.V1ControllerRevisionList,
    "V1CronJob": V1CronJob_1.V1CronJob,
    "V1CronJobList": V1CronJobList_1.V1CronJobList,
    "V1CronJobSpec": V1CronJobSpec_1.V1CronJobSpec,
    "V1CronJobStatus": V1CronJobStatus_1.V1CronJobStatus,
    "V1CrossVersionObjectReference": V1CrossVersionObjectReference_1.V1CrossVersionObjectReference,
    "V1CustomResourceColumnDefinition": V1CustomResourceColumnDefinition_1.V1CustomResourceColumnDefinition,
    "V1CustomResourceConversion": V1CustomResourceConversion_1.V1CustomResourceConversion,
    "V1CustomResourceDefinition": V1CustomResourceDefinition_1.V1CustomResourceDefinition,
    "V1CustomResourceDefinitionCondition": V1CustomResourceDefinitionCondition_1.V1CustomResourceDefinitionCondition,
    "V1CustomResourceDefinitionList": V1CustomResourceDefinitionList_1.V1CustomResourceDefinitionList,
    "V1CustomResourceDefinitionNames": V1CustomResourceDefinitionNames_1.V1CustomResourceDefinitionNames,
    "V1CustomResourceDefinitionSpec": V1CustomResourceDefinitionSpec_1.V1CustomResourceDefinitionSpec,
    "V1CustomResourceDefinitionStatus": V1CustomResourceDefinitionStatus_1.V1CustomResourceDefinitionStatus,
    "V1CustomResourceDefinitionVersion": V1CustomResourceDefinitionVersion_1.V1CustomResourceDefinitionVersion,
    "V1CustomResourceSubresourceScale": V1CustomResourceSubresourceScale_1.V1CustomResourceSubresourceScale,
    "V1CustomResourceSubresources": V1CustomResourceSubresources_1.V1CustomResourceSubresources,
    "V1CustomResourceValidation": V1CustomResourceValidation_1.V1CustomResourceValidation,
    "V1DaemonEndpoint": V1DaemonEndpoint_1.V1DaemonEndpoint,
    "V1DaemonSet": V1DaemonSet_1.V1DaemonSet,
    "V1DaemonSetCondition": V1DaemonSetCondition_1.V1DaemonSetCondition,
    "V1DaemonSetList": V1DaemonSetList_1.V1DaemonSetList,
    "V1DaemonSetSpec": V1DaemonSetSpec_1.V1DaemonSetSpec,
    "V1DaemonSetStatus": V1DaemonSetStatus_1.V1DaemonSetStatus,
    "V1DaemonSetUpdateStrategy": V1DaemonSetUpdateStrategy_1.V1DaemonSetUpdateStrategy,
    "V1DeleteOptions": V1DeleteOptions_1.V1DeleteOptions,
    "V1Deployment": V1Deployment_1.V1Deployment,
    "V1DeploymentCondition": V1DeploymentCondition_1.V1DeploymentCondition,
    "V1DeploymentList": V1DeploymentList_1.V1DeploymentList,
    "V1DeploymentSpec": V1DeploymentSpec_1.V1DeploymentSpec,
    "V1DeploymentStatus": V1DeploymentStatus_1.V1DeploymentStatus,
    "V1DeploymentStrategy": V1DeploymentStrategy_1.V1DeploymentStrategy,
    "V1DownwardAPIProjection": V1DownwardAPIProjection_1.V1DownwardAPIProjection,
    "V1DownwardAPIVolumeFile": V1DownwardAPIVolumeFile_1.V1DownwardAPIVolumeFile,
    "V1DownwardAPIVolumeSource": V1DownwardAPIVolumeSource_1.V1DownwardAPIVolumeSource,
    "V1EmptyDirVolumeSource": V1EmptyDirVolumeSource_1.V1EmptyDirVolumeSource,
    "V1Endpoint": V1Endpoint_1.V1Endpoint,
    "V1EndpointAddress": V1EndpointAddress_1.V1EndpointAddress,
    "V1EndpointConditions": V1EndpointConditions_1.V1EndpointConditions,
    "V1EndpointHints": V1EndpointHints_1.V1EndpointHints,
    "V1EndpointSlice": V1EndpointSlice_1.V1EndpointSlice,
    "V1EndpointSliceList": V1EndpointSliceList_1.V1EndpointSliceList,
    "V1EndpointSubset": V1EndpointSubset_1.V1EndpointSubset,
    "V1Endpoints": V1Endpoints_1.V1Endpoints,
    "V1EndpointsList": V1EndpointsList_1.V1EndpointsList,
    "V1EnvFromSource": V1EnvFromSource_1.V1EnvFromSource,
    "V1EnvVar": V1EnvVar_1.V1EnvVar,
    "V1EnvVarSource": V1EnvVarSource_1.V1EnvVarSource,
    "V1EphemeralContainer": V1EphemeralContainer_1.V1EphemeralContainer,
    "V1EphemeralVolumeSource": V1EphemeralVolumeSource_1.V1EphemeralVolumeSource,
    "V1EventSource": V1EventSource_1.V1EventSource,
    "V1Eviction": V1Eviction_1.V1Eviction,
    "V1ExecAction": V1ExecAction_1.V1ExecAction,
    "V1ExternalDocumentation": V1ExternalDocumentation_1.V1ExternalDocumentation,
    "V1FCVolumeSource": V1FCVolumeSource_1.V1FCVolumeSource,
    "V1FlexPersistentVolumeSource": V1FlexPersistentVolumeSource_1.V1FlexPersistentVolumeSource,
    "V1FlexVolumeSource": V1FlexVolumeSource_1.V1FlexVolumeSource,
    "V1FlockerVolumeSource": V1FlockerVolumeSource_1.V1FlockerVolumeSource,
    "V1ForZone": V1ForZone_1.V1ForZone,
    "V1GCEPersistentDiskVolumeSource": V1GCEPersistentDiskVolumeSource_1.V1GCEPersistentDiskVolumeSource,
    "V1GitRepoVolumeSource": V1GitRepoVolumeSource_1.V1GitRepoVolumeSource,
    "V1GlusterfsPersistentVolumeSource": V1GlusterfsPersistentVolumeSource_1.V1GlusterfsPersistentVolumeSource,
    "V1GlusterfsVolumeSource": V1GlusterfsVolumeSource_1.V1GlusterfsVolumeSource,
    "V1GroupVersionForDiscovery": V1GroupVersionForDiscovery_1.V1GroupVersionForDiscovery,
    "V1HTTPGetAction": V1HTTPGetAction_1.V1HTTPGetAction,
    "V1HTTPHeader": V1HTTPHeader_1.V1HTTPHeader,
    "V1HTTPIngressPath": V1HTTPIngressPath_1.V1HTTPIngressPath,
    "V1HTTPIngressRuleValue": V1HTTPIngressRuleValue_1.V1HTTPIngressRuleValue,
    "V1Handler": V1Handler_1.V1Handler,
    "V1HorizontalPodAutoscaler": V1HorizontalPodAutoscaler_1.V1HorizontalPodAutoscaler,
    "V1HorizontalPodAutoscalerList": V1HorizontalPodAutoscalerList_1.V1HorizontalPodAutoscalerList,
    "V1HorizontalPodAutoscalerSpec": V1HorizontalPodAutoscalerSpec_1.V1HorizontalPodAutoscalerSpec,
    "V1HorizontalPodAutoscalerStatus": V1HorizontalPodAutoscalerStatus_1.V1HorizontalPodAutoscalerStatus,
    "V1HostAlias": V1HostAlias_1.V1HostAlias,
    "V1HostPathVolumeSource": V1HostPathVolumeSource_1.V1HostPathVolumeSource,
    "V1IPBlock": V1IPBlock_1.V1IPBlock,
    "V1ISCSIPersistentVolumeSource": V1ISCSIPersistentVolumeSource_1.V1ISCSIPersistentVolumeSource,
    "V1ISCSIVolumeSource": V1ISCSIVolumeSource_1.V1ISCSIVolumeSource,
    "V1Ingress": V1Ingress_1.V1Ingress,
    "V1IngressBackend": V1IngressBackend_1.V1IngressBackend,
    "V1IngressClass": V1IngressClass_1.V1IngressClass,
    "V1IngressClassList": V1IngressClassList_1.V1IngressClassList,
    "V1IngressClassParametersReference": V1IngressClassParametersReference_1.V1IngressClassParametersReference,
    "V1IngressClassSpec": V1IngressClassSpec_1.V1IngressClassSpec,
    "V1IngressList": V1IngressList_1.V1IngressList,
    "V1IngressRule": V1IngressRule_1.V1IngressRule,
    "V1IngressServiceBackend": V1IngressServiceBackend_1.V1IngressServiceBackend,
    "V1IngressSpec": V1IngressSpec_1.V1IngressSpec,
    "V1IngressStatus": V1IngressStatus_1.V1IngressStatus,
    "V1IngressTLS": V1IngressTLS_1.V1IngressTLS,
    "V1JSONSchemaProps": V1JSONSchemaProps_1.V1JSONSchemaProps,
    "V1Job": V1Job_1.V1Job,
    "V1JobCondition": V1JobCondition_1.V1JobCondition,
    "V1JobList": V1JobList_1.V1JobList,
    "V1JobSpec": V1JobSpec_1.V1JobSpec,
    "V1JobStatus": V1JobStatus_1.V1JobStatus,
    "V1JobTemplateSpec": V1JobTemplateSpec_1.V1JobTemplateSpec,
    "V1KeyToPath": V1KeyToPath_1.V1KeyToPath,
    "V1LabelSelector": V1LabelSelector_1.V1LabelSelector,
    "V1LabelSelectorRequirement": V1LabelSelectorRequirement_1.V1LabelSelectorRequirement,
    "V1Lease": V1Lease_1.V1Lease,
    "V1LeaseList": V1LeaseList_1.V1LeaseList,
    "V1LeaseSpec": V1LeaseSpec_1.V1LeaseSpec,
    "V1Lifecycle": V1Lifecycle_1.V1Lifecycle,
    "V1LimitRange": V1LimitRange_1.V1LimitRange,
    "V1LimitRangeItem": V1LimitRangeItem_1.V1LimitRangeItem,
    "V1LimitRangeList": V1LimitRangeList_1.V1LimitRangeList,
    "V1LimitRangeSpec": V1LimitRangeSpec_1.V1LimitRangeSpec,
    "V1ListMeta": V1ListMeta_1.V1ListMeta,
    "V1LoadBalancerIngress": V1LoadBalancerIngress_1.V1LoadBalancerIngress,
    "V1LoadBalancerStatus": V1LoadBalancerStatus_1.V1LoadBalancerStatus,
    "V1LocalObjectReference": V1LocalObjectReference_1.V1LocalObjectReference,
    "V1LocalSubjectAccessReview": V1LocalSubjectAccessReview_1.V1LocalSubjectAccessReview,
    "V1LocalVolumeSource": V1LocalVolumeSource_1.V1LocalVolumeSource,
    "V1ManagedFieldsEntry": V1ManagedFieldsEntry_1.V1ManagedFieldsEntry,
    "V1MutatingWebhook": V1MutatingWebhook_1.V1MutatingWebhook,
    "V1MutatingWebhookConfiguration": V1MutatingWebhookConfiguration_1.V1MutatingWebhookConfiguration,
    "V1MutatingWebhookConfigurationList": V1MutatingWebhookConfigurationList_1.V1MutatingWebhookConfigurationList,
    "V1NFSVolumeSource": V1NFSVolumeSource_1.V1NFSVolumeSource,
    "V1Namespace": V1Namespace_1.V1Namespace,
    "V1NamespaceCondition": V1NamespaceCondition_1.V1NamespaceCondition,
    "V1NamespaceList": V1NamespaceList_1.V1NamespaceList,
    "V1NamespaceSpec": V1NamespaceSpec_1.V1NamespaceSpec,
    "V1NamespaceStatus": V1NamespaceStatus_1.V1NamespaceStatus,
    "V1NetworkPolicy": V1NetworkPolicy_1.V1NetworkPolicy,
    "V1NetworkPolicyEgressRule": V1NetworkPolicyEgressRule_1.V1NetworkPolicyEgressRule,
    "V1NetworkPolicyIngressRule": V1NetworkPolicyIngressRule_1.V1NetworkPolicyIngressRule,
    "V1NetworkPolicyList": V1NetworkPolicyList_1.V1NetworkPolicyList,
    "V1NetworkPolicyPeer": V1NetworkPolicyPeer_1.V1NetworkPolicyPeer,
    "V1NetworkPolicyPort": V1NetworkPolicyPort_1.V1NetworkPolicyPort,
    "V1NetworkPolicySpec": V1NetworkPolicySpec_1.V1NetworkPolicySpec,
    "V1Node": V1Node_1.V1Node,
    "V1NodeAddress": V1NodeAddress_1.V1NodeAddress,
    "V1NodeAffinity": V1NodeAffinity_1.V1NodeAffinity,
    "V1NodeCondition": V1NodeCondition_1.V1NodeCondition,
    "V1NodeConfigSource": V1NodeConfigSource_1.V1NodeConfigSource,
    "V1NodeConfigStatus": V1NodeConfigStatus_1.V1NodeConfigStatus,
    "V1NodeDaemonEndpoints": V1NodeDaemonEndpoints_1.V1NodeDaemonEndpoints,
    "V1NodeList": V1NodeList_1.V1NodeList,
    "V1NodeSelector": V1NodeSelector_1.V1NodeSelector,
    "V1NodeSelectorRequirement": V1NodeSelectorRequirement_1.V1NodeSelectorRequirement,
    "V1NodeSelectorTerm": V1NodeSelectorTerm_1.V1NodeSelectorTerm,
    "V1NodeSpec": V1NodeSpec_1.V1NodeSpec,
    "V1NodeStatus": V1NodeStatus_1.V1NodeStatus,
    "V1NodeSystemInfo": V1NodeSystemInfo_1.V1NodeSystemInfo,
    "V1NonResourceAttributes": V1NonResourceAttributes_1.V1NonResourceAttributes,
    "V1NonResourceRule": V1NonResourceRule_1.V1NonResourceRule,
    "V1ObjectFieldSelector": V1ObjectFieldSelector_1.V1ObjectFieldSelector,
    "V1ObjectMeta": V1ObjectMeta_1.V1ObjectMeta,
    "V1ObjectReference": V1ObjectReference_1.V1ObjectReference,
    "V1Overhead": V1Overhead_1.V1Overhead,
    "V1OwnerReference": V1OwnerReference_1.V1OwnerReference,
    "V1PersistentVolume": V1PersistentVolume_1.V1PersistentVolume,
    "V1PersistentVolumeClaim": V1PersistentVolumeClaim_1.V1PersistentVolumeClaim,
    "V1PersistentVolumeClaimCondition": V1PersistentVolumeClaimCondition_1.V1PersistentVolumeClaimCondition,
    "V1PersistentVolumeClaimList": V1PersistentVolumeClaimList_1.V1PersistentVolumeClaimList,
    "V1PersistentVolumeClaimSpec": V1PersistentVolumeClaimSpec_1.V1PersistentVolumeClaimSpec,
    "V1PersistentVolumeClaimStatus": V1PersistentVolumeClaimStatus_1.V1PersistentVolumeClaimStatus,
    "V1PersistentVolumeClaimTemplate": V1PersistentVolumeClaimTemplate_1.V1PersistentVolumeClaimTemplate,
    "V1PersistentVolumeClaimVolumeSource": V1PersistentVolumeClaimVolumeSource_1.V1PersistentVolumeClaimVolumeSource,
    "V1PersistentVolumeList": V1PersistentVolumeList_1.V1PersistentVolumeList,
    "V1PersistentVolumeSpec": V1PersistentVolumeSpec_1.V1PersistentVolumeSpec,
    "V1PersistentVolumeStatus": V1PersistentVolumeStatus_1.V1PersistentVolumeStatus,
    "V1PhotonPersistentDiskVolumeSource": V1PhotonPersistentDiskVolumeSource_1.V1PhotonPersistentDiskVolumeSource,
    "V1Pod": V1Pod_1.V1Pod,
    "V1PodAffinity": V1PodAffinity_1.V1PodAffinity,
    "V1PodAffinityTerm": V1PodAffinityTerm_1.V1PodAffinityTerm,
    "V1PodAntiAffinity": V1PodAntiAffinity_1.V1PodAntiAffinity,
    "V1PodCondition": V1PodCondition_1.V1PodCondition,
    "V1PodDNSConfig": V1PodDNSConfig_1.V1PodDNSConfig,
    "V1PodDNSConfigOption": V1PodDNSConfigOption_1.V1PodDNSConfigOption,
    "V1PodDisruptionBudget": V1PodDisruptionBudget_1.V1PodDisruptionBudget,
    "V1PodDisruptionBudgetList": V1PodDisruptionBudgetList_1.V1PodDisruptionBudgetList,
    "V1PodDisruptionBudgetSpec": V1PodDisruptionBudgetSpec_1.V1PodDisruptionBudgetSpec,
    "V1PodDisruptionBudgetStatus": V1PodDisruptionBudgetStatus_1.V1PodDisruptionBudgetStatus,
    "V1PodIP": V1PodIP_1.V1PodIP,
    "V1PodList": V1PodList_1.V1PodList,
    "V1PodReadinessGate": V1PodReadinessGate_1.V1PodReadinessGate,
    "V1PodSecurityContext": V1PodSecurityContext_1.V1PodSecurityContext,
    "V1PodSpec": V1PodSpec_1.V1PodSpec,
    "V1PodStatus": V1PodStatus_1.V1PodStatus,
    "V1PodTemplate": V1PodTemplate_1.V1PodTemplate,
    "V1PodTemplateList": V1PodTemplateList_1.V1PodTemplateList,
    "V1PodTemplateSpec": V1PodTemplateSpec_1.V1PodTemplateSpec,
    "V1PolicyRule": V1PolicyRule_1.V1PolicyRule,
    "V1PortStatus": V1PortStatus_1.V1PortStatus,
    "V1PortworxVolumeSource": V1PortworxVolumeSource_1.V1PortworxVolumeSource,
    "V1Preconditions": V1Preconditions_1.V1Preconditions,
    "V1PreferredSchedulingTerm": V1PreferredSchedulingTerm_1.V1PreferredSchedulingTerm,
    "V1PriorityClass": V1PriorityClass_1.V1PriorityClass,
    "V1PriorityClassList": V1PriorityClassList_1.V1PriorityClassList,
    "V1Probe": V1Probe_1.V1Probe,
    "V1ProjectedVolumeSource": V1ProjectedVolumeSource_1.V1ProjectedVolumeSource,
    "V1QuobyteVolumeSource": V1QuobyteVolumeSource_1.V1QuobyteVolumeSource,
    "V1RBDPersistentVolumeSource": V1RBDPersistentVolumeSource_1.V1RBDPersistentVolumeSource,
    "V1RBDVolumeSource": V1RBDVolumeSource_1.V1RBDVolumeSource,
    "V1ReplicaSet": V1ReplicaSet_1.V1ReplicaSet,
    "V1ReplicaSetCondition": V1ReplicaSetCondition_1.V1ReplicaSetCondition,
    "V1ReplicaSetList": V1ReplicaSetList_1.V1ReplicaSetList,
    "V1ReplicaSetSpec": V1ReplicaSetSpec_1.V1ReplicaSetSpec,
    "V1ReplicaSetStatus": V1ReplicaSetStatus_1.V1ReplicaSetStatus,
    "V1ReplicationController": V1ReplicationController_1.V1ReplicationController,
    "V1ReplicationControllerCondition": V1ReplicationControllerCondition_1.V1ReplicationControllerCondition,
    "V1ReplicationControllerList": V1ReplicationControllerList_1.V1ReplicationControllerList,
    "V1ReplicationControllerSpec": V1ReplicationControllerSpec_1.V1ReplicationControllerSpec,
    "V1ReplicationControllerStatus": V1ReplicationControllerStatus_1.V1ReplicationControllerStatus,
    "V1ResourceAttributes": V1ResourceAttributes_1.V1ResourceAttributes,
    "V1ResourceFieldSelector": V1ResourceFieldSelector_1.V1ResourceFieldSelector,
    "V1ResourceQuota": V1ResourceQuota_1.V1ResourceQuota,
    "V1ResourceQuotaList": V1ResourceQuotaList_1.V1ResourceQuotaList,
    "V1ResourceQuotaSpec": V1ResourceQuotaSpec_1.V1ResourceQuotaSpec,
    "V1ResourceQuotaStatus": V1ResourceQuotaStatus_1.V1ResourceQuotaStatus,
    "V1ResourceRequirements": V1ResourceRequirements_1.V1ResourceRequirements,
    "V1ResourceRule": V1ResourceRule_1.V1ResourceRule,
    "V1Role": V1Role_1.V1Role,
    "V1RoleBinding": V1RoleBinding_1.V1RoleBinding,
    "V1RoleBindingList": V1RoleBindingList_1.V1RoleBindingList,
    "V1RoleList": V1RoleList_1.V1RoleList,
    "V1RoleRef": V1RoleRef_1.V1RoleRef,
    "V1RollingUpdateDaemonSet": V1RollingUpdateDaemonSet_1.V1RollingUpdateDaemonSet,
    "V1RollingUpdateDeployment": V1RollingUpdateDeployment_1.V1RollingUpdateDeployment,
    "V1RollingUpdateStatefulSetStrategy": V1RollingUpdateStatefulSetStrategy_1.V1RollingUpdateStatefulSetStrategy,
    "V1RuleWithOperations": V1RuleWithOperations_1.V1RuleWithOperations,
    "V1RuntimeClass": V1RuntimeClass_1.V1RuntimeClass,
    "V1RuntimeClassList": V1RuntimeClassList_1.V1RuntimeClassList,
    "V1SELinuxOptions": V1SELinuxOptions_1.V1SELinuxOptions,
    "V1Scale": V1Scale_1.V1Scale,
    "V1ScaleIOPersistentVolumeSource": V1ScaleIOPersistentVolumeSource_1.V1ScaleIOPersistentVolumeSource,
    "V1ScaleIOVolumeSource": V1ScaleIOVolumeSource_1.V1ScaleIOVolumeSource,
    "V1ScaleSpec": V1ScaleSpec_1.V1ScaleSpec,
    "V1ScaleStatus": V1ScaleStatus_1.V1ScaleStatus,
    "V1Scheduling": V1Scheduling_1.V1Scheduling,
    "V1ScopeSelector": V1ScopeSelector_1.V1ScopeSelector,
    "V1ScopedResourceSelectorRequirement": V1ScopedResourceSelectorRequirement_1.V1ScopedResourceSelectorRequirement,
    "V1SeccompProfile": V1SeccompProfile_1.V1SeccompProfile,
    "V1Secret": V1Secret_1.V1Secret,
    "V1SecretEnvSource": V1SecretEnvSource_1.V1SecretEnvSource,
    "V1SecretKeySelector": V1SecretKeySelector_1.V1SecretKeySelector,
    "V1SecretList": V1SecretList_1.V1SecretList,
    "V1SecretProjection": V1SecretProjection_1.V1SecretProjection,
    "V1SecretReference": V1SecretReference_1.V1SecretReference,
    "V1SecretVolumeSource": V1SecretVolumeSource_1.V1SecretVolumeSource,
    "V1SecurityContext": V1SecurityContext_1.V1SecurityContext,
    "V1SelfSubjectAccessReview": V1SelfSubjectAccessReview_1.V1SelfSubjectAccessReview,
    "V1SelfSubjectAccessReviewSpec": V1SelfSubjectAccessReviewSpec_1.V1SelfSubjectAccessReviewSpec,
    "V1SelfSubjectRulesReview": V1SelfSubjectRulesReview_1.V1SelfSubjectRulesReview,
    "V1SelfSubjectRulesReviewSpec": V1SelfSubjectRulesReviewSpec_1.V1SelfSubjectRulesReviewSpec,
    "V1ServerAddressByClientCIDR": V1ServerAddressByClientCIDR_1.V1ServerAddressByClientCIDR,
    "V1Service": V1Service_1.V1Service,
    "V1ServiceAccount": V1ServiceAccount_1.V1ServiceAccount,
    "V1ServiceAccountList": V1ServiceAccountList_1.V1ServiceAccountList,
    "V1ServiceAccountTokenProjection": V1ServiceAccountTokenProjection_1.V1ServiceAccountTokenProjection,
    "V1ServiceBackendPort": V1ServiceBackendPort_1.V1ServiceBackendPort,
    "V1ServiceList": V1ServiceList_1.V1ServiceList,
    "V1ServicePort": V1ServicePort_1.V1ServicePort,
    "V1ServiceSpec": V1ServiceSpec_1.V1ServiceSpec,
    "V1ServiceStatus": V1ServiceStatus_1.V1ServiceStatus,
    "V1SessionAffinityConfig": V1SessionAffinityConfig_1.V1SessionAffinityConfig,
    "V1StatefulSet": V1StatefulSet_1.V1StatefulSet,
    "V1StatefulSetCondition": V1StatefulSetCondition_1.V1StatefulSetCondition,
    "V1StatefulSetList": V1StatefulSetList_1.V1StatefulSetList,
    "V1StatefulSetSpec": V1StatefulSetSpec_1.V1StatefulSetSpec,
    "V1StatefulSetStatus": V1StatefulSetStatus_1.V1StatefulSetStatus,
    "V1StatefulSetUpdateStrategy": V1StatefulSetUpdateStrategy_1.V1StatefulSetUpdateStrategy,
    "V1Status": V1Status_1.V1Status,
    "V1StatusCause": V1StatusCause_1.V1StatusCause,
    "V1StatusDetails": V1StatusDetails_1.V1StatusDetails,
    "V1StorageClass": V1StorageClass_1.V1StorageClass,
    "V1StorageClassList": V1StorageClassList_1.V1StorageClassList,
    "V1StorageOSPersistentVolumeSource": V1StorageOSPersistentVolumeSource_1.V1StorageOSPersistentVolumeSource,
    "V1StorageOSVolumeSource": V1StorageOSVolumeSource_1.V1StorageOSVolumeSource,
    "V1Subject": V1Subject_1.V1Subject,
    "V1SubjectAccessReview": V1SubjectAccessReview_1.V1SubjectAccessReview,
    "V1SubjectAccessReviewSpec": V1SubjectAccessReviewSpec_1.V1SubjectAccessReviewSpec,
    "V1SubjectAccessReviewStatus": V1SubjectAccessReviewStatus_1.V1SubjectAccessReviewStatus,
    "V1SubjectRulesReviewStatus": V1SubjectRulesReviewStatus_1.V1SubjectRulesReviewStatus,
    "V1Sysctl": V1Sysctl_1.V1Sysctl,
    "V1TCPSocketAction": V1TCPSocketAction_1.V1TCPSocketAction,
    "V1Taint": V1Taint_1.V1Taint,
    "V1TokenRequestSpec": V1TokenRequestSpec_1.V1TokenRequestSpec,
    "V1TokenRequestStatus": V1TokenRequestStatus_1.V1TokenRequestStatus,
    "V1TokenReview": V1TokenReview_1.V1TokenReview,
    "V1TokenReviewSpec": V1TokenReviewSpec_1.V1TokenReviewSpec,
    "V1TokenReviewStatus": V1TokenReviewStatus_1.V1TokenReviewStatus,
    "V1Toleration": V1Toleration_1.V1Toleration,
    "V1TopologySelectorLabelRequirement": V1TopologySelectorLabelRequirement_1.V1TopologySelectorLabelRequirement,
    "V1TopologySelectorTerm": V1TopologySelectorTerm_1.V1TopologySelectorTerm,
    "V1TopologySpreadConstraint": V1TopologySpreadConstraint_1.V1TopologySpreadConstraint,
    "V1TypedLocalObjectReference": V1TypedLocalObjectReference_1.V1TypedLocalObjectReference,
    "V1UncountedTerminatedPods": V1UncountedTerminatedPods_1.V1UncountedTerminatedPods,
    "V1UserInfo": V1UserInfo_1.V1UserInfo,
    "V1ValidatingWebhook": V1ValidatingWebhook_1.V1ValidatingWebhook,
    "V1ValidatingWebhookConfiguration": V1ValidatingWebhookConfiguration_1.V1ValidatingWebhookConfiguration,
    "V1ValidatingWebhookConfigurationList": V1ValidatingWebhookConfigurationList_1.V1ValidatingWebhookConfigurationList,
    "V1Volume": V1Volume_1.V1Volume,
    "V1VolumeAttachment": V1VolumeAttachment_1.V1VolumeAttachment,
    "V1VolumeAttachmentList": V1VolumeAttachmentList_1.V1VolumeAttachmentList,
    "V1VolumeAttachmentSource": V1VolumeAttachmentSource_1.V1VolumeAttachmentSource,
    "V1VolumeAttachmentSpec": V1VolumeAttachmentSpec_1.V1VolumeAttachmentSpec,
    "V1VolumeAttachmentStatus": V1VolumeAttachmentStatus_1.V1VolumeAttachmentStatus,
    "V1VolumeDevice": V1VolumeDevice_1.V1VolumeDevice,
    "V1VolumeError": V1VolumeError_1.V1VolumeError,
    "V1VolumeMount": V1VolumeMount_1.V1VolumeMount,
    "V1VolumeNodeAffinity": V1VolumeNodeAffinity_1.V1VolumeNodeAffinity,
    "V1VolumeNodeResources": V1VolumeNodeResources_1.V1VolumeNodeResources,
    "V1VolumeProjection": V1VolumeProjection_1.V1VolumeProjection,
    "V1VsphereVirtualDiskVolumeSource": V1VsphereVirtualDiskVolumeSource_1.V1VsphereVirtualDiskVolumeSource,
    "V1WatchEvent": V1WatchEvent_1.V1WatchEvent,
    "V1WebhookConversion": V1WebhookConversion_1.V1WebhookConversion,
    "V1WeightedPodAffinityTerm": V1WeightedPodAffinityTerm_1.V1WeightedPodAffinityTerm,
    "V1WindowsSecurityContextOptions": V1WindowsSecurityContextOptions_1.V1WindowsSecurityContextOptions,
    "V1alpha1AggregationRule": V1alpha1AggregationRule_1.V1alpha1AggregationRule,
    "V1alpha1CSIStorageCapacity": V1alpha1CSIStorageCapacity_1.V1alpha1CSIStorageCapacity,
    "V1alpha1CSIStorageCapacityList": V1alpha1CSIStorageCapacityList_1.V1alpha1CSIStorageCapacityList,
    "V1alpha1ClusterRole": V1alpha1ClusterRole_1.V1alpha1ClusterRole,
    "V1alpha1ClusterRoleBinding": V1alpha1ClusterRoleBinding_1.V1alpha1ClusterRoleBinding,
    "V1alpha1ClusterRoleBindingList": V1alpha1ClusterRoleBindingList_1.V1alpha1ClusterRoleBindingList,
    "V1alpha1ClusterRoleList": V1alpha1ClusterRoleList_1.V1alpha1ClusterRoleList,
    "V1alpha1Overhead": V1alpha1Overhead_1.V1alpha1Overhead,
    "V1alpha1PolicyRule": V1alpha1PolicyRule_1.V1alpha1PolicyRule,
    "V1alpha1PriorityClass": V1alpha1PriorityClass_1.V1alpha1PriorityClass,
    "V1alpha1PriorityClassList": V1alpha1PriorityClassList_1.V1alpha1PriorityClassList,
    "V1alpha1Role": V1alpha1Role_1.V1alpha1Role,
    "V1alpha1RoleBinding": V1alpha1RoleBinding_1.V1alpha1RoleBinding,
    "V1alpha1RoleBindingList": V1alpha1RoleBindingList_1.V1alpha1RoleBindingList,
    "V1alpha1RoleList": V1alpha1RoleList_1.V1alpha1RoleList,
    "V1alpha1RoleRef": V1alpha1RoleRef_1.V1alpha1RoleRef,
    "V1alpha1RuntimeClass": V1alpha1RuntimeClass_1.V1alpha1RuntimeClass,
    "V1alpha1RuntimeClassList": V1alpha1RuntimeClassList_1.V1alpha1RuntimeClassList,
    "V1alpha1RuntimeClassSpec": V1alpha1RuntimeClassSpec_1.V1alpha1RuntimeClassSpec,
    "V1alpha1Scheduling": V1alpha1Scheduling_1.V1alpha1Scheduling,
    "V1alpha1ServerStorageVersion": V1alpha1ServerStorageVersion_1.V1alpha1ServerStorageVersion,
    "V1alpha1StorageVersion": V1alpha1StorageVersion_1.V1alpha1StorageVersion,
    "V1alpha1StorageVersionCondition": V1alpha1StorageVersionCondition_1.V1alpha1StorageVersionCondition,
    "V1alpha1StorageVersionList": V1alpha1StorageVersionList_1.V1alpha1StorageVersionList,
    "V1alpha1StorageVersionStatus": V1alpha1StorageVersionStatus_1.V1alpha1StorageVersionStatus,
    "V1alpha1Subject": V1alpha1Subject_1.V1alpha1Subject,
    "V1alpha1VolumeAttachment": V1alpha1VolumeAttachment_1.V1alpha1VolumeAttachment,
    "V1alpha1VolumeAttachmentList": V1alpha1VolumeAttachmentList_1.V1alpha1VolumeAttachmentList,
    "V1alpha1VolumeAttachmentSource": V1alpha1VolumeAttachmentSource_1.V1alpha1VolumeAttachmentSource,
    "V1alpha1VolumeAttachmentSpec": V1alpha1VolumeAttachmentSpec_1.V1alpha1VolumeAttachmentSpec,
    "V1alpha1VolumeAttachmentStatus": V1alpha1VolumeAttachmentStatus_1.V1alpha1VolumeAttachmentStatus,
    "V1alpha1VolumeError": V1alpha1VolumeError_1.V1alpha1VolumeError,
    "V1beta1AllowedCSIDriver": V1beta1AllowedCSIDriver_1.V1beta1AllowedCSIDriver,
    "V1beta1AllowedFlexVolume": V1beta1AllowedFlexVolume_1.V1beta1AllowedFlexVolume,
    "V1beta1AllowedHostPath": V1beta1AllowedHostPath_1.V1beta1AllowedHostPath,
    "V1beta1CSIStorageCapacity": V1beta1CSIStorageCapacity_1.V1beta1CSIStorageCapacity,
    "V1beta1CSIStorageCapacityList": V1beta1CSIStorageCapacityList_1.V1beta1CSIStorageCapacityList,
    "V1beta1CronJob": V1beta1CronJob_1.V1beta1CronJob,
    "V1beta1CronJobList": V1beta1CronJobList_1.V1beta1CronJobList,
    "V1beta1CronJobSpec": V1beta1CronJobSpec_1.V1beta1CronJobSpec,
    "V1beta1CronJobStatus": V1beta1CronJobStatus_1.V1beta1CronJobStatus,
    "V1beta1Endpoint": V1beta1Endpoint_1.V1beta1Endpoint,
    "V1beta1EndpointConditions": V1beta1EndpointConditions_1.V1beta1EndpointConditions,
    "V1beta1EndpointHints": V1beta1EndpointHints_1.V1beta1EndpointHints,
    "V1beta1EndpointPort": V1beta1EndpointPort_1.V1beta1EndpointPort,
    "V1beta1EndpointSlice": V1beta1EndpointSlice_1.V1beta1EndpointSlice,
    "V1beta1EndpointSliceList": V1beta1EndpointSliceList_1.V1beta1EndpointSliceList,
    "V1beta1Event": V1beta1Event_1.V1beta1Event,
    "V1beta1EventList": V1beta1EventList_1.V1beta1EventList,
    "V1beta1EventSeries": V1beta1EventSeries_1.V1beta1EventSeries,
    "V1beta1FSGroupStrategyOptions": V1beta1FSGroupStrategyOptions_1.V1beta1FSGroupStrategyOptions,
    "V1beta1FlowDistinguisherMethod": V1beta1FlowDistinguisherMethod_1.V1beta1FlowDistinguisherMethod,
    "V1beta1FlowSchema": V1beta1FlowSchema_1.V1beta1FlowSchema,
    "V1beta1FlowSchemaCondition": V1beta1FlowSchemaCondition_1.V1beta1FlowSchemaCondition,
    "V1beta1FlowSchemaList": V1beta1FlowSchemaList_1.V1beta1FlowSchemaList,
    "V1beta1FlowSchemaSpec": V1beta1FlowSchemaSpec_1.V1beta1FlowSchemaSpec,
    "V1beta1FlowSchemaStatus": V1beta1FlowSchemaStatus_1.V1beta1FlowSchemaStatus,
    "V1beta1ForZone": V1beta1ForZone_1.V1beta1ForZone,
    "V1beta1GroupSubject": V1beta1GroupSubject_1.V1beta1GroupSubject,
    "V1beta1HostPortRange": V1beta1HostPortRange_1.V1beta1HostPortRange,
    "V1beta1IDRange": V1beta1IDRange_1.V1beta1IDRange,
    "V1beta1JobTemplateSpec": V1beta1JobTemplateSpec_1.V1beta1JobTemplateSpec,
    "V1beta1LimitResponse": V1beta1LimitResponse_1.V1beta1LimitResponse,
    "V1beta1LimitedPriorityLevelConfiguration": V1beta1LimitedPriorityLevelConfiguration_1.V1beta1LimitedPriorityLevelConfiguration,
    "V1beta1NonResourcePolicyRule": V1beta1NonResourcePolicyRule_1.V1beta1NonResourcePolicyRule,
    "V1beta1Overhead": V1beta1Overhead_1.V1beta1Overhead,
    "V1beta1PodDisruptionBudget": V1beta1PodDisruptionBudget_1.V1beta1PodDisruptionBudget,
    "V1beta1PodDisruptionBudgetList": V1beta1PodDisruptionBudgetList_1.V1beta1PodDisruptionBudgetList,
    "V1beta1PodDisruptionBudgetSpec": V1beta1PodDisruptionBudgetSpec_1.V1beta1PodDisruptionBudgetSpec,
    "V1beta1PodDisruptionBudgetStatus": V1beta1PodDisruptionBudgetStatus_1.V1beta1PodDisruptionBudgetStatus,
    "V1beta1PodSecurityPolicy": V1beta1PodSecurityPolicy_1.V1beta1PodSecurityPolicy,
    "V1beta1PodSecurityPolicyList": V1beta1PodSecurityPolicyList_1.V1beta1PodSecurityPolicyList,
    "V1beta1PodSecurityPolicySpec": V1beta1PodSecurityPolicySpec_1.V1beta1PodSecurityPolicySpec,
    "V1beta1PolicyRulesWithSubjects": V1beta1PolicyRulesWithSubjects_1.V1beta1PolicyRulesWithSubjects,
    "V1beta1PriorityLevelConfiguration": V1beta1PriorityLevelConfiguration_1.V1beta1PriorityLevelConfiguration,
    "V1beta1PriorityLevelConfigurationCondition": V1beta1PriorityLevelConfigurationCondition_1.V1beta1PriorityLevelConfigurationCondition,
    "V1beta1PriorityLevelConfigurationList": V1beta1PriorityLevelConfigurationList_1.V1beta1PriorityLevelConfigurationList,
    "V1beta1PriorityLevelConfigurationReference": V1beta1PriorityLevelConfigurationReference_1.V1beta1PriorityLevelConfigurationReference,
    "V1beta1PriorityLevelConfigurationSpec": V1beta1PriorityLevelConfigurationSpec_1.V1beta1PriorityLevelConfigurationSpec,
    "V1beta1PriorityLevelConfigurationStatus": V1beta1PriorityLevelConfigurationStatus_1.V1beta1PriorityLevelConfigurationStatus,
    "V1beta1QueuingConfiguration": V1beta1QueuingConfiguration_1.V1beta1QueuingConfiguration,
    "V1beta1ResourcePolicyRule": V1beta1ResourcePolicyRule_1.V1beta1ResourcePolicyRule,
    "V1beta1RunAsGroupStrategyOptions": V1beta1RunAsGroupStrategyOptions_1.V1beta1RunAsGroupStrategyOptions,
    "V1beta1RunAsUserStrategyOptions": V1beta1RunAsUserStrategyOptions_1.V1beta1RunAsUserStrategyOptions,
    "V1beta1RuntimeClass": V1beta1RuntimeClass_1.V1beta1RuntimeClass,
    "V1beta1RuntimeClassList": V1beta1RuntimeClassList_1.V1beta1RuntimeClassList,
    "V1beta1RuntimeClassStrategyOptions": V1beta1RuntimeClassStrategyOptions_1.V1beta1RuntimeClassStrategyOptions,
    "V1beta1SELinuxStrategyOptions": V1beta1SELinuxStrategyOptions_1.V1beta1SELinuxStrategyOptions,
    "V1beta1Scheduling": V1beta1Scheduling_1.V1beta1Scheduling,
    "V1beta1ServiceAccountSubject": V1beta1ServiceAccountSubject_1.V1beta1ServiceAccountSubject,
    "V1beta1Subject": V1beta1Subject_1.V1beta1Subject,
    "V1beta1SupplementalGroupsStrategyOptions": V1beta1SupplementalGroupsStrategyOptions_1.V1beta1SupplementalGroupsStrategyOptions,
    "V1beta1UserSubject": V1beta1UserSubject_1.V1beta1UserSubject,
    "V2beta1ContainerResourceMetricSource": V2beta1ContainerResourceMetricSource_1.V2beta1ContainerResourceMetricSource,
    "V2beta1ContainerResourceMetricStatus": V2beta1ContainerResourceMetricStatus_1.V2beta1ContainerResourceMetricStatus,
    "V2beta1CrossVersionObjectReference": V2beta1CrossVersionObjectReference_1.V2beta1CrossVersionObjectReference,
    "V2beta1ExternalMetricSource": V2beta1ExternalMetricSource_1.V2beta1ExternalMetricSource,
    "V2beta1ExternalMetricStatus": V2beta1ExternalMetricStatus_1.V2beta1ExternalMetricStatus,
    "V2beta1HorizontalPodAutoscaler": V2beta1HorizontalPodAutoscaler_1.V2beta1HorizontalPodAutoscaler,
    "V2beta1HorizontalPodAutoscalerCondition": V2beta1HorizontalPodAutoscalerCondition_1.V2beta1HorizontalPodAutoscalerCondition,
    "V2beta1HorizontalPodAutoscalerList": V2beta1HorizontalPodAutoscalerList_1.V2beta1HorizontalPodAutoscalerList,
    "V2beta1HorizontalPodAutoscalerSpec": V2beta1HorizontalPodAutoscalerSpec_1.V2beta1HorizontalPodAutoscalerSpec,
    "V2beta1HorizontalPodAutoscalerStatus": V2beta1HorizontalPodAutoscalerStatus_1.V2beta1HorizontalPodAutoscalerStatus,
    "V2beta1MetricSpec": V2beta1MetricSpec_1.V2beta1MetricSpec,
    "V2beta1MetricStatus": V2beta1MetricStatus_1.V2beta1MetricStatus,
    "V2beta1ObjectMetricSource": V2beta1ObjectMetricSource_1.V2beta1ObjectMetricSource,
    "V2beta1ObjectMetricStatus": V2beta1ObjectMetricStatus_1.V2beta1ObjectMetricStatus,
    "V2beta1PodsMetricSource": V2beta1PodsMetricSource_1.V2beta1PodsMetricSource,
    "V2beta1PodsMetricStatus": V2beta1PodsMetricStatus_1.V2beta1PodsMetricStatus,
    "V2beta1ResourceMetricSource": V2beta1ResourceMetricSource_1.V2beta1ResourceMetricSource,
    "V2beta1ResourceMetricStatus": V2beta1ResourceMetricStatus_1.V2beta1ResourceMetricStatus,
    "V2beta2ContainerResourceMetricSource": V2beta2ContainerResourceMetricSource_1.V2beta2ContainerResourceMetricSource,
    "V2beta2ContainerResourceMetricStatus": V2beta2ContainerResourceMetricStatus_1.V2beta2ContainerResourceMetricStatus,
    "V2beta2CrossVersionObjectReference": V2beta2CrossVersionObjectReference_1.V2beta2CrossVersionObjectReference,
    "V2beta2ExternalMetricSource": V2beta2ExternalMetricSource_1.V2beta2ExternalMetricSource,
    "V2beta2ExternalMetricStatus": V2beta2ExternalMetricStatus_1.V2beta2ExternalMetricStatus,
    "V2beta2HPAScalingPolicy": V2beta2HPAScalingPolicy_1.V2beta2HPAScalingPolicy,
    "V2beta2HPAScalingRules": V2beta2HPAScalingRules_1.V2beta2HPAScalingRules,
    "V2beta2HorizontalPodAutoscaler": V2beta2HorizontalPodAutoscaler_1.V2beta2HorizontalPodAutoscaler,
    "V2beta2HorizontalPodAutoscalerBehavior": V2beta2HorizontalPodAutoscalerBehavior_1.V2beta2HorizontalPodAutoscalerBehavior,
    "V2beta2HorizontalPodAutoscalerCondition": V2beta2HorizontalPodAutoscalerCondition_1.V2beta2HorizontalPodAutoscalerCondition,
    "V2beta2HorizontalPodAutoscalerList": V2beta2HorizontalPodAutoscalerList_1.V2beta2HorizontalPodAutoscalerList,
    "V2beta2HorizontalPodAutoscalerSpec": V2beta2HorizontalPodAutoscalerSpec_1.V2beta2HorizontalPodAutoscalerSpec,
    "V2beta2HorizontalPodAutoscalerStatus": V2beta2HorizontalPodAutoscalerStatus_1.V2beta2HorizontalPodAutoscalerStatus,
    "V2beta2MetricIdentifier": V2beta2MetricIdentifier_1.V2beta2MetricIdentifier,
    "V2beta2MetricSpec": V2beta2MetricSpec_1.V2beta2MetricSpec,
    "V2beta2MetricStatus": V2beta2MetricStatus_1.V2beta2MetricStatus,
    "V2beta2MetricTarget": V2beta2MetricTarget_1.V2beta2MetricTarget,
    "V2beta2MetricValueStatus": V2beta2MetricValueStatus_1.V2beta2MetricValueStatus,
    "V2beta2ObjectMetricSource": V2beta2ObjectMetricSource_1.V2beta2ObjectMetricSource,
    "V2beta2ObjectMetricStatus": V2beta2ObjectMetricStatus_1.V2beta2ObjectMetricStatus,
    "V2beta2PodsMetricSource": V2beta2PodsMetricSource_1.V2beta2PodsMetricSource,
    "V2beta2PodsMetricStatus": V2beta2PodsMetricStatus_1.V2beta2PodsMetricStatus,
    "V2beta2ResourceMetricSource": V2beta2ResourceMetricSource_1.V2beta2ResourceMetricSource,
    "V2beta2ResourceMetricStatus": V2beta2ResourceMetricStatus_1.V2beta2ResourceMetricStatus,
    "VersionInfo": VersionInfo_1.VersionInfo,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }
    static deserialize(data, type, format) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }
    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    static normalizeMediaType(mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }
    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    static getPreferredMediaType(mediaTypes) {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }
        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType = undefined;
        let selectedRank = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    }
    /**
     * Convert data to a string according the given media type
     */
    static stringify(data, mediaType) {
        if (mediaType === "text/plain") {
            return String(data);
        }
        if (mediaType === "application/json" || mediaType === "application/json-patch+json" || mediaType === "application/merge-patch+json" || mediaType === "application/strategic-merge-patch+json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }
    /**
     * Parse data from a string according to the given media type
     */
    static parse(rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "text/plain") {
            return rawData;
        }
        if (mediaType === "application/json" || mediaType === "application/json-patch+json" || mediaType === "application/merge-patch+json" || mediaType === "application/strategic-merge-patch+json") {
            return JSON.parse(rawData);
        }
        if (mediaType === "text/html") {
            return rawData;
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map