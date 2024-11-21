global.UpdateDevices_object = {
    "versions": {
        "versionData": [{
            "=1.0": {
                "steps": [{
                    "config": {
                        "features": {
                            "parameters": true,
                            "pagination": false
                        },
                        "communication": {
                            "encryption": {
                                "platformEncryption": false,
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
                                },
                                {
                                    "name": "device_name",
                                    "validations": [],
                                    "required": false,
                                    "source": "req.body"
                                },
                                {
                                    "name": "entryStatus",
                                    "validations": [],
                                    "required": false,
                                    "source": "req.body"
                                }
                            ]
                        },
                        "apiInfo": {
                            "query": {
                                "queryNature": "update",
                                "queryPayload": "UPDATE devices SET {{device_name ? `device_name = ${device_name},` : ''}} {{entryStatus ? `entryStatus = ${entryStatus}` : ''}} WHERE device_id = {{device_id}}",
                                "database": "projectDB"
                            },
                            "utilityFunctions": {
                                "callbackFunction": null,
                                "payloadFunction": []
                            }
                        },
                        "requestMetaData": {
                            "requestMethod": "PUT",
                            "permission": null,
                            "pagination": {}
                        }
                    },
                    "response": {
                        "successMessage": "Device updated successfully!",
                        "errorMessage": "Error updating device."
                    }
                }]
            }
        }]
    }
};
