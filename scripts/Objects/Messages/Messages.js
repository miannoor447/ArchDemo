/* API Objects for table: messages */

    global.ListMessagesAll_object = {
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
                    "queryPayload": "SELECT *, COUNT(*) OVER () AS table_count FROM Messages",
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
                "successMessage": "Messages retrieved successfully!",
                "errorMessage": "Failed to retrieve Messages."
            }
            }]
        }
        }]
    }
    };


    global.ListMessages_object = {
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
                    "queryPayload": "SELECT * FROM Messages WHERE message_id = {{id}}",
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
                "successMessage": "Messages entry retrieved successfully!",
                "errorMessage": "Failed to retrieve Messages entry."
            }
            }]
        }
        }]
    }
    };


    global.UpdateMessages_object = {
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
                    "name": "message_id",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "sent_by_user_role_department_id",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "recepient_user_role_department_id",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "recepient_chatting_group_id",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "message_title",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "message_body",
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
                    "name": "updated_at",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "created_by",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    }
                ]
                },
                "apiInfo": {
                "query": {
                    "queryNature": "UPDATE",
                    "queryPayload": "UPDATE Messages SET message_id = {{message_id}}, sent_by_user_role_department_id = {{sent_by_user_role_department_id}}, recepient_user_role_department_id = {{recepient_user_role_department_id}}, recepient_chatting_group_id = {{recepient_chatting_group_id}}, message_title = {{message_title}}, message_body = {{message_body}}, attachement_id = {{attachement_id}}, status = {{status}}, updated_by = {{updated_by}}, updated_at = {{updated_at}}, created_by = {{created_by}} WHERE message_id = {{message_id}}",
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
                "successMessage": "Messages updated successfully!",
                "errorMessage": "There was an error updating Messages."
            }
            }]
        }
        }]
    }
    };


    global.DeleteMessages_object = {
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
                    "name": "message_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    }
                ]
                },
                "apiInfo": {
                "query": {
                    "queryNature": "UPDATE",
                    "queryPayload": "UPDATE Messages SET status = 'inactive' WHERE message_id = {{message_id}}",
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
                "successMessage": "Messages deleted successfully!",
                "errorMessage": "There was an error deleting Messages."
            }
            }]
        }
        }]
    }
    };


    global.Addmessages_object = {
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
                    "name": "message_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "sent_by_user_role_department_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "recepient_user_role_department_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "recepient_chatting_group_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "message_title",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "message_body",
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
                    "name": "updated_at",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "created_by",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    }
                ]
                },
                "apiInfo": {
                "query": {
                    "queryNature": "INSERT",
                    "queryPayload": "INSERT INTO messages (message_id, sent_by_user_role_department_id, recepient_user_role_department_id, recepient_chatting_group_id, message_title, message_body, attachement_id, status, updated_by, updated_at, created_by) VALUES ({{message_id}}, {{sent_by_user_role_department_id}}, {{recepient_user_role_department_id}}, {{recepient_chatting_group_id}}, {{message_title}}, {{message_body}}, {{attachement_id}}, {{status}}, {{updated_by}}, {{updated_at}}, {{created_by}})",
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
                "successMessage": "messages added successfully!",
                "errorMessage": "There was an error adding messages."
            }
            }]
        }
        }]
    }
    };