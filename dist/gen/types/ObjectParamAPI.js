"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectRbacAuthorizationV1Api = exports.ObjectRbacAuthorizationApi = exports.ObjectPolicyV1beta1Api = exports.ObjectPolicyV1Api = exports.ObjectPolicyApi = exports.ObjectOpenidApi = exports.ObjectNodeV1beta1Api = exports.ObjectNodeV1alpha1Api = exports.ObjectNodeV1Api = exports.ObjectNodeApi = exports.ObjectNetworkingV1Api = exports.ObjectNetworkingApi = exports.ObjectLogsApi = exports.ObjectInternalApiserverV1alpha1Api = exports.ObjectInternalApiserverApi = exports.ObjectFlowcontrolApiserverV1beta1Api = exports.ObjectFlowcontrolApiserverApi = exports.ObjectEventsV1beta1Api = exports.ObjectEventsV1Api = exports.ObjectEventsApi = exports.ObjectDiscoveryV1beta1Api = exports.ObjectDiscoveryV1Api = exports.ObjectDiscoveryApi = exports.ObjectCustomObjectsApi = exports.ObjectCoreV1Api = exports.ObjectCoreApi = exports.ObjectCoordinationV1Api = exports.ObjectCoordinationApi = exports.ObjectCertificatesV1Api = exports.ObjectCertificatesApi = exports.ObjectBatchV1beta1Api = exports.ObjectBatchV1Api = exports.ObjectBatchApi = exports.ObjectAutoscalingV2beta2Api = exports.ObjectAutoscalingV2beta1Api = exports.ObjectAutoscalingV1Api = exports.ObjectAutoscalingApi = exports.ObjectAuthorizationV1Api = exports.ObjectAuthorizationApi = exports.ObjectAuthenticationV1Api = exports.ObjectAuthenticationApi = exports.ObjectAppsV1Api = exports.ObjectAppsApi = exports.ObjectApisApi = exports.ObjectApiregistrationV1Api = exports.ObjectApiregistrationApi = exports.ObjectApiextensionsV1Api = exports.ObjectApiextensionsApi = exports.ObjectAdmissionregistrationV1Api = exports.ObjectAdmissionregistrationApi = void 0;
exports.ObjectWellKnownApi = exports.ObjectVersionApi = exports.ObjectStorageV1beta1Api = exports.ObjectStorageV1alpha1Api = exports.ObjectStorageV1Api = exports.ObjectStorageApi = exports.ObjectSchedulingV1alpha1Api = exports.ObjectSchedulingV1Api = exports.ObjectSchedulingApi = exports.ObjectRbacAuthorizationV1alpha1Api = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class ObjectAdmissionregistrationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAdmissionregistrationApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroup(param = {}, options) {
        return this.api.getAPIGroup(options).toPromise();
    }
}
exports.ObjectAdmissionregistrationApi = ObjectAdmissionregistrationApi;
const ObservableAPI_2 = require("./ObservableAPI");
class ObjectAdmissionregistrationV1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableAdmissionregistrationV1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a MutatingWebhookConfiguration
     * @param param the request object
     */
    createMutatingWebhookConfigurationWithHttpInfo(param, options) {
        return this.api.createMutatingWebhookConfigurationWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a MutatingWebhookConfiguration
     * @param param the request object
     */
    createMutatingWebhookConfiguration(param, options) {
        return this.api.createMutatingWebhookConfiguration(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a ValidatingWebhookConfiguration
     * @param param the request object
     */
    createValidatingWebhookConfigurationWithHttpInfo(param, options) {
        return this.api.createValidatingWebhookConfigurationWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a ValidatingWebhookConfiguration
     * @param param the request object
     */
    createValidatingWebhookConfiguration(param, options) {
        return this.api.createValidatingWebhookConfiguration(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of MutatingWebhookConfiguration
     * @param param the request object
     */
    deleteCollectionMutatingWebhookConfigurationWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionMutatingWebhookConfigurationWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of MutatingWebhookConfiguration
     * @param param the request object
     */
    deleteCollectionMutatingWebhookConfiguration(param = {}, options) {
        return this.api.deleteCollectionMutatingWebhookConfiguration(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of ValidatingWebhookConfiguration
     * @param param the request object
     */
    deleteCollectionValidatingWebhookConfigurationWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionValidatingWebhookConfigurationWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of ValidatingWebhookConfiguration
     * @param param the request object
     */
    deleteCollectionValidatingWebhookConfiguration(param = {}, options) {
        return this.api.deleteCollectionValidatingWebhookConfiguration(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a MutatingWebhookConfiguration
     * @param param the request object
     */
    deleteMutatingWebhookConfigurationWithHttpInfo(param, options) {
        return this.api.deleteMutatingWebhookConfigurationWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a MutatingWebhookConfiguration
     * @param param the request object
     */
    deleteMutatingWebhookConfiguration(param, options) {
        return this.api.deleteMutatingWebhookConfiguration(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a ValidatingWebhookConfiguration
     * @param param the request object
     */
    deleteValidatingWebhookConfigurationWithHttpInfo(param, options) {
        return this.api.deleteValidatingWebhookConfigurationWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a ValidatingWebhookConfiguration
     * @param param the request object
     */
    deleteValidatingWebhookConfiguration(param, options) {
        return this.api.deleteValidatingWebhookConfiguration(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind MutatingWebhookConfiguration
     * @param param the request object
     */
    listMutatingWebhookConfigurationWithHttpInfo(param = {}, options) {
        return this.api.listMutatingWebhookConfigurationWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind MutatingWebhookConfiguration
     * @param param the request object
     */
    listMutatingWebhookConfiguration(param = {}, options) {
        return this.api.listMutatingWebhookConfiguration(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ValidatingWebhookConfiguration
     * @param param the request object
     */
    listValidatingWebhookConfigurationWithHttpInfo(param = {}, options) {
        return this.api.listValidatingWebhookConfigurationWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ValidatingWebhookConfiguration
     * @param param the request object
     */
    listValidatingWebhookConfiguration(param = {}, options) {
        return this.api.listValidatingWebhookConfiguration(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified MutatingWebhookConfiguration
     * @param param the request object
     */
    patchMutatingWebhookConfigurationWithHttpInfo(param, options) {
        return this.api.patchMutatingWebhookConfigurationWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified MutatingWebhookConfiguration
     * @param param the request object
     */
    patchMutatingWebhookConfiguration(param, options) {
        return this.api.patchMutatingWebhookConfiguration(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified ValidatingWebhookConfiguration
     * @param param the request object
     */
    patchValidatingWebhookConfigurationWithHttpInfo(param, options) {
        return this.api.patchValidatingWebhookConfigurationWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified ValidatingWebhookConfiguration
     * @param param the request object
     */
    patchValidatingWebhookConfiguration(param, options) {
        return this.api.patchValidatingWebhookConfiguration(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified MutatingWebhookConfiguration
     * @param param the request object
     */
    readMutatingWebhookConfigurationWithHttpInfo(param, options) {
        return this.api.readMutatingWebhookConfigurationWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified MutatingWebhookConfiguration
     * @param param the request object
     */
    readMutatingWebhookConfiguration(param, options) {
        return this.api.readMutatingWebhookConfiguration(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified ValidatingWebhookConfiguration
     * @param param the request object
     */
    readValidatingWebhookConfigurationWithHttpInfo(param, options) {
        return this.api.readValidatingWebhookConfigurationWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified ValidatingWebhookConfiguration
     * @param param the request object
     */
    readValidatingWebhookConfiguration(param, options) {
        return this.api.readValidatingWebhookConfiguration(param.name, param.pretty, options).toPromise();
    }
    /**
     * replace the specified MutatingWebhookConfiguration
     * @param param the request object
     */
    replaceMutatingWebhookConfigurationWithHttpInfo(param, options) {
        return this.api.replaceMutatingWebhookConfigurationWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified MutatingWebhookConfiguration
     * @param param the request object
     */
    replaceMutatingWebhookConfiguration(param, options) {
        return this.api.replaceMutatingWebhookConfiguration(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified ValidatingWebhookConfiguration
     * @param param the request object
     */
    replaceValidatingWebhookConfigurationWithHttpInfo(param, options) {
        return this.api.replaceValidatingWebhookConfigurationWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified ValidatingWebhookConfiguration
     * @param param the request object
     */
    replaceValidatingWebhookConfiguration(param, options) {
        return this.api.replaceValidatingWebhookConfiguration(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectAdmissionregistrationV1Api = ObjectAdmissionregistrationV1Api;
const ObservableAPI_3 = require("./ObservableAPI");
class ObjectApiextensionsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableApiextensionsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroup(param = {}, options) {
        return this.api.getAPIGroup(options).toPromise();
    }
}
exports.ObjectApiextensionsApi = ObjectApiextensionsApi;
const ObservableAPI_4 = require("./ObservableAPI");
class ObjectApiextensionsV1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableApiextensionsV1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a CustomResourceDefinition
     * @param param the request object
     */
    createCustomResourceDefinitionWithHttpInfo(param, options) {
        return this.api.createCustomResourceDefinitionWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a CustomResourceDefinition
     * @param param the request object
     */
    createCustomResourceDefinition(param, options) {
        return this.api.createCustomResourceDefinition(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of CustomResourceDefinition
     * @param param the request object
     */
    deleteCollectionCustomResourceDefinitionWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionCustomResourceDefinitionWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of CustomResourceDefinition
     * @param param the request object
     */
    deleteCollectionCustomResourceDefinition(param = {}, options) {
        return this.api.deleteCollectionCustomResourceDefinition(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a CustomResourceDefinition
     * @param param the request object
     */
    deleteCustomResourceDefinitionWithHttpInfo(param, options) {
        return this.api.deleteCustomResourceDefinitionWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a CustomResourceDefinition
     * @param param the request object
     */
    deleteCustomResourceDefinition(param, options) {
        return this.api.deleteCustomResourceDefinition(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind CustomResourceDefinition
     * @param param the request object
     */
    listCustomResourceDefinitionWithHttpInfo(param = {}, options) {
        return this.api.listCustomResourceDefinitionWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind CustomResourceDefinition
     * @param param the request object
     */
    listCustomResourceDefinition(param = {}, options) {
        return this.api.listCustomResourceDefinition(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified CustomResourceDefinition
     * @param param the request object
     */
    patchCustomResourceDefinitionWithHttpInfo(param, options) {
        return this.api.patchCustomResourceDefinitionWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified CustomResourceDefinition
     * @param param the request object
     */
    patchCustomResourceDefinition(param, options) {
        return this.api.patchCustomResourceDefinition(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified CustomResourceDefinition
     * @param param the request object
     */
    patchCustomResourceDefinitionStatusWithHttpInfo(param, options) {
        return this.api.patchCustomResourceDefinitionStatusWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified CustomResourceDefinition
     * @param param the request object
     */
    patchCustomResourceDefinitionStatus(param, options) {
        return this.api.patchCustomResourceDefinitionStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified CustomResourceDefinition
     * @param param the request object
     */
    readCustomResourceDefinitionWithHttpInfo(param, options) {
        return this.api.readCustomResourceDefinitionWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified CustomResourceDefinition
     * @param param the request object
     */
    readCustomResourceDefinition(param, options) {
        return this.api.readCustomResourceDefinition(param.name, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified CustomResourceDefinition
     * @param param the request object
     */
    readCustomResourceDefinitionStatusWithHttpInfo(param, options) {
        return this.api.readCustomResourceDefinitionStatusWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified CustomResourceDefinition
     * @param param the request object
     */
    readCustomResourceDefinitionStatus(param, options) {
        return this.api.readCustomResourceDefinitionStatus(param.name, param.pretty, options).toPromise();
    }
    /**
     * replace the specified CustomResourceDefinition
     * @param param the request object
     */
    replaceCustomResourceDefinitionWithHttpInfo(param, options) {
        return this.api.replaceCustomResourceDefinitionWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified CustomResourceDefinition
     * @param param the request object
     */
    replaceCustomResourceDefinition(param, options) {
        return this.api.replaceCustomResourceDefinition(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified CustomResourceDefinition
     * @param param the request object
     */
    replaceCustomResourceDefinitionStatusWithHttpInfo(param, options) {
        return this.api.replaceCustomResourceDefinitionStatusWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified CustomResourceDefinition
     * @param param the request object
     */
    replaceCustomResourceDefinitionStatus(param, options) {
        return this.api.replaceCustomResourceDefinitionStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectApiextensionsV1Api = ObjectApiextensionsV1Api;
const ObservableAPI_5 = require("./ObservableAPI");
class ObjectApiregistrationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableApiregistrationApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroup(param = {}, options) {
        return this.api.getAPIGroup(options).toPromise();
    }
}
exports.ObjectApiregistrationApi = ObjectApiregistrationApi;
const ObservableAPI_6 = require("./ObservableAPI");
class ObjectApiregistrationV1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableApiregistrationV1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create an APIService
     * @param param the request object
     */
    createAPIServiceWithHttpInfo(param, options) {
        return this.api.createAPIServiceWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create an APIService
     * @param param the request object
     */
    createAPIService(param, options) {
        return this.api.createAPIService(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete an APIService
     * @param param the request object
     */
    deleteAPIServiceWithHttpInfo(param, options) {
        return this.api.deleteAPIServiceWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete an APIService
     * @param param the request object
     */
    deleteAPIService(param, options) {
        return this.api.deleteAPIService(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete collection of APIService
     * @param param the request object
     */
    deleteCollectionAPIServiceWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionAPIServiceWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of APIService
     * @param param the request object
     */
    deleteCollectionAPIService(param = {}, options) {
        return this.api.deleteCollectionAPIService(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind APIService
     * @param param the request object
     */
    listAPIServiceWithHttpInfo(param = {}, options) {
        return this.api.listAPIServiceWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind APIService
     * @param param the request object
     */
    listAPIService(param = {}, options) {
        return this.api.listAPIService(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified APIService
     * @param param the request object
     */
    patchAPIServiceWithHttpInfo(param, options) {
        return this.api.patchAPIServiceWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified APIService
     * @param param the request object
     */
    patchAPIService(param, options) {
        return this.api.patchAPIService(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified APIService
     * @param param the request object
     */
    patchAPIServiceStatusWithHttpInfo(param, options) {
        return this.api.patchAPIServiceStatusWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified APIService
     * @param param the request object
     */
    patchAPIServiceStatus(param, options) {
        return this.api.patchAPIServiceStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified APIService
     * @param param the request object
     */
    readAPIServiceWithHttpInfo(param, options) {
        return this.api.readAPIServiceWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified APIService
     * @param param the request object
     */
    readAPIService(param, options) {
        return this.api.readAPIService(param.name, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified APIService
     * @param param the request object
     */
    readAPIServiceStatusWithHttpInfo(param, options) {
        return this.api.readAPIServiceStatusWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified APIService
     * @param param the request object
     */
    readAPIServiceStatus(param, options) {
        return this.api.readAPIServiceStatus(param.name, param.pretty, options).toPromise();
    }
    /**
     * replace the specified APIService
     * @param param the request object
     */
    replaceAPIServiceWithHttpInfo(param, options) {
        return this.api.replaceAPIServiceWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified APIService
     * @param param the request object
     */
    replaceAPIService(param, options) {
        return this.api.replaceAPIService(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified APIService
     * @param param the request object
     */
    replaceAPIServiceStatusWithHttpInfo(param, options) {
        return this.api.replaceAPIServiceStatusWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified APIService
     * @param param the request object
     */
    replaceAPIServiceStatus(param, options) {
        return this.api.replaceAPIServiceStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectApiregistrationV1Api = ObjectApiregistrationV1Api;
const ObservableAPI_7 = require("./ObservableAPI");
class ObjectApisApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableApisApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get available API versions
     * @param param the request object
     */
    getAPIVersionsWithHttpInfo(param = {}, options) {
        return this.api.getAPIVersionsWithHttpInfo(options).toPromise();
    }
    /**
     * get available API versions
     * @param param the request object
     */
    getAPIVersions(param = {}, options) {
        return this.api.getAPIVersions(options).toPromise();
    }
}
exports.ObjectApisApi = ObjectApisApi;
const ObservableAPI_8 = require("./ObservableAPI");
class ObjectAppsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableAppsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroup(param = {}, options) {
        return this.api.getAPIGroup(options).toPromise();
    }
}
exports.ObjectAppsApi = ObjectAppsApi;
const ObservableAPI_9 = require("./ObservableAPI");
class ObjectAppsV1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableAppsV1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a ControllerRevision
     * @param param the request object
     */
    createNamespacedControllerRevisionWithHttpInfo(param, options) {
        return this.api.createNamespacedControllerRevisionWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a ControllerRevision
     * @param param the request object
     */
    createNamespacedControllerRevision(param, options) {
        return this.api.createNamespacedControllerRevision(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a DaemonSet
     * @param param the request object
     */
    createNamespacedDaemonSetWithHttpInfo(param, options) {
        return this.api.createNamespacedDaemonSetWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a DaemonSet
     * @param param the request object
     */
    createNamespacedDaemonSet(param, options) {
        return this.api.createNamespacedDaemonSet(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a Deployment
     * @param param the request object
     */
    createNamespacedDeploymentWithHttpInfo(param, options) {
        return this.api.createNamespacedDeploymentWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a Deployment
     * @param param the request object
     */
    createNamespacedDeployment(param, options) {
        return this.api.createNamespacedDeployment(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a ReplicaSet
     * @param param the request object
     */
    createNamespacedReplicaSetWithHttpInfo(param, options) {
        return this.api.createNamespacedReplicaSetWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a ReplicaSet
     * @param param the request object
     */
    createNamespacedReplicaSet(param, options) {
        return this.api.createNamespacedReplicaSet(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a StatefulSet
     * @param param the request object
     */
    createNamespacedStatefulSetWithHttpInfo(param, options) {
        return this.api.createNamespacedStatefulSetWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a StatefulSet
     * @param param the request object
     */
    createNamespacedStatefulSet(param, options) {
        return this.api.createNamespacedStatefulSet(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of ControllerRevision
     * @param param the request object
     */
    deleteCollectionNamespacedControllerRevisionWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedControllerRevisionWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of ControllerRevision
     * @param param the request object
     */
    deleteCollectionNamespacedControllerRevision(param, options) {
        return this.api.deleteCollectionNamespacedControllerRevision(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of DaemonSet
     * @param param the request object
     */
    deleteCollectionNamespacedDaemonSetWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedDaemonSetWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of DaemonSet
     * @param param the request object
     */
    deleteCollectionNamespacedDaemonSet(param, options) {
        return this.api.deleteCollectionNamespacedDaemonSet(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Deployment
     * @param param the request object
     */
    deleteCollectionNamespacedDeploymentWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedDeploymentWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Deployment
     * @param param the request object
     */
    deleteCollectionNamespacedDeployment(param, options) {
        return this.api.deleteCollectionNamespacedDeployment(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of ReplicaSet
     * @param param the request object
     */
    deleteCollectionNamespacedReplicaSetWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedReplicaSetWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of ReplicaSet
     * @param param the request object
     */
    deleteCollectionNamespacedReplicaSet(param, options) {
        return this.api.deleteCollectionNamespacedReplicaSet(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of StatefulSet
     * @param param the request object
     */
    deleteCollectionNamespacedStatefulSetWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedStatefulSetWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of StatefulSet
     * @param param the request object
     */
    deleteCollectionNamespacedStatefulSet(param, options) {
        return this.api.deleteCollectionNamespacedStatefulSet(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a ControllerRevision
     * @param param the request object
     */
    deleteNamespacedControllerRevisionWithHttpInfo(param, options) {
        return this.api.deleteNamespacedControllerRevisionWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a ControllerRevision
     * @param param the request object
     */
    deleteNamespacedControllerRevision(param, options) {
        return this.api.deleteNamespacedControllerRevision(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a DaemonSet
     * @param param the request object
     */
    deleteNamespacedDaemonSetWithHttpInfo(param, options) {
        return this.api.deleteNamespacedDaemonSetWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a DaemonSet
     * @param param the request object
     */
    deleteNamespacedDaemonSet(param, options) {
        return this.api.deleteNamespacedDaemonSet(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a Deployment
     * @param param the request object
     */
    deleteNamespacedDeploymentWithHttpInfo(param, options) {
        return this.api.deleteNamespacedDeploymentWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a Deployment
     * @param param the request object
     */
    deleteNamespacedDeployment(param, options) {
        return this.api.deleteNamespacedDeployment(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a ReplicaSet
     * @param param the request object
     */
    deleteNamespacedReplicaSetWithHttpInfo(param, options) {
        return this.api.deleteNamespacedReplicaSetWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a ReplicaSet
     * @param param the request object
     */
    deleteNamespacedReplicaSet(param, options) {
        return this.api.deleteNamespacedReplicaSet(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a StatefulSet
     * @param param the request object
     */
    deleteNamespacedStatefulSetWithHttpInfo(param, options) {
        return this.api.deleteNamespacedStatefulSetWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a StatefulSet
     * @param param the request object
     */
    deleteNamespacedStatefulSet(param, options) {
        return this.api.deleteNamespacedStatefulSet(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind ControllerRevision
     * @param param the request object
     */
    listControllerRevisionForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listControllerRevisionForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ControllerRevision
     * @param param the request object
     */
    listControllerRevisionForAllNamespaces(param = {}, options) {
        return this.api.listControllerRevisionForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind DaemonSet
     * @param param the request object
     */
    listDaemonSetForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listDaemonSetForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind DaemonSet
     * @param param the request object
     */
    listDaemonSetForAllNamespaces(param = {}, options) {
        return this.api.listDaemonSetForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Deployment
     * @param param the request object
     */
    listDeploymentForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listDeploymentForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Deployment
     * @param param the request object
     */
    listDeploymentForAllNamespaces(param = {}, options) {
        return this.api.listDeploymentForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ControllerRevision
     * @param param the request object
     */
    listNamespacedControllerRevisionWithHttpInfo(param, options) {
        return this.api.listNamespacedControllerRevisionWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ControllerRevision
     * @param param the request object
     */
    listNamespacedControllerRevision(param, options) {
        return this.api.listNamespacedControllerRevision(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind DaemonSet
     * @param param the request object
     */
    listNamespacedDaemonSetWithHttpInfo(param, options) {
        return this.api.listNamespacedDaemonSetWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind DaemonSet
     * @param param the request object
     */
    listNamespacedDaemonSet(param, options) {
        return this.api.listNamespacedDaemonSet(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Deployment
     * @param param the request object
     */
    listNamespacedDeploymentWithHttpInfo(param, options) {
        return this.api.listNamespacedDeploymentWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Deployment
     * @param param the request object
     */
    listNamespacedDeployment(param, options) {
        return this.api.listNamespacedDeployment(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ReplicaSet
     * @param param the request object
     */
    listNamespacedReplicaSetWithHttpInfo(param, options) {
        return this.api.listNamespacedReplicaSetWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ReplicaSet
     * @param param the request object
     */
    listNamespacedReplicaSet(param, options) {
        return this.api.listNamespacedReplicaSet(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind StatefulSet
     * @param param the request object
     */
    listNamespacedStatefulSetWithHttpInfo(param, options) {
        return this.api.listNamespacedStatefulSetWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind StatefulSet
     * @param param the request object
     */
    listNamespacedStatefulSet(param, options) {
        return this.api.listNamespacedStatefulSet(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ReplicaSet
     * @param param the request object
     */
    listReplicaSetForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listReplicaSetForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ReplicaSet
     * @param param the request object
     */
    listReplicaSetForAllNamespaces(param = {}, options) {
        return this.api.listReplicaSetForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind StatefulSet
     * @param param the request object
     */
    listStatefulSetForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listStatefulSetForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind StatefulSet
     * @param param the request object
     */
    listStatefulSetForAllNamespaces(param = {}, options) {
        return this.api.listStatefulSetForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified ControllerRevision
     * @param param the request object
     */
    patchNamespacedControllerRevisionWithHttpInfo(param, options) {
        return this.api.patchNamespacedControllerRevisionWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified ControllerRevision
     * @param param the request object
     */
    patchNamespacedControllerRevision(param, options) {
        return this.api.patchNamespacedControllerRevision(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified DaemonSet
     * @param param the request object
     */
    patchNamespacedDaemonSetWithHttpInfo(param, options) {
        return this.api.patchNamespacedDaemonSetWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified DaemonSet
     * @param param the request object
     */
    patchNamespacedDaemonSet(param, options) {
        return this.api.patchNamespacedDaemonSet(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified DaemonSet
     * @param param the request object
     */
    patchNamespacedDaemonSetStatusWithHttpInfo(param, options) {
        return this.api.patchNamespacedDaemonSetStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified DaemonSet
     * @param param the request object
     */
    patchNamespacedDaemonSetStatus(param, options) {
        return this.api.patchNamespacedDaemonSetStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Deployment
     * @param param the request object
     */
    patchNamespacedDeploymentWithHttpInfo(param, options) {
        return this.api.patchNamespacedDeploymentWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Deployment
     * @param param the request object
     */
    patchNamespacedDeployment(param, options) {
        return this.api.patchNamespacedDeployment(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update scale of the specified Deployment
     * @param param the request object
     */
    patchNamespacedDeploymentScaleWithHttpInfo(param, options) {
        return this.api.patchNamespacedDeploymentScaleWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update scale of the specified Deployment
     * @param param the request object
     */
    patchNamespacedDeploymentScale(param, options) {
        return this.api.patchNamespacedDeploymentScale(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified Deployment
     * @param param the request object
     */
    patchNamespacedDeploymentStatusWithHttpInfo(param, options) {
        return this.api.patchNamespacedDeploymentStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified Deployment
     * @param param the request object
     */
    patchNamespacedDeploymentStatus(param, options) {
        return this.api.patchNamespacedDeploymentStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified ReplicaSet
     * @param param the request object
     */
    patchNamespacedReplicaSetWithHttpInfo(param, options) {
        return this.api.patchNamespacedReplicaSetWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified ReplicaSet
     * @param param the request object
     */
    patchNamespacedReplicaSet(param, options) {
        return this.api.patchNamespacedReplicaSet(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update scale of the specified ReplicaSet
     * @param param the request object
     */
    patchNamespacedReplicaSetScaleWithHttpInfo(param, options) {
        return this.api.patchNamespacedReplicaSetScaleWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update scale of the specified ReplicaSet
     * @param param the request object
     */
    patchNamespacedReplicaSetScale(param, options) {
        return this.api.patchNamespacedReplicaSetScale(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified ReplicaSet
     * @param param the request object
     */
    patchNamespacedReplicaSetStatusWithHttpInfo(param, options) {
        return this.api.patchNamespacedReplicaSetStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified ReplicaSet
     * @param param the request object
     */
    patchNamespacedReplicaSetStatus(param, options) {
        return this.api.patchNamespacedReplicaSetStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified StatefulSet
     * @param param the request object
     */
    patchNamespacedStatefulSetWithHttpInfo(param, options) {
        return this.api.patchNamespacedStatefulSetWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified StatefulSet
     * @param param the request object
     */
    patchNamespacedStatefulSet(param, options) {
        return this.api.patchNamespacedStatefulSet(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update scale of the specified StatefulSet
     * @param param the request object
     */
    patchNamespacedStatefulSetScaleWithHttpInfo(param, options) {
        return this.api.patchNamespacedStatefulSetScaleWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update scale of the specified StatefulSet
     * @param param the request object
     */
    patchNamespacedStatefulSetScale(param, options) {
        return this.api.patchNamespacedStatefulSetScale(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified StatefulSet
     * @param param the request object
     */
    patchNamespacedStatefulSetStatusWithHttpInfo(param, options) {
        return this.api.patchNamespacedStatefulSetStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified StatefulSet
     * @param param the request object
     */
    patchNamespacedStatefulSetStatus(param, options) {
        return this.api.patchNamespacedStatefulSetStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified ControllerRevision
     * @param param the request object
     */
    readNamespacedControllerRevisionWithHttpInfo(param, options) {
        return this.api.readNamespacedControllerRevisionWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified ControllerRevision
     * @param param the request object
     */
    readNamespacedControllerRevision(param, options) {
        return this.api.readNamespacedControllerRevision(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified DaemonSet
     * @param param the request object
     */
    readNamespacedDaemonSetWithHttpInfo(param, options) {
        return this.api.readNamespacedDaemonSetWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified DaemonSet
     * @param param the request object
     */
    readNamespacedDaemonSet(param, options) {
        return this.api.readNamespacedDaemonSet(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified DaemonSet
     * @param param the request object
     */
    readNamespacedDaemonSetStatusWithHttpInfo(param, options) {
        return this.api.readNamespacedDaemonSetStatusWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified DaemonSet
     * @param param the request object
     */
    readNamespacedDaemonSetStatus(param, options) {
        return this.api.readNamespacedDaemonSetStatus(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Deployment
     * @param param the request object
     */
    readNamespacedDeploymentWithHttpInfo(param, options) {
        return this.api.readNamespacedDeploymentWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Deployment
     * @param param the request object
     */
    readNamespacedDeployment(param, options) {
        return this.api.readNamespacedDeployment(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read scale of the specified Deployment
     * @param param the request object
     */
    readNamespacedDeploymentScaleWithHttpInfo(param, options) {
        return this.api.readNamespacedDeploymentScaleWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read scale of the specified Deployment
     * @param param the request object
     */
    readNamespacedDeploymentScale(param, options) {
        return this.api.readNamespacedDeploymentScale(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified Deployment
     * @param param the request object
     */
    readNamespacedDeploymentStatusWithHttpInfo(param, options) {
        return this.api.readNamespacedDeploymentStatusWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified Deployment
     * @param param the request object
     */
    readNamespacedDeploymentStatus(param, options) {
        return this.api.readNamespacedDeploymentStatus(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified ReplicaSet
     * @param param the request object
     */
    readNamespacedReplicaSetWithHttpInfo(param, options) {
        return this.api.readNamespacedReplicaSetWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified ReplicaSet
     * @param param the request object
     */
    readNamespacedReplicaSet(param, options) {
        return this.api.readNamespacedReplicaSet(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read scale of the specified ReplicaSet
     * @param param the request object
     */
    readNamespacedReplicaSetScaleWithHttpInfo(param, options) {
        return this.api.readNamespacedReplicaSetScaleWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read scale of the specified ReplicaSet
     * @param param the request object
     */
    readNamespacedReplicaSetScale(param, options) {
        return this.api.readNamespacedReplicaSetScale(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified ReplicaSet
     * @param param the request object
     */
    readNamespacedReplicaSetStatusWithHttpInfo(param, options) {
        return this.api.readNamespacedReplicaSetStatusWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified ReplicaSet
     * @param param the request object
     */
    readNamespacedReplicaSetStatus(param, options) {
        return this.api.readNamespacedReplicaSetStatus(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified StatefulSet
     * @param param the request object
     */
    readNamespacedStatefulSetWithHttpInfo(param, options) {
        return this.api.readNamespacedStatefulSetWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified StatefulSet
     * @param param the request object
     */
    readNamespacedStatefulSet(param, options) {
        return this.api.readNamespacedStatefulSet(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read scale of the specified StatefulSet
     * @param param the request object
     */
    readNamespacedStatefulSetScaleWithHttpInfo(param, options) {
        return this.api.readNamespacedStatefulSetScaleWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read scale of the specified StatefulSet
     * @param param the request object
     */
    readNamespacedStatefulSetScale(param, options) {
        return this.api.readNamespacedStatefulSetScale(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified StatefulSet
     * @param param the request object
     */
    readNamespacedStatefulSetStatusWithHttpInfo(param, options) {
        return this.api.readNamespacedStatefulSetStatusWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified StatefulSet
     * @param param the request object
     */
    readNamespacedStatefulSetStatus(param, options) {
        return this.api.readNamespacedStatefulSetStatus(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * replace the specified ControllerRevision
     * @param param the request object
     */
    replaceNamespacedControllerRevisionWithHttpInfo(param, options) {
        return this.api.replaceNamespacedControllerRevisionWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified ControllerRevision
     * @param param the request object
     */
    replaceNamespacedControllerRevision(param, options) {
        return this.api.replaceNamespacedControllerRevision(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified DaemonSet
     * @param param the request object
     */
    replaceNamespacedDaemonSetWithHttpInfo(param, options) {
        return this.api.replaceNamespacedDaemonSetWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified DaemonSet
     * @param param the request object
     */
    replaceNamespacedDaemonSet(param, options) {
        return this.api.replaceNamespacedDaemonSet(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified DaemonSet
     * @param param the request object
     */
    replaceNamespacedDaemonSetStatusWithHttpInfo(param, options) {
        return this.api.replaceNamespacedDaemonSetStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified DaemonSet
     * @param param the request object
     */
    replaceNamespacedDaemonSetStatus(param, options) {
        return this.api.replaceNamespacedDaemonSetStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Deployment
     * @param param the request object
     */
    replaceNamespacedDeploymentWithHttpInfo(param, options) {
        return this.api.replaceNamespacedDeploymentWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Deployment
     * @param param the request object
     */
    replaceNamespacedDeployment(param, options) {
        return this.api.replaceNamespacedDeployment(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace scale of the specified Deployment
     * @param param the request object
     */
    replaceNamespacedDeploymentScaleWithHttpInfo(param, options) {
        return this.api.replaceNamespacedDeploymentScaleWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace scale of the specified Deployment
     * @param param the request object
     */
    replaceNamespacedDeploymentScale(param, options) {
        return this.api.replaceNamespacedDeploymentScale(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified Deployment
     * @param param the request object
     */
    replaceNamespacedDeploymentStatusWithHttpInfo(param, options) {
        return this.api.replaceNamespacedDeploymentStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified Deployment
     * @param param the request object
     */
    replaceNamespacedDeploymentStatus(param, options) {
        return this.api.replaceNamespacedDeploymentStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified ReplicaSet
     * @param param the request object
     */
    replaceNamespacedReplicaSetWithHttpInfo(param, options) {
        return this.api.replaceNamespacedReplicaSetWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified ReplicaSet
     * @param param the request object
     */
    replaceNamespacedReplicaSet(param, options) {
        return this.api.replaceNamespacedReplicaSet(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace scale of the specified ReplicaSet
     * @param param the request object
     */
    replaceNamespacedReplicaSetScaleWithHttpInfo(param, options) {
        return this.api.replaceNamespacedReplicaSetScaleWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace scale of the specified ReplicaSet
     * @param param the request object
     */
    replaceNamespacedReplicaSetScale(param, options) {
        return this.api.replaceNamespacedReplicaSetScale(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified ReplicaSet
     * @param param the request object
     */
    replaceNamespacedReplicaSetStatusWithHttpInfo(param, options) {
        return this.api.replaceNamespacedReplicaSetStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified ReplicaSet
     * @param param the request object
     */
    replaceNamespacedReplicaSetStatus(param, options) {
        return this.api.replaceNamespacedReplicaSetStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified StatefulSet
     * @param param the request object
     */
    replaceNamespacedStatefulSetWithHttpInfo(param, options) {
        return this.api.replaceNamespacedStatefulSetWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified StatefulSet
     * @param param the request object
     */
    replaceNamespacedStatefulSet(param, options) {
        return this.api.replaceNamespacedStatefulSet(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace scale of the specified StatefulSet
     * @param param the request object
     */
    replaceNamespacedStatefulSetScaleWithHttpInfo(param, options) {
        return this.api.replaceNamespacedStatefulSetScaleWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace scale of the specified StatefulSet
     * @param param the request object
     */
    replaceNamespacedStatefulSetScale(param, options) {
        return this.api.replaceNamespacedStatefulSetScale(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified StatefulSet
     * @param param the request object
     */
    replaceNamespacedStatefulSetStatusWithHttpInfo(param, options) {
        return this.api.replaceNamespacedStatefulSetStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified StatefulSet
     * @param param the request object
     */
    replaceNamespacedStatefulSetStatus(param, options) {
        return this.api.replaceNamespacedStatefulSetStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectAppsV1Api = ObjectAppsV1Api;
const ObservableAPI_10 = require("./ObservableAPI");
class ObjectAuthenticationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroup(param = {}, options) {
        return this.api.getAPIGroup(options).toPromise();
    }
}
exports.ObjectAuthenticationApi = ObjectAuthenticationApi;
const ObservableAPI_11 = require("./ObservableAPI");
class ObjectAuthenticationV1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableAuthenticationV1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a TokenReview
     * @param param the request object
     */
    createTokenReviewWithHttpInfo(param, options) {
        return this.api.createTokenReviewWithHttpInfo(param.body, param.dryRun, param.fieldManager, param.pretty, options).toPromise();
    }
    /**
     * create a TokenReview
     * @param param the request object
     */
    createTokenReview(param, options) {
        return this.api.createTokenReview(param.body, param.dryRun, param.fieldManager, param.pretty, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
}
exports.ObjectAuthenticationV1Api = ObjectAuthenticationV1Api;
const ObservableAPI_12 = require("./ObservableAPI");
class ObjectAuthorizationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableAuthorizationApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroup(param = {}, options) {
        return this.api.getAPIGroup(options).toPromise();
    }
}
exports.ObjectAuthorizationApi = ObjectAuthorizationApi;
const ObservableAPI_13 = require("./ObservableAPI");
class ObjectAuthorizationV1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservableAuthorizationV1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a LocalSubjectAccessReview
     * @param param the request object
     */
    createNamespacedLocalSubjectAccessReviewWithHttpInfo(param, options) {
        return this.api.createNamespacedLocalSubjectAccessReviewWithHttpInfo(param.namespace, param.body, param.dryRun, param.fieldManager, param.pretty, options).toPromise();
    }
    /**
     * create a LocalSubjectAccessReview
     * @param param the request object
     */
    createNamespacedLocalSubjectAccessReview(param, options) {
        return this.api.createNamespacedLocalSubjectAccessReview(param.namespace, param.body, param.dryRun, param.fieldManager, param.pretty, options).toPromise();
    }
    /**
     * create a SelfSubjectAccessReview
     * @param param the request object
     */
    createSelfSubjectAccessReviewWithHttpInfo(param, options) {
        return this.api.createSelfSubjectAccessReviewWithHttpInfo(param.body, param.dryRun, param.fieldManager, param.pretty, options).toPromise();
    }
    /**
     * create a SelfSubjectAccessReview
     * @param param the request object
     */
    createSelfSubjectAccessReview(param, options) {
        return this.api.createSelfSubjectAccessReview(param.body, param.dryRun, param.fieldManager, param.pretty, options).toPromise();
    }
    /**
     * create a SelfSubjectRulesReview
     * @param param the request object
     */
    createSelfSubjectRulesReviewWithHttpInfo(param, options) {
        return this.api.createSelfSubjectRulesReviewWithHttpInfo(param.body, param.dryRun, param.fieldManager, param.pretty, options).toPromise();
    }
    /**
     * create a SelfSubjectRulesReview
     * @param param the request object
     */
    createSelfSubjectRulesReview(param, options) {
        return this.api.createSelfSubjectRulesReview(param.body, param.dryRun, param.fieldManager, param.pretty, options).toPromise();
    }
    /**
     * create a SubjectAccessReview
     * @param param the request object
     */
    createSubjectAccessReviewWithHttpInfo(param, options) {
        return this.api.createSubjectAccessReviewWithHttpInfo(param.body, param.dryRun, param.fieldManager, param.pretty, options).toPromise();
    }
    /**
     * create a SubjectAccessReview
     * @param param the request object
     */
    createSubjectAccessReview(param, options) {
        return this.api.createSubjectAccessReview(param.body, param.dryRun, param.fieldManager, param.pretty, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
}
exports.ObjectAuthorizationV1Api = ObjectAuthorizationV1Api;
const ObservableAPI_14 = require("./ObservableAPI");
class ObjectAutoscalingApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_14.ObservableAutoscalingApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroup(param = {}, options) {
        return this.api.getAPIGroup(options).toPromise();
    }
}
exports.ObjectAutoscalingApi = ObjectAutoscalingApi;
const ObservableAPI_15 = require("./ObservableAPI");
class ObjectAutoscalingV1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_15.ObservableAutoscalingV1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a HorizontalPodAutoscaler
     * @param param the request object
     */
    createNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.createNamespacedHorizontalPodAutoscalerWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a HorizontalPodAutoscaler
     * @param param the request object
     */
    createNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.createNamespacedHorizontalPodAutoscaler(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of HorizontalPodAutoscaler
     * @param param the request object
     */
    deleteCollectionNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedHorizontalPodAutoscalerWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of HorizontalPodAutoscaler
     * @param param the request object
     */
    deleteCollectionNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.deleteCollectionNamespacedHorizontalPodAutoscaler(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a HorizontalPodAutoscaler
     * @param param the request object
     */
    deleteNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.deleteNamespacedHorizontalPodAutoscalerWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a HorizontalPodAutoscaler
     * @param param the request object
     */
    deleteNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.deleteNamespacedHorizontalPodAutoscaler(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind HorizontalPodAutoscaler
     * @param param the request object
     */
    listHorizontalPodAutoscalerForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listHorizontalPodAutoscalerForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind HorizontalPodAutoscaler
     * @param param the request object
     */
    listHorizontalPodAutoscalerForAllNamespaces(param = {}, options) {
        return this.api.listHorizontalPodAutoscalerForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind HorizontalPodAutoscaler
     * @param param the request object
     */
    listNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.listNamespacedHorizontalPodAutoscalerWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind HorizontalPodAutoscaler
     * @param param the request object
     */
    listNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.listNamespacedHorizontalPodAutoscaler(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    patchNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.patchNamespacedHorizontalPodAutoscalerWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    patchNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.patchNamespacedHorizontalPodAutoscaler(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    patchNamespacedHorizontalPodAutoscalerStatusWithHttpInfo(param, options) {
        return this.api.patchNamespacedHorizontalPodAutoscalerStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    patchNamespacedHorizontalPodAutoscalerStatus(param, options) {
        return this.api.patchNamespacedHorizontalPodAutoscalerStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    readNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.readNamespacedHorizontalPodAutoscalerWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    readNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.readNamespacedHorizontalPodAutoscaler(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    readNamespacedHorizontalPodAutoscalerStatusWithHttpInfo(param, options) {
        return this.api.readNamespacedHorizontalPodAutoscalerStatusWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    readNamespacedHorizontalPodAutoscalerStatus(param, options) {
        return this.api.readNamespacedHorizontalPodAutoscalerStatus(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * replace the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    replaceNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.replaceNamespacedHorizontalPodAutoscalerWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    replaceNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.replaceNamespacedHorizontalPodAutoscaler(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    replaceNamespacedHorizontalPodAutoscalerStatusWithHttpInfo(param, options) {
        return this.api.replaceNamespacedHorizontalPodAutoscalerStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    replaceNamespacedHorizontalPodAutoscalerStatus(param, options) {
        return this.api.replaceNamespacedHorizontalPodAutoscalerStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectAutoscalingV1Api = ObjectAutoscalingV1Api;
const ObservableAPI_16 = require("./ObservableAPI");
class ObjectAutoscalingV2beta1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_16.ObservableAutoscalingV2beta1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a HorizontalPodAutoscaler
     * @param param the request object
     */
    createNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.createNamespacedHorizontalPodAutoscalerWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a HorizontalPodAutoscaler
     * @param param the request object
     */
    createNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.createNamespacedHorizontalPodAutoscaler(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of HorizontalPodAutoscaler
     * @param param the request object
     */
    deleteCollectionNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedHorizontalPodAutoscalerWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of HorizontalPodAutoscaler
     * @param param the request object
     */
    deleteCollectionNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.deleteCollectionNamespacedHorizontalPodAutoscaler(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a HorizontalPodAutoscaler
     * @param param the request object
     */
    deleteNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.deleteNamespacedHorizontalPodAutoscalerWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a HorizontalPodAutoscaler
     * @param param the request object
     */
    deleteNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.deleteNamespacedHorizontalPodAutoscaler(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind HorizontalPodAutoscaler
     * @param param the request object
     */
    listHorizontalPodAutoscalerForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listHorizontalPodAutoscalerForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind HorizontalPodAutoscaler
     * @param param the request object
     */
    listHorizontalPodAutoscalerForAllNamespaces(param = {}, options) {
        return this.api.listHorizontalPodAutoscalerForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind HorizontalPodAutoscaler
     * @param param the request object
     */
    listNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.listNamespacedHorizontalPodAutoscalerWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind HorizontalPodAutoscaler
     * @param param the request object
     */
    listNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.listNamespacedHorizontalPodAutoscaler(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    patchNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.patchNamespacedHorizontalPodAutoscalerWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    patchNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.patchNamespacedHorizontalPodAutoscaler(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    patchNamespacedHorizontalPodAutoscalerStatusWithHttpInfo(param, options) {
        return this.api.patchNamespacedHorizontalPodAutoscalerStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    patchNamespacedHorizontalPodAutoscalerStatus(param, options) {
        return this.api.patchNamespacedHorizontalPodAutoscalerStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    readNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.readNamespacedHorizontalPodAutoscalerWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    readNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.readNamespacedHorizontalPodAutoscaler(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    readNamespacedHorizontalPodAutoscalerStatusWithHttpInfo(param, options) {
        return this.api.readNamespacedHorizontalPodAutoscalerStatusWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    readNamespacedHorizontalPodAutoscalerStatus(param, options) {
        return this.api.readNamespacedHorizontalPodAutoscalerStatus(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * replace the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    replaceNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.replaceNamespacedHorizontalPodAutoscalerWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    replaceNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.replaceNamespacedHorizontalPodAutoscaler(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    replaceNamespacedHorizontalPodAutoscalerStatusWithHttpInfo(param, options) {
        return this.api.replaceNamespacedHorizontalPodAutoscalerStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    replaceNamespacedHorizontalPodAutoscalerStatus(param, options) {
        return this.api.replaceNamespacedHorizontalPodAutoscalerStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectAutoscalingV2beta1Api = ObjectAutoscalingV2beta1Api;
const ObservableAPI_17 = require("./ObservableAPI");
class ObjectAutoscalingV2beta2Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_17.ObservableAutoscalingV2beta2Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a HorizontalPodAutoscaler
     * @param param the request object
     */
    createNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.createNamespacedHorizontalPodAutoscalerWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a HorizontalPodAutoscaler
     * @param param the request object
     */
    createNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.createNamespacedHorizontalPodAutoscaler(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of HorizontalPodAutoscaler
     * @param param the request object
     */
    deleteCollectionNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedHorizontalPodAutoscalerWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of HorizontalPodAutoscaler
     * @param param the request object
     */
    deleteCollectionNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.deleteCollectionNamespacedHorizontalPodAutoscaler(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a HorizontalPodAutoscaler
     * @param param the request object
     */
    deleteNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.deleteNamespacedHorizontalPodAutoscalerWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a HorizontalPodAutoscaler
     * @param param the request object
     */
    deleteNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.deleteNamespacedHorizontalPodAutoscaler(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind HorizontalPodAutoscaler
     * @param param the request object
     */
    listHorizontalPodAutoscalerForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listHorizontalPodAutoscalerForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind HorizontalPodAutoscaler
     * @param param the request object
     */
    listHorizontalPodAutoscalerForAllNamespaces(param = {}, options) {
        return this.api.listHorizontalPodAutoscalerForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind HorizontalPodAutoscaler
     * @param param the request object
     */
    listNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.listNamespacedHorizontalPodAutoscalerWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind HorizontalPodAutoscaler
     * @param param the request object
     */
    listNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.listNamespacedHorizontalPodAutoscaler(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    patchNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.patchNamespacedHorizontalPodAutoscalerWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    patchNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.patchNamespacedHorizontalPodAutoscaler(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    patchNamespacedHorizontalPodAutoscalerStatusWithHttpInfo(param, options) {
        return this.api.patchNamespacedHorizontalPodAutoscalerStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    patchNamespacedHorizontalPodAutoscalerStatus(param, options) {
        return this.api.patchNamespacedHorizontalPodAutoscalerStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    readNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.readNamespacedHorizontalPodAutoscalerWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    readNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.readNamespacedHorizontalPodAutoscaler(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    readNamespacedHorizontalPodAutoscalerStatusWithHttpInfo(param, options) {
        return this.api.readNamespacedHorizontalPodAutoscalerStatusWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    readNamespacedHorizontalPodAutoscalerStatus(param, options) {
        return this.api.readNamespacedHorizontalPodAutoscalerStatus(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * replace the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    replaceNamespacedHorizontalPodAutoscalerWithHttpInfo(param, options) {
        return this.api.replaceNamespacedHorizontalPodAutoscalerWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    replaceNamespacedHorizontalPodAutoscaler(param, options) {
        return this.api.replaceNamespacedHorizontalPodAutoscaler(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    replaceNamespacedHorizontalPodAutoscalerStatusWithHttpInfo(param, options) {
        return this.api.replaceNamespacedHorizontalPodAutoscalerStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified HorizontalPodAutoscaler
     * @param param the request object
     */
    replaceNamespacedHorizontalPodAutoscalerStatus(param, options) {
        return this.api.replaceNamespacedHorizontalPodAutoscalerStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectAutoscalingV2beta2Api = ObjectAutoscalingV2beta2Api;
const ObservableAPI_18 = require("./ObservableAPI");
class ObjectBatchApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_18.ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroup(param = {}, options) {
        return this.api.getAPIGroup(options).toPromise();
    }
}
exports.ObjectBatchApi = ObjectBatchApi;
const ObservableAPI_19 = require("./ObservableAPI");
class ObjectBatchV1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_19.ObservableBatchV1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a CronJob
     * @param param the request object
     */
    createNamespacedCronJobWithHttpInfo(param, options) {
        return this.api.createNamespacedCronJobWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a CronJob
     * @param param the request object
     */
    createNamespacedCronJob(param, options) {
        return this.api.createNamespacedCronJob(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a Job
     * @param param the request object
     */
    createNamespacedJobWithHttpInfo(param, options) {
        return this.api.createNamespacedJobWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a Job
     * @param param the request object
     */
    createNamespacedJob(param, options) {
        return this.api.createNamespacedJob(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of CronJob
     * @param param the request object
     */
    deleteCollectionNamespacedCronJobWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedCronJobWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of CronJob
     * @param param the request object
     */
    deleteCollectionNamespacedCronJob(param, options) {
        return this.api.deleteCollectionNamespacedCronJob(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Job
     * @param param the request object
     */
    deleteCollectionNamespacedJobWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedJobWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Job
     * @param param the request object
     */
    deleteCollectionNamespacedJob(param, options) {
        return this.api.deleteCollectionNamespacedJob(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a CronJob
     * @param param the request object
     */
    deleteNamespacedCronJobWithHttpInfo(param, options) {
        return this.api.deleteNamespacedCronJobWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a CronJob
     * @param param the request object
     */
    deleteNamespacedCronJob(param, options) {
        return this.api.deleteNamespacedCronJob(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a Job
     * @param param the request object
     */
    deleteNamespacedJobWithHttpInfo(param, options) {
        return this.api.deleteNamespacedJobWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a Job
     * @param param the request object
     */
    deleteNamespacedJob(param, options) {
        return this.api.deleteNamespacedJob(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind CronJob
     * @param param the request object
     */
    listCronJobForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listCronJobForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind CronJob
     * @param param the request object
     */
    listCronJobForAllNamespaces(param = {}, options) {
        return this.api.listCronJobForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Job
     * @param param the request object
     */
    listJobForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listJobForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Job
     * @param param the request object
     */
    listJobForAllNamespaces(param = {}, options) {
        return this.api.listJobForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind CronJob
     * @param param the request object
     */
    listNamespacedCronJobWithHttpInfo(param, options) {
        return this.api.listNamespacedCronJobWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind CronJob
     * @param param the request object
     */
    listNamespacedCronJob(param, options) {
        return this.api.listNamespacedCronJob(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Job
     * @param param the request object
     */
    listNamespacedJobWithHttpInfo(param, options) {
        return this.api.listNamespacedJobWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Job
     * @param param the request object
     */
    listNamespacedJob(param, options) {
        return this.api.listNamespacedJob(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified CronJob
     * @param param the request object
     */
    patchNamespacedCronJobWithHttpInfo(param, options) {
        return this.api.patchNamespacedCronJobWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified CronJob
     * @param param the request object
     */
    patchNamespacedCronJob(param, options) {
        return this.api.patchNamespacedCronJob(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified CronJob
     * @param param the request object
     */
    patchNamespacedCronJobStatusWithHttpInfo(param, options) {
        return this.api.patchNamespacedCronJobStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified CronJob
     * @param param the request object
     */
    patchNamespacedCronJobStatus(param, options) {
        return this.api.patchNamespacedCronJobStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Job
     * @param param the request object
     */
    patchNamespacedJobWithHttpInfo(param, options) {
        return this.api.patchNamespacedJobWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Job
     * @param param the request object
     */
    patchNamespacedJob(param, options) {
        return this.api.patchNamespacedJob(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified Job
     * @param param the request object
     */
    patchNamespacedJobStatusWithHttpInfo(param, options) {
        return this.api.patchNamespacedJobStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified Job
     * @param param the request object
     */
    patchNamespacedJobStatus(param, options) {
        return this.api.patchNamespacedJobStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified CronJob
     * @param param the request object
     */
    readNamespacedCronJobWithHttpInfo(param, options) {
        return this.api.readNamespacedCronJobWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified CronJob
     * @param param the request object
     */
    readNamespacedCronJob(param, options) {
        return this.api.readNamespacedCronJob(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified CronJob
     * @param param the request object
     */
    readNamespacedCronJobStatusWithHttpInfo(param, options) {
        return this.api.readNamespacedCronJobStatusWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified CronJob
     * @param param the request object
     */
    readNamespacedCronJobStatus(param, options) {
        return this.api.readNamespacedCronJobStatus(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Job
     * @param param the request object
     */
    readNamespacedJobWithHttpInfo(param, options) {
        return this.api.readNamespacedJobWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Job
     * @param param the request object
     */
    readNamespacedJob(param, options) {
        return this.api.readNamespacedJob(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified Job
     * @param param the request object
     */
    readNamespacedJobStatusWithHttpInfo(param, options) {
        return this.api.readNamespacedJobStatusWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified Job
     * @param param the request object
     */
    readNamespacedJobStatus(param, options) {
        return this.api.readNamespacedJobStatus(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * replace the specified CronJob
     * @param param the request object
     */
    replaceNamespacedCronJobWithHttpInfo(param, options) {
        return this.api.replaceNamespacedCronJobWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified CronJob
     * @param param the request object
     */
    replaceNamespacedCronJob(param, options) {
        return this.api.replaceNamespacedCronJob(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified CronJob
     * @param param the request object
     */
    replaceNamespacedCronJobStatusWithHttpInfo(param, options) {
        return this.api.replaceNamespacedCronJobStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified CronJob
     * @param param the request object
     */
    replaceNamespacedCronJobStatus(param, options) {
        return this.api.replaceNamespacedCronJobStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Job
     * @param param the request object
     */
    replaceNamespacedJobWithHttpInfo(param, options) {
        return this.api.replaceNamespacedJobWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Job
     * @param param the request object
     */
    replaceNamespacedJob(param, options) {
        return this.api.replaceNamespacedJob(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified Job
     * @param param the request object
     */
    replaceNamespacedJobStatusWithHttpInfo(param, options) {
        return this.api.replaceNamespacedJobStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified Job
     * @param param the request object
     */
    replaceNamespacedJobStatus(param, options) {
        return this.api.replaceNamespacedJobStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectBatchV1Api = ObjectBatchV1Api;
const ObservableAPI_20 = require("./ObservableAPI");
class ObjectBatchV1beta1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_20.ObservableBatchV1beta1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a CronJob
     * @param param the request object
     */
    createNamespacedCronJobWithHttpInfo(param, options) {
        return this.api.createNamespacedCronJobWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a CronJob
     * @param param the request object
     */
    createNamespacedCronJob(param, options) {
        return this.api.createNamespacedCronJob(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of CronJob
     * @param param the request object
     */
    deleteCollectionNamespacedCronJobWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedCronJobWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of CronJob
     * @param param the request object
     */
    deleteCollectionNamespacedCronJob(param, options) {
        return this.api.deleteCollectionNamespacedCronJob(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a CronJob
     * @param param the request object
     */
    deleteNamespacedCronJobWithHttpInfo(param, options) {
        return this.api.deleteNamespacedCronJobWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a CronJob
     * @param param the request object
     */
    deleteNamespacedCronJob(param, options) {
        return this.api.deleteNamespacedCronJob(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind CronJob
     * @param param the request object
     */
    listCronJobForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listCronJobForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind CronJob
     * @param param the request object
     */
    listCronJobForAllNamespaces(param = {}, options) {
        return this.api.listCronJobForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind CronJob
     * @param param the request object
     */
    listNamespacedCronJobWithHttpInfo(param, options) {
        return this.api.listNamespacedCronJobWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind CronJob
     * @param param the request object
     */
    listNamespacedCronJob(param, options) {
        return this.api.listNamespacedCronJob(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified CronJob
     * @param param the request object
     */
    patchNamespacedCronJobWithHttpInfo(param, options) {
        return this.api.patchNamespacedCronJobWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified CronJob
     * @param param the request object
     */
    patchNamespacedCronJob(param, options) {
        return this.api.patchNamespacedCronJob(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified CronJob
     * @param param the request object
     */
    patchNamespacedCronJobStatusWithHttpInfo(param, options) {
        return this.api.patchNamespacedCronJobStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified CronJob
     * @param param the request object
     */
    patchNamespacedCronJobStatus(param, options) {
        return this.api.patchNamespacedCronJobStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified CronJob
     * @param param the request object
     */
    readNamespacedCronJobWithHttpInfo(param, options) {
        return this.api.readNamespacedCronJobWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified CronJob
     * @param param the request object
     */
    readNamespacedCronJob(param, options) {
        return this.api.readNamespacedCronJob(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified CronJob
     * @param param the request object
     */
    readNamespacedCronJobStatusWithHttpInfo(param, options) {
        return this.api.readNamespacedCronJobStatusWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified CronJob
     * @param param the request object
     */
    readNamespacedCronJobStatus(param, options) {
        return this.api.readNamespacedCronJobStatus(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * replace the specified CronJob
     * @param param the request object
     */
    replaceNamespacedCronJobWithHttpInfo(param, options) {
        return this.api.replaceNamespacedCronJobWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified CronJob
     * @param param the request object
     */
    replaceNamespacedCronJob(param, options) {
        return this.api.replaceNamespacedCronJob(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified CronJob
     * @param param the request object
     */
    replaceNamespacedCronJobStatusWithHttpInfo(param, options) {
        return this.api.replaceNamespacedCronJobStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified CronJob
     * @param param the request object
     */
    replaceNamespacedCronJobStatus(param, options) {
        return this.api.replaceNamespacedCronJobStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectBatchV1beta1Api = ObjectBatchV1beta1Api;
const ObservableAPI_21 = require("./ObservableAPI");
class ObjectCertificatesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_21.ObservableCertificatesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroup(param = {}, options) {
        return this.api.getAPIGroup(options).toPromise();
    }
}
exports.ObjectCertificatesApi = ObjectCertificatesApi;
const ObservableAPI_22 = require("./ObservableAPI");
class ObjectCertificatesV1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_22.ObservableCertificatesV1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a CertificateSigningRequest
     * @param param the request object
     */
    createCertificateSigningRequestWithHttpInfo(param, options) {
        return this.api.createCertificateSigningRequestWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a CertificateSigningRequest
     * @param param the request object
     */
    createCertificateSigningRequest(param, options) {
        return this.api.createCertificateSigningRequest(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete a CertificateSigningRequest
     * @param param the request object
     */
    deleteCertificateSigningRequestWithHttpInfo(param, options) {
        return this.api.deleteCertificateSigningRequestWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a CertificateSigningRequest
     * @param param the request object
     */
    deleteCertificateSigningRequest(param, options) {
        return this.api.deleteCertificateSigningRequest(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete collection of CertificateSigningRequest
     * @param param the request object
     */
    deleteCollectionCertificateSigningRequestWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionCertificateSigningRequestWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of CertificateSigningRequest
     * @param param the request object
     */
    deleteCollectionCertificateSigningRequest(param = {}, options) {
        return this.api.deleteCollectionCertificateSigningRequest(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind CertificateSigningRequest
     * @param param the request object
     */
    listCertificateSigningRequestWithHttpInfo(param = {}, options) {
        return this.api.listCertificateSigningRequestWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind CertificateSigningRequest
     * @param param the request object
     */
    listCertificateSigningRequest(param = {}, options) {
        return this.api.listCertificateSigningRequest(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified CertificateSigningRequest
     * @param param the request object
     */
    patchCertificateSigningRequestWithHttpInfo(param, options) {
        return this.api.patchCertificateSigningRequestWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified CertificateSigningRequest
     * @param param the request object
     */
    patchCertificateSigningRequest(param, options) {
        return this.api.patchCertificateSigningRequest(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update approval of the specified CertificateSigningRequest
     * @param param the request object
     */
    patchCertificateSigningRequestApprovalWithHttpInfo(param, options) {
        return this.api.patchCertificateSigningRequestApprovalWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update approval of the specified CertificateSigningRequest
     * @param param the request object
     */
    patchCertificateSigningRequestApproval(param, options) {
        return this.api.patchCertificateSigningRequestApproval(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified CertificateSigningRequest
     * @param param the request object
     */
    patchCertificateSigningRequestStatusWithHttpInfo(param, options) {
        return this.api.patchCertificateSigningRequestStatusWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified CertificateSigningRequest
     * @param param the request object
     */
    patchCertificateSigningRequestStatus(param, options) {
        return this.api.patchCertificateSigningRequestStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified CertificateSigningRequest
     * @param param the request object
     */
    readCertificateSigningRequestWithHttpInfo(param, options) {
        return this.api.readCertificateSigningRequestWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified CertificateSigningRequest
     * @param param the request object
     */
    readCertificateSigningRequest(param, options) {
        return this.api.readCertificateSigningRequest(param.name, param.pretty, options).toPromise();
    }
    /**
     * read approval of the specified CertificateSigningRequest
     * @param param the request object
     */
    readCertificateSigningRequestApprovalWithHttpInfo(param, options) {
        return this.api.readCertificateSigningRequestApprovalWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read approval of the specified CertificateSigningRequest
     * @param param the request object
     */
    readCertificateSigningRequestApproval(param, options) {
        return this.api.readCertificateSigningRequestApproval(param.name, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified CertificateSigningRequest
     * @param param the request object
     */
    readCertificateSigningRequestStatusWithHttpInfo(param, options) {
        return this.api.readCertificateSigningRequestStatusWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified CertificateSigningRequest
     * @param param the request object
     */
    readCertificateSigningRequestStatus(param, options) {
        return this.api.readCertificateSigningRequestStatus(param.name, param.pretty, options).toPromise();
    }
    /**
     * replace the specified CertificateSigningRequest
     * @param param the request object
     */
    replaceCertificateSigningRequestWithHttpInfo(param, options) {
        return this.api.replaceCertificateSigningRequestWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified CertificateSigningRequest
     * @param param the request object
     */
    replaceCertificateSigningRequest(param, options) {
        return this.api.replaceCertificateSigningRequest(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace approval of the specified CertificateSigningRequest
     * @param param the request object
     */
    replaceCertificateSigningRequestApprovalWithHttpInfo(param, options) {
        return this.api.replaceCertificateSigningRequestApprovalWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace approval of the specified CertificateSigningRequest
     * @param param the request object
     */
    replaceCertificateSigningRequestApproval(param, options) {
        return this.api.replaceCertificateSigningRequestApproval(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified CertificateSigningRequest
     * @param param the request object
     */
    replaceCertificateSigningRequestStatusWithHttpInfo(param, options) {
        return this.api.replaceCertificateSigningRequestStatusWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified CertificateSigningRequest
     * @param param the request object
     */
    replaceCertificateSigningRequestStatus(param, options) {
        return this.api.replaceCertificateSigningRequestStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectCertificatesV1Api = ObjectCertificatesV1Api;
const ObservableAPI_23 = require("./ObservableAPI");
class ObjectCoordinationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_23.ObservableCoordinationApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroup(param = {}, options) {
        return this.api.getAPIGroup(options).toPromise();
    }
}
exports.ObjectCoordinationApi = ObjectCoordinationApi;
const ObservableAPI_24 = require("./ObservableAPI");
class ObjectCoordinationV1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_24.ObservableCoordinationV1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a Lease
     * @param param the request object
     */
    createNamespacedLeaseWithHttpInfo(param, options) {
        return this.api.createNamespacedLeaseWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a Lease
     * @param param the request object
     */
    createNamespacedLease(param, options) {
        return this.api.createNamespacedLease(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of Lease
     * @param param the request object
     */
    deleteCollectionNamespacedLeaseWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedLeaseWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Lease
     * @param param the request object
     */
    deleteCollectionNamespacedLease(param, options) {
        return this.api.deleteCollectionNamespacedLease(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a Lease
     * @param param the request object
     */
    deleteNamespacedLeaseWithHttpInfo(param, options) {
        return this.api.deleteNamespacedLeaseWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a Lease
     * @param param the request object
     */
    deleteNamespacedLease(param, options) {
        return this.api.deleteNamespacedLease(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind Lease
     * @param param the request object
     */
    listLeaseForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listLeaseForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Lease
     * @param param the request object
     */
    listLeaseForAllNamespaces(param = {}, options) {
        return this.api.listLeaseForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Lease
     * @param param the request object
     */
    listNamespacedLeaseWithHttpInfo(param, options) {
        return this.api.listNamespacedLeaseWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Lease
     * @param param the request object
     */
    listNamespacedLease(param, options) {
        return this.api.listNamespacedLease(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified Lease
     * @param param the request object
     */
    patchNamespacedLeaseWithHttpInfo(param, options) {
        return this.api.patchNamespacedLeaseWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Lease
     * @param param the request object
     */
    patchNamespacedLease(param, options) {
        return this.api.patchNamespacedLease(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified Lease
     * @param param the request object
     */
    readNamespacedLeaseWithHttpInfo(param, options) {
        return this.api.readNamespacedLeaseWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Lease
     * @param param the request object
     */
    readNamespacedLease(param, options) {
        return this.api.readNamespacedLease(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * replace the specified Lease
     * @param param the request object
     */
    replaceNamespacedLeaseWithHttpInfo(param, options) {
        return this.api.replaceNamespacedLeaseWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Lease
     * @param param the request object
     */
    replaceNamespacedLease(param, options) {
        return this.api.replaceNamespacedLease(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectCoordinationV1Api = ObjectCoordinationV1Api;
const ObservableAPI_25 = require("./ObservableAPI");
class ObjectCoreApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_25.ObservableCoreApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get available API versions
     * @param param the request object
     */
    getAPIVersionsWithHttpInfo(param = {}, options) {
        return this.api.getAPIVersionsWithHttpInfo(options).toPromise();
    }
    /**
     * get available API versions
     * @param param the request object
     */
    getAPIVersions(param = {}, options) {
        return this.api.getAPIVersions(options).toPromise();
    }
}
exports.ObjectCoreApi = ObjectCoreApi;
const ObservableAPI_26 = require("./ObservableAPI");
class ObjectCoreV1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_26.ObservableCoreV1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * connect DELETE requests to proxy of Pod
     * @param param the request object
     */
    connectDeleteNamespacedPodProxyWithHttpInfo(param, options) {
        return this.api.connectDeleteNamespacedPodProxyWithHttpInfo(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect DELETE requests to proxy of Pod
     * @param param the request object
     */
    connectDeleteNamespacedPodProxy(param, options) {
        return this.api.connectDeleteNamespacedPodProxy(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect DELETE requests to proxy of Pod
     * @param param the request object
     */
    connectDeleteNamespacedPodProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectDeleteNamespacedPodProxyWithPathWithHttpInfo(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect DELETE requests to proxy of Pod
     * @param param the request object
     */
    connectDeleteNamespacedPodProxyWithPath(param, options) {
        return this.api.connectDeleteNamespacedPodProxyWithPath(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect DELETE requests to proxy of Service
     * @param param the request object
     */
    connectDeleteNamespacedServiceProxyWithHttpInfo(param, options) {
        return this.api.connectDeleteNamespacedServiceProxyWithHttpInfo(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect DELETE requests to proxy of Service
     * @param param the request object
     */
    connectDeleteNamespacedServiceProxy(param, options) {
        return this.api.connectDeleteNamespacedServiceProxy(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect DELETE requests to proxy of Service
     * @param param the request object
     */
    connectDeleteNamespacedServiceProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectDeleteNamespacedServiceProxyWithPathWithHttpInfo(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect DELETE requests to proxy of Service
     * @param param the request object
     */
    connectDeleteNamespacedServiceProxyWithPath(param, options) {
        return this.api.connectDeleteNamespacedServiceProxyWithPath(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect DELETE requests to proxy of Node
     * @param param the request object
     */
    connectDeleteNodeProxyWithHttpInfo(param, options) {
        return this.api.connectDeleteNodeProxyWithHttpInfo(param.name, param.path, options).toPromise();
    }
    /**
     * connect DELETE requests to proxy of Node
     * @param param the request object
     */
    connectDeleteNodeProxy(param, options) {
        return this.api.connectDeleteNodeProxy(param.name, param.path, options).toPromise();
    }
    /**
     * connect DELETE requests to proxy of Node
     * @param param the request object
     */
    connectDeleteNodeProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectDeleteNodeProxyWithPathWithHttpInfo(param.name, param.path, param.path2, options).toPromise();
    }
    /**
     * connect DELETE requests to proxy of Node
     * @param param the request object
     */
    connectDeleteNodeProxyWithPath(param, options) {
        return this.api.connectDeleteNodeProxyWithPath(param.name, param.path, param.path2, options).toPromise();
    }
    /**
     * connect GET requests to attach of Pod
     * @param param the request object
     */
    connectGetNamespacedPodAttachWithHttpInfo(param, options) {
        return this.api.connectGetNamespacedPodAttachWithHttpInfo(param.name, param.namespace, param.container, param.stderr, param.stdin, param.stdout, param.tty, options).toPromise();
    }
    /**
     * connect GET requests to attach of Pod
     * @param param the request object
     */
    connectGetNamespacedPodAttach(param, options) {
        return this.api.connectGetNamespacedPodAttach(param.name, param.namespace, param.container, param.stderr, param.stdin, param.stdout, param.tty, options).toPromise();
    }
    /**
     * connect GET requests to exec of Pod
     * @param param the request object
     */
    connectGetNamespacedPodExecWithHttpInfo(param, options) {
        return this.api.connectGetNamespacedPodExecWithHttpInfo(param.name, param.namespace, param.command, param.container, param.stderr, param.stdin, param.stdout, param.tty, options).toPromise();
    }
    /**
     * connect GET requests to exec of Pod
     * @param param the request object
     */
    connectGetNamespacedPodExec(param, options) {
        return this.api.connectGetNamespacedPodExec(param.name, param.namespace, param.command, param.container, param.stderr, param.stdin, param.stdout, param.tty, options).toPromise();
    }
    /**
     * connect GET requests to portforward of Pod
     * @param param the request object
     */
    connectGetNamespacedPodPortforwardWithHttpInfo(param, options) {
        return this.api.connectGetNamespacedPodPortforwardWithHttpInfo(param.name, param.namespace, param.ports, options).toPromise();
    }
    /**
     * connect GET requests to portforward of Pod
     * @param param the request object
     */
    connectGetNamespacedPodPortforward(param, options) {
        return this.api.connectGetNamespacedPodPortforward(param.name, param.namespace, param.ports, options).toPromise();
    }
    /**
     * connect GET requests to proxy of Pod
     * @param param the request object
     */
    connectGetNamespacedPodProxyWithHttpInfo(param, options) {
        return this.api.connectGetNamespacedPodProxyWithHttpInfo(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect GET requests to proxy of Pod
     * @param param the request object
     */
    connectGetNamespacedPodProxy(param, options) {
        return this.api.connectGetNamespacedPodProxy(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect GET requests to proxy of Pod
     * @param param the request object
     */
    connectGetNamespacedPodProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectGetNamespacedPodProxyWithPathWithHttpInfo(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect GET requests to proxy of Pod
     * @param param the request object
     */
    connectGetNamespacedPodProxyWithPath(param, options) {
        return this.api.connectGetNamespacedPodProxyWithPath(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect GET requests to proxy of Service
     * @param param the request object
     */
    connectGetNamespacedServiceProxyWithHttpInfo(param, options) {
        return this.api.connectGetNamespacedServiceProxyWithHttpInfo(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect GET requests to proxy of Service
     * @param param the request object
     */
    connectGetNamespacedServiceProxy(param, options) {
        return this.api.connectGetNamespacedServiceProxy(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect GET requests to proxy of Service
     * @param param the request object
     */
    connectGetNamespacedServiceProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectGetNamespacedServiceProxyWithPathWithHttpInfo(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect GET requests to proxy of Service
     * @param param the request object
     */
    connectGetNamespacedServiceProxyWithPath(param, options) {
        return this.api.connectGetNamespacedServiceProxyWithPath(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect GET requests to proxy of Node
     * @param param the request object
     */
    connectGetNodeProxyWithHttpInfo(param, options) {
        return this.api.connectGetNodeProxyWithHttpInfo(param.name, param.path, options).toPromise();
    }
    /**
     * connect GET requests to proxy of Node
     * @param param the request object
     */
    connectGetNodeProxy(param, options) {
        return this.api.connectGetNodeProxy(param.name, param.path, options).toPromise();
    }
    /**
     * connect GET requests to proxy of Node
     * @param param the request object
     */
    connectGetNodeProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectGetNodeProxyWithPathWithHttpInfo(param.name, param.path, param.path2, options).toPromise();
    }
    /**
     * connect GET requests to proxy of Node
     * @param param the request object
     */
    connectGetNodeProxyWithPath(param, options) {
        return this.api.connectGetNodeProxyWithPath(param.name, param.path, param.path2, options).toPromise();
    }
    /**
     * connect HEAD requests to proxy of Pod
     * @param param the request object
     */
    connectHeadNamespacedPodProxyWithHttpInfo(param, options) {
        return this.api.connectHeadNamespacedPodProxyWithHttpInfo(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect HEAD requests to proxy of Pod
     * @param param the request object
     */
    connectHeadNamespacedPodProxy(param, options) {
        return this.api.connectHeadNamespacedPodProxy(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect HEAD requests to proxy of Pod
     * @param param the request object
     */
    connectHeadNamespacedPodProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectHeadNamespacedPodProxyWithPathWithHttpInfo(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect HEAD requests to proxy of Pod
     * @param param the request object
     */
    connectHeadNamespacedPodProxyWithPath(param, options) {
        return this.api.connectHeadNamespacedPodProxyWithPath(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect HEAD requests to proxy of Service
     * @param param the request object
     */
    connectHeadNamespacedServiceProxyWithHttpInfo(param, options) {
        return this.api.connectHeadNamespacedServiceProxyWithHttpInfo(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect HEAD requests to proxy of Service
     * @param param the request object
     */
    connectHeadNamespacedServiceProxy(param, options) {
        return this.api.connectHeadNamespacedServiceProxy(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect HEAD requests to proxy of Service
     * @param param the request object
     */
    connectHeadNamespacedServiceProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectHeadNamespacedServiceProxyWithPathWithHttpInfo(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect HEAD requests to proxy of Service
     * @param param the request object
     */
    connectHeadNamespacedServiceProxyWithPath(param, options) {
        return this.api.connectHeadNamespacedServiceProxyWithPath(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect HEAD requests to proxy of Node
     * @param param the request object
     */
    connectHeadNodeProxyWithHttpInfo(param, options) {
        return this.api.connectHeadNodeProxyWithHttpInfo(param.name, param.path, options).toPromise();
    }
    /**
     * connect HEAD requests to proxy of Node
     * @param param the request object
     */
    connectHeadNodeProxy(param, options) {
        return this.api.connectHeadNodeProxy(param.name, param.path, options).toPromise();
    }
    /**
     * connect HEAD requests to proxy of Node
     * @param param the request object
     */
    connectHeadNodeProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectHeadNodeProxyWithPathWithHttpInfo(param.name, param.path, param.path2, options).toPromise();
    }
    /**
     * connect HEAD requests to proxy of Node
     * @param param the request object
     */
    connectHeadNodeProxyWithPath(param, options) {
        return this.api.connectHeadNodeProxyWithPath(param.name, param.path, param.path2, options).toPromise();
    }
    /**
     * connect OPTIONS requests to proxy of Pod
     * @param param the request object
     */
    connectOptionsNamespacedPodProxyWithHttpInfo(param, options) {
        return this.api.connectOptionsNamespacedPodProxyWithHttpInfo(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect OPTIONS requests to proxy of Pod
     * @param param the request object
     */
    connectOptionsNamespacedPodProxy(param, options) {
        return this.api.connectOptionsNamespacedPodProxy(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect OPTIONS requests to proxy of Pod
     * @param param the request object
     */
    connectOptionsNamespacedPodProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectOptionsNamespacedPodProxyWithPathWithHttpInfo(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect OPTIONS requests to proxy of Pod
     * @param param the request object
     */
    connectOptionsNamespacedPodProxyWithPath(param, options) {
        return this.api.connectOptionsNamespacedPodProxyWithPath(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect OPTIONS requests to proxy of Service
     * @param param the request object
     */
    connectOptionsNamespacedServiceProxyWithHttpInfo(param, options) {
        return this.api.connectOptionsNamespacedServiceProxyWithHttpInfo(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect OPTIONS requests to proxy of Service
     * @param param the request object
     */
    connectOptionsNamespacedServiceProxy(param, options) {
        return this.api.connectOptionsNamespacedServiceProxy(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect OPTIONS requests to proxy of Service
     * @param param the request object
     */
    connectOptionsNamespacedServiceProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectOptionsNamespacedServiceProxyWithPathWithHttpInfo(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect OPTIONS requests to proxy of Service
     * @param param the request object
     */
    connectOptionsNamespacedServiceProxyWithPath(param, options) {
        return this.api.connectOptionsNamespacedServiceProxyWithPath(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect OPTIONS requests to proxy of Node
     * @param param the request object
     */
    connectOptionsNodeProxyWithHttpInfo(param, options) {
        return this.api.connectOptionsNodeProxyWithHttpInfo(param.name, param.path, options).toPromise();
    }
    /**
     * connect OPTIONS requests to proxy of Node
     * @param param the request object
     */
    connectOptionsNodeProxy(param, options) {
        return this.api.connectOptionsNodeProxy(param.name, param.path, options).toPromise();
    }
    /**
     * connect OPTIONS requests to proxy of Node
     * @param param the request object
     */
    connectOptionsNodeProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectOptionsNodeProxyWithPathWithHttpInfo(param.name, param.path, param.path2, options).toPromise();
    }
    /**
     * connect OPTIONS requests to proxy of Node
     * @param param the request object
     */
    connectOptionsNodeProxyWithPath(param, options) {
        return this.api.connectOptionsNodeProxyWithPath(param.name, param.path, param.path2, options).toPromise();
    }
    /**
     * connect PATCH requests to proxy of Pod
     * @param param the request object
     */
    connectPatchNamespacedPodProxyWithHttpInfo(param, options) {
        return this.api.connectPatchNamespacedPodProxyWithHttpInfo(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect PATCH requests to proxy of Pod
     * @param param the request object
     */
    connectPatchNamespacedPodProxy(param, options) {
        return this.api.connectPatchNamespacedPodProxy(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect PATCH requests to proxy of Pod
     * @param param the request object
     */
    connectPatchNamespacedPodProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectPatchNamespacedPodProxyWithPathWithHttpInfo(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect PATCH requests to proxy of Pod
     * @param param the request object
     */
    connectPatchNamespacedPodProxyWithPath(param, options) {
        return this.api.connectPatchNamespacedPodProxyWithPath(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect PATCH requests to proxy of Service
     * @param param the request object
     */
    connectPatchNamespacedServiceProxyWithHttpInfo(param, options) {
        return this.api.connectPatchNamespacedServiceProxyWithHttpInfo(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect PATCH requests to proxy of Service
     * @param param the request object
     */
    connectPatchNamespacedServiceProxy(param, options) {
        return this.api.connectPatchNamespacedServiceProxy(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect PATCH requests to proxy of Service
     * @param param the request object
     */
    connectPatchNamespacedServiceProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectPatchNamespacedServiceProxyWithPathWithHttpInfo(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect PATCH requests to proxy of Service
     * @param param the request object
     */
    connectPatchNamespacedServiceProxyWithPath(param, options) {
        return this.api.connectPatchNamespacedServiceProxyWithPath(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect PATCH requests to proxy of Node
     * @param param the request object
     */
    connectPatchNodeProxyWithHttpInfo(param, options) {
        return this.api.connectPatchNodeProxyWithHttpInfo(param.name, param.path, options).toPromise();
    }
    /**
     * connect PATCH requests to proxy of Node
     * @param param the request object
     */
    connectPatchNodeProxy(param, options) {
        return this.api.connectPatchNodeProxy(param.name, param.path, options).toPromise();
    }
    /**
     * connect PATCH requests to proxy of Node
     * @param param the request object
     */
    connectPatchNodeProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectPatchNodeProxyWithPathWithHttpInfo(param.name, param.path, param.path2, options).toPromise();
    }
    /**
     * connect PATCH requests to proxy of Node
     * @param param the request object
     */
    connectPatchNodeProxyWithPath(param, options) {
        return this.api.connectPatchNodeProxyWithPath(param.name, param.path, param.path2, options).toPromise();
    }
    /**
     * connect POST requests to attach of Pod
     * @param param the request object
     */
    connectPostNamespacedPodAttachWithHttpInfo(param, options) {
        return this.api.connectPostNamespacedPodAttachWithHttpInfo(param.name, param.namespace, param.container, param.stderr, param.stdin, param.stdout, param.tty, options).toPromise();
    }
    /**
     * connect POST requests to attach of Pod
     * @param param the request object
     */
    connectPostNamespacedPodAttach(param, options) {
        return this.api.connectPostNamespacedPodAttach(param.name, param.namespace, param.container, param.stderr, param.stdin, param.stdout, param.tty, options).toPromise();
    }
    /**
     * connect POST requests to exec of Pod
     * @param param the request object
     */
    connectPostNamespacedPodExecWithHttpInfo(param, options) {
        return this.api.connectPostNamespacedPodExecWithHttpInfo(param.name, param.namespace, param.command, param.container, param.stderr, param.stdin, param.stdout, param.tty, options).toPromise();
    }
    /**
     * connect POST requests to exec of Pod
     * @param param the request object
     */
    connectPostNamespacedPodExec(param, options) {
        return this.api.connectPostNamespacedPodExec(param.name, param.namespace, param.command, param.container, param.stderr, param.stdin, param.stdout, param.tty, options).toPromise();
    }
    /**
     * connect POST requests to portforward of Pod
     * @param param the request object
     */
    connectPostNamespacedPodPortforwardWithHttpInfo(param, options) {
        return this.api.connectPostNamespacedPodPortforwardWithHttpInfo(param.name, param.namespace, param.ports, options).toPromise();
    }
    /**
     * connect POST requests to portforward of Pod
     * @param param the request object
     */
    connectPostNamespacedPodPortforward(param, options) {
        return this.api.connectPostNamespacedPodPortforward(param.name, param.namespace, param.ports, options).toPromise();
    }
    /**
     * connect POST requests to proxy of Pod
     * @param param the request object
     */
    connectPostNamespacedPodProxyWithHttpInfo(param, options) {
        return this.api.connectPostNamespacedPodProxyWithHttpInfo(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect POST requests to proxy of Pod
     * @param param the request object
     */
    connectPostNamespacedPodProxy(param, options) {
        return this.api.connectPostNamespacedPodProxy(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect POST requests to proxy of Pod
     * @param param the request object
     */
    connectPostNamespacedPodProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectPostNamespacedPodProxyWithPathWithHttpInfo(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect POST requests to proxy of Pod
     * @param param the request object
     */
    connectPostNamespacedPodProxyWithPath(param, options) {
        return this.api.connectPostNamespacedPodProxyWithPath(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect POST requests to proxy of Service
     * @param param the request object
     */
    connectPostNamespacedServiceProxyWithHttpInfo(param, options) {
        return this.api.connectPostNamespacedServiceProxyWithHttpInfo(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect POST requests to proxy of Service
     * @param param the request object
     */
    connectPostNamespacedServiceProxy(param, options) {
        return this.api.connectPostNamespacedServiceProxy(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect POST requests to proxy of Service
     * @param param the request object
     */
    connectPostNamespacedServiceProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectPostNamespacedServiceProxyWithPathWithHttpInfo(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect POST requests to proxy of Service
     * @param param the request object
     */
    connectPostNamespacedServiceProxyWithPath(param, options) {
        return this.api.connectPostNamespacedServiceProxyWithPath(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect POST requests to proxy of Node
     * @param param the request object
     */
    connectPostNodeProxyWithHttpInfo(param, options) {
        return this.api.connectPostNodeProxyWithHttpInfo(param.name, param.path, options).toPromise();
    }
    /**
     * connect POST requests to proxy of Node
     * @param param the request object
     */
    connectPostNodeProxy(param, options) {
        return this.api.connectPostNodeProxy(param.name, param.path, options).toPromise();
    }
    /**
     * connect POST requests to proxy of Node
     * @param param the request object
     */
    connectPostNodeProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectPostNodeProxyWithPathWithHttpInfo(param.name, param.path, param.path2, options).toPromise();
    }
    /**
     * connect POST requests to proxy of Node
     * @param param the request object
     */
    connectPostNodeProxyWithPath(param, options) {
        return this.api.connectPostNodeProxyWithPath(param.name, param.path, param.path2, options).toPromise();
    }
    /**
     * connect PUT requests to proxy of Pod
     * @param param the request object
     */
    connectPutNamespacedPodProxyWithHttpInfo(param, options) {
        return this.api.connectPutNamespacedPodProxyWithHttpInfo(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect PUT requests to proxy of Pod
     * @param param the request object
     */
    connectPutNamespacedPodProxy(param, options) {
        return this.api.connectPutNamespacedPodProxy(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect PUT requests to proxy of Pod
     * @param param the request object
     */
    connectPutNamespacedPodProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectPutNamespacedPodProxyWithPathWithHttpInfo(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect PUT requests to proxy of Pod
     * @param param the request object
     */
    connectPutNamespacedPodProxyWithPath(param, options) {
        return this.api.connectPutNamespacedPodProxyWithPath(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect PUT requests to proxy of Service
     * @param param the request object
     */
    connectPutNamespacedServiceProxyWithHttpInfo(param, options) {
        return this.api.connectPutNamespacedServiceProxyWithHttpInfo(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect PUT requests to proxy of Service
     * @param param the request object
     */
    connectPutNamespacedServiceProxy(param, options) {
        return this.api.connectPutNamespacedServiceProxy(param.name, param.namespace, param.path, options).toPromise();
    }
    /**
     * connect PUT requests to proxy of Service
     * @param param the request object
     */
    connectPutNamespacedServiceProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectPutNamespacedServiceProxyWithPathWithHttpInfo(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect PUT requests to proxy of Service
     * @param param the request object
     */
    connectPutNamespacedServiceProxyWithPath(param, options) {
        return this.api.connectPutNamespacedServiceProxyWithPath(param.name, param.namespace, param.path, param.path2, options).toPromise();
    }
    /**
     * connect PUT requests to proxy of Node
     * @param param the request object
     */
    connectPutNodeProxyWithHttpInfo(param, options) {
        return this.api.connectPutNodeProxyWithHttpInfo(param.name, param.path, options).toPromise();
    }
    /**
     * connect PUT requests to proxy of Node
     * @param param the request object
     */
    connectPutNodeProxy(param, options) {
        return this.api.connectPutNodeProxy(param.name, param.path, options).toPromise();
    }
    /**
     * connect PUT requests to proxy of Node
     * @param param the request object
     */
    connectPutNodeProxyWithPathWithHttpInfo(param, options) {
        return this.api.connectPutNodeProxyWithPathWithHttpInfo(param.name, param.path, param.path2, options).toPromise();
    }
    /**
     * connect PUT requests to proxy of Node
     * @param param the request object
     */
    connectPutNodeProxyWithPath(param, options) {
        return this.api.connectPutNodeProxyWithPath(param.name, param.path, param.path2, options).toPromise();
    }
    /**
     * create a Namespace
     * @param param the request object
     */
    createNamespaceWithHttpInfo(param, options) {
        return this.api.createNamespaceWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a Namespace
     * @param param the request object
     */
    createNamespace(param, options) {
        return this.api.createNamespace(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a Binding
     * @param param the request object
     */
    createNamespacedBindingWithHttpInfo(param, options) {
        return this.api.createNamespacedBindingWithHttpInfo(param.namespace, param.body, param.dryRun, param.fieldManager, param.pretty, options).toPromise();
    }
    /**
     * create a Binding
     * @param param the request object
     */
    createNamespacedBinding(param, options) {
        return this.api.createNamespacedBinding(param.namespace, param.body, param.dryRun, param.fieldManager, param.pretty, options).toPromise();
    }
    /**
     * create a ConfigMap
     * @param param the request object
     */
    createNamespacedConfigMapWithHttpInfo(param, options) {
        return this.api.createNamespacedConfigMapWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a ConfigMap
     * @param param the request object
     */
    createNamespacedConfigMap(param, options) {
        return this.api.createNamespacedConfigMap(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create Endpoints
     * @param param the request object
     */
    createNamespacedEndpointsWithHttpInfo(param, options) {
        return this.api.createNamespacedEndpointsWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create Endpoints
     * @param param the request object
     */
    createNamespacedEndpoints(param, options) {
        return this.api.createNamespacedEndpoints(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create an Event
     * @param param the request object
     */
    createNamespacedEventWithHttpInfo(param, options) {
        return this.api.createNamespacedEventWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create an Event
     * @param param the request object
     */
    createNamespacedEvent(param, options) {
        return this.api.createNamespacedEvent(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a LimitRange
     * @param param the request object
     */
    createNamespacedLimitRangeWithHttpInfo(param, options) {
        return this.api.createNamespacedLimitRangeWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a LimitRange
     * @param param the request object
     */
    createNamespacedLimitRange(param, options) {
        return this.api.createNamespacedLimitRange(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a PersistentVolumeClaim
     * @param param the request object
     */
    createNamespacedPersistentVolumeClaimWithHttpInfo(param, options) {
        return this.api.createNamespacedPersistentVolumeClaimWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a PersistentVolumeClaim
     * @param param the request object
     */
    createNamespacedPersistentVolumeClaim(param, options) {
        return this.api.createNamespacedPersistentVolumeClaim(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a Pod
     * @param param the request object
     */
    createNamespacedPodWithHttpInfo(param, options) {
        return this.api.createNamespacedPodWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a Pod
     * @param param the request object
     */
    createNamespacedPod(param, options) {
        return this.api.createNamespacedPod(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create binding of a Pod
     * @param param the request object
     */
    createNamespacedPodBindingWithHttpInfo(param, options) {
        return this.api.createNamespacedPodBindingWithHttpInfo(param.name, param.namespace, param.body, param.dryRun, param.fieldManager, param.pretty, options).toPromise();
    }
    /**
     * create binding of a Pod
     * @param param the request object
     */
    createNamespacedPodBinding(param, options) {
        return this.api.createNamespacedPodBinding(param.name, param.namespace, param.body, param.dryRun, param.fieldManager, param.pretty, options).toPromise();
    }
    /**
     * create eviction of a Pod
     * @param param the request object
     */
    createNamespacedPodEvictionWithHttpInfo(param, options) {
        return this.api.createNamespacedPodEvictionWithHttpInfo(param.name, param.namespace, param.body, param.dryRun, param.fieldManager, param.pretty, options).toPromise();
    }
    /**
     * create eviction of a Pod
     * @param param the request object
     */
    createNamespacedPodEviction(param, options) {
        return this.api.createNamespacedPodEviction(param.name, param.namespace, param.body, param.dryRun, param.fieldManager, param.pretty, options).toPromise();
    }
    /**
     * create a PodTemplate
     * @param param the request object
     */
    createNamespacedPodTemplateWithHttpInfo(param, options) {
        return this.api.createNamespacedPodTemplateWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a PodTemplate
     * @param param the request object
     */
    createNamespacedPodTemplate(param, options) {
        return this.api.createNamespacedPodTemplate(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a ReplicationController
     * @param param the request object
     */
    createNamespacedReplicationControllerWithHttpInfo(param, options) {
        return this.api.createNamespacedReplicationControllerWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a ReplicationController
     * @param param the request object
     */
    createNamespacedReplicationController(param, options) {
        return this.api.createNamespacedReplicationController(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a ResourceQuota
     * @param param the request object
     */
    createNamespacedResourceQuotaWithHttpInfo(param, options) {
        return this.api.createNamespacedResourceQuotaWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a ResourceQuota
     * @param param the request object
     */
    createNamespacedResourceQuota(param, options) {
        return this.api.createNamespacedResourceQuota(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a Secret
     * @param param the request object
     */
    createNamespacedSecretWithHttpInfo(param, options) {
        return this.api.createNamespacedSecretWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a Secret
     * @param param the request object
     */
    createNamespacedSecret(param, options) {
        return this.api.createNamespacedSecret(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a Service
     * @param param the request object
     */
    createNamespacedServiceWithHttpInfo(param, options) {
        return this.api.createNamespacedServiceWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a Service
     * @param param the request object
     */
    createNamespacedService(param, options) {
        return this.api.createNamespacedService(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a ServiceAccount
     * @param param the request object
     */
    createNamespacedServiceAccountWithHttpInfo(param, options) {
        return this.api.createNamespacedServiceAccountWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a ServiceAccount
     * @param param the request object
     */
    createNamespacedServiceAccount(param, options) {
        return this.api.createNamespacedServiceAccount(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create token of a ServiceAccount
     * @param param the request object
     */
    createNamespacedServiceAccountTokenWithHttpInfo(param, options) {
        return this.api.createNamespacedServiceAccountTokenWithHttpInfo(param.name, param.namespace, param.body, param.dryRun, param.fieldManager, param.pretty, options).toPromise();
    }
    /**
     * create token of a ServiceAccount
     * @param param the request object
     */
    createNamespacedServiceAccountToken(param, options) {
        return this.api.createNamespacedServiceAccountToken(param.name, param.namespace, param.body, param.dryRun, param.fieldManager, param.pretty, options).toPromise();
    }
    /**
     * create a Node
     * @param param the request object
     */
    createNodeWithHttpInfo(param, options) {
        return this.api.createNodeWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a Node
     * @param param the request object
     */
    createNode(param, options) {
        return this.api.createNode(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a PersistentVolume
     * @param param the request object
     */
    createPersistentVolumeWithHttpInfo(param, options) {
        return this.api.createPersistentVolumeWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a PersistentVolume
     * @param param the request object
     */
    createPersistentVolume(param, options) {
        return this.api.createPersistentVolume(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of ConfigMap
     * @param param the request object
     */
    deleteCollectionNamespacedConfigMapWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedConfigMapWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of ConfigMap
     * @param param the request object
     */
    deleteCollectionNamespacedConfigMap(param, options) {
        return this.api.deleteCollectionNamespacedConfigMap(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Endpoints
     * @param param the request object
     */
    deleteCollectionNamespacedEndpointsWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedEndpointsWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Endpoints
     * @param param the request object
     */
    deleteCollectionNamespacedEndpoints(param, options) {
        return this.api.deleteCollectionNamespacedEndpoints(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Event
     * @param param the request object
     */
    deleteCollectionNamespacedEventWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedEventWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Event
     * @param param the request object
     */
    deleteCollectionNamespacedEvent(param, options) {
        return this.api.deleteCollectionNamespacedEvent(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of LimitRange
     * @param param the request object
     */
    deleteCollectionNamespacedLimitRangeWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedLimitRangeWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of LimitRange
     * @param param the request object
     */
    deleteCollectionNamespacedLimitRange(param, options) {
        return this.api.deleteCollectionNamespacedLimitRange(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of PersistentVolumeClaim
     * @param param the request object
     */
    deleteCollectionNamespacedPersistentVolumeClaimWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedPersistentVolumeClaimWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of PersistentVolumeClaim
     * @param param the request object
     */
    deleteCollectionNamespacedPersistentVolumeClaim(param, options) {
        return this.api.deleteCollectionNamespacedPersistentVolumeClaim(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Pod
     * @param param the request object
     */
    deleteCollectionNamespacedPodWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedPodWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Pod
     * @param param the request object
     */
    deleteCollectionNamespacedPod(param, options) {
        return this.api.deleteCollectionNamespacedPod(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of PodTemplate
     * @param param the request object
     */
    deleteCollectionNamespacedPodTemplateWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedPodTemplateWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of PodTemplate
     * @param param the request object
     */
    deleteCollectionNamespacedPodTemplate(param, options) {
        return this.api.deleteCollectionNamespacedPodTemplate(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of ReplicationController
     * @param param the request object
     */
    deleteCollectionNamespacedReplicationControllerWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedReplicationControllerWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of ReplicationController
     * @param param the request object
     */
    deleteCollectionNamespacedReplicationController(param, options) {
        return this.api.deleteCollectionNamespacedReplicationController(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of ResourceQuota
     * @param param the request object
     */
    deleteCollectionNamespacedResourceQuotaWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedResourceQuotaWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of ResourceQuota
     * @param param the request object
     */
    deleteCollectionNamespacedResourceQuota(param, options) {
        return this.api.deleteCollectionNamespacedResourceQuota(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Secret
     * @param param the request object
     */
    deleteCollectionNamespacedSecretWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedSecretWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Secret
     * @param param the request object
     */
    deleteCollectionNamespacedSecret(param, options) {
        return this.api.deleteCollectionNamespacedSecret(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of ServiceAccount
     * @param param the request object
     */
    deleteCollectionNamespacedServiceAccountWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedServiceAccountWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of ServiceAccount
     * @param param the request object
     */
    deleteCollectionNamespacedServiceAccount(param, options) {
        return this.api.deleteCollectionNamespacedServiceAccount(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Node
     * @param param the request object
     */
    deleteCollectionNodeWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionNodeWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Node
     * @param param the request object
     */
    deleteCollectionNode(param = {}, options) {
        return this.api.deleteCollectionNode(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of PersistentVolume
     * @param param the request object
     */
    deleteCollectionPersistentVolumeWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionPersistentVolumeWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of PersistentVolume
     * @param param the request object
     */
    deleteCollectionPersistentVolume(param = {}, options) {
        return this.api.deleteCollectionPersistentVolume(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a Namespace
     * @param param the request object
     */
    deleteNamespaceWithHttpInfo(param, options) {
        return this.api.deleteNamespaceWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a Namespace
     * @param param the request object
     */
    deleteNamespace(param, options) {
        return this.api.deleteNamespace(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a ConfigMap
     * @param param the request object
     */
    deleteNamespacedConfigMapWithHttpInfo(param, options) {
        return this.api.deleteNamespacedConfigMapWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a ConfigMap
     * @param param the request object
     */
    deleteNamespacedConfigMap(param, options) {
        return this.api.deleteNamespacedConfigMap(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete Endpoints
     * @param param the request object
     */
    deleteNamespacedEndpointsWithHttpInfo(param, options) {
        return this.api.deleteNamespacedEndpointsWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete Endpoints
     * @param param the request object
     */
    deleteNamespacedEndpoints(param, options) {
        return this.api.deleteNamespacedEndpoints(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete an Event
     * @param param the request object
     */
    deleteNamespacedEventWithHttpInfo(param, options) {
        return this.api.deleteNamespacedEventWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete an Event
     * @param param the request object
     */
    deleteNamespacedEvent(param, options) {
        return this.api.deleteNamespacedEvent(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a LimitRange
     * @param param the request object
     */
    deleteNamespacedLimitRangeWithHttpInfo(param, options) {
        return this.api.deleteNamespacedLimitRangeWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a LimitRange
     * @param param the request object
     */
    deleteNamespacedLimitRange(param, options) {
        return this.api.deleteNamespacedLimitRange(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a PersistentVolumeClaim
     * @param param the request object
     */
    deleteNamespacedPersistentVolumeClaimWithHttpInfo(param, options) {
        return this.api.deleteNamespacedPersistentVolumeClaimWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a PersistentVolumeClaim
     * @param param the request object
     */
    deleteNamespacedPersistentVolumeClaim(param, options) {
        return this.api.deleteNamespacedPersistentVolumeClaim(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a Pod
     * @param param the request object
     */
    deleteNamespacedPodWithHttpInfo(param, options) {
        return this.api.deleteNamespacedPodWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a Pod
     * @param param the request object
     */
    deleteNamespacedPod(param, options) {
        return this.api.deleteNamespacedPod(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a PodTemplate
     * @param param the request object
     */
    deleteNamespacedPodTemplateWithHttpInfo(param, options) {
        return this.api.deleteNamespacedPodTemplateWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a PodTemplate
     * @param param the request object
     */
    deleteNamespacedPodTemplate(param, options) {
        return this.api.deleteNamespacedPodTemplate(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a ReplicationController
     * @param param the request object
     */
    deleteNamespacedReplicationControllerWithHttpInfo(param, options) {
        return this.api.deleteNamespacedReplicationControllerWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a ReplicationController
     * @param param the request object
     */
    deleteNamespacedReplicationController(param, options) {
        return this.api.deleteNamespacedReplicationController(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a ResourceQuota
     * @param param the request object
     */
    deleteNamespacedResourceQuotaWithHttpInfo(param, options) {
        return this.api.deleteNamespacedResourceQuotaWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a ResourceQuota
     * @param param the request object
     */
    deleteNamespacedResourceQuota(param, options) {
        return this.api.deleteNamespacedResourceQuota(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a Secret
     * @param param the request object
     */
    deleteNamespacedSecretWithHttpInfo(param, options) {
        return this.api.deleteNamespacedSecretWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a Secret
     * @param param the request object
     */
    deleteNamespacedSecret(param, options) {
        return this.api.deleteNamespacedSecret(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a Service
     * @param param the request object
     */
    deleteNamespacedServiceWithHttpInfo(param, options) {
        return this.api.deleteNamespacedServiceWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a Service
     * @param param the request object
     */
    deleteNamespacedService(param, options) {
        return this.api.deleteNamespacedService(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a ServiceAccount
     * @param param the request object
     */
    deleteNamespacedServiceAccountWithHttpInfo(param, options) {
        return this.api.deleteNamespacedServiceAccountWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a ServiceAccount
     * @param param the request object
     */
    deleteNamespacedServiceAccount(param, options) {
        return this.api.deleteNamespacedServiceAccount(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a Node
     * @param param the request object
     */
    deleteNodeWithHttpInfo(param, options) {
        return this.api.deleteNodeWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a Node
     * @param param the request object
     */
    deleteNode(param, options) {
        return this.api.deleteNode(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a PersistentVolume
     * @param param the request object
     */
    deletePersistentVolumeWithHttpInfo(param, options) {
        return this.api.deletePersistentVolumeWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a PersistentVolume
     * @param param the request object
     */
    deletePersistentVolume(param, options) {
        return this.api.deletePersistentVolume(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list objects of kind ComponentStatus
     * @param param the request object
     */
    listComponentStatusWithHttpInfo(param = {}, options) {
        return this.api.listComponentStatusWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list objects of kind ComponentStatus
     * @param param the request object
     */
    listComponentStatus(param = {}, options) {
        return this.api.listComponentStatus(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ConfigMap
     * @param param the request object
     */
    listConfigMapForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listConfigMapForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ConfigMap
     * @param param the request object
     */
    listConfigMapForAllNamespaces(param = {}, options) {
        return this.api.listConfigMapForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Endpoints
     * @param param the request object
     */
    listEndpointsForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listEndpointsForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Endpoints
     * @param param the request object
     */
    listEndpointsForAllNamespaces(param = {}, options) {
        return this.api.listEndpointsForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Event
     * @param param the request object
     */
    listEventForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listEventForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Event
     * @param param the request object
     */
    listEventForAllNamespaces(param = {}, options) {
        return this.api.listEventForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind LimitRange
     * @param param the request object
     */
    listLimitRangeForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listLimitRangeForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind LimitRange
     * @param param the request object
     */
    listLimitRangeForAllNamespaces(param = {}, options) {
        return this.api.listLimitRangeForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Namespace
     * @param param the request object
     */
    listNamespaceWithHttpInfo(param = {}, options) {
        return this.api.listNamespaceWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Namespace
     * @param param the request object
     */
    listNamespace(param = {}, options) {
        return this.api.listNamespace(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ConfigMap
     * @param param the request object
     */
    listNamespacedConfigMapWithHttpInfo(param, options) {
        return this.api.listNamespacedConfigMapWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ConfigMap
     * @param param the request object
     */
    listNamespacedConfigMap(param, options) {
        return this.api.listNamespacedConfigMap(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Endpoints
     * @param param the request object
     */
    listNamespacedEndpointsWithHttpInfo(param, options) {
        return this.api.listNamespacedEndpointsWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Endpoints
     * @param param the request object
     */
    listNamespacedEndpoints(param, options) {
        return this.api.listNamespacedEndpoints(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Event
     * @param param the request object
     */
    listNamespacedEventWithHttpInfo(param, options) {
        return this.api.listNamespacedEventWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Event
     * @param param the request object
     */
    listNamespacedEvent(param, options) {
        return this.api.listNamespacedEvent(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind LimitRange
     * @param param the request object
     */
    listNamespacedLimitRangeWithHttpInfo(param, options) {
        return this.api.listNamespacedLimitRangeWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind LimitRange
     * @param param the request object
     */
    listNamespacedLimitRange(param, options) {
        return this.api.listNamespacedLimitRange(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PersistentVolumeClaim
     * @param param the request object
     */
    listNamespacedPersistentVolumeClaimWithHttpInfo(param, options) {
        return this.api.listNamespacedPersistentVolumeClaimWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PersistentVolumeClaim
     * @param param the request object
     */
    listNamespacedPersistentVolumeClaim(param, options) {
        return this.api.listNamespacedPersistentVolumeClaim(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Pod
     * @param param the request object
     */
    listNamespacedPodWithHttpInfo(param, options) {
        return this.api.listNamespacedPodWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Pod
     * @param param the request object
     */
    listNamespacedPod(param, options) {
        return this.api.listNamespacedPod(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PodTemplate
     * @param param the request object
     */
    listNamespacedPodTemplateWithHttpInfo(param, options) {
        return this.api.listNamespacedPodTemplateWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PodTemplate
     * @param param the request object
     */
    listNamespacedPodTemplate(param, options) {
        return this.api.listNamespacedPodTemplate(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ReplicationController
     * @param param the request object
     */
    listNamespacedReplicationControllerWithHttpInfo(param, options) {
        return this.api.listNamespacedReplicationControllerWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ReplicationController
     * @param param the request object
     */
    listNamespacedReplicationController(param, options) {
        return this.api.listNamespacedReplicationController(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ResourceQuota
     * @param param the request object
     */
    listNamespacedResourceQuotaWithHttpInfo(param, options) {
        return this.api.listNamespacedResourceQuotaWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ResourceQuota
     * @param param the request object
     */
    listNamespacedResourceQuota(param, options) {
        return this.api.listNamespacedResourceQuota(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Secret
     * @param param the request object
     */
    listNamespacedSecretWithHttpInfo(param, options) {
        return this.api.listNamespacedSecretWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Secret
     * @param param the request object
     */
    listNamespacedSecret(param, options) {
        return this.api.listNamespacedSecret(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Service
     * @param param the request object
     */
    listNamespacedServiceWithHttpInfo(param, options) {
        return this.api.listNamespacedServiceWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Service
     * @param param the request object
     */
    listNamespacedService(param, options) {
        return this.api.listNamespacedService(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ServiceAccount
     * @param param the request object
     */
    listNamespacedServiceAccountWithHttpInfo(param, options) {
        return this.api.listNamespacedServiceAccountWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ServiceAccount
     * @param param the request object
     */
    listNamespacedServiceAccount(param, options) {
        return this.api.listNamespacedServiceAccount(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Node
     * @param param the request object
     */
    listNodeWithHttpInfo(param = {}, options) {
        return this.api.listNodeWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Node
     * @param param the request object
     */
    listNode(param = {}, options) {
        return this.api.listNode(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PersistentVolume
     * @param param the request object
     */
    listPersistentVolumeWithHttpInfo(param = {}, options) {
        return this.api.listPersistentVolumeWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PersistentVolume
     * @param param the request object
     */
    listPersistentVolume(param = {}, options) {
        return this.api.listPersistentVolume(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PersistentVolumeClaim
     * @param param the request object
     */
    listPersistentVolumeClaimForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listPersistentVolumeClaimForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PersistentVolumeClaim
     * @param param the request object
     */
    listPersistentVolumeClaimForAllNamespaces(param = {}, options) {
        return this.api.listPersistentVolumeClaimForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Pod
     * @param param the request object
     */
    listPodForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listPodForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Pod
     * @param param the request object
     */
    listPodForAllNamespaces(param = {}, options) {
        return this.api.listPodForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PodTemplate
     * @param param the request object
     */
    listPodTemplateForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listPodTemplateForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PodTemplate
     * @param param the request object
     */
    listPodTemplateForAllNamespaces(param = {}, options) {
        return this.api.listPodTemplateForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ReplicationController
     * @param param the request object
     */
    listReplicationControllerForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listReplicationControllerForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ReplicationController
     * @param param the request object
     */
    listReplicationControllerForAllNamespaces(param = {}, options) {
        return this.api.listReplicationControllerForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ResourceQuota
     * @param param the request object
     */
    listResourceQuotaForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listResourceQuotaForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ResourceQuota
     * @param param the request object
     */
    listResourceQuotaForAllNamespaces(param = {}, options) {
        return this.api.listResourceQuotaForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Secret
     * @param param the request object
     */
    listSecretForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listSecretForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Secret
     * @param param the request object
     */
    listSecretForAllNamespaces(param = {}, options) {
        return this.api.listSecretForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ServiceAccount
     * @param param the request object
     */
    listServiceAccountForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listServiceAccountForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ServiceAccount
     * @param param the request object
     */
    listServiceAccountForAllNamespaces(param = {}, options) {
        return this.api.listServiceAccountForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Service
     * @param param the request object
     */
    listServiceForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listServiceForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Service
     * @param param the request object
     */
    listServiceForAllNamespaces(param = {}, options) {
        return this.api.listServiceForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified Namespace
     * @param param the request object
     */
    patchNamespaceWithHttpInfo(param, options) {
        return this.api.patchNamespaceWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Namespace
     * @param param the request object
     */
    patchNamespace(param, options) {
        return this.api.patchNamespace(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified Namespace
     * @param param the request object
     */
    patchNamespaceStatusWithHttpInfo(param, options) {
        return this.api.patchNamespaceStatusWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified Namespace
     * @param param the request object
     */
    patchNamespaceStatus(param, options) {
        return this.api.patchNamespaceStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified ConfigMap
     * @param param the request object
     */
    patchNamespacedConfigMapWithHttpInfo(param, options) {
        return this.api.patchNamespacedConfigMapWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified ConfigMap
     * @param param the request object
     */
    patchNamespacedConfigMap(param, options) {
        return this.api.patchNamespacedConfigMap(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Endpoints
     * @param param the request object
     */
    patchNamespacedEndpointsWithHttpInfo(param, options) {
        return this.api.patchNamespacedEndpointsWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Endpoints
     * @param param the request object
     */
    patchNamespacedEndpoints(param, options) {
        return this.api.patchNamespacedEndpoints(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Event
     * @param param the request object
     */
    patchNamespacedEventWithHttpInfo(param, options) {
        return this.api.patchNamespacedEventWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Event
     * @param param the request object
     */
    patchNamespacedEvent(param, options) {
        return this.api.patchNamespacedEvent(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified LimitRange
     * @param param the request object
     */
    patchNamespacedLimitRangeWithHttpInfo(param, options) {
        return this.api.patchNamespacedLimitRangeWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified LimitRange
     * @param param the request object
     */
    patchNamespacedLimitRange(param, options) {
        return this.api.patchNamespacedLimitRange(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified PersistentVolumeClaim
     * @param param the request object
     */
    patchNamespacedPersistentVolumeClaimWithHttpInfo(param, options) {
        return this.api.patchNamespacedPersistentVolumeClaimWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified PersistentVolumeClaim
     * @param param the request object
     */
    patchNamespacedPersistentVolumeClaim(param, options) {
        return this.api.patchNamespacedPersistentVolumeClaim(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified PersistentVolumeClaim
     * @param param the request object
     */
    patchNamespacedPersistentVolumeClaimStatusWithHttpInfo(param, options) {
        return this.api.patchNamespacedPersistentVolumeClaimStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified PersistentVolumeClaim
     * @param param the request object
     */
    patchNamespacedPersistentVolumeClaimStatus(param, options) {
        return this.api.patchNamespacedPersistentVolumeClaimStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Pod
     * @param param the request object
     */
    patchNamespacedPodWithHttpInfo(param, options) {
        return this.api.patchNamespacedPodWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Pod
     * @param param the request object
     */
    patchNamespacedPod(param, options) {
        return this.api.patchNamespacedPod(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update ephemeralcontainers of the specified Pod
     * @param param the request object
     */
    patchNamespacedPodEphemeralcontainersWithHttpInfo(param, options) {
        return this.api.patchNamespacedPodEphemeralcontainersWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update ephemeralcontainers of the specified Pod
     * @param param the request object
     */
    patchNamespacedPodEphemeralcontainers(param, options) {
        return this.api.patchNamespacedPodEphemeralcontainers(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified Pod
     * @param param the request object
     */
    patchNamespacedPodStatusWithHttpInfo(param, options) {
        return this.api.patchNamespacedPodStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified Pod
     * @param param the request object
     */
    patchNamespacedPodStatus(param, options) {
        return this.api.patchNamespacedPodStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified PodTemplate
     * @param param the request object
     */
    patchNamespacedPodTemplateWithHttpInfo(param, options) {
        return this.api.patchNamespacedPodTemplateWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified PodTemplate
     * @param param the request object
     */
    patchNamespacedPodTemplate(param, options) {
        return this.api.patchNamespacedPodTemplate(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified ReplicationController
     * @param param the request object
     */
    patchNamespacedReplicationControllerWithHttpInfo(param, options) {
        return this.api.patchNamespacedReplicationControllerWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified ReplicationController
     * @param param the request object
     */
    patchNamespacedReplicationController(param, options) {
        return this.api.patchNamespacedReplicationController(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update scale of the specified ReplicationController
     * @param param the request object
     */
    patchNamespacedReplicationControllerScaleWithHttpInfo(param, options) {
        return this.api.patchNamespacedReplicationControllerScaleWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update scale of the specified ReplicationController
     * @param param the request object
     */
    patchNamespacedReplicationControllerScale(param, options) {
        return this.api.patchNamespacedReplicationControllerScale(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified ReplicationController
     * @param param the request object
     */
    patchNamespacedReplicationControllerStatusWithHttpInfo(param, options) {
        return this.api.patchNamespacedReplicationControllerStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified ReplicationController
     * @param param the request object
     */
    patchNamespacedReplicationControllerStatus(param, options) {
        return this.api.patchNamespacedReplicationControllerStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified ResourceQuota
     * @param param the request object
     */
    patchNamespacedResourceQuotaWithHttpInfo(param, options) {
        return this.api.patchNamespacedResourceQuotaWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified ResourceQuota
     * @param param the request object
     */
    patchNamespacedResourceQuota(param, options) {
        return this.api.patchNamespacedResourceQuota(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified ResourceQuota
     * @param param the request object
     */
    patchNamespacedResourceQuotaStatusWithHttpInfo(param, options) {
        return this.api.patchNamespacedResourceQuotaStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified ResourceQuota
     * @param param the request object
     */
    patchNamespacedResourceQuotaStatus(param, options) {
        return this.api.patchNamespacedResourceQuotaStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Secret
     * @param param the request object
     */
    patchNamespacedSecretWithHttpInfo(param, options) {
        return this.api.patchNamespacedSecretWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Secret
     * @param param the request object
     */
    patchNamespacedSecret(param, options) {
        return this.api.patchNamespacedSecret(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Service
     * @param param the request object
     */
    patchNamespacedServiceWithHttpInfo(param, options) {
        return this.api.patchNamespacedServiceWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Service
     * @param param the request object
     */
    patchNamespacedService(param, options) {
        return this.api.patchNamespacedService(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified ServiceAccount
     * @param param the request object
     */
    patchNamespacedServiceAccountWithHttpInfo(param, options) {
        return this.api.patchNamespacedServiceAccountWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified ServiceAccount
     * @param param the request object
     */
    patchNamespacedServiceAccount(param, options) {
        return this.api.patchNamespacedServiceAccount(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified Service
     * @param param the request object
     */
    patchNamespacedServiceStatusWithHttpInfo(param, options) {
        return this.api.patchNamespacedServiceStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified Service
     * @param param the request object
     */
    patchNamespacedServiceStatus(param, options) {
        return this.api.patchNamespacedServiceStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Node
     * @param param the request object
     */
    patchNodeWithHttpInfo(param, options) {
        return this.api.patchNodeWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Node
     * @param param the request object
     */
    patchNode(param, options) {
        return this.api.patchNode(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified Node
     * @param param the request object
     */
    patchNodeStatusWithHttpInfo(param, options) {
        return this.api.patchNodeStatusWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified Node
     * @param param the request object
     */
    patchNodeStatus(param, options) {
        return this.api.patchNodeStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified PersistentVolume
     * @param param the request object
     */
    patchPersistentVolumeWithHttpInfo(param, options) {
        return this.api.patchPersistentVolumeWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified PersistentVolume
     * @param param the request object
     */
    patchPersistentVolume(param, options) {
        return this.api.patchPersistentVolume(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified PersistentVolume
     * @param param the request object
     */
    patchPersistentVolumeStatusWithHttpInfo(param, options) {
        return this.api.patchPersistentVolumeStatusWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified PersistentVolume
     * @param param the request object
     */
    patchPersistentVolumeStatus(param, options) {
        return this.api.patchPersistentVolumeStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified ComponentStatus
     * @param param the request object
     */
    readComponentStatusWithHttpInfo(param, options) {
        return this.api.readComponentStatusWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified ComponentStatus
     * @param param the request object
     */
    readComponentStatus(param, options) {
        return this.api.readComponentStatus(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified Namespace
     * @param param the request object
     */
    readNamespaceWithHttpInfo(param, options) {
        return this.api.readNamespaceWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified Namespace
     * @param param the request object
     */
    readNamespace(param, options) {
        return this.api.readNamespace(param.name, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified Namespace
     * @param param the request object
     */
    readNamespaceStatusWithHttpInfo(param, options) {
        return this.api.readNamespaceStatusWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified Namespace
     * @param param the request object
     */
    readNamespaceStatus(param, options) {
        return this.api.readNamespaceStatus(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified ConfigMap
     * @param param the request object
     */
    readNamespacedConfigMapWithHttpInfo(param, options) {
        return this.api.readNamespacedConfigMapWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified ConfigMap
     * @param param the request object
     */
    readNamespacedConfigMap(param, options) {
        return this.api.readNamespacedConfigMap(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Endpoints
     * @param param the request object
     */
    readNamespacedEndpointsWithHttpInfo(param, options) {
        return this.api.readNamespacedEndpointsWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Endpoints
     * @param param the request object
     */
    readNamespacedEndpoints(param, options) {
        return this.api.readNamespacedEndpoints(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Event
     * @param param the request object
     */
    readNamespacedEventWithHttpInfo(param, options) {
        return this.api.readNamespacedEventWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Event
     * @param param the request object
     */
    readNamespacedEvent(param, options) {
        return this.api.readNamespacedEvent(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified LimitRange
     * @param param the request object
     */
    readNamespacedLimitRangeWithHttpInfo(param, options) {
        return this.api.readNamespacedLimitRangeWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified LimitRange
     * @param param the request object
     */
    readNamespacedLimitRange(param, options) {
        return this.api.readNamespacedLimitRange(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified PersistentVolumeClaim
     * @param param the request object
     */
    readNamespacedPersistentVolumeClaimWithHttpInfo(param, options) {
        return this.api.readNamespacedPersistentVolumeClaimWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified PersistentVolumeClaim
     * @param param the request object
     */
    readNamespacedPersistentVolumeClaim(param, options) {
        return this.api.readNamespacedPersistentVolumeClaim(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified PersistentVolumeClaim
     * @param param the request object
     */
    readNamespacedPersistentVolumeClaimStatusWithHttpInfo(param, options) {
        return this.api.readNamespacedPersistentVolumeClaimStatusWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified PersistentVolumeClaim
     * @param param the request object
     */
    readNamespacedPersistentVolumeClaimStatus(param, options) {
        return this.api.readNamespacedPersistentVolumeClaimStatus(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Pod
     * @param param the request object
     */
    readNamespacedPodWithHttpInfo(param, options) {
        return this.api.readNamespacedPodWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Pod
     * @param param the request object
     */
    readNamespacedPod(param, options) {
        return this.api.readNamespacedPod(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read ephemeralcontainers of the specified Pod
     * @param param the request object
     */
    readNamespacedPodEphemeralcontainersWithHttpInfo(param, options) {
        return this.api.readNamespacedPodEphemeralcontainersWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read ephemeralcontainers of the specified Pod
     * @param param the request object
     */
    readNamespacedPodEphemeralcontainers(param, options) {
        return this.api.readNamespacedPodEphemeralcontainers(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read log of the specified Pod
     * @param param the request object
     */
    readNamespacedPodLogWithHttpInfo(param, options) {
        return this.api.readNamespacedPodLogWithHttpInfo(param.name, param.namespace, param.container, param.follow, param.insecureSkipTLSVerifyBackend, param.limitBytes, param.pretty, param.previous, param.sinceSeconds, param.tailLines, param.timestamps, options).toPromise();
    }
    /**
     * read log of the specified Pod
     * @param param the request object
     */
    readNamespacedPodLog(param, options) {
        return this.api.readNamespacedPodLog(param.name, param.namespace, param.container, param.follow, param.insecureSkipTLSVerifyBackend, param.limitBytes, param.pretty, param.previous, param.sinceSeconds, param.tailLines, param.timestamps, options).toPromise();
    }
    /**
     * read status of the specified Pod
     * @param param the request object
     */
    readNamespacedPodStatusWithHttpInfo(param, options) {
        return this.api.readNamespacedPodStatusWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified Pod
     * @param param the request object
     */
    readNamespacedPodStatus(param, options) {
        return this.api.readNamespacedPodStatus(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified PodTemplate
     * @param param the request object
     */
    readNamespacedPodTemplateWithHttpInfo(param, options) {
        return this.api.readNamespacedPodTemplateWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified PodTemplate
     * @param param the request object
     */
    readNamespacedPodTemplate(param, options) {
        return this.api.readNamespacedPodTemplate(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified ReplicationController
     * @param param the request object
     */
    readNamespacedReplicationControllerWithHttpInfo(param, options) {
        return this.api.readNamespacedReplicationControllerWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified ReplicationController
     * @param param the request object
     */
    readNamespacedReplicationController(param, options) {
        return this.api.readNamespacedReplicationController(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read scale of the specified ReplicationController
     * @param param the request object
     */
    readNamespacedReplicationControllerScaleWithHttpInfo(param, options) {
        return this.api.readNamespacedReplicationControllerScaleWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read scale of the specified ReplicationController
     * @param param the request object
     */
    readNamespacedReplicationControllerScale(param, options) {
        return this.api.readNamespacedReplicationControllerScale(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified ReplicationController
     * @param param the request object
     */
    readNamespacedReplicationControllerStatusWithHttpInfo(param, options) {
        return this.api.readNamespacedReplicationControllerStatusWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified ReplicationController
     * @param param the request object
     */
    readNamespacedReplicationControllerStatus(param, options) {
        return this.api.readNamespacedReplicationControllerStatus(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified ResourceQuota
     * @param param the request object
     */
    readNamespacedResourceQuotaWithHttpInfo(param, options) {
        return this.api.readNamespacedResourceQuotaWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified ResourceQuota
     * @param param the request object
     */
    readNamespacedResourceQuota(param, options) {
        return this.api.readNamespacedResourceQuota(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified ResourceQuota
     * @param param the request object
     */
    readNamespacedResourceQuotaStatusWithHttpInfo(param, options) {
        return this.api.readNamespacedResourceQuotaStatusWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified ResourceQuota
     * @param param the request object
     */
    readNamespacedResourceQuotaStatus(param, options) {
        return this.api.readNamespacedResourceQuotaStatus(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Secret
     * @param param the request object
     */
    readNamespacedSecretWithHttpInfo(param, options) {
        return this.api.readNamespacedSecretWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Secret
     * @param param the request object
     */
    readNamespacedSecret(param, options) {
        return this.api.readNamespacedSecret(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Service
     * @param param the request object
     */
    readNamespacedServiceWithHttpInfo(param, options) {
        return this.api.readNamespacedServiceWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Service
     * @param param the request object
     */
    readNamespacedService(param, options) {
        return this.api.readNamespacedService(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified ServiceAccount
     * @param param the request object
     */
    readNamespacedServiceAccountWithHttpInfo(param, options) {
        return this.api.readNamespacedServiceAccountWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified ServiceAccount
     * @param param the request object
     */
    readNamespacedServiceAccount(param, options) {
        return this.api.readNamespacedServiceAccount(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified Service
     * @param param the request object
     */
    readNamespacedServiceStatusWithHttpInfo(param, options) {
        return this.api.readNamespacedServiceStatusWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified Service
     * @param param the request object
     */
    readNamespacedServiceStatus(param, options) {
        return this.api.readNamespacedServiceStatus(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Node
     * @param param the request object
     */
    readNodeWithHttpInfo(param, options) {
        return this.api.readNodeWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified Node
     * @param param the request object
     */
    readNode(param, options) {
        return this.api.readNode(param.name, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified Node
     * @param param the request object
     */
    readNodeStatusWithHttpInfo(param, options) {
        return this.api.readNodeStatusWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified Node
     * @param param the request object
     */
    readNodeStatus(param, options) {
        return this.api.readNodeStatus(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified PersistentVolume
     * @param param the request object
     */
    readPersistentVolumeWithHttpInfo(param, options) {
        return this.api.readPersistentVolumeWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified PersistentVolume
     * @param param the request object
     */
    readPersistentVolume(param, options) {
        return this.api.readPersistentVolume(param.name, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified PersistentVolume
     * @param param the request object
     */
    readPersistentVolumeStatusWithHttpInfo(param, options) {
        return this.api.readPersistentVolumeStatusWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified PersistentVolume
     * @param param the request object
     */
    readPersistentVolumeStatus(param, options) {
        return this.api.readPersistentVolumeStatus(param.name, param.pretty, options).toPromise();
    }
    /**
     * replace the specified Namespace
     * @param param the request object
     */
    replaceNamespaceWithHttpInfo(param, options) {
        return this.api.replaceNamespaceWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Namespace
     * @param param the request object
     */
    replaceNamespace(param, options) {
        return this.api.replaceNamespace(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace finalize of the specified Namespace
     * @param param the request object
     */
    replaceNamespaceFinalizeWithHttpInfo(param, options) {
        return this.api.replaceNamespaceFinalizeWithHttpInfo(param.name, param.body, param.dryRun, param.fieldManager, param.pretty, options).toPromise();
    }
    /**
     * replace finalize of the specified Namespace
     * @param param the request object
     */
    replaceNamespaceFinalize(param, options) {
        return this.api.replaceNamespaceFinalize(param.name, param.body, param.dryRun, param.fieldManager, param.pretty, options).toPromise();
    }
    /**
     * replace status of the specified Namespace
     * @param param the request object
     */
    replaceNamespaceStatusWithHttpInfo(param, options) {
        return this.api.replaceNamespaceStatusWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified Namespace
     * @param param the request object
     */
    replaceNamespaceStatus(param, options) {
        return this.api.replaceNamespaceStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified ConfigMap
     * @param param the request object
     */
    replaceNamespacedConfigMapWithHttpInfo(param, options) {
        return this.api.replaceNamespacedConfigMapWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified ConfigMap
     * @param param the request object
     */
    replaceNamespacedConfigMap(param, options) {
        return this.api.replaceNamespacedConfigMap(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Endpoints
     * @param param the request object
     */
    replaceNamespacedEndpointsWithHttpInfo(param, options) {
        return this.api.replaceNamespacedEndpointsWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Endpoints
     * @param param the request object
     */
    replaceNamespacedEndpoints(param, options) {
        return this.api.replaceNamespacedEndpoints(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Event
     * @param param the request object
     */
    replaceNamespacedEventWithHttpInfo(param, options) {
        return this.api.replaceNamespacedEventWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Event
     * @param param the request object
     */
    replaceNamespacedEvent(param, options) {
        return this.api.replaceNamespacedEvent(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified LimitRange
     * @param param the request object
     */
    replaceNamespacedLimitRangeWithHttpInfo(param, options) {
        return this.api.replaceNamespacedLimitRangeWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified LimitRange
     * @param param the request object
     */
    replaceNamespacedLimitRange(param, options) {
        return this.api.replaceNamespacedLimitRange(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified PersistentVolumeClaim
     * @param param the request object
     */
    replaceNamespacedPersistentVolumeClaimWithHttpInfo(param, options) {
        return this.api.replaceNamespacedPersistentVolumeClaimWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified PersistentVolumeClaim
     * @param param the request object
     */
    replaceNamespacedPersistentVolumeClaim(param, options) {
        return this.api.replaceNamespacedPersistentVolumeClaim(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified PersistentVolumeClaim
     * @param param the request object
     */
    replaceNamespacedPersistentVolumeClaimStatusWithHttpInfo(param, options) {
        return this.api.replaceNamespacedPersistentVolumeClaimStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified PersistentVolumeClaim
     * @param param the request object
     */
    replaceNamespacedPersistentVolumeClaimStatus(param, options) {
        return this.api.replaceNamespacedPersistentVolumeClaimStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Pod
     * @param param the request object
     */
    replaceNamespacedPodWithHttpInfo(param, options) {
        return this.api.replaceNamespacedPodWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Pod
     * @param param the request object
     */
    replaceNamespacedPod(param, options) {
        return this.api.replaceNamespacedPod(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace ephemeralcontainers of the specified Pod
     * @param param the request object
     */
    replaceNamespacedPodEphemeralcontainersWithHttpInfo(param, options) {
        return this.api.replaceNamespacedPodEphemeralcontainersWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace ephemeralcontainers of the specified Pod
     * @param param the request object
     */
    replaceNamespacedPodEphemeralcontainers(param, options) {
        return this.api.replaceNamespacedPodEphemeralcontainers(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified Pod
     * @param param the request object
     */
    replaceNamespacedPodStatusWithHttpInfo(param, options) {
        return this.api.replaceNamespacedPodStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified Pod
     * @param param the request object
     */
    replaceNamespacedPodStatus(param, options) {
        return this.api.replaceNamespacedPodStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified PodTemplate
     * @param param the request object
     */
    replaceNamespacedPodTemplateWithHttpInfo(param, options) {
        return this.api.replaceNamespacedPodTemplateWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified PodTemplate
     * @param param the request object
     */
    replaceNamespacedPodTemplate(param, options) {
        return this.api.replaceNamespacedPodTemplate(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified ReplicationController
     * @param param the request object
     */
    replaceNamespacedReplicationControllerWithHttpInfo(param, options) {
        return this.api.replaceNamespacedReplicationControllerWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified ReplicationController
     * @param param the request object
     */
    replaceNamespacedReplicationController(param, options) {
        return this.api.replaceNamespacedReplicationController(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace scale of the specified ReplicationController
     * @param param the request object
     */
    replaceNamespacedReplicationControllerScaleWithHttpInfo(param, options) {
        return this.api.replaceNamespacedReplicationControllerScaleWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace scale of the specified ReplicationController
     * @param param the request object
     */
    replaceNamespacedReplicationControllerScale(param, options) {
        return this.api.replaceNamespacedReplicationControllerScale(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified ReplicationController
     * @param param the request object
     */
    replaceNamespacedReplicationControllerStatusWithHttpInfo(param, options) {
        return this.api.replaceNamespacedReplicationControllerStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified ReplicationController
     * @param param the request object
     */
    replaceNamespacedReplicationControllerStatus(param, options) {
        return this.api.replaceNamespacedReplicationControllerStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified ResourceQuota
     * @param param the request object
     */
    replaceNamespacedResourceQuotaWithHttpInfo(param, options) {
        return this.api.replaceNamespacedResourceQuotaWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified ResourceQuota
     * @param param the request object
     */
    replaceNamespacedResourceQuota(param, options) {
        return this.api.replaceNamespacedResourceQuota(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified ResourceQuota
     * @param param the request object
     */
    replaceNamespacedResourceQuotaStatusWithHttpInfo(param, options) {
        return this.api.replaceNamespacedResourceQuotaStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified ResourceQuota
     * @param param the request object
     */
    replaceNamespacedResourceQuotaStatus(param, options) {
        return this.api.replaceNamespacedResourceQuotaStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Secret
     * @param param the request object
     */
    replaceNamespacedSecretWithHttpInfo(param, options) {
        return this.api.replaceNamespacedSecretWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Secret
     * @param param the request object
     */
    replaceNamespacedSecret(param, options) {
        return this.api.replaceNamespacedSecret(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Service
     * @param param the request object
     */
    replaceNamespacedServiceWithHttpInfo(param, options) {
        return this.api.replaceNamespacedServiceWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Service
     * @param param the request object
     */
    replaceNamespacedService(param, options) {
        return this.api.replaceNamespacedService(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified ServiceAccount
     * @param param the request object
     */
    replaceNamespacedServiceAccountWithHttpInfo(param, options) {
        return this.api.replaceNamespacedServiceAccountWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified ServiceAccount
     * @param param the request object
     */
    replaceNamespacedServiceAccount(param, options) {
        return this.api.replaceNamespacedServiceAccount(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified Service
     * @param param the request object
     */
    replaceNamespacedServiceStatusWithHttpInfo(param, options) {
        return this.api.replaceNamespacedServiceStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified Service
     * @param param the request object
     */
    replaceNamespacedServiceStatus(param, options) {
        return this.api.replaceNamespacedServiceStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Node
     * @param param the request object
     */
    replaceNodeWithHttpInfo(param, options) {
        return this.api.replaceNodeWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Node
     * @param param the request object
     */
    replaceNode(param, options) {
        return this.api.replaceNode(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified Node
     * @param param the request object
     */
    replaceNodeStatusWithHttpInfo(param, options) {
        return this.api.replaceNodeStatusWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified Node
     * @param param the request object
     */
    replaceNodeStatus(param, options) {
        return this.api.replaceNodeStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified PersistentVolume
     * @param param the request object
     */
    replacePersistentVolumeWithHttpInfo(param, options) {
        return this.api.replacePersistentVolumeWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified PersistentVolume
     * @param param the request object
     */
    replacePersistentVolume(param, options) {
        return this.api.replacePersistentVolume(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified PersistentVolume
     * @param param the request object
     */
    replacePersistentVolumeStatusWithHttpInfo(param, options) {
        return this.api.replacePersistentVolumeStatusWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified PersistentVolume
     * @param param the request object
     */
    replacePersistentVolumeStatus(param, options) {
        return this.api.replacePersistentVolumeStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectCoreV1Api = ObjectCoreV1Api;
const ObservableAPI_27 = require("./ObservableAPI");
class ObjectCustomObjectsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_27.ObservableCustomObjectsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Creates a cluster scoped Custom object
     * @param param the request object
     */
    createClusterCustomObjectWithHttpInfo(param, options) {
        return this.api.createClusterCustomObjectWithHttpInfo(param.group, param.version, param.plural, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * Creates a cluster scoped Custom object
     * @param param the request object
     */
    createClusterCustomObject(param, options) {
        return this.api.createClusterCustomObject(param.group, param.version, param.plural, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * Creates a namespace scoped Custom object
     * @param param the request object
     */
    createNamespacedCustomObjectWithHttpInfo(param, options) {
        return this.api.createNamespacedCustomObjectWithHttpInfo(param.group, param.version, param.namespace, param.plural, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * Creates a namespace scoped Custom object
     * @param param the request object
     */
    createNamespacedCustomObject(param, options) {
        return this.api.createNamespacedCustomObject(param.group, param.version, param.namespace, param.plural, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * Deletes the specified cluster scoped custom object
     * @param param the request object
     */
    deleteClusterCustomObjectWithHttpInfo(param, options) {
        return this.api.deleteClusterCustomObjectWithHttpInfo(param.group, param.version, param.plural, param.name, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.dryRun, param.body, options).toPromise();
    }
    /**
     * Deletes the specified cluster scoped custom object
     * @param param the request object
     */
    deleteClusterCustomObject(param, options) {
        return this.api.deleteClusterCustomObject(param.group, param.version, param.plural, param.name, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.dryRun, param.body, options).toPromise();
    }
    /**
     * Delete collection of cluster scoped custom objects
     * @param param the request object
     */
    deleteCollectionClusterCustomObjectWithHttpInfo(param, options) {
        return this.api.deleteCollectionClusterCustomObjectWithHttpInfo(param.group, param.version, param.plural, param.pretty, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.dryRun, param.body, options).toPromise();
    }
    /**
     * Delete collection of cluster scoped custom objects
     * @param param the request object
     */
    deleteCollectionClusterCustomObject(param, options) {
        return this.api.deleteCollectionClusterCustomObject(param.group, param.version, param.plural, param.pretty, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.dryRun, param.body, options).toPromise();
    }
    /**
     * Delete collection of namespace scoped custom objects
     * @param param the request object
     */
    deleteCollectionNamespacedCustomObjectWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedCustomObjectWithHttpInfo(param.group, param.version, param.namespace, param.plural, param.pretty, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.dryRun, param.body, options).toPromise();
    }
    /**
     * Delete collection of namespace scoped custom objects
     * @param param the request object
     */
    deleteCollectionNamespacedCustomObject(param, options) {
        return this.api.deleteCollectionNamespacedCustomObject(param.group, param.version, param.namespace, param.plural, param.pretty, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.dryRun, param.body, options).toPromise();
    }
    /**
     * Deletes the specified namespace scoped custom object
     * @param param the request object
     */
    deleteNamespacedCustomObjectWithHttpInfo(param, options) {
        return this.api.deleteNamespacedCustomObjectWithHttpInfo(param.group, param.version, param.namespace, param.plural, param.name, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.dryRun, param.body, options).toPromise();
    }
    /**
     * Deletes the specified namespace scoped custom object
     * @param param the request object
     */
    deleteNamespacedCustomObject(param, options) {
        return this.api.deleteNamespacedCustomObject(param.group, param.version, param.namespace, param.plural, param.name, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.dryRun, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param, options) {
        return this.api.getAPIResourcesWithHttpInfo(param.group, param.version, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param, options) {
        return this.api.getAPIResources(param.group, param.version, options).toPromise();
    }
    /**
     * Returns a cluster scoped custom object
     * @param param the request object
     */
    getClusterCustomObjectWithHttpInfo(param, options) {
        return this.api.getClusterCustomObjectWithHttpInfo(param.group, param.version, param.plural, param.name, options).toPromise();
    }
    /**
     * Returns a cluster scoped custom object
     * @param param the request object
     */
    getClusterCustomObject(param, options) {
        return this.api.getClusterCustomObject(param.group, param.version, param.plural, param.name, options).toPromise();
    }
    /**
     * read scale of the specified custom object
     * @param param the request object
     */
    getClusterCustomObjectScaleWithHttpInfo(param, options) {
        return this.api.getClusterCustomObjectScaleWithHttpInfo(param.group, param.version, param.plural, param.name, options).toPromise();
    }
    /**
     * read scale of the specified custom object
     * @param param the request object
     */
    getClusterCustomObjectScale(param, options) {
        return this.api.getClusterCustomObjectScale(param.group, param.version, param.plural, param.name, options).toPromise();
    }
    /**
     * read status of the specified cluster scoped custom object
     * @param param the request object
     */
    getClusterCustomObjectStatusWithHttpInfo(param, options) {
        return this.api.getClusterCustomObjectStatusWithHttpInfo(param.group, param.version, param.plural, param.name, options).toPromise();
    }
    /**
     * read status of the specified cluster scoped custom object
     * @param param the request object
     */
    getClusterCustomObjectStatus(param, options) {
        return this.api.getClusterCustomObjectStatus(param.group, param.version, param.plural, param.name, options).toPromise();
    }
    /**
     * Returns a namespace scoped custom object
     * @param param the request object
     */
    getNamespacedCustomObjectWithHttpInfo(param, options) {
        return this.api.getNamespacedCustomObjectWithHttpInfo(param.group, param.version, param.namespace, param.plural, param.name, options).toPromise();
    }
    /**
     * Returns a namespace scoped custom object
     * @param param the request object
     */
    getNamespacedCustomObject(param, options) {
        return this.api.getNamespacedCustomObject(param.group, param.version, param.namespace, param.plural, param.name, options).toPromise();
    }
    /**
     * read scale of the specified namespace scoped custom object
     * @param param the request object
     */
    getNamespacedCustomObjectScaleWithHttpInfo(param, options) {
        return this.api.getNamespacedCustomObjectScaleWithHttpInfo(param.group, param.version, param.namespace, param.plural, param.name, options).toPromise();
    }
    /**
     * read scale of the specified namespace scoped custom object
     * @param param the request object
     */
    getNamespacedCustomObjectScale(param, options) {
        return this.api.getNamespacedCustomObjectScale(param.group, param.version, param.namespace, param.plural, param.name, options).toPromise();
    }
    /**
     * read status of the specified namespace scoped custom object
     * @param param the request object
     */
    getNamespacedCustomObjectStatusWithHttpInfo(param, options) {
        return this.api.getNamespacedCustomObjectStatusWithHttpInfo(param.group, param.version, param.namespace, param.plural, param.name, options).toPromise();
    }
    /**
     * read status of the specified namespace scoped custom object
     * @param param the request object
     */
    getNamespacedCustomObjectStatus(param, options) {
        return this.api.getNamespacedCustomObjectStatus(param.group, param.version, param.namespace, param.plural, param.name, options).toPromise();
    }
    /**
     * list or watch cluster scoped custom objects
     * @param param the request object
     */
    listClusterCustomObjectWithHttpInfo(param, options) {
        return this.api.listClusterCustomObjectWithHttpInfo(param.group, param.version, param.plural, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch cluster scoped custom objects
     * @param param the request object
     */
    listClusterCustomObject(param, options) {
        return this.api.listClusterCustomObject(param.group, param.version, param.plural, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch namespace scoped custom objects
     * @param param the request object
     */
    listNamespacedCustomObjectWithHttpInfo(param, options) {
        return this.api.listNamespacedCustomObjectWithHttpInfo(param.group, param.version, param.namespace, param.plural, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch namespace scoped custom objects
     * @param param the request object
     */
    listNamespacedCustomObject(param, options) {
        return this.api.listNamespacedCustomObject(param.group, param.version, param.namespace, param.plural, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * patch the specified cluster scoped custom object
     * @param param the request object
     */
    patchClusterCustomObjectWithHttpInfo(param, options) {
        return this.api.patchClusterCustomObjectWithHttpInfo(param.group, param.version, param.plural, param.name, param.body, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * patch the specified cluster scoped custom object
     * @param param the request object
     */
    patchClusterCustomObject(param, options) {
        return this.api.patchClusterCustomObject(param.group, param.version, param.plural, param.name, param.body, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update scale of the specified cluster scoped custom object
     * @param param the request object
     */
    patchClusterCustomObjectScaleWithHttpInfo(param, options) {
        return this.api.patchClusterCustomObjectScaleWithHttpInfo(param.group, param.version, param.plural, param.name, param.body, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update scale of the specified cluster scoped custom object
     * @param param the request object
     */
    patchClusterCustomObjectScale(param, options) {
        return this.api.patchClusterCustomObjectScale(param.group, param.version, param.plural, param.name, param.body, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified cluster scoped custom object
     * @param param the request object
     */
    patchClusterCustomObjectStatusWithHttpInfo(param, options) {
        return this.api.patchClusterCustomObjectStatusWithHttpInfo(param.group, param.version, param.plural, param.name, param.body, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified cluster scoped custom object
     * @param param the request object
     */
    patchClusterCustomObjectStatus(param, options) {
        return this.api.patchClusterCustomObjectStatus(param.group, param.version, param.plural, param.name, param.body, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * patch the specified namespace scoped custom object
     * @param param the request object
     */
    patchNamespacedCustomObjectWithHttpInfo(param, options) {
        return this.api.patchNamespacedCustomObjectWithHttpInfo(param.group, param.version, param.namespace, param.plural, param.name, param.body, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * patch the specified namespace scoped custom object
     * @param param the request object
     */
    patchNamespacedCustomObject(param, options) {
        return this.api.patchNamespacedCustomObject(param.group, param.version, param.namespace, param.plural, param.name, param.body, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update scale of the specified namespace scoped custom object
     * @param param the request object
     */
    patchNamespacedCustomObjectScaleWithHttpInfo(param, options) {
        return this.api.patchNamespacedCustomObjectScaleWithHttpInfo(param.group, param.version, param.namespace, param.plural, param.name, param.body, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update scale of the specified namespace scoped custom object
     * @param param the request object
     */
    patchNamespacedCustomObjectScale(param, options) {
        return this.api.patchNamespacedCustomObjectScale(param.group, param.version, param.namespace, param.plural, param.name, param.body, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified namespace scoped custom object
     * @param param the request object
     */
    patchNamespacedCustomObjectStatusWithHttpInfo(param, options) {
        return this.api.patchNamespacedCustomObjectStatusWithHttpInfo(param.group, param.version, param.namespace, param.plural, param.name, param.body, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified namespace scoped custom object
     * @param param the request object
     */
    patchNamespacedCustomObjectStatus(param, options) {
        return this.api.patchNamespacedCustomObjectStatus(param.group, param.version, param.namespace, param.plural, param.name, param.body, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * replace the specified cluster scoped custom object
     * @param param the request object
     */
    replaceClusterCustomObjectWithHttpInfo(param, options) {
        return this.api.replaceClusterCustomObjectWithHttpInfo(param.group, param.version, param.plural, param.name, param.body, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified cluster scoped custom object
     * @param param the request object
     */
    replaceClusterCustomObject(param, options) {
        return this.api.replaceClusterCustomObject(param.group, param.version, param.plural, param.name, param.body, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace scale of the specified cluster scoped custom object
     * @param param the request object
     */
    replaceClusterCustomObjectScaleWithHttpInfo(param, options) {
        return this.api.replaceClusterCustomObjectScaleWithHttpInfo(param.group, param.version, param.plural, param.name, param.body, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace scale of the specified cluster scoped custom object
     * @param param the request object
     */
    replaceClusterCustomObjectScale(param, options) {
        return this.api.replaceClusterCustomObjectScale(param.group, param.version, param.plural, param.name, param.body, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the cluster scoped specified custom object
     * @param param the request object
     */
    replaceClusterCustomObjectStatusWithHttpInfo(param, options) {
        return this.api.replaceClusterCustomObjectStatusWithHttpInfo(param.group, param.version, param.plural, param.name, param.body, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the cluster scoped specified custom object
     * @param param the request object
     */
    replaceClusterCustomObjectStatus(param, options) {
        return this.api.replaceClusterCustomObjectStatus(param.group, param.version, param.plural, param.name, param.body, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified namespace scoped custom object
     * @param param the request object
     */
    replaceNamespacedCustomObjectWithHttpInfo(param, options) {
        return this.api.replaceNamespacedCustomObjectWithHttpInfo(param.group, param.version, param.namespace, param.plural, param.name, param.body, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified namespace scoped custom object
     * @param param the request object
     */
    replaceNamespacedCustomObject(param, options) {
        return this.api.replaceNamespacedCustomObject(param.group, param.version, param.namespace, param.plural, param.name, param.body, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace scale of the specified namespace scoped custom object
     * @param param the request object
     */
    replaceNamespacedCustomObjectScaleWithHttpInfo(param, options) {
        return this.api.replaceNamespacedCustomObjectScaleWithHttpInfo(param.group, param.version, param.namespace, param.plural, param.name, param.body, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace scale of the specified namespace scoped custom object
     * @param param the request object
     */
    replaceNamespacedCustomObjectScale(param, options) {
        return this.api.replaceNamespacedCustomObjectScale(param.group, param.version, param.namespace, param.plural, param.name, param.body, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified namespace scoped custom object
     * @param param the request object
     */
    replaceNamespacedCustomObjectStatusWithHttpInfo(param, options) {
        return this.api.replaceNamespacedCustomObjectStatusWithHttpInfo(param.group, param.version, param.namespace, param.plural, param.name, param.body, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified namespace scoped custom object
     * @param param the request object
     */
    replaceNamespacedCustomObjectStatus(param, options) {
        return this.api.replaceNamespacedCustomObjectStatus(param.group, param.version, param.namespace, param.plural, param.name, param.body, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectCustomObjectsApi = ObjectCustomObjectsApi;
const ObservableAPI_28 = require("./ObservableAPI");
class ObjectDiscoveryApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_28.ObservableDiscoveryApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroup(param = {}, options) {
        return this.api.getAPIGroup(options).toPromise();
    }
}
exports.ObjectDiscoveryApi = ObjectDiscoveryApi;
const ObservableAPI_29 = require("./ObservableAPI");
class ObjectDiscoveryV1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_29.ObservableDiscoveryV1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create an EndpointSlice
     * @param param the request object
     */
    createNamespacedEndpointSliceWithHttpInfo(param, options) {
        return this.api.createNamespacedEndpointSliceWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create an EndpointSlice
     * @param param the request object
     */
    createNamespacedEndpointSlice(param, options) {
        return this.api.createNamespacedEndpointSlice(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of EndpointSlice
     * @param param the request object
     */
    deleteCollectionNamespacedEndpointSliceWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedEndpointSliceWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of EndpointSlice
     * @param param the request object
     */
    deleteCollectionNamespacedEndpointSlice(param, options) {
        return this.api.deleteCollectionNamespacedEndpointSlice(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete an EndpointSlice
     * @param param the request object
     */
    deleteNamespacedEndpointSliceWithHttpInfo(param, options) {
        return this.api.deleteNamespacedEndpointSliceWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete an EndpointSlice
     * @param param the request object
     */
    deleteNamespacedEndpointSlice(param, options) {
        return this.api.deleteNamespacedEndpointSlice(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind EndpointSlice
     * @param param the request object
     */
    listEndpointSliceForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listEndpointSliceForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind EndpointSlice
     * @param param the request object
     */
    listEndpointSliceForAllNamespaces(param = {}, options) {
        return this.api.listEndpointSliceForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind EndpointSlice
     * @param param the request object
     */
    listNamespacedEndpointSliceWithHttpInfo(param, options) {
        return this.api.listNamespacedEndpointSliceWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind EndpointSlice
     * @param param the request object
     */
    listNamespacedEndpointSlice(param, options) {
        return this.api.listNamespacedEndpointSlice(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified EndpointSlice
     * @param param the request object
     */
    patchNamespacedEndpointSliceWithHttpInfo(param, options) {
        return this.api.patchNamespacedEndpointSliceWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified EndpointSlice
     * @param param the request object
     */
    patchNamespacedEndpointSlice(param, options) {
        return this.api.patchNamespacedEndpointSlice(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified EndpointSlice
     * @param param the request object
     */
    readNamespacedEndpointSliceWithHttpInfo(param, options) {
        return this.api.readNamespacedEndpointSliceWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified EndpointSlice
     * @param param the request object
     */
    readNamespacedEndpointSlice(param, options) {
        return this.api.readNamespacedEndpointSlice(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * replace the specified EndpointSlice
     * @param param the request object
     */
    replaceNamespacedEndpointSliceWithHttpInfo(param, options) {
        return this.api.replaceNamespacedEndpointSliceWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified EndpointSlice
     * @param param the request object
     */
    replaceNamespacedEndpointSlice(param, options) {
        return this.api.replaceNamespacedEndpointSlice(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectDiscoveryV1Api = ObjectDiscoveryV1Api;
const ObservableAPI_30 = require("./ObservableAPI");
class ObjectDiscoveryV1beta1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_30.ObservableDiscoveryV1beta1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create an EndpointSlice
     * @param param the request object
     */
    createNamespacedEndpointSliceWithHttpInfo(param, options) {
        return this.api.createNamespacedEndpointSliceWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create an EndpointSlice
     * @param param the request object
     */
    createNamespacedEndpointSlice(param, options) {
        return this.api.createNamespacedEndpointSlice(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of EndpointSlice
     * @param param the request object
     */
    deleteCollectionNamespacedEndpointSliceWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedEndpointSliceWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of EndpointSlice
     * @param param the request object
     */
    deleteCollectionNamespacedEndpointSlice(param, options) {
        return this.api.deleteCollectionNamespacedEndpointSlice(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete an EndpointSlice
     * @param param the request object
     */
    deleteNamespacedEndpointSliceWithHttpInfo(param, options) {
        return this.api.deleteNamespacedEndpointSliceWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete an EndpointSlice
     * @param param the request object
     */
    deleteNamespacedEndpointSlice(param, options) {
        return this.api.deleteNamespacedEndpointSlice(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind EndpointSlice
     * @param param the request object
     */
    listEndpointSliceForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listEndpointSliceForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind EndpointSlice
     * @param param the request object
     */
    listEndpointSliceForAllNamespaces(param = {}, options) {
        return this.api.listEndpointSliceForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind EndpointSlice
     * @param param the request object
     */
    listNamespacedEndpointSliceWithHttpInfo(param, options) {
        return this.api.listNamespacedEndpointSliceWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind EndpointSlice
     * @param param the request object
     */
    listNamespacedEndpointSlice(param, options) {
        return this.api.listNamespacedEndpointSlice(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified EndpointSlice
     * @param param the request object
     */
    patchNamespacedEndpointSliceWithHttpInfo(param, options) {
        return this.api.patchNamespacedEndpointSliceWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified EndpointSlice
     * @param param the request object
     */
    patchNamespacedEndpointSlice(param, options) {
        return this.api.patchNamespacedEndpointSlice(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified EndpointSlice
     * @param param the request object
     */
    readNamespacedEndpointSliceWithHttpInfo(param, options) {
        return this.api.readNamespacedEndpointSliceWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified EndpointSlice
     * @param param the request object
     */
    readNamespacedEndpointSlice(param, options) {
        return this.api.readNamespacedEndpointSlice(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * replace the specified EndpointSlice
     * @param param the request object
     */
    replaceNamespacedEndpointSliceWithHttpInfo(param, options) {
        return this.api.replaceNamespacedEndpointSliceWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified EndpointSlice
     * @param param the request object
     */
    replaceNamespacedEndpointSlice(param, options) {
        return this.api.replaceNamespacedEndpointSlice(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectDiscoveryV1beta1Api = ObjectDiscoveryV1beta1Api;
const ObservableAPI_31 = require("./ObservableAPI");
class ObjectEventsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_31.ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroup(param = {}, options) {
        return this.api.getAPIGroup(options).toPromise();
    }
}
exports.ObjectEventsApi = ObjectEventsApi;
const ObservableAPI_32 = require("./ObservableAPI");
class ObjectEventsV1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_32.ObservableEventsV1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create an Event
     * @param param the request object
     */
    createNamespacedEventWithHttpInfo(param, options) {
        return this.api.createNamespacedEventWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create an Event
     * @param param the request object
     */
    createNamespacedEvent(param, options) {
        return this.api.createNamespacedEvent(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of Event
     * @param param the request object
     */
    deleteCollectionNamespacedEventWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedEventWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Event
     * @param param the request object
     */
    deleteCollectionNamespacedEvent(param, options) {
        return this.api.deleteCollectionNamespacedEvent(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete an Event
     * @param param the request object
     */
    deleteNamespacedEventWithHttpInfo(param, options) {
        return this.api.deleteNamespacedEventWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete an Event
     * @param param the request object
     */
    deleteNamespacedEvent(param, options) {
        return this.api.deleteNamespacedEvent(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind Event
     * @param param the request object
     */
    listEventForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listEventForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Event
     * @param param the request object
     */
    listEventForAllNamespaces(param = {}, options) {
        return this.api.listEventForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Event
     * @param param the request object
     */
    listNamespacedEventWithHttpInfo(param, options) {
        return this.api.listNamespacedEventWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Event
     * @param param the request object
     */
    listNamespacedEvent(param, options) {
        return this.api.listNamespacedEvent(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified Event
     * @param param the request object
     */
    patchNamespacedEventWithHttpInfo(param, options) {
        return this.api.patchNamespacedEventWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Event
     * @param param the request object
     */
    patchNamespacedEvent(param, options) {
        return this.api.patchNamespacedEvent(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified Event
     * @param param the request object
     */
    readNamespacedEventWithHttpInfo(param, options) {
        return this.api.readNamespacedEventWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Event
     * @param param the request object
     */
    readNamespacedEvent(param, options) {
        return this.api.readNamespacedEvent(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * replace the specified Event
     * @param param the request object
     */
    replaceNamespacedEventWithHttpInfo(param, options) {
        return this.api.replaceNamespacedEventWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Event
     * @param param the request object
     */
    replaceNamespacedEvent(param, options) {
        return this.api.replaceNamespacedEvent(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectEventsV1Api = ObjectEventsV1Api;
const ObservableAPI_33 = require("./ObservableAPI");
class ObjectEventsV1beta1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_33.ObservableEventsV1beta1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create an Event
     * @param param the request object
     */
    createNamespacedEventWithHttpInfo(param, options) {
        return this.api.createNamespacedEventWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create an Event
     * @param param the request object
     */
    createNamespacedEvent(param, options) {
        return this.api.createNamespacedEvent(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of Event
     * @param param the request object
     */
    deleteCollectionNamespacedEventWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedEventWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Event
     * @param param the request object
     */
    deleteCollectionNamespacedEvent(param, options) {
        return this.api.deleteCollectionNamespacedEvent(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete an Event
     * @param param the request object
     */
    deleteNamespacedEventWithHttpInfo(param, options) {
        return this.api.deleteNamespacedEventWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete an Event
     * @param param the request object
     */
    deleteNamespacedEvent(param, options) {
        return this.api.deleteNamespacedEvent(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind Event
     * @param param the request object
     */
    listEventForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listEventForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Event
     * @param param the request object
     */
    listEventForAllNamespaces(param = {}, options) {
        return this.api.listEventForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Event
     * @param param the request object
     */
    listNamespacedEventWithHttpInfo(param, options) {
        return this.api.listNamespacedEventWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Event
     * @param param the request object
     */
    listNamespacedEvent(param, options) {
        return this.api.listNamespacedEvent(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified Event
     * @param param the request object
     */
    patchNamespacedEventWithHttpInfo(param, options) {
        return this.api.patchNamespacedEventWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Event
     * @param param the request object
     */
    patchNamespacedEvent(param, options) {
        return this.api.patchNamespacedEvent(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified Event
     * @param param the request object
     */
    readNamespacedEventWithHttpInfo(param, options) {
        return this.api.readNamespacedEventWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Event
     * @param param the request object
     */
    readNamespacedEvent(param, options) {
        return this.api.readNamespacedEvent(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * replace the specified Event
     * @param param the request object
     */
    replaceNamespacedEventWithHttpInfo(param, options) {
        return this.api.replaceNamespacedEventWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Event
     * @param param the request object
     */
    replaceNamespacedEvent(param, options) {
        return this.api.replaceNamespacedEvent(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectEventsV1beta1Api = ObjectEventsV1beta1Api;
const ObservableAPI_34 = require("./ObservableAPI");
class ObjectFlowcontrolApiserverApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_34.ObservableFlowcontrolApiserverApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroup(param = {}, options) {
        return this.api.getAPIGroup(options).toPromise();
    }
}
exports.ObjectFlowcontrolApiserverApi = ObjectFlowcontrolApiserverApi;
const ObservableAPI_35 = require("./ObservableAPI");
class ObjectFlowcontrolApiserverV1beta1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_35.ObservableFlowcontrolApiserverV1beta1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a FlowSchema
     * @param param the request object
     */
    createFlowSchemaWithHttpInfo(param, options) {
        return this.api.createFlowSchemaWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a FlowSchema
     * @param param the request object
     */
    createFlowSchema(param, options) {
        return this.api.createFlowSchema(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a PriorityLevelConfiguration
     * @param param the request object
     */
    createPriorityLevelConfigurationWithHttpInfo(param, options) {
        return this.api.createPriorityLevelConfigurationWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a PriorityLevelConfiguration
     * @param param the request object
     */
    createPriorityLevelConfiguration(param, options) {
        return this.api.createPriorityLevelConfiguration(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of FlowSchema
     * @param param the request object
     */
    deleteCollectionFlowSchemaWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionFlowSchemaWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of FlowSchema
     * @param param the request object
     */
    deleteCollectionFlowSchema(param = {}, options) {
        return this.api.deleteCollectionFlowSchema(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of PriorityLevelConfiguration
     * @param param the request object
     */
    deleteCollectionPriorityLevelConfigurationWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionPriorityLevelConfigurationWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of PriorityLevelConfiguration
     * @param param the request object
     */
    deleteCollectionPriorityLevelConfiguration(param = {}, options) {
        return this.api.deleteCollectionPriorityLevelConfiguration(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a FlowSchema
     * @param param the request object
     */
    deleteFlowSchemaWithHttpInfo(param, options) {
        return this.api.deleteFlowSchemaWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a FlowSchema
     * @param param the request object
     */
    deleteFlowSchema(param, options) {
        return this.api.deleteFlowSchema(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a PriorityLevelConfiguration
     * @param param the request object
     */
    deletePriorityLevelConfigurationWithHttpInfo(param, options) {
        return this.api.deletePriorityLevelConfigurationWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a PriorityLevelConfiguration
     * @param param the request object
     */
    deletePriorityLevelConfiguration(param, options) {
        return this.api.deletePriorityLevelConfiguration(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind FlowSchema
     * @param param the request object
     */
    listFlowSchemaWithHttpInfo(param = {}, options) {
        return this.api.listFlowSchemaWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind FlowSchema
     * @param param the request object
     */
    listFlowSchema(param = {}, options) {
        return this.api.listFlowSchema(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PriorityLevelConfiguration
     * @param param the request object
     */
    listPriorityLevelConfigurationWithHttpInfo(param = {}, options) {
        return this.api.listPriorityLevelConfigurationWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PriorityLevelConfiguration
     * @param param the request object
     */
    listPriorityLevelConfiguration(param = {}, options) {
        return this.api.listPriorityLevelConfiguration(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified FlowSchema
     * @param param the request object
     */
    patchFlowSchemaWithHttpInfo(param, options) {
        return this.api.patchFlowSchemaWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified FlowSchema
     * @param param the request object
     */
    patchFlowSchema(param, options) {
        return this.api.patchFlowSchema(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified FlowSchema
     * @param param the request object
     */
    patchFlowSchemaStatusWithHttpInfo(param, options) {
        return this.api.patchFlowSchemaStatusWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified FlowSchema
     * @param param the request object
     */
    patchFlowSchemaStatus(param, options) {
        return this.api.patchFlowSchemaStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified PriorityLevelConfiguration
     * @param param the request object
     */
    patchPriorityLevelConfigurationWithHttpInfo(param, options) {
        return this.api.patchPriorityLevelConfigurationWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified PriorityLevelConfiguration
     * @param param the request object
     */
    patchPriorityLevelConfiguration(param, options) {
        return this.api.patchPriorityLevelConfiguration(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified PriorityLevelConfiguration
     * @param param the request object
     */
    patchPriorityLevelConfigurationStatusWithHttpInfo(param, options) {
        return this.api.patchPriorityLevelConfigurationStatusWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified PriorityLevelConfiguration
     * @param param the request object
     */
    patchPriorityLevelConfigurationStatus(param, options) {
        return this.api.patchPriorityLevelConfigurationStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified FlowSchema
     * @param param the request object
     */
    readFlowSchemaWithHttpInfo(param, options) {
        return this.api.readFlowSchemaWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified FlowSchema
     * @param param the request object
     */
    readFlowSchema(param, options) {
        return this.api.readFlowSchema(param.name, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified FlowSchema
     * @param param the request object
     */
    readFlowSchemaStatusWithHttpInfo(param, options) {
        return this.api.readFlowSchemaStatusWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified FlowSchema
     * @param param the request object
     */
    readFlowSchemaStatus(param, options) {
        return this.api.readFlowSchemaStatus(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified PriorityLevelConfiguration
     * @param param the request object
     */
    readPriorityLevelConfigurationWithHttpInfo(param, options) {
        return this.api.readPriorityLevelConfigurationWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified PriorityLevelConfiguration
     * @param param the request object
     */
    readPriorityLevelConfiguration(param, options) {
        return this.api.readPriorityLevelConfiguration(param.name, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified PriorityLevelConfiguration
     * @param param the request object
     */
    readPriorityLevelConfigurationStatusWithHttpInfo(param, options) {
        return this.api.readPriorityLevelConfigurationStatusWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified PriorityLevelConfiguration
     * @param param the request object
     */
    readPriorityLevelConfigurationStatus(param, options) {
        return this.api.readPriorityLevelConfigurationStatus(param.name, param.pretty, options).toPromise();
    }
    /**
     * replace the specified FlowSchema
     * @param param the request object
     */
    replaceFlowSchemaWithHttpInfo(param, options) {
        return this.api.replaceFlowSchemaWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified FlowSchema
     * @param param the request object
     */
    replaceFlowSchema(param, options) {
        return this.api.replaceFlowSchema(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified FlowSchema
     * @param param the request object
     */
    replaceFlowSchemaStatusWithHttpInfo(param, options) {
        return this.api.replaceFlowSchemaStatusWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified FlowSchema
     * @param param the request object
     */
    replaceFlowSchemaStatus(param, options) {
        return this.api.replaceFlowSchemaStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified PriorityLevelConfiguration
     * @param param the request object
     */
    replacePriorityLevelConfigurationWithHttpInfo(param, options) {
        return this.api.replacePriorityLevelConfigurationWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified PriorityLevelConfiguration
     * @param param the request object
     */
    replacePriorityLevelConfiguration(param, options) {
        return this.api.replacePriorityLevelConfiguration(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified PriorityLevelConfiguration
     * @param param the request object
     */
    replacePriorityLevelConfigurationStatusWithHttpInfo(param, options) {
        return this.api.replacePriorityLevelConfigurationStatusWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified PriorityLevelConfiguration
     * @param param the request object
     */
    replacePriorityLevelConfigurationStatus(param, options) {
        return this.api.replacePriorityLevelConfigurationStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectFlowcontrolApiserverV1beta1Api = ObjectFlowcontrolApiserverV1beta1Api;
const ObservableAPI_36 = require("./ObservableAPI");
class ObjectInternalApiserverApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_36.ObservableInternalApiserverApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroup(param = {}, options) {
        return this.api.getAPIGroup(options).toPromise();
    }
}
exports.ObjectInternalApiserverApi = ObjectInternalApiserverApi;
const ObservableAPI_37 = require("./ObservableAPI");
class ObjectInternalApiserverV1alpha1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_37.ObservableInternalApiserverV1alpha1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a StorageVersion
     * @param param the request object
     */
    createStorageVersionWithHttpInfo(param, options) {
        return this.api.createStorageVersionWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a StorageVersion
     * @param param the request object
     */
    createStorageVersion(param, options) {
        return this.api.createStorageVersion(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of StorageVersion
     * @param param the request object
     */
    deleteCollectionStorageVersionWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionStorageVersionWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of StorageVersion
     * @param param the request object
     */
    deleteCollectionStorageVersion(param = {}, options) {
        return this.api.deleteCollectionStorageVersion(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a StorageVersion
     * @param param the request object
     */
    deleteStorageVersionWithHttpInfo(param, options) {
        return this.api.deleteStorageVersionWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a StorageVersion
     * @param param the request object
     */
    deleteStorageVersion(param, options) {
        return this.api.deleteStorageVersion(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind StorageVersion
     * @param param the request object
     */
    listStorageVersionWithHttpInfo(param = {}, options) {
        return this.api.listStorageVersionWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind StorageVersion
     * @param param the request object
     */
    listStorageVersion(param = {}, options) {
        return this.api.listStorageVersion(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified StorageVersion
     * @param param the request object
     */
    patchStorageVersionWithHttpInfo(param, options) {
        return this.api.patchStorageVersionWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified StorageVersion
     * @param param the request object
     */
    patchStorageVersion(param, options) {
        return this.api.patchStorageVersion(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified StorageVersion
     * @param param the request object
     */
    patchStorageVersionStatusWithHttpInfo(param, options) {
        return this.api.patchStorageVersionStatusWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified StorageVersion
     * @param param the request object
     */
    patchStorageVersionStatus(param, options) {
        return this.api.patchStorageVersionStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified StorageVersion
     * @param param the request object
     */
    readStorageVersionWithHttpInfo(param, options) {
        return this.api.readStorageVersionWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified StorageVersion
     * @param param the request object
     */
    readStorageVersion(param, options) {
        return this.api.readStorageVersion(param.name, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified StorageVersion
     * @param param the request object
     */
    readStorageVersionStatusWithHttpInfo(param, options) {
        return this.api.readStorageVersionStatusWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified StorageVersion
     * @param param the request object
     */
    readStorageVersionStatus(param, options) {
        return this.api.readStorageVersionStatus(param.name, param.pretty, options).toPromise();
    }
    /**
     * replace the specified StorageVersion
     * @param param the request object
     */
    replaceStorageVersionWithHttpInfo(param, options) {
        return this.api.replaceStorageVersionWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified StorageVersion
     * @param param the request object
     */
    replaceStorageVersion(param, options) {
        return this.api.replaceStorageVersion(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified StorageVersion
     * @param param the request object
     */
    replaceStorageVersionStatusWithHttpInfo(param, options) {
        return this.api.replaceStorageVersionStatusWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified StorageVersion
     * @param param the request object
     */
    replaceStorageVersionStatus(param, options) {
        return this.api.replaceStorageVersionStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectInternalApiserverV1alpha1Api = ObjectInternalApiserverV1alpha1Api;
const ObservableAPI_38 = require("./ObservableAPI");
class ObjectLogsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_38.ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * @param param the request object
     */
    logFileHandlerWithHttpInfo(param, options) {
        return this.api.logFileHandlerWithHttpInfo(param.logpath, options).toPromise();
    }
    /**
     * @param param the request object
     */
    logFileHandler(param, options) {
        return this.api.logFileHandler(param.logpath, options).toPromise();
    }
    /**
     * @param param the request object
     */
    logFileListHandlerWithHttpInfo(param = {}, options) {
        return this.api.logFileListHandlerWithHttpInfo(options).toPromise();
    }
    /**
     * @param param the request object
     */
    logFileListHandler(param = {}, options) {
        return this.api.logFileListHandler(options).toPromise();
    }
}
exports.ObjectLogsApi = ObjectLogsApi;
const ObservableAPI_39 = require("./ObservableAPI");
class ObjectNetworkingApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_39.ObservableNetworkingApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroup(param = {}, options) {
        return this.api.getAPIGroup(options).toPromise();
    }
}
exports.ObjectNetworkingApi = ObjectNetworkingApi;
const ObservableAPI_40 = require("./ObservableAPI");
class ObjectNetworkingV1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_40.ObservableNetworkingV1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create an IngressClass
     * @param param the request object
     */
    createIngressClassWithHttpInfo(param, options) {
        return this.api.createIngressClassWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create an IngressClass
     * @param param the request object
     */
    createIngressClass(param, options) {
        return this.api.createIngressClass(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create an Ingress
     * @param param the request object
     */
    createNamespacedIngressWithHttpInfo(param, options) {
        return this.api.createNamespacedIngressWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create an Ingress
     * @param param the request object
     */
    createNamespacedIngress(param, options) {
        return this.api.createNamespacedIngress(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a NetworkPolicy
     * @param param the request object
     */
    createNamespacedNetworkPolicyWithHttpInfo(param, options) {
        return this.api.createNamespacedNetworkPolicyWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a NetworkPolicy
     * @param param the request object
     */
    createNamespacedNetworkPolicy(param, options) {
        return this.api.createNamespacedNetworkPolicy(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of IngressClass
     * @param param the request object
     */
    deleteCollectionIngressClassWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionIngressClassWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of IngressClass
     * @param param the request object
     */
    deleteCollectionIngressClass(param = {}, options) {
        return this.api.deleteCollectionIngressClass(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Ingress
     * @param param the request object
     */
    deleteCollectionNamespacedIngressWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedIngressWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Ingress
     * @param param the request object
     */
    deleteCollectionNamespacedIngress(param, options) {
        return this.api.deleteCollectionNamespacedIngress(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of NetworkPolicy
     * @param param the request object
     */
    deleteCollectionNamespacedNetworkPolicyWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedNetworkPolicyWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of NetworkPolicy
     * @param param the request object
     */
    deleteCollectionNamespacedNetworkPolicy(param, options) {
        return this.api.deleteCollectionNamespacedNetworkPolicy(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete an IngressClass
     * @param param the request object
     */
    deleteIngressClassWithHttpInfo(param, options) {
        return this.api.deleteIngressClassWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete an IngressClass
     * @param param the request object
     */
    deleteIngressClass(param, options) {
        return this.api.deleteIngressClass(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete an Ingress
     * @param param the request object
     */
    deleteNamespacedIngressWithHttpInfo(param, options) {
        return this.api.deleteNamespacedIngressWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete an Ingress
     * @param param the request object
     */
    deleteNamespacedIngress(param, options) {
        return this.api.deleteNamespacedIngress(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a NetworkPolicy
     * @param param the request object
     */
    deleteNamespacedNetworkPolicyWithHttpInfo(param, options) {
        return this.api.deleteNamespacedNetworkPolicyWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a NetworkPolicy
     * @param param the request object
     */
    deleteNamespacedNetworkPolicy(param, options) {
        return this.api.deleteNamespacedNetworkPolicy(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind IngressClass
     * @param param the request object
     */
    listIngressClassWithHttpInfo(param = {}, options) {
        return this.api.listIngressClassWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind IngressClass
     * @param param the request object
     */
    listIngressClass(param = {}, options) {
        return this.api.listIngressClass(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Ingress
     * @param param the request object
     */
    listIngressForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listIngressForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Ingress
     * @param param the request object
     */
    listIngressForAllNamespaces(param = {}, options) {
        return this.api.listIngressForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Ingress
     * @param param the request object
     */
    listNamespacedIngressWithHttpInfo(param, options) {
        return this.api.listNamespacedIngressWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Ingress
     * @param param the request object
     */
    listNamespacedIngress(param, options) {
        return this.api.listNamespacedIngress(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind NetworkPolicy
     * @param param the request object
     */
    listNamespacedNetworkPolicyWithHttpInfo(param, options) {
        return this.api.listNamespacedNetworkPolicyWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind NetworkPolicy
     * @param param the request object
     */
    listNamespacedNetworkPolicy(param, options) {
        return this.api.listNamespacedNetworkPolicy(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind NetworkPolicy
     * @param param the request object
     */
    listNetworkPolicyForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listNetworkPolicyForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind NetworkPolicy
     * @param param the request object
     */
    listNetworkPolicyForAllNamespaces(param = {}, options) {
        return this.api.listNetworkPolicyForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified IngressClass
     * @param param the request object
     */
    patchIngressClassWithHttpInfo(param, options) {
        return this.api.patchIngressClassWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified IngressClass
     * @param param the request object
     */
    patchIngressClass(param, options) {
        return this.api.patchIngressClass(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Ingress
     * @param param the request object
     */
    patchNamespacedIngressWithHttpInfo(param, options) {
        return this.api.patchNamespacedIngressWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Ingress
     * @param param the request object
     */
    patchNamespacedIngress(param, options) {
        return this.api.patchNamespacedIngress(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified Ingress
     * @param param the request object
     */
    patchNamespacedIngressStatusWithHttpInfo(param, options) {
        return this.api.patchNamespacedIngressStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified Ingress
     * @param param the request object
     */
    patchNamespacedIngressStatus(param, options) {
        return this.api.patchNamespacedIngressStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified NetworkPolicy
     * @param param the request object
     */
    patchNamespacedNetworkPolicyWithHttpInfo(param, options) {
        return this.api.patchNamespacedNetworkPolicyWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified NetworkPolicy
     * @param param the request object
     */
    patchNamespacedNetworkPolicy(param, options) {
        return this.api.patchNamespacedNetworkPolicy(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified IngressClass
     * @param param the request object
     */
    readIngressClassWithHttpInfo(param, options) {
        return this.api.readIngressClassWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified IngressClass
     * @param param the request object
     */
    readIngressClass(param, options) {
        return this.api.readIngressClass(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified Ingress
     * @param param the request object
     */
    readNamespacedIngressWithHttpInfo(param, options) {
        return this.api.readNamespacedIngressWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Ingress
     * @param param the request object
     */
    readNamespacedIngress(param, options) {
        return this.api.readNamespacedIngress(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified Ingress
     * @param param the request object
     */
    readNamespacedIngressStatusWithHttpInfo(param, options) {
        return this.api.readNamespacedIngressStatusWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified Ingress
     * @param param the request object
     */
    readNamespacedIngressStatus(param, options) {
        return this.api.readNamespacedIngressStatus(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified NetworkPolicy
     * @param param the request object
     */
    readNamespacedNetworkPolicyWithHttpInfo(param, options) {
        return this.api.readNamespacedNetworkPolicyWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified NetworkPolicy
     * @param param the request object
     */
    readNamespacedNetworkPolicy(param, options) {
        return this.api.readNamespacedNetworkPolicy(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * replace the specified IngressClass
     * @param param the request object
     */
    replaceIngressClassWithHttpInfo(param, options) {
        return this.api.replaceIngressClassWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified IngressClass
     * @param param the request object
     */
    replaceIngressClass(param, options) {
        return this.api.replaceIngressClass(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Ingress
     * @param param the request object
     */
    replaceNamespacedIngressWithHttpInfo(param, options) {
        return this.api.replaceNamespacedIngressWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Ingress
     * @param param the request object
     */
    replaceNamespacedIngress(param, options) {
        return this.api.replaceNamespacedIngress(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified Ingress
     * @param param the request object
     */
    replaceNamespacedIngressStatusWithHttpInfo(param, options) {
        return this.api.replaceNamespacedIngressStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified Ingress
     * @param param the request object
     */
    replaceNamespacedIngressStatus(param, options) {
        return this.api.replaceNamespacedIngressStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified NetworkPolicy
     * @param param the request object
     */
    replaceNamespacedNetworkPolicyWithHttpInfo(param, options) {
        return this.api.replaceNamespacedNetworkPolicyWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified NetworkPolicy
     * @param param the request object
     */
    replaceNamespacedNetworkPolicy(param, options) {
        return this.api.replaceNamespacedNetworkPolicy(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectNetworkingV1Api = ObjectNetworkingV1Api;
const ObservableAPI_41 = require("./ObservableAPI");
class ObjectNodeApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_41.ObservableNodeApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroup(param = {}, options) {
        return this.api.getAPIGroup(options).toPromise();
    }
}
exports.ObjectNodeApi = ObjectNodeApi;
const ObservableAPI_42 = require("./ObservableAPI");
class ObjectNodeV1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_42.ObservableNodeV1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a RuntimeClass
     * @param param the request object
     */
    createRuntimeClassWithHttpInfo(param, options) {
        return this.api.createRuntimeClassWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a RuntimeClass
     * @param param the request object
     */
    createRuntimeClass(param, options) {
        return this.api.createRuntimeClass(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of RuntimeClass
     * @param param the request object
     */
    deleteCollectionRuntimeClassWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionRuntimeClassWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of RuntimeClass
     * @param param the request object
     */
    deleteCollectionRuntimeClass(param = {}, options) {
        return this.api.deleteCollectionRuntimeClass(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a RuntimeClass
     * @param param the request object
     */
    deleteRuntimeClassWithHttpInfo(param, options) {
        return this.api.deleteRuntimeClassWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a RuntimeClass
     * @param param the request object
     */
    deleteRuntimeClass(param, options) {
        return this.api.deleteRuntimeClass(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind RuntimeClass
     * @param param the request object
     */
    listRuntimeClassWithHttpInfo(param = {}, options) {
        return this.api.listRuntimeClassWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind RuntimeClass
     * @param param the request object
     */
    listRuntimeClass(param = {}, options) {
        return this.api.listRuntimeClass(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified RuntimeClass
     * @param param the request object
     */
    patchRuntimeClassWithHttpInfo(param, options) {
        return this.api.patchRuntimeClassWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified RuntimeClass
     * @param param the request object
     */
    patchRuntimeClass(param, options) {
        return this.api.patchRuntimeClass(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified RuntimeClass
     * @param param the request object
     */
    readRuntimeClassWithHttpInfo(param, options) {
        return this.api.readRuntimeClassWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified RuntimeClass
     * @param param the request object
     */
    readRuntimeClass(param, options) {
        return this.api.readRuntimeClass(param.name, param.pretty, options).toPromise();
    }
    /**
     * replace the specified RuntimeClass
     * @param param the request object
     */
    replaceRuntimeClassWithHttpInfo(param, options) {
        return this.api.replaceRuntimeClassWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified RuntimeClass
     * @param param the request object
     */
    replaceRuntimeClass(param, options) {
        return this.api.replaceRuntimeClass(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectNodeV1Api = ObjectNodeV1Api;
const ObservableAPI_43 = require("./ObservableAPI");
class ObjectNodeV1alpha1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_43.ObservableNodeV1alpha1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a RuntimeClass
     * @param param the request object
     */
    createRuntimeClassWithHttpInfo(param, options) {
        return this.api.createRuntimeClassWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a RuntimeClass
     * @param param the request object
     */
    createRuntimeClass(param, options) {
        return this.api.createRuntimeClass(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of RuntimeClass
     * @param param the request object
     */
    deleteCollectionRuntimeClassWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionRuntimeClassWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of RuntimeClass
     * @param param the request object
     */
    deleteCollectionRuntimeClass(param = {}, options) {
        return this.api.deleteCollectionRuntimeClass(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a RuntimeClass
     * @param param the request object
     */
    deleteRuntimeClassWithHttpInfo(param, options) {
        return this.api.deleteRuntimeClassWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a RuntimeClass
     * @param param the request object
     */
    deleteRuntimeClass(param, options) {
        return this.api.deleteRuntimeClass(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind RuntimeClass
     * @param param the request object
     */
    listRuntimeClassWithHttpInfo(param = {}, options) {
        return this.api.listRuntimeClassWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind RuntimeClass
     * @param param the request object
     */
    listRuntimeClass(param = {}, options) {
        return this.api.listRuntimeClass(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified RuntimeClass
     * @param param the request object
     */
    patchRuntimeClassWithHttpInfo(param, options) {
        return this.api.patchRuntimeClassWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified RuntimeClass
     * @param param the request object
     */
    patchRuntimeClass(param, options) {
        return this.api.patchRuntimeClass(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified RuntimeClass
     * @param param the request object
     */
    readRuntimeClassWithHttpInfo(param, options) {
        return this.api.readRuntimeClassWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified RuntimeClass
     * @param param the request object
     */
    readRuntimeClass(param, options) {
        return this.api.readRuntimeClass(param.name, param.pretty, options).toPromise();
    }
    /**
     * replace the specified RuntimeClass
     * @param param the request object
     */
    replaceRuntimeClassWithHttpInfo(param, options) {
        return this.api.replaceRuntimeClassWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified RuntimeClass
     * @param param the request object
     */
    replaceRuntimeClass(param, options) {
        return this.api.replaceRuntimeClass(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectNodeV1alpha1Api = ObjectNodeV1alpha1Api;
const ObservableAPI_44 = require("./ObservableAPI");
class ObjectNodeV1beta1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_44.ObservableNodeV1beta1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a RuntimeClass
     * @param param the request object
     */
    createRuntimeClassWithHttpInfo(param, options) {
        return this.api.createRuntimeClassWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a RuntimeClass
     * @param param the request object
     */
    createRuntimeClass(param, options) {
        return this.api.createRuntimeClass(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of RuntimeClass
     * @param param the request object
     */
    deleteCollectionRuntimeClassWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionRuntimeClassWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of RuntimeClass
     * @param param the request object
     */
    deleteCollectionRuntimeClass(param = {}, options) {
        return this.api.deleteCollectionRuntimeClass(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a RuntimeClass
     * @param param the request object
     */
    deleteRuntimeClassWithHttpInfo(param, options) {
        return this.api.deleteRuntimeClassWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a RuntimeClass
     * @param param the request object
     */
    deleteRuntimeClass(param, options) {
        return this.api.deleteRuntimeClass(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind RuntimeClass
     * @param param the request object
     */
    listRuntimeClassWithHttpInfo(param = {}, options) {
        return this.api.listRuntimeClassWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind RuntimeClass
     * @param param the request object
     */
    listRuntimeClass(param = {}, options) {
        return this.api.listRuntimeClass(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified RuntimeClass
     * @param param the request object
     */
    patchRuntimeClassWithHttpInfo(param, options) {
        return this.api.patchRuntimeClassWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified RuntimeClass
     * @param param the request object
     */
    patchRuntimeClass(param, options) {
        return this.api.patchRuntimeClass(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified RuntimeClass
     * @param param the request object
     */
    readRuntimeClassWithHttpInfo(param, options) {
        return this.api.readRuntimeClassWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified RuntimeClass
     * @param param the request object
     */
    readRuntimeClass(param, options) {
        return this.api.readRuntimeClass(param.name, param.pretty, options).toPromise();
    }
    /**
     * replace the specified RuntimeClass
     * @param param the request object
     */
    replaceRuntimeClassWithHttpInfo(param, options) {
        return this.api.replaceRuntimeClassWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified RuntimeClass
     * @param param the request object
     */
    replaceRuntimeClass(param, options) {
        return this.api.replaceRuntimeClass(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectNodeV1beta1Api = ObjectNodeV1beta1Api;
const ObservableAPI_45 = require("./ObservableAPI");
class ObjectOpenidApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_45.ObservableOpenidApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get service account issuer OpenID JSON Web Key Set (contains public token verification keys)
     * @param param the request object
     */
    getServiceAccountIssuerOpenIDKeysetWithHttpInfo(param = {}, options) {
        return this.api.getServiceAccountIssuerOpenIDKeysetWithHttpInfo(options).toPromise();
    }
    /**
     * get service account issuer OpenID JSON Web Key Set (contains public token verification keys)
     * @param param the request object
     */
    getServiceAccountIssuerOpenIDKeyset(param = {}, options) {
        return this.api.getServiceAccountIssuerOpenIDKeyset(options).toPromise();
    }
}
exports.ObjectOpenidApi = ObjectOpenidApi;
const ObservableAPI_46 = require("./ObservableAPI");
class ObjectPolicyApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_46.ObservablePolicyApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroup(param = {}, options) {
        return this.api.getAPIGroup(options).toPromise();
    }
}
exports.ObjectPolicyApi = ObjectPolicyApi;
const ObservableAPI_47 = require("./ObservableAPI");
class ObjectPolicyV1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_47.ObservablePolicyV1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a PodDisruptionBudget
     * @param param the request object
     */
    createNamespacedPodDisruptionBudgetWithHttpInfo(param, options) {
        return this.api.createNamespacedPodDisruptionBudgetWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a PodDisruptionBudget
     * @param param the request object
     */
    createNamespacedPodDisruptionBudget(param, options) {
        return this.api.createNamespacedPodDisruptionBudget(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of PodDisruptionBudget
     * @param param the request object
     */
    deleteCollectionNamespacedPodDisruptionBudgetWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedPodDisruptionBudgetWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of PodDisruptionBudget
     * @param param the request object
     */
    deleteCollectionNamespacedPodDisruptionBudget(param, options) {
        return this.api.deleteCollectionNamespacedPodDisruptionBudget(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a PodDisruptionBudget
     * @param param the request object
     */
    deleteNamespacedPodDisruptionBudgetWithHttpInfo(param, options) {
        return this.api.deleteNamespacedPodDisruptionBudgetWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a PodDisruptionBudget
     * @param param the request object
     */
    deleteNamespacedPodDisruptionBudget(param, options) {
        return this.api.deleteNamespacedPodDisruptionBudget(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind PodDisruptionBudget
     * @param param the request object
     */
    listNamespacedPodDisruptionBudgetWithHttpInfo(param, options) {
        return this.api.listNamespacedPodDisruptionBudgetWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PodDisruptionBudget
     * @param param the request object
     */
    listNamespacedPodDisruptionBudget(param, options) {
        return this.api.listNamespacedPodDisruptionBudget(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PodDisruptionBudget
     * @param param the request object
     */
    listPodDisruptionBudgetForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listPodDisruptionBudgetForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PodDisruptionBudget
     * @param param the request object
     */
    listPodDisruptionBudgetForAllNamespaces(param = {}, options) {
        return this.api.listPodDisruptionBudgetForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified PodDisruptionBudget
     * @param param the request object
     */
    patchNamespacedPodDisruptionBudgetWithHttpInfo(param, options) {
        return this.api.patchNamespacedPodDisruptionBudgetWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified PodDisruptionBudget
     * @param param the request object
     */
    patchNamespacedPodDisruptionBudget(param, options) {
        return this.api.patchNamespacedPodDisruptionBudget(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified PodDisruptionBudget
     * @param param the request object
     */
    patchNamespacedPodDisruptionBudgetStatusWithHttpInfo(param, options) {
        return this.api.patchNamespacedPodDisruptionBudgetStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified PodDisruptionBudget
     * @param param the request object
     */
    patchNamespacedPodDisruptionBudgetStatus(param, options) {
        return this.api.patchNamespacedPodDisruptionBudgetStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified PodDisruptionBudget
     * @param param the request object
     */
    readNamespacedPodDisruptionBudgetWithHttpInfo(param, options) {
        return this.api.readNamespacedPodDisruptionBudgetWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified PodDisruptionBudget
     * @param param the request object
     */
    readNamespacedPodDisruptionBudget(param, options) {
        return this.api.readNamespacedPodDisruptionBudget(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified PodDisruptionBudget
     * @param param the request object
     */
    readNamespacedPodDisruptionBudgetStatusWithHttpInfo(param, options) {
        return this.api.readNamespacedPodDisruptionBudgetStatusWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified PodDisruptionBudget
     * @param param the request object
     */
    readNamespacedPodDisruptionBudgetStatus(param, options) {
        return this.api.readNamespacedPodDisruptionBudgetStatus(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * replace the specified PodDisruptionBudget
     * @param param the request object
     */
    replaceNamespacedPodDisruptionBudgetWithHttpInfo(param, options) {
        return this.api.replaceNamespacedPodDisruptionBudgetWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified PodDisruptionBudget
     * @param param the request object
     */
    replaceNamespacedPodDisruptionBudget(param, options) {
        return this.api.replaceNamespacedPodDisruptionBudget(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified PodDisruptionBudget
     * @param param the request object
     */
    replaceNamespacedPodDisruptionBudgetStatusWithHttpInfo(param, options) {
        return this.api.replaceNamespacedPodDisruptionBudgetStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified PodDisruptionBudget
     * @param param the request object
     */
    replaceNamespacedPodDisruptionBudgetStatus(param, options) {
        return this.api.replaceNamespacedPodDisruptionBudgetStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectPolicyV1Api = ObjectPolicyV1Api;
const ObservableAPI_48 = require("./ObservableAPI");
class ObjectPolicyV1beta1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_48.ObservablePolicyV1beta1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a PodDisruptionBudget
     * @param param the request object
     */
    createNamespacedPodDisruptionBudgetWithHttpInfo(param, options) {
        return this.api.createNamespacedPodDisruptionBudgetWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a PodDisruptionBudget
     * @param param the request object
     */
    createNamespacedPodDisruptionBudget(param, options) {
        return this.api.createNamespacedPodDisruptionBudget(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a PodSecurityPolicy
     * @param param the request object
     */
    createPodSecurityPolicyWithHttpInfo(param, options) {
        return this.api.createPodSecurityPolicyWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a PodSecurityPolicy
     * @param param the request object
     */
    createPodSecurityPolicy(param, options) {
        return this.api.createPodSecurityPolicy(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of PodDisruptionBudget
     * @param param the request object
     */
    deleteCollectionNamespacedPodDisruptionBudgetWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedPodDisruptionBudgetWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of PodDisruptionBudget
     * @param param the request object
     */
    deleteCollectionNamespacedPodDisruptionBudget(param, options) {
        return this.api.deleteCollectionNamespacedPodDisruptionBudget(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of PodSecurityPolicy
     * @param param the request object
     */
    deleteCollectionPodSecurityPolicyWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionPodSecurityPolicyWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of PodSecurityPolicy
     * @param param the request object
     */
    deleteCollectionPodSecurityPolicy(param = {}, options) {
        return this.api.deleteCollectionPodSecurityPolicy(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a PodDisruptionBudget
     * @param param the request object
     */
    deleteNamespacedPodDisruptionBudgetWithHttpInfo(param, options) {
        return this.api.deleteNamespacedPodDisruptionBudgetWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a PodDisruptionBudget
     * @param param the request object
     */
    deleteNamespacedPodDisruptionBudget(param, options) {
        return this.api.deleteNamespacedPodDisruptionBudget(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a PodSecurityPolicy
     * @param param the request object
     */
    deletePodSecurityPolicyWithHttpInfo(param, options) {
        return this.api.deletePodSecurityPolicyWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a PodSecurityPolicy
     * @param param the request object
     */
    deletePodSecurityPolicy(param, options) {
        return this.api.deletePodSecurityPolicy(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind PodDisruptionBudget
     * @param param the request object
     */
    listNamespacedPodDisruptionBudgetWithHttpInfo(param, options) {
        return this.api.listNamespacedPodDisruptionBudgetWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PodDisruptionBudget
     * @param param the request object
     */
    listNamespacedPodDisruptionBudget(param, options) {
        return this.api.listNamespacedPodDisruptionBudget(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PodDisruptionBudget
     * @param param the request object
     */
    listPodDisruptionBudgetForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listPodDisruptionBudgetForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PodDisruptionBudget
     * @param param the request object
     */
    listPodDisruptionBudgetForAllNamespaces(param = {}, options) {
        return this.api.listPodDisruptionBudgetForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PodSecurityPolicy
     * @param param the request object
     */
    listPodSecurityPolicyWithHttpInfo(param = {}, options) {
        return this.api.listPodSecurityPolicyWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PodSecurityPolicy
     * @param param the request object
     */
    listPodSecurityPolicy(param = {}, options) {
        return this.api.listPodSecurityPolicy(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified PodDisruptionBudget
     * @param param the request object
     */
    patchNamespacedPodDisruptionBudgetWithHttpInfo(param, options) {
        return this.api.patchNamespacedPodDisruptionBudgetWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified PodDisruptionBudget
     * @param param the request object
     */
    patchNamespacedPodDisruptionBudget(param, options) {
        return this.api.patchNamespacedPodDisruptionBudget(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified PodDisruptionBudget
     * @param param the request object
     */
    patchNamespacedPodDisruptionBudgetStatusWithHttpInfo(param, options) {
        return this.api.patchNamespacedPodDisruptionBudgetStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified PodDisruptionBudget
     * @param param the request object
     */
    patchNamespacedPodDisruptionBudgetStatus(param, options) {
        return this.api.patchNamespacedPodDisruptionBudgetStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified PodSecurityPolicy
     * @param param the request object
     */
    patchPodSecurityPolicyWithHttpInfo(param, options) {
        return this.api.patchPodSecurityPolicyWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified PodSecurityPolicy
     * @param param the request object
     */
    patchPodSecurityPolicy(param, options) {
        return this.api.patchPodSecurityPolicy(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified PodDisruptionBudget
     * @param param the request object
     */
    readNamespacedPodDisruptionBudgetWithHttpInfo(param, options) {
        return this.api.readNamespacedPodDisruptionBudgetWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified PodDisruptionBudget
     * @param param the request object
     */
    readNamespacedPodDisruptionBudget(param, options) {
        return this.api.readNamespacedPodDisruptionBudget(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified PodDisruptionBudget
     * @param param the request object
     */
    readNamespacedPodDisruptionBudgetStatusWithHttpInfo(param, options) {
        return this.api.readNamespacedPodDisruptionBudgetStatusWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified PodDisruptionBudget
     * @param param the request object
     */
    readNamespacedPodDisruptionBudgetStatus(param, options) {
        return this.api.readNamespacedPodDisruptionBudgetStatus(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified PodSecurityPolicy
     * @param param the request object
     */
    readPodSecurityPolicyWithHttpInfo(param, options) {
        return this.api.readPodSecurityPolicyWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified PodSecurityPolicy
     * @param param the request object
     */
    readPodSecurityPolicy(param, options) {
        return this.api.readPodSecurityPolicy(param.name, param.pretty, options).toPromise();
    }
    /**
     * replace the specified PodDisruptionBudget
     * @param param the request object
     */
    replaceNamespacedPodDisruptionBudgetWithHttpInfo(param, options) {
        return this.api.replaceNamespacedPodDisruptionBudgetWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified PodDisruptionBudget
     * @param param the request object
     */
    replaceNamespacedPodDisruptionBudget(param, options) {
        return this.api.replaceNamespacedPodDisruptionBudget(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified PodDisruptionBudget
     * @param param the request object
     */
    replaceNamespacedPodDisruptionBudgetStatusWithHttpInfo(param, options) {
        return this.api.replaceNamespacedPodDisruptionBudgetStatusWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified PodDisruptionBudget
     * @param param the request object
     */
    replaceNamespacedPodDisruptionBudgetStatus(param, options) {
        return this.api.replaceNamespacedPodDisruptionBudgetStatus(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified PodSecurityPolicy
     * @param param the request object
     */
    replacePodSecurityPolicyWithHttpInfo(param, options) {
        return this.api.replacePodSecurityPolicyWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified PodSecurityPolicy
     * @param param the request object
     */
    replacePodSecurityPolicy(param, options) {
        return this.api.replacePodSecurityPolicy(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectPolicyV1beta1Api = ObjectPolicyV1beta1Api;
const ObservableAPI_49 = require("./ObservableAPI");
class ObjectRbacAuthorizationApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_49.ObservableRbacAuthorizationApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroup(param = {}, options) {
        return this.api.getAPIGroup(options).toPromise();
    }
}
exports.ObjectRbacAuthorizationApi = ObjectRbacAuthorizationApi;
const ObservableAPI_50 = require("./ObservableAPI");
class ObjectRbacAuthorizationV1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_50.ObservableRbacAuthorizationV1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a ClusterRole
     * @param param the request object
     */
    createClusterRoleWithHttpInfo(param, options) {
        return this.api.createClusterRoleWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a ClusterRole
     * @param param the request object
     */
    createClusterRole(param, options) {
        return this.api.createClusterRole(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a ClusterRoleBinding
     * @param param the request object
     */
    createClusterRoleBindingWithHttpInfo(param, options) {
        return this.api.createClusterRoleBindingWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a ClusterRoleBinding
     * @param param the request object
     */
    createClusterRoleBinding(param, options) {
        return this.api.createClusterRoleBinding(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a Role
     * @param param the request object
     */
    createNamespacedRoleWithHttpInfo(param, options) {
        return this.api.createNamespacedRoleWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a Role
     * @param param the request object
     */
    createNamespacedRole(param, options) {
        return this.api.createNamespacedRole(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a RoleBinding
     * @param param the request object
     */
    createNamespacedRoleBindingWithHttpInfo(param, options) {
        return this.api.createNamespacedRoleBindingWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a RoleBinding
     * @param param the request object
     */
    createNamespacedRoleBinding(param, options) {
        return this.api.createNamespacedRoleBinding(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete a ClusterRole
     * @param param the request object
     */
    deleteClusterRoleWithHttpInfo(param, options) {
        return this.api.deleteClusterRoleWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a ClusterRole
     * @param param the request object
     */
    deleteClusterRole(param, options) {
        return this.api.deleteClusterRole(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a ClusterRoleBinding
     * @param param the request object
     */
    deleteClusterRoleBindingWithHttpInfo(param, options) {
        return this.api.deleteClusterRoleBindingWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a ClusterRoleBinding
     * @param param the request object
     */
    deleteClusterRoleBinding(param, options) {
        return this.api.deleteClusterRoleBinding(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete collection of ClusterRole
     * @param param the request object
     */
    deleteCollectionClusterRoleWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionClusterRoleWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of ClusterRole
     * @param param the request object
     */
    deleteCollectionClusterRole(param = {}, options) {
        return this.api.deleteCollectionClusterRole(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of ClusterRoleBinding
     * @param param the request object
     */
    deleteCollectionClusterRoleBindingWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionClusterRoleBindingWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of ClusterRoleBinding
     * @param param the request object
     */
    deleteCollectionClusterRoleBinding(param = {}, options) {
        return this.api.deleteCollectionClusterRoleBinding(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Role
     * @param param the request object
     */
    deleteCollectionNamespacedRoleWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedRoleWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Role
     * @param param the request object
     */
    deleteCollectionNamespacedRole(param, options) {
        return this.api.deleteCollectionNamespacedRole(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of RoleBinding
     * @param param the request object
     */
    deleteCollectionNamespacedRoleBindingWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedRoleBindingWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of RoleBinding
     * @param param the request object
     */
    deleteCollectionNamespacedRoleBinding(param, options) {
        return this.api.deleteCollectionNamespacedRoleBinding(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a Role
     * @param param the request object
     */
    deleteNamespacedRoleWithHttpInfo(param, options) {
        return this.api.deleteNamespacedRoleWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a Role
     * @param param the request object
     */
    deleteNamespacedRole(param, options) {
        return this.api.deleteNamespacedRole(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a RoleBinding
     * @param param the request object
     */
    deleteNamespacedRoleBindingWithHttpInfo(param, options) {
        return this.api.deleteNamespacedRoleBindingWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a RoleBinding
     * @param param the request object
     */
    deleteNamespacedRoleBinding(param, options) {
        return this.api.deleteNamespacedRoleBinding(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind ClusterRole
     * @param param the request object
     */
    listClusterRoleWithHttpInfo(param = {}, options) {
        return this.api.listClusterRoleWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ClusterRole
     * @param param the request object
     */
    listClusterRole(param = {}, options) {
        return this.api.listClusterRole(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ClusterRoleBinding
     * @param param the request object
     */
    listClusterRoleBindingWithHttpInfo(param = {}, options) {
        return this.api.listClusterRoleBindingWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ClusterRoleBinding
     * @param param the request object
     */
    listClusterRoleBinding(param = {}, options) {
        return this.api.listClusterRoleBinding(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Role
     * @param param the request object
     */
    listNamespacedRoleWithHttpInfo(param, options) {
        return this.api.listNamespacedRoleWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Role
     * @param param the request object
     */
    listNamespacedRole(param, options) {
        return this.api.listNamespacedRole(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind RoleBinding
     * @param param the request object
     */
    listNamespacedRoleBindingWithHttpInfo(param, options) {
        return this.api.listNamespacedRoleBindingWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind RoleBinding
     * @param param the request object
     */
    listNamespacedRoleBinding(param, options) {
        return this.api.listNamespacedRoleBinding(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind RoleBinding
     * @param param the request object
     */
    listRoleBindingForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listRoleBindingForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind RoleBinding
     * @param param the request object
     */
    listRoleBindingForAllNamespaces(param = {}, options) {
        return this.api.listRoleBindingForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Role
     * @param param the request object
     */
    listRoleForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listRoleForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Role
     * @param param the request object
     */
    listRoleForAllNamespaces(param = {}, options) {
        return this.api.listRoleForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified ClusterRole
     * @param param the request object
     */
    patchClusterRoleWithHttpInfo(param, options) {
        return this.api.patchClusterRoleWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified ClusterRole
     * @param param the request object
     */
    patchClusterRole(param, options) {
        return this.api.patchClusterRole(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified ClusterRoleBinding
     * @param param the request object
     */
    patchClusterRoleBindingWithHttpInfo(param, options) {
        return this.api.patchClusterRoleBindingWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified ClusterRoleBinding
     * @param param the request object
     */
    patchClusterRoleBinding(param, options) {
        return this.api.patchClusterRoleBinding(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Role
     * @param param the request object
     */
    patchNamespacedRoleWithHttpInfo(param, options) {
        return this.api.patchNamespacedRoleWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Role
     * @param param the request object
     */
    patchNamespacedRole(param, options) {
        return this.api.patchNamespacedRole(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified RoleBinding
     * @param param the request object
     */
    patchNamespacedRoleBindingWithHttpInfo(param, options) {
        return this.api.patchNamespacedRoleBindingWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified RoleBinding
     * @param param the request object
     */
    patchNamespacedRoleBinding(param, options) {
        return this.api.patchNamespacedRoleBinding(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified ClusterRole
     * @param param the request object
     */
    readClusterRoleWithHttpInfo(param, options) {
        return this.api.readClusterRoleWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified ClusterRole
     * @param param the request object
     */
    readClusterRole(param, options) {
        return this.api.readClusterRole(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified ClusterRoleBinding
     * @param param the request object
     */
    readClusterRoleBindingWithHttpInfo(param, options) {
        return this.api.readClusterRoleBindingWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified ClusterRoleBinding
     * @param param the request object
     */
    readClusterRoleBinding(param, options) {
        return this.api.readClusterRoleBinding(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified Role
     * @param param the request object
     */
    readNamespacedRoleWithHttpInfo(param, options) {
        return this.api.readNamespacedRoleWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Role
     * @param param the request object
     */
    readNamespacedRole(param, options) {
        return this.api.readNamespacedRole(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified RoleBinding
     * @param param the request object
     */
    readNamespacedRoleBindingWithHttpInfo(param, options) {
        return this.api.readNamespacedRoleBindingWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified RoleBinding
     * @param param the request object
     */
    readNamespacedRoleBinding(param, options) {
        return this.api.readNamespacedRoleBinding(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * replace the specified ClusterRole
     * @param param the request object
     */
    replaceClusterRoleWithHttpInfo(param, options) {
        return this.api.replaceClusterRoleWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified ClusterRole
     * @param param the request object
     */
    replaceClusterRole(param, options) {
        return this.api.replaceClusterRole(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified ClusterRoleBinding
     * @param param the request object
     */
    replaceClusterRoleBindingWithHttpInfo(param, options) {
        return this.api.replaceClusterRoleBindingWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified ClusterRoleBinding
     * @param param the request object
     */
    replaceClusterRoleBinding(param, options) {
        return this.api.replaceClusterRoleBinding(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Role
     * @param param the request object
     */
    replaceNamespacedRoleWithHttpInfo(param, options) {
        return this.api.replaceNamespacedRoleWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Role
     * @param param the request object
     */
    replaceNamespacedRole(param, options) {
        return this.api.replaceNamespacedRole(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified RoleBinding
     * @param param the request object
     */
    replaceNamespacedRoleBindingWithHttpInfo(param, options) {
        return this.api.replaceNamespacedRoleBindingWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified RoleBinding
     * @param param the request object
     */
    replaceNamespacedRoleBinding(param, options) {
        return this.api.replaceNamespacedRoleBinding(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectRbacAuthorizationV1Api = ObjectRbacAuthorizationV1Api;
const ObservableAPI_51 = require("./ObservableAPI");
class ObjectRbacAuthorizationV1alpha1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_51.ObservableRbacAuthorizationV1alpha1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a ClusterRole
     * @param param the request object
     */
    createClusterRoleWithHttpInfo(param, options) {
        return this.api.createClusterRoleWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a ClusterRole
     * @param param the request object
     */
    createClusterRole(param, options) {
        return this.api.createClusterRole(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a ClusterRoleBinding
     * @param param the request object
     */
    createClusterRoleBindingWithHttpInfo(param, options) {
        return this.api.createClusterRoleBindingWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a ClusterRoleBinding
     * @param param the request object
     */
    createClusterRoleBinding(param, options) {
        return this.api.createClusterRoleBinding(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a Role
     * @param param the request object
     */
    createNamespacedRoleWithHttpInfo(param, options) {
        return this.api.createNamespacedRoleWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a Role
     * @param param the request object
     */
    createNamespacedRole(param, options) {
        return this.api.createNamespacedRole(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a RoleBinding
     * @param param the request object
     */
    createNamespacedRoleBindingWithHttpInfo(param, options) {
        return this.api.createNamespacedRoleBindingWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a RoleBinding
     * @param param the request object
     */
    createNamespacedRoleBinding(param, options) {
        return this.api.createNamespacedRoleBinding(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete a ClusterRole
     * @param param the request object
     */
    deleteClusterRoleWithHttpInfo(param, options) {
        return this.api.deleteClusterRoleWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a ClusterRole
     * @param param the request object
     */
    deleteClusterRole(param, options) {
        return this.api.deleteClusterRole(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a ClusterRoleBinding
     * @param param the request object
     */
    deleteClusterRoleBindingWithHttpInfo(param, options) {
        return this.api.deleteClusterRoleBindingWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a ClusterRoleBinding
     * @param param the request object
     */
    deleteClusterRoleBinding(param, options) {
        return this.api.deleteClusterRoleBinding(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete collection of ClusterRole
     * @param param the request object
     */
    deleteCollectionClusterRoleWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionClusterRoleWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of ClusterRole
     * @param param the request object
     */
    deleteCollectionClusterRole(param = {}, options) {
        return this.api.deleteCollectionClusterRole(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of ClusterRoleBinding
     * @param param the request object
     */
    deleteCollectionClusterRoleBindingWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionClusterRoleBindingWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of ClusterRoleBinding
     * @param param the request object
     */
    deleteCollectionClusterRoleBinding(param = {}, options) {
        return this.api.deleteCollectionClusterRoleBinding(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Role
     * @param param the request object
     */
    deleteCollectionNamespacedRoleWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedRoleWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of Role
     * @param param the request object
     */
    deleteCollectionNamespacedRole(param, options) {
        return this.api.deleteCollectionNamespacedRole(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of RoleBinding
     * @param param the request object
     */
    deleteCollectionNamespacedRoleBindingWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedRoleBindingWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of RoleBinding
     * @param param the request object
     */
    deleteCollectionNamespacedRoleBinding(param, options) {
        return this.api.deleteCollectionNamespacedRoleBinding(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a Role
     * @param param the request object
     */
    deleteNamespacedRoleWithHttpInfo(param, options) {
        return this.api.deleteNamespacedRoleWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a Role
     * @param param the request object
     */
    deleteNamespacedRole(param, options) {
        return this.api.deleteNamespacedRole(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a RoleBinding
     * @param param the request object
     */
    deleteNamespacedRoleBindingWithHttpInfo(param, options) {
        return this.api.deleteNamespacedRoleBindingWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a RoleBinding
     * @param param the request object
     */
    deleteNamespacedRoleBinding(param, options) {
        return this.api.deleteNamespacedRoleBinding(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind ClusterRole
     * @param param the request object
     */
    listClusterRoleWithHttpInfo(param = {}, options) {
        return this.api.listClusterRoleWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ClusterRole
     * @param param the request object
     */
    listClusterRole(param = {}, options) {
        return this.api.listClusterRole(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ClusterRoleBinding
     * @param param the request object
     */
    listClusterRoleBindingWithHttpInfo(param = {}, options) {
        return this.api.listClusterRoleBindingWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind ClusterRoleBinding
     * @param param the request object
     */
    listClusterRoleBinding(param = {}, options) {
        return this.api.listClusterRoleBinding(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Role
     * @param param the request object
     */
    listNamespacedRoleWithHttpInfo(param, options) {
        return this.api.listNamespacedRoleWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Role
     * @param param the request object
     */
    listNamespacedRole(param, options) {
        return this.api.listNamespacedRole(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind RoleBinding
     * @param param the request object
     */
    listNamespacedRoleBindingWithHttpInfo(param, options) {
        return this.api.listNamespacedRoleBindingWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind RoleBinding
     * @param param the request object
     */
    listNamespacedRoleBinding(param, options) {
        return this.api.listNamespacedRoleBinding(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind RoleBinding
     * @param param the request object
     */
    listRoleBindingForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listRoleBindingForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind RoleBinding
     * @param param the request object
     */
    listRoleBindingForAllNamespaces(param = {}, options) {
        return this.api.listRoleBindingForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Role
     * @param param the request object
     */
    listRoleForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listRoleForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind Role
     * @param param the request object
     */
    listRoleForAllNamespaces(param = {}, options) {
        return this.api.listRoleForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified ClusterRole
     * @param param the request object
     */
    patchClusterRoleWithHttpInfo(param, options) {
        return this.api.patchClusterRoleWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified ClusterRole
     * @param param the request object
     */
    patchClusterRole(param, options) {
        return this.api.patchClusterRole(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified ClusterRoleBinding
     * @param param the request object
     */
    patchClusterRoleBindingWithHttpInfo(param, options) {
        return this.api.patchClusterRoleBindingWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified ClusterRoleBinding
     * @param param the request object
     */
    patchClusterRoleBinding(param, options) {
        return this.api.patchClusterRoleBinding(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Role
     * @param param the request object
     */
    patchNamespacedRoleWithHttpInfo(param, options) {
        return this.api.patchNamespacedRoleWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified Role
     * @param param the request object
     */
    patchNamespacedRole(param, options) {
        return this.api.patchNamespacedRole(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified RoleBinding
     * @param param the request object
     */
    patchNamespacedRoleBindingWithHttpInfo(param, options) {
        return this.api.patchNamespacedRoleBindingWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified RoleBinding
     * @param param the request object
     */
    patchNamespacedRoleBinding(param, options) {
        return this.api.patchNamespacedRoleBinding(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified ClusterRole
     * @param param the request object
     */
    readClusterRoleWithHttpInfo(param, options) {
        return this.api.readClusterRoleWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified ClusterRole
     * @param param the request object
     */
    readClusterRole(param, options) {
        return this.api.readClusterRole(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified ClusterRoleBinding
     * @param param the request object
     */
    readClusterRoleBindingWithHttpInfo(param, options) {
        return this.api.readClusterRoleBindingWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified ClusterRoleBinding
     * @param param the request object
     */
    readClusterRoleBinding(param, options) {
        return this.api.readClusterRoleBinding(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified Role
     * @param param the request object
     */
    readNamespacedRoleWithHttpInfo(param, options) {
        return this.api.readNamespacedRoleWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified Role
     * @param param the request object
     */
    readNamespacedRole(param, options) {
        return this.api.readNamespacedRole(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified RoleBinding
     * @param param the request object
     */
    readNamespacedRoleBindingWithHttpInfo(param, options) {
        return this.api.readNamespacedRoleBindingWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified RoleBinding
     * @param param the request object
     */
    readNamespacedRoleBinding(param, options) {
        return this.api.readNamespacedRoleBinding(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * replace the specified ClusterRole
     * @param param the request object
     */
    replaceClusterRoleWithHttpInfo(param, options) {
        return this.api.replaceClusterRoleWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified ClusterRole
     * @param param the request object
     */
    replaceClusterRole(param, options) {
        return this.api.replaceClusterRole(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified ClusterRoleBinding
     * @param param the request object
     */
    replaceClusterRoleBindingWithHttpInfo(param, options) {
        return this.api.replaceClusterRoleBindingWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified ClusterRoleBinding
     * @param param the request object
     */
    replaceClusterRoleBinding(param, options) {
        return this.api.replaceClusterRoleBinding(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Role
     * @param param the request object
     */
    replaceNamespacedRoleWithHttpInfo(param, options) {
        return this.api.replaceNamespacedRoleWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified Role
     * @param param the request object
     */
    replaceNamespacedRole(param, options) {
        return this.api.replaceNamespacedRole(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified RoleBinding
     * @param param the request object
     */
    replaceNamespacedRoleBindingWithHttpInfo(param, options) {
        return this.api.replaceNamespacedRoleBindingWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified RoleBinding
     * @param param the request object
     */
    replaceNamespacedRoleBinding(param, options) {
        return this.api.replaceNamespacedRoleBinding(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectRbacAuthorizationV1alpha1Api = ObjectRbacAuthorizationV1alpha1Api;
const ObservableAPI_52 = require("./ObservableAPI");
class ObjectSchedulingApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_52.ObservableSchedulingApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroup(param = {}, options) {
        return this.api.getAPIGroup(options).toPromise();
    }
}
exports.ObjectSchedulingApi = ObjectSchedulingApi;
const ObservableAPI_53 = require("./ObservableAPI");
class ObjectSchedulingV1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_53.ObservableSchedulingV1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a PriorityClass
     * @param param the request object
     */
    createPriorityClassWithHttpInfo(param, options) {
        return this.api.createPriorityClassWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a PriorityClass
     * @param param the request object
     */
    createPriorityClass(param, options) {
        return this.api.createPriorityClass(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of PriorityClass
     * @param param the request object
     */
    deleteCollectionPriorityClassWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionPriorityClassWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of PriorityClass
     * @param param the request object
     */
    deleteCollectionPriorityClass(param = {}, options) {
        return this.api.deleteCollectionPriorityClass(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a PriorityClass
     * @param param the request object
     */
    deletePriorityClassWithHttpInfo(param, options) {
        return this.api.deletePriorityClassWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a PriorityClass
     * @param param the request object
     */
    deletePriorityClass(param, options) {
        return this.api.deletePriorityClass(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind PriorityClass
     * @param param the request object
     */
    listPriorityClassWithHttpInfo(param = {}, options) {
        return this.api.listPriorityClassWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PriorityClass
     * @param param the request object
     */
    listPriorityClass(param = {}, options) {
        return this.api.listPriorityClass(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified PriorityClass
     * @param param the request object
     */
    patchPriorityClassWithHttpInfo(param, options) {
        return this.api.patchPriorityClassWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified PriorityClass
     * @param param the request object
     */
    patchPriorityClass(param, options) {
        return this.api.patchPriorityClass(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified PriorityClass
     * @param param the request object
     */
    readPriorityClassWithHttpInfo(param, options) {
        return this.api.readPriorityClassWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified PriorityClass
     * @param param the request object
     */
    readPriorityClass(param, options) {
        return this.api.readPriorityClass(param.name, param.pretty, options).toPromise();
    }
    /**
     * replace the specified PriorityClass
     * @param param the request object
     */
    replacePriorityClassWithHttpInfo(param, options) {
        return this.api.replacePriorityClassWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified PriorityClass
     * @param param the request object
     */
    replacePriorityClass(param, options) {
        return this.api.replacePriorityClass(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectSchedulingV1Api = ObjectSchedulingV1Api;
const ObservableAPI_54 = require("./ObservableAPI");
class ObjectSchedulingV1alpha1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_54.ObservableSchedulingV1alpha1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a PriorityClass
     * @param param the request object
     */
    createPriorityClassWithHttpInfo(param, options) {
        return this.api.createPriorityClassWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a PriorityClass
     * @param param the request object
     */
    createPriorityClass(param, options) {
        return this.api.createPriorityClass(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of PriorityClass
     * @param param the request object
     */
    deleteCollectionPriorityClassWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionPriorityClassWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of PriorityClass
     * @param param the request object
     */
    deleteCollectionPriorityClass(param = {}, options) {
        return this.api.deleteCollectionPriorityClass(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a PriorityClass
     * @param param the request object
     */
    deletePriorityClassWithHttpInfo(param, options) {
        return this.api.deletePriorityClassWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a PriorityClass
     * @param param the request object
     */
    deletePriorityClass(param, options) {
        return this.api.deletePriorityClass(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind PriorityClass
     * @param param the request object
     */
    listPriorityClassWithHttpInfo(param = {}, options) {
        return this.api.listPriorityClassWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind PriorityClass
     * @param param the request object
     */
    listPriorityClass(param = {}, options) {
        return this.api.listPriorityClass(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified PriorityClass
     * @param param the request object
     */
    patchPriorityClassWithHttpInfo(param, options) {
        return this.api.patchPriorityClassWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified PriorityClass
     * @param param the request object
     */
    patchPriorityClass(param, options) {
        return this.api.patchPriorityClass(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified PriorityClass
     * @param param the request object
     */
    readPriorityClassWithHttpInfo(param, options) {
        return this.api.readPriorityClassWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified PriorityClass
     * @param param the request object
     */
    readPriorityClass(param, options) {
        return this.api.readPriorityClass(param.name, param.pretty, options).toPromise();
    }
    /**
     * replace the specified PriorityClass
     * @param param the request object
     */
    replacePriorityClassWithHttpInfo(param, options) {
        return this.api.replacePriorityClassWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified PriorityClass
     * @param param the request object
     */
    replacePriorityClass(param, options) {
        return this.api.replacePriorityClass(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectSchedulingV1alpha1Api = ObjectSchedulingV1alpha1Api;
const ObservableAPI_55 = require("./ObservableAPI");
class ObjectStorageApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_55.ObservableStorageApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroupWithHttpInfo(param = {}, options) {
        return this.api.getAPIGroupWithHttpInfo(options).toPromise();
    }
    /**
     * get information of a group
     * @param param the request object
     */
    getAPIGroup(param = {}, options) {
        return this.api.getAPIGroup(options).toPromise();
    }
}
exports.ObjectStorageApi = ObjectStorageApi;
const ObservableAPI_56 = require("./ObservableAPI");
class ObjectStorageV1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_56.ObservableStorageV1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a CSIDriver
     * @param param the request object
     */
    createCSIDriverWithHttpInfo(param, options) {
        return this.api.createCSIDriverWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a CSIDriver
     * @param param the request object
     */
    createCSIDriver(param, options) {
        return this.api.createCSIDriver(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a CSINode
     * @param param the request object
     */
    createCSINodeWithHttpInfo(param, options) {
        return this.api.createCSINodeWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a CSINode
     * @param param the request object
     */
    createCSINode(param, options) {
        return this.api.createCSINode(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a StorageClass
     * @param param the request object
     */
    createStorageClassWithHttpInfo(param, options) {
        return this.api.createStorageClassWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a StorageClass
     * @param param the request object
     */
    createStorageClass(param, options) {
        return this.api.createStorageClass(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a VolumeAttachment
     * @param param the request object
     */
    createVolumeAttachmentWithHttpInfo(param, options) {
        return this.api.createVolumeAttachmentWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a VolumeAttachment
     * @param param the request object
     */
    createVolumeAttachment(param, options) {
        return this.api.createVolumeAttachment(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete a CSIDriver
     * @param param the request object
     */
    deleteCSIDriverWithHttpInfo(param, options) {
        return this.api.deleteCSIDriverWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a CSIDriver
     * @param param the request object
     */
    deleteCSIDriver(param, options) {
        return this.api.deleteCSIDriver(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a CSINode
     * @param param the request object
     */
    deleteCSINodeWithHttpInfo(param, options) {
        return this.api.deleteCSINodeWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a CSINode
     * @param param the request object
     */
    deleteCSINode(param, options) {
        return this.api.deleteCSINode(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete collection of CSIDriver
     * @param param the request object
     */
    deleteCollectionCSIDriverWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionCSIDriverWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of CSIDriver
     * @param param the request object
     */
    deleteCollectionCSIDriver(param = {}, options) {
        return this.api.deleteCollectionCSIDriver(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of CSINode
     * @param param the request object
     */
    deleteCollectionCSINodeWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionCSINodeWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of CSINode
     * @param param the request object
     */
    deleteCollectionCSINode(param = {}, options) {
        return this.api.deleteCollectionCSINode(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of StorageClass
     * @param param the request object
     */
    deleteCollectionStorageClassWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionStorageClassWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of StorageClass
     * @param param the request object
     */
    deleteCollectionStorageClass(param = {}, options) {
        return this.api.deleteCollectionStorageClass(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of VolumeAttachment
     * @param param the request object
     */
    deleteCollectionVolumeAttachmentWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionVolumeAttachmentWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of VolumeAttachment
     * @param param the request object
     */
    deleteCollectionVolumeAttachment(param = {}, options) {
        return this.api.deleteCollectionVolumeAttachment(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a StorageClass
     * @param param the request object
     */
    deleteStorageClassWithHttpInfo(param, options) {
        return this.api.deleteStorageClassWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a StorageClass
     * @param param the request object
     */
    deleteStorageClass(param, options) {
        return this.api.deleteStorageClass(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a VolumeAttachment
     * @param param the request object
     */
    deleteVolumeAttachmentWithHttpInfo(param, options) {
        return this.api.deleteVolumeAttachmentWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a VolumeAttachment
     * @param param the request object
     */
    deleteVolumeAttachment(param, options) {
        return this.api.deleteVolumeAttachment(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind CSIDriver
     * @param param the request object
     */
    listCSIDriverWithHttpInfo(param = {}, options) {
        return this.api.listCSIDriverWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind CSIDriver
     * @param param the request object
     */
    listCSIDriver(param = {}, options) {
        return this.api.listCSIDriver(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind CSINode
     * @param param the request object
     */
    listCSINodeWithHttpInfo(param = {}, options) {
        return this.api.listCSINodeWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind CSINode
     * @param param the request object
     */
    listCSINode(param = {}, options) {
        return this.api.listCSINode(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind StorageClass
     * @param param the request object
     */
    listStorageClassWithHttpInfo(param = {}, options) {
        return this.api.listStorageClassWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind StorageClass
     * @param param the request object
     */
    listStorageClass(param = {}, options) {
        return this.api.listStorageClass(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind VolumeAttachment
     * @param param the request object
     */
    listVolumeAttachmentWithHttpInfo(param = {}, options) {
        return this.api.listVolumeAttachmentWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind VolumeAttachment
     * @param param the request object
     */
    listVolumeAttachment(param = {}, options) {
        return this.api.listVolumeAttachment(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified CSIDriver
     * @param param the request object
     */
    patchCSIDriverWithHttpInfo(param, options) {
        return this.api.patchCSIDriverWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified CSIDriver
     * @param param the request object
     */
    patchCSIDriver(param, options) {
        return this.api.patchCSIDriver(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified CSINode
     * @param param the request object
     */
    patchCSINodeWithHttpInfo(param, options) {
        return this.api.patchCSINodeWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified CSINode
     * @param param the request object
     */
    patchCSINode(param, options) {
        return this.api.patchCSINode(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified StorageClass
     * @param param the request object
     */
    patchStorageClassWithHttpInfo(param, options) {
        return this.api.patchStorageClassWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified StorageClass
     * @param param the request object
     */
    patchStorageClass(param, options) {
        return this.api.patchStorageClass(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified VolumeAttachment
     * @param param the request object
     */
    patchVolumeAttachmentWithHttpInfo(param, options) {
        return this.api.patchVolumeAttachmentWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified VolumeAttachment
     * @param param the request object
     */
    patchVolumeAttachment(param, options) {
        return this.api.patchVolumeAttachment(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified VolumeAttachment
     * @param param the request object
     */
    patchVolumeAttachmentStatusWithHttpInfo(param, options) {
        return this.api.patchVolumeAttachmentStatusWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update status of the specified VolumeAttachment
     * @param param the request object
     */
    patchVolumeAttachmentStatus(param, options) {
        return this.api.patchVolumeAttachmentStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified CSIDriver
     * @param param the request object
     */
    readCSIDriverWithHttpInfo(param, options) {
        return this.api.readCSIDriverWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified CSIDriver
     * @param param the request object
     */
    readCSIDriver(param, options) {
        return this.api.readCSIDriver(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified CSINode
     * @param param the request object
     */
    readCSINodeWithHttpInfo(param, options) {
        return this.api.readCSINodeWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified CSINode
     * @param param the request object
     */
    readCSINode(param, options) {
        return this.api.readCSINode(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified StorageClass
     * @param param the request object
     */
    readStorageClassWithHttpInfo(param, options) {
        return this.api.readStorageClassWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified StorageClass
     * @param param the request object
     */
    readStorageClass(param, options) {
        return this.api.readStorageClass(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified VolumeAttachment
     * @param param the request object
     */
    readVolumeAttachmentWithHttpInfo(param, options) {
        return this.api.readVolumeAttachmentWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified VolumeAttachment
     * @param param the request object
     */
    readVolumeAttachment(param, options) {
        return this.api.readVolumeAttachment(param.name, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified VolumeAttachment
     * @param param the request object
     */
    readVolumeAttachmentStatusWithHttpInfo(param, options) {
        return this.api.readVolumeAttachmentStatusWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read status of the specified VolumeAttachment
     * @param param the request object
     */
    readVolumeAttachmentStatus(param, options) {
        return this.api.readVolumeAttachmentStatus(param.name, param.pretty, options).toPromise();
    }
    /**
     * replace the specified CSIDriver
     * @param param the request object
     */
    replaceCSIDriverWithHttpInfo(param, options) {
        return this.api.replaceCSIDriverWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified CSIDriver
     * @param param the request object
     */
    replaceCSIDriver(param, options) {
        return this.api.replaceCSIDriver(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified CSINode
     * @param param the request object
     */
    replaceCSINodeWithHttpInfo(param, options) {
        return this.api.replaceCSINodeWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified CSINode
     * @param param the request object
     */
    replaceCSINode(param, options) {
        return this.api.replaceCSINode(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified StorageClass
     * @param param the request object
     */
    replaceStorageClassWithHttpInfo(param, options) {
        return this.api.replaceStorageClassWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified StorageClass
     * @param param the request object
     */
    replaceStorageClass(param, options) {
        return this.api.replaceStorageClass(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified VolumeAttachment
     * @param param the request object
     */
    replaceVolumeAttachmentWithHttpInfo(param, options) {
        return this.api.replaceVolumeAttachmentWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified VolumeAttachment
     * @param param the request object
     */
    replaceVolumeAttachment(param, options) {
        return this.api.replaceVolumeAttachment(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified VolumeAttachment
     * @param param the request object
     */
    replaceVolumeAttachmentStatusWithHttpInfo(param, options) {
        return this.api.replaceVolumeAttachmentStatusWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace status of the specified VolumeAttachment
     * @param param the request object
     */
    replaceVolumeAttachmentStatus(param, options) {
        return this.api.replaceVolumeAttachmentStatus(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectStorageV1Api = ObjectStorageV1Api;
const ObservableAPI_57 = require("./ObservableAPI");
class ObjectStorageV1alpha1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_57.ObservableStorageV1alpha1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a CSIStorageCapacity
     * @param param the request object
     */
    createNamespacedCSIStorageCapacityWithHttpInfo(param, options) {
        return this.api.createNamespacedCSIStorageCapacityWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a CSIStorageCapacity
     * @param param the request object
     */
    createNamespacedCSIStorageCapacity(param, options) {
        return this.api.createNamespacedCSIStorageCapacity(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a VolumeAttachment
     * @param param the request object
     */
    createVolumeAttachmentWithHttpInfo(param, options) {
        return this.api.createVolumeAttachmentWithHttpInfo(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a VolumeAttachment
     * @param param the request object
     */
    createVolumeAttachment(param, options) {
        return this.api.createVolumeAttachment(param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of CSIStorageCapacity
     * @param param the request object
     */
    deleteCollectionNamespacedCSIStorageCapacityWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedCSIStorageCapacityWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of CSIStorageCapacity
     * @param param the request object
     */
    deleteCollectionNamespacedCSIStorageCapacity(param, options) {
        return this.api.deleteCollectionNamespacedCSIStorageCapacity(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of VolumeAttachment
     * @param param the request object
     */
    deleteCollectionVolumeAttachmentWithHttpInfo(param = {}, options) {
        return this.api.deleteCollectionVolumeAttachmentWithHttpInfo(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of VolumeAttachment
     * @param param the request object
     */
    deleteCollectionVolumeAttachment(param = {}, options) {
        return this.api.deleteCollectionVolumeAttachment(param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a CSIStorageCapacity
     * @param param the request object
     */
    deleteNamespacedCSIStorageCapacityWithHttpInfo(param, options) {
        return this.api.deleteNamespacedCSIStorageCapacityWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a CSIStorageCapacity
     * @param param the request object
     */
    deleteNamespacedCSIStorageCapacity(param, options) {
        return this.api.deleteNamespacedCSIStorageCapacity(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a VolumeAttachment
     * @param param the request object
     */
    deleteVolumeAttachmentWithHttpInfo(param, options) {
        return this.api.deleteVolumeAttachmentWithHttpInfo(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a VolumeAttachment
     * @param param the request object
     */
    deleteVolumeAttachment(param, options) {
        return this.api.deleteVolumeAttachment(param.name, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind CSIStorageCapacity
     * @param param the request object
     */
    listCSIStorageCapacityForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listCSIStorageCapacityForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind CSIStorageCapacity
     * @param param the request object
     */
    listCSIStorageCapacityForAllNamespaces(param = {}, options) {
        return this.api.listCSIStorageCapacityForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind CSIStorageCapacity
     * @param param the request object
     */
    listNamespacedCSIStorageCapacityWithHttpInfo(param, options) {
        return this.api.listNamespacedCSIStorageCapacityWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind CSIStorageCapacity
     * @param param the request object
     */
    listNamespacedCSIStorageCapacity(param, options) {
        return this.api.listNamespacedCSIStorageCapacity(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind VolumeAttachment
     * @param param the request object
     */
    listVolumeAttachmentWithHttpInfo(param = {}, options) {
        return this.api.listVolumeAttachmentWithHttpInfo(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind VolumeAttachment
     * @param param the request object
     */
    listVolumeAttachment(param = {}, options) {
        return this.api.listVolumeAttachment(param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified CSIStorageCapacity
     * @param param the request object
     */
    patchNamespacedCSIStorageCapacityWithHttpInfo(param, options) {
        return this.api.patchNamespacedCSIStorageCapacityWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified CSIStorageCapacity
     * @param param the request object
     */
    patchNamespacedCSIStorageCapacity(param, options) {
        return this.api.patchNamespacedCSIStorageCapacity(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified VolumeAttachment
     * @param param the request object
     */
    patchVolumeAttachmentWithHttpInfo(param, options) {
        return this.api.patchVolumeAttachmentWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified VolumeAttachment
     * @param param the request object
     */
    patchVolumeAttachment(param, options) {
        return this.api.patchVolumeAttachment(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified CSIStorageCapacity
     * @param param the request object
     */
    readNamespacedCSIStorageCapacityWithHttpInfo(param, options) {
        return this.api.readNamespacedCSIStorageCapacityWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified CSIStorageCapacity
     * @param param the request object
     */
    readNamespacedCSIStorageCapacity(param, options) {
        return this.api.readNamespacedCSIStorageCapacity(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified VolumeAttachment
     * @param param the request object
     */
    readVolumeAttachmentWithHttpInfo(param, options) {
        return this.api.readVolumeAttachmentWithHttpInfo(param.name, param.pretty, options).toPromise();
    }
    /**
     * read the specified VolumeAttachment
     * @param param the request object
     */
    readVolumeAttachment(param, options) {
        return this.api.readVolumeAttachment(param.name, param.pretty, options).toPromise();
    }
    /**
     * replace the specified CSIStorageCapacity
     * @param param the request object
     */
    replaceNamespacedCSIStorageCapacityWithHttpInfo(param, options) {
        return this.api.replaceNamespacedCSIStorageCapacityWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified CSIStorageCapacity
     * @param param the request object
     */
    replaceNamespacedCSIStorageCapacity(param, options) {
        return this.api.replaceNamespacedCSIStorageCapacity(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified VolumeAttachment
     * @param param the request object
     */
    replaceVolumeAttachmentWithHttpInfo(param, options) {
        return this.api.replaceVolumeAttachmentWithHttpInfo(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified VolumeAttachment
     * @param param the request object
     */
    replaceVolumeAttachment(param, options) {
        return this.api.replaceVolumeAttachment(param.name, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectStorageV1alpha1Api = ObjectStorageV1alpha1Api;
const ObservableAPI_58 = require("./ObservableAPI");
class ObjectStorageV1beta1Api {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_58.ObservableStorageV1beta1Api(configuration, requestFactory, responseProcessor);
    }
    /**
     * create a CSIStorageCapacity
     * @param param the request object
     */
    createNamespacedCSIStorageCapacityWithHttpInfo(param, options) {
        return this.api.createNamespacedCSIStorageCapacityWithHttpInfo(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * create a CSIStorageCapacity
     * @param param the request object
     */
    createNamespacedCSIStorageCapacity(param, options) {
        return this.api.createNamespacedCSIStorageCapacity(param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * delete collection of CSIStorageCapacity
     * @param param the request object
     */
    deleteCollectionNamespacedCSIStorageCapacityWithHttpInfo(param, options) {
        return this.api.deleteCollectionNamespacedCSIStorageCapacityWithHttpInfo(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete collection of CSIStorageCapacity
     * @param param the request object
     */
    deleteCollectionNamespacedCSIStorageCapacity(param, options) {
        return this.api.deleteCollectionNamespacedCSIStorageCapacity(param.namespace, param.pretty, param._continue, param.dryRun, param.fieldSelector, param.gracePeriodSeconds, param.labelSelector, param.limit, param.orphanDependents, param.propagationPolicy, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.body, options).toPromise();
    }
    /**
     * delete a CSIStorageCapacity
     * @param param the request object
     */
    deleteNamespacedCSIStorageCapacityWithHttpInfo(param, options) {
        return this.api.deleteNamespacedCSIStorageCapacityWithHttpInfo(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * delete a CSIStorageCapacity
     * @param param the request object
     */
    deleteNamespacedCSIStorageCapacity(param, options) {
        return this.api.deleteNamespacedCSIStorageCapacity(param.name, param.namespace, param.pretty, param.dryRun, param.gracePeriodSeconds, param.orphanDependents, param.propagationPolicy, param.body, options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResourcesWithHttpInfo(param = {}, options) {
        return this.api.getAPIResourcesWithHttpInfo(options).toPromise();
    }
    /**
     * get available resources
     * @param param the request object
     */
    getAPIResources(param = {}, options) {
        return this.api.getAPIResources(options).toPromise();
    }
    /**
     * list or watch objects of kind CSIStorageCapacity
     * @param param the request object
     */
    listCSIStorageCapacityForAllNamespacesWithHttpInfo(param = {}, options) {
        return this.api.listCSIStorageCapacityForAllNamespacesWithHttpInfo(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind CSIStorageCapacity
     * @param param the request object
     */
    listCSIStorageCapacityForAllNamespaces(param = {}, options) {
        return this.api.listCSIStorageCapacityForAllNamespaces(param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.pretty, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind CSIStorageCapacity
     * @param param the request object
     */
    listNamespacedCSIStorageCapacityWithHttpInfo(param, options) {
        return this.api.listNamespacedCSIStorageCapacityWithHttpInfo(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * list or watch objects of kind CSIStorageCapacity
     * @param param the request object
     */
    listNamespacedCSIStorageCapacity(param, options) {
        return this.api.listNamespacedCSIStorageCapacity(param.namespace, param.pretty, param.allowWatchBookmarks, param._continue, param.fieldSelector, param.labelSelector, param.limit, param.resourceVersion, param.resourceVersionMatch, param.timeoutSeconds, param.watch, options).toPromise();
    }
    /**
     * partially update the specified CSIStorageCapacity
     * @param param the request object
     */
    patchNamespacedCSIStorageCapacityWithHttpInfo(param, options) {
        return this.api.patchNamespacedCSIStorageCapacityWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * partially update the specified CSIStorageCapacity
     * @param param the request object
     */
    patchNamespacedCSIStorageCapacity(param, options) {
        return this.api.patchNamespacedCSIStorageCapacity(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, param.force, options).toPromise();
    }
    /**
     * read the specified CSIStorageCapacity
     * @param param the request object
     */
    readNamespacedCSIStorageCapacityWithHttpInfo(param, options) {
        return this.api.readNamespacedCSIStorageCapacityWithHttpInfo(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * read the specified CSIStorageCapacity
     * @param param the request object
     */
    readNamespacedCSIStorageCapacity(param, options) {
        return this.api.readNamespacedCSIStorageCapacity(param.name, param.namespace, param.pretty, options).toPromise();
    }
    /**
     * replace the specified CSIStorageCapacity
     * @param param the request object
     */
    replaceNamespacedCSIStorageCapacityWithHttpInfo(param, options) {
        return this.api.replaceNamespacedCSIStorageCapacityWithHttpInfo(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
    /**
     * replace the specified CSIStorageCapacity
     * @param param the request object
     */
    replaceNamespacedCSIStorageCapacity(param, options) {
        return this.api.replaceNamespacedCSIStorageCapacity(param.name, param.namespace, param.body, param.pretty, param.dryRun, param.fieldManager, options).toPromise();
    }
}
exports.ObjectStorageV1beta1Api = ObjectStorageV1beta1Api;
const ObservableAPI_59 = require("./ObservableAPI");
class ObjectVersionApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_59.ObservableVersionApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get the code version
     * @param param the request object
     */
    getCodeWithHttpInfo(param = {}, options) {
        return this.api.getCodeWithHttpInfo(options).toPromise();
    }
    /**
     * get the code version
     * @param param the request object
     */
    getCode(param = {}, options) {
        return this.api.getCode(options).toPromise();
    }
}
exports.ObjectVersionApi = ObjectVersionApi;
const ObservableAPI_60 = require("./ObservableAPI");
class ObjectWellKnownApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_60.ObservableWellKnownApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * get service account issuer OpenID configuration, also known as the \'OIDC discovery doc\'
     * @param param the request object
     */
    getServiceAccountIssuerOpenIDConfigurationWithHttpInfo(param = {}, options) {
        return this.api.getServiceAccountIssuerOpenIDConfigurationWithHttpInfo(options).toPromise();
    }
    /**
     * get service account issuer OpenID configuration, also known as the \'OIDC discovery doc\'
     * @param param the request object
     */
    getServiceAccountIssuerOpenIDConfiguration(param = {}, options) {
        return this.api.getServiceAccountIssuerOpenIDConfiguration(options).toPromise();
    }
}
exports.ObjectWellKnownApi = ObjectWellKnownApi;
//# sourceMappingURL=ObjectParamAPI.js.map