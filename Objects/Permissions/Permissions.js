/* API Objects for table: permissions */

    global.ListPermissionsAll_object = {
    "versions": {
        "versionData": [{
        "=1.0": {
            "steps": [{
            "config": {
                "features": {
                "multistep": false,
                "parameters": true,
                "pagination": true
                },
                "communication": {
                    //"encryption": false,
                    "encryption": {
                        "platformEncryption": true,
                        "accessTokenEncryption": false,
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
                    "queryNature": "SELECT",
                    "queryPayload": "SELECT *, COUNT(*) OVER () AS table_count FROM Permissions",
                    "database": "projectDB"
                },
                "utilityFunctions": {
                    "callbackFunction": null,
                    "payloadFunction": []
                }
                },
                "requestMetaData": {
                "requestMethod": "GET",
                "permission": null,
                "pagination": { "pageSize": 10 }
                }
            },
            "response": {
                "successMessage": "Permissions retrieved successfully!",
                "errorMessage": "Failed to retrieve Permissions."
            }
            }]
        }
        }]
    }
    };


    global.ListPermissions_object = {
    "versions": {
        "versionData": [{
        "=1.0": {
            "steps": [{
            "config": {
                "features": {
                "multistep": false,
                "parameters": true,
                "pagination": true
                },
                "communication": {
                    //"encryption": false,
                    "encryption": {
                        "platformEncryption": true,
                        "accessTokenEncryption": false,
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
                    "name": "id",
                    "validations": [],
                    "required": true,
                    "source": "req.query"
                    }
                ]
                },
                "apiInfo": {
                "query": {
                    "queryNature": "SELECT",
                    "queryPayload": "SELECT * FROM Permissions WHERE permission_id = {{id}}",
                    "database": "projectDB"
                },
                "utilityFunctions": {
                    "callbackFunction": null,
                    "payloadFunction": []
                }
                },
                "requestMetaData": {
                "requestMethod": "GET",
                "permission": null,
                "pagination": { "pageSize": 10 }
                }
            },
            "response": {
                "successMessage": "Permissions entry retrieved successfully!",
                "errorMessage": "Failed to retrieve Permissions entry."
            }
            }]
        }
        }]
    }
    };


    global.UpdatePermissions_object = {
    "versions": {
        "versionData": [{
        "=1.0": {
            "steps": [{
            "config": {
                "features": {
                "multistep": false,
                "parameters": true,
                "pagination": false
                },
                "communication": {
                    //"encryption": false,
                    "encryption": {
                        "platformEncryption": true,
                        "accessTokenEncryption": false,
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
                    "name": "permission_id",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "permission_name",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "status",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "updated_by",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "created_at",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "updated_at",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    }
                ]
                },
                "apiInfo": {
                "query": {
                    "queryNature": "UPDATE",
                    "queryPayload": "UPDATE Permissions SET permission_id = {{permission_id}}, permission_name = {{permission_name}}, status = {{status}}, updated_by = {{updated_by}}, created_at = {{created_at}}, updated_at = {{updated_at}} WHERE permission_id = {{permission_id}}",
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
                "successMessage": "Permissions updated successfully!",
                "errorMessage": "There was an error updating Permissions."
            }
            }]
        }
        }]
    }
    };


    global.DeletePermissions_object = {
    "versions": {
        "versionData": [{
        "=1.0": {
            "steps": [{
            "config": {
                "features": {
                "multistep": false,
                "parameters": true,
                "pagination": false
                },
                "communication": {
                    //"encryption": false,
                    "encryption": {
                        "platformEncryption": true,
                        "accessTokenEncryption": false,
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
                    "name": "permission_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    }
                ]
                },
                "apiInfo": {
                "query": {
                    "queryNature": "UPDATE",
                    "queryPayload": "UPDATE Permissions SET status = 'inactive' WHERE permission_id = {{permission_id}}",
                    "database": "projectDB"
                },
                "utilityFunctions": {
                    "callbackFunction": null,
                    "payloadFunction": []
                }
                },
                "requestMetaData": {
                "requestMethod": "DELETE",
                "permission": null,
                "pagination": {}
                }
            },
            "response": {
                "successMessage": "Permissions deleted successfully!",
                "errorMessage": "There was an error deleting Permissions."
            }
            }]
        }
        }]
    }
    };


    global.Addpermissions_object = {
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
                    //"encryption": false,
                    "encryption": {
                        "platformEncryption": true,
                        "accessTokenEncryption": false,
                    }
                },
                "verification": {
                "otp": false,
                "accessToken": true
                }
            },
            "data": {
                "parameters": {
                "fields": [
                    
                    {
                    "name": "permission_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "permission_name",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "status",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "updated_by",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "created_at",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "updated_at",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    }
                ]
                },
                "apiInfo": {
                "query": {
                    "queryNature": "INSERT",
                    "queryPayload": "INSERT INTO permissions (permission_id, permission_name, status, updated_by, created_at, updated_at) VALUES ({{permission_id}}, {{permission_name}}, {{status}}, {{updated_by}}, {{created_at}}, {{updated_at}})",
                    "database": "projectDB"
                },
                "utilityFunctions": {
                    "callbackFunction": null,
                    "payloadFunction": []
                }
                },
                "requestMetaData": {
                "requestMethod": "POST",
                "permission": null,
                "pagination": {}
                }
            },
            "response": {
                "successMessage": "permissions added successfully!",
                "errorMessage": "There was an error adding permissions."
            }
            }]
        }
        }]
    }
    };