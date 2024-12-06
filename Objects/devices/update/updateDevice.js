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
                                    "name": "status",
                                    "validations": [],
                                    "required": false,
                                    "source": "req.body"
                                }
                            ]
                        },
                        "apiInfo": {
                            "query": {
                                "queryNature": "update",
                                "queryPayload": "UPDATE devices SET {{device_name ? `device_name = ${device_name},` : ''}} {{status ? `status = ${status}` : ''}} WHERE device_id = {{Id}}",
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
