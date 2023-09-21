"use strict";
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.22.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PersistentVolumeSpec = void 0;
/**
* PersistentVolumeSpec is the specification of a persistent volume.
*/
class V1PersistentVolumeSpec {
    static getAttributeTypeMap() {
        return V1PersistentVolumeSpec.attributeTypeMap;
    }
    constructor() {
    }
}
exports.V1PersistentVolumeSpec = V1PersistentVolumeSpec;
V1PersistentVolumeSpec.discriminator = undefined;
V1PersistentVolumeSpec.attributeTypeMap = [
    {
        "name": "accessModes",
        "baseName": "accessModes",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "awsElasticBlockStore",
        "baseName": "awsElasticBlockStore",
        "type": "V1AWSElasticBlockStoreVolumeSource",
        "format": ""
    },
    {
        "name": "azureDisk",
        "baseName": "azureDisk",
        "type": "V1AzureDiskVolumeSource",
        "format": ""
    },
    {
        "name": "azureFile",
        "baseName": "azureFile",
        "type": "V1AzureFilePersistentVolumeSource",
        "format": ""
    },
    {
        "name": "capacity",
        "baseName": "capacity",
        "type": "{ [key: string]: string; }",
        "format": ""
    },
    {
        "name": "cephfs",
        "baseName": "cephfs",
        "type": "V1CephFSPersistentVolumeSource",
        "format": ""
    },
    {
        "name": "cinder",
        "baseName": "cinder",
        "type": "V1CinderPersistentVolumeSource",
        "format": ""
    },
    {
        "name": "claimRef",
        "baseName": "claimRef",
        "type": "V1ObjectReference",
        "format": ""
    },
    {
        "name": "csi",
        "baseName": "csi",
        "type": "V1CSIPersistentVolumeSource",
        "format": ""
    },
    {
        "name": "fc",
        "baseName": "fc",
        "type": "V1FCVolumeSource",
        "format": ""
    },
    {
        "name": "flexVolume",
        "baseName": "flexVolume",
        "type": "V1FlexPersistentVolumeSource",
        "format": ""
    },
    {
        "name": "flocker",
        "baseName": "flocker",
        "type": "V1FlockerVolumeSource",
        "format": ""
    },
    {
        "name": "gcePersistentDisk",
        "baseName": "gcePersistentDisk",
        "type": "V1GCEPersistentDiskVolumeSource",
        "format": ""
    },
    {
        "name": "glusterfs",
        "baseName": "glusterfs",
        "type": "V1GlusterfsPersistentVolumeSource",
        "format": ""
    },
    {
        "name": "hostPath",
        "baseName": "hostPath",
        "type": "V1HostPathVolumeSource",
        "format": ""
    },
    {
        "name": "iscsi",
        "baseName": "iscsi",
        "type": "V1ISCSIPersistentVolumeSource",
        "format": ""
    },
    {
        "name": "local",
        "baseName": "local",
        "type": "V1LocalVolumeSource",
        "format": ""
    },
    {
        "name": "mountOptions",
        "baseName": "mountOptions",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "nfs",
        "baseName": "nfs",
        "type": "V1NFSVolumeSource",
        "format": ""
    },
    {
        "name": "nodeAffinity",
        "baseName": "nodeAffinity",
        "type": "V1VolumeNodeAffinity",
        "format": ""
    },
    {
        "name": "persistentVolumeReclaimPolicy",
        "baseName": "persistentVolumeReclaimPolicy",
        "type": "string",
        "format": ""
    },
    {
        "name": "photonPersistentDisk",
        "baseName": "photonPersistentDisk",
        "type": "V1PhotonPersistentDiskVolumeSource",
        "format": ""
    },
    {
        "name": "portworxVolume",
        "baseName": "portworxVolume",
        "type": "V1PortworxVolumeSource",
        "format": ""
    },
    {
        "name": "quobyte",
        "baseName": "quobyte",
        "type": "V1QuobyteVolumeSource",
        "format": ""
    },
    {
        "name": "rbd",
        "baseName": "rbd",
        "type": "V1RBDPersistentVolumeSource",
        "format": ""
    },
    {
        "name": "scaleIO",
        "baseName": "scaleIO",
        "type": "V1ScaleIOPersistentVolumeSource",
        "format": ""
    },
    {
        "name": "storageClassName",
        "baseName": "storageClassName",
        "type": "string",
        "format": ""
    },
    {
        "name": "storageos",
        "baseName": "storageos",
        "type": "V1StorageOSPersistentVolumeSource",
        "format": ""
    },
    {
        "name": "volumeMode",
        "baseName": "volumeMode",
        "type": "string",
        "format": ""
    },
    {
        "name": "vsphereVolume",
        "baseName": "vsphereVolume",
        "type": "V1VsphereVirtualDiskVolumeSource",
        "format": ""
    }
];
//# sourceMappingURL=V1PersistentVolumeSpec.js.map