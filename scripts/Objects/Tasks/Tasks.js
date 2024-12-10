/* API Objects for table: tasks */

    global.ListTasksAll_object = {
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
                    "queryPayload": "SELECT *, COUNT(*) OVER () AS table_count FROM Tasks",
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
                "successMessage": "Tasks retrieved successfully!",
                "errorMessage": "Failed to retrieve Tasks."
            }
            }]
        }
        }]
    }
    };


    global.ListTasks_object = {
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
                    "queryPayload": "SELECT * FROM Tasks WHERE task_id = {{id}}",
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
                "successMessage": "Tasks entry retrieved successfully!",
                "errorMessage": "Failed to retrieve Tasks entry."
            }
            }]
        }
        }]
    }
    };


    global.UpdateTasks_object = {
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
                    "name": "task_id",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "task_title",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "task_description",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "parent_task_id",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "attachement_id",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "task_flow_id",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "task_assigned_to_user_role_designation_department_id",
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
                    "name": "created_by_user_role_designation_department_id",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "updated_at",
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
                    "name": "updated_by",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    }
                ]
                },
                "apiInfo": {
                "query": {
                    "queryNature": "UPDATE",
                    "queryPayload": "UPDATE Tasks SET task_id = {{task_id}}, task_title = {{task_title}}, task_description = {{task_description}}, parent_task_id = {{parent_task_id}}, attachement_id = {{attachement_id}}, task_flow_id = {{task_flow_id}}, task_assigned_to_user_role_designation_department_id = {{task_assigned_to_user_role_designation_department_id}}, status = {{status}}, created_by_user_role_designation_department_id = {{created_by_user_role_designation_department_id}}, updated_at = {{updated_at}}, created_at = {{created_at}}, updated_by = {{updated_by}} WHERE task_id = {{task_id}}",
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
                "successMessage": "Tasks updated successfully!",
                "errorMessage": "There was an error updating Tasks."
            }
            }]
        }
        }]
    }
    };


    global.DeleteTasks_object = {
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
                    "name": "task_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    }
                ]
                },
                "apiInfo": {
                "query": {
                    "queryNature": "UPDATE",
                    "queryPayload": "UPDATE Tasks SET status = 'inactive' WHERE task_id = {{task_id}}",
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
                "successMessage": "Tasks deleted successfully!",
                "errorMessage": "There was an error deleting Tasks."
            }
            }]
        }
        }]
    }
    };


    global.Addtasks_object = {
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
                    "name": "task_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "task_title",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "task_description",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "parent_task_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "attachement_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "task_flow_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "task_assigned_to_user_role_designation_department_id",
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
                    "name": "created_by_user_role_designation_department_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "updated_at",
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
                    "name": "updated_by",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    }
                ]
                },
                "apiInfo": {
                "query": {
                    "queryNature": "INSERT",
                    "queryPayload": "INSERT INTO tasks (task_id, task_title, task_description, parent_task_id, attachement_id, task_flow_id, task_assigned_to_user_role_designation_department_id, status, created_by_user_role_designation_department_id, updated_at, created_at, updated_by) VALUES ({{task_id}}, {{task_title}}, {{task_description}}, {{parent_task_id}}, {{attachement_id}}, {{task_flow_id}}, {{task_assigned_to_user_role_designation_department_id}}, {{status}}, {{created_by_user_role_designation_department_id}}, {{updated_at}}, {{created_at}}, {{updated_by}})",
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
                "successMessage": "tasks added successfully!",
                "errorMessage": "There was an error adding tasks."
            }
            }]
        }
        }]
    }
    };