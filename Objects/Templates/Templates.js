/* API Objects for table: templates */

    global.ListTemplatesAll_object = {
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
                    "queryPayload": "SELECT *, COUNT(*) OVER () AS table_count FROM Templates",
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
                "successMessage": "Templates retrieved successfully!",
                "errorMessage": "Failed to retrieve Templates."
            }
            }]
        }
        }]
    }
    };


    global.ListTemplates_object = {
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
                    "queryPayload": "SELECT * FROM Templates WHERE template_id = {{id}}",
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
                "successMessage": "Templates entry retrieved successfully!",
                "errorMessage": "Failed to retrieve Templates entry."
            }
            }]
        }
        }]
    }
    };


    global.UpdateTemplates_object = {
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
                    "name": "template_id",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "created_by_user_designation_department_id",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "template_type",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "template_title",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "template_body",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "template_desc",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "template_audience",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "template_department",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "list_of_attributes",
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
                    "queryPayload": "UPDATE Templates SET template_id = {{template_id}}, created_by_user_designation_department_id = {{created_by_user_designation_department_id}}, template_type = {{template_type}}, template_title = {{template_title}}, template_body = {{template_body}}, template_desc = {{template_desc}}, template_audience = {{template_audience}}, template_department = {{template_department}}, list_of_attributes = {{list_of_attributes}}, status = {{status}}, updated_by = {{updated_by}}, created_at = {{created_at}}, updated_at = {{updated_at}} WHERE template_id = {{template_id}}",
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
                "successMessage": "Templates updated successfully!",
                "errorMessage": "There was an error updating Templates."
            }
            }]
        }
        }]
    }
    };


    global.DeleteTemplates_object = {
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
                    "name": "template_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    }
                ]
                },
                "apiInfo": {
                "query": {
                    "queryNature": "UPDATE",
                    "queryPayload": "UPDATE Templates SET status = 'inactive' WHERE template_id = {{template_id}}",
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
                "successMessage": "Templates deleted successfully!",
                "errorMessage": "There was an error deleting Templates."
            }
            }]
        }
        }]
    }
    };


    global.Addtemplates_object = {
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
                    "name": "template_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "created_by_user_designation_department_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "template_type",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "template_title",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "template_body",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "template_desc",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "template_audience",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "template_department",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "list_of_attributes",
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
                    "queryPayload": "INSERT INTO templates (template_id, created_by_user_designation_department_id, template_type, template_title, template_body, template_desc, template_audience, template_department, list_of_attributes, status, updated_by, created_at, updated_at) VALUES ({{template_id}}, {{created_by_user_designation_department_id}}, {{template_type}}, {{template_title}}, {{template_body}}, {{template_desc}}, {{template_audience}}, {{template_department}}, {{list_of_attributes}}, {{status}}, {{updated_by}}, {{created_at}}, {{updated_at}})",
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
                "successMessage": "templates added successfully!",
                "errorMessage": "There was an error adding templates."
            }
            }]
        }
        }]
    }
    };