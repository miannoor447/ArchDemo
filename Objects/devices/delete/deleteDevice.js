global.DeleteDevice_object = {
    "versions": {
        "versionData": [{
            "=1.0": {
                "steps": [{
                    "config": {
                        "features": {
                            "multistep": true,
                            "parameters": true,
                            "pagination": false
                        },
                        "communication": {
                            "encryption": {
                                "platformEncryption": true,
                                "accessTokenEncryption": false
                            }
                        },
                        "verification": {
                            "otp": false,
                            "accessToken": false
                        }
                    },
                    "data": {
                        "parameters": {
                            "fields": [
                                {
                                    "name": "device_id",
                                    "validations": [],
                                    "required": true,
                                    "source": "req.body"
                                }
                            ]
                        },
                        "apiInfo": {
                            "query": {
                                "queryNature": "update",
                                "queryPayload": "update devices set entryStatus = 'deleted' where device_id = {{device_id}}",
                                "database": "projectDB"
                            },
                            "utilityFunctions": {
                                "callbackFunction": null,
                                "payloadFunction": []
                            }
                        },
                        "requestMetaData": {
                            "requestMethod": "DELETE",
                            "permission": null
                        }
                    },
                    "response": {
                        "successMessage": "Device marked as deleted successfully!",
                        "errorMessage": "Failed to mark the device as deleted."
                    }
                }]
            }
        }]
    }
}
