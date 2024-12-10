/* API Objects for table: attachments */

    global.ListAttachmentsAll_object = {
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
                    "queryPayload": "SELECT *, COUNT(*) OVER () AS table_count FROM Attachments",
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
                "successMessage": "Attachments retrieved successfully!",
                "errorMessage": "Failed to retrieve Attachments."
            }
            }]
        }
        }]
    }
    };


    global.ListAttachments_object = {
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
                    "queryPayload": "SELECT * FROM Attachments WHERE attachment_id = {{id}}",
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
                "successMessage": "Attachments entry retrieved successfully!",
                "errorMessage": "Failed to retrieve Attachments entry."
            }
            }]
        }
        }]
    }
    };


    global.UpdateAttachments_object = {
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
                    "name": "attachment_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    
                    {
                    "name": "attachment_id",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "attachment_name",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "attachment_type",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "attachment_size",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "attachment_link",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "uploaded_by_user_role_designation_department_id",
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
                    "queryPayload": "UPDATE Attachments SET attachment_id = {{attachment_id}}, attachment_name = {{attachment_name}}, attachment_type = {{attachment_type}}, attachment_size = {{attachment_size}}, attachment_link = {{attachment_link}}, uploaded_by_user_role_designation_department_id = {{uploaded_by_user_role_designation_department_id}}, status = {{status}}, updated_by = {{updated_by}}, created_at = {{created_at}}, updated_at = {{updated_at}} WHERE attachment_id = {{attachment_id}}",
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
                "successMessage": "Attachments updated successfully!",
                "errorMessage": "There was an error updating Attachments."
            }
            }]
        }
        }]
    }
    };


    global.DeleteAttachments_object = {
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
                    "name": "attachment_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    }
                ]
                },
                "apiInfo": {
                "query": {
                    "queryNature": "UPDATE",
                    "queryPayload": "UPDATE Attachments SET status = 'inactive' WHERE attachment_id = {{attachment_id}}",
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
                "successMessage": "Attachments deleted successfully!",
                "errorMessage": "There was an error deleting Attachments."
            }
            }]
        }
        }]
    }
    };


    global.Addattachments_object = {
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
                    "name": "attachment_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "attachment_name",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "attachment_type",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "attachment_size",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "attachment_link",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "uploaded_by_user_role_designation_department_id",
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
                    "queryPayload": "INSERT INTO attachments (attachment_id, attachment_name, attachment_type, attachment_size, attachment_link, uploaded_by_user_role_designation_department_id, status, updated_by, created_at, updated_at) VALUES ({{attachment_id}}, {{attachment_name}}, {{attachment_type}}, {{attachment_size}}, {{attachment_link}}, {{uploaded_by_user_role_designation_department_id}}, {{status}}, {{updated_by}}, {{created_at}}, {{updated_at}})",
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
                "successMessage": "attachments added successfully!",
                "errorMessage": "There was an error adding attachments."
            }
            }]
        }
        }]
    }
    };