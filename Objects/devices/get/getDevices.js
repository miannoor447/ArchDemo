const { total_count } = require("../../../UtilityFunctions/PayloadFunctions/devices/getCount");

global.GetDevicesAll_object = {
    "versions": {
        "versionData": [{
            "=1.0": {
                "steps": [{
                    "config": {
                        "features": {
                            "parameters": true,
                            "pagination": true
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
                            "fields": []
                        },
                        "apiInfo": {
                            "query": {
                                "queryNature": "select",
                                "queryPayload": "SELECT * FROM devices",
                                "database": "projectDB"
                            },
                            "utilityFunctions": {
                                "callbackFunction": null,
                                "payloadFunction": [total_count]
                            }
                        },
                        "requestMetaData": {
                            "requestMethod": "GET",
                            "permission": null,
                            "pagination": {
                                "pageSize": 10,
                                "options": {
                                    "pageSizeOptions": [5, 10, 25, 50, 100, "All"]
                                }
                            }
                        }
                    },
                    "response": {
                        "successMessage": "Devices fetched successfully!",
                        "errorMessage": "Error fetching devices."
                    }
                }]
            }
        }]
    }
};
