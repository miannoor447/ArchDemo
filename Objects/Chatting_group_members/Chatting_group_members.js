/* API Objects for table: chatting_group_members */

    global.ListChatting_group_membersAll_object = {
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
                    "queryPayload": "SELECT *, COUNT(*) OVER () AS table_count FROM Chatting_group_members",
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
                "successMessage": "Chatting_group_members retrieved successfully!",
                "errorMessage": "Failed to retrieve Chatting_group_members."
            }
            }]
        }
        }]
    }
    };


    global.ListChatting_group_members_object = {
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
                    "queryPayload": "SELECT * FROM Chatting_group_members WHERE chatting_group_member_id = {{id}}",
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
                "successMessage": "Chatting_group_members entry retrieved successfully!",
                "errorMessage": "Failed to retrieve Chatting_group_members entry."
            }
            }]
        }
        }]
    }
    };


    global.UpdateChatting_group_members_object = {
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
                    "name": "chatting_group_member_id",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "chatting_group_id",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "user_role_designation_department_id",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "chatting_group_permission_id",
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
                    "queryPayload": "UPDATE Chatting_group_members SET chatting_group_member_id = {{chatting_group_member_id}}, chatting_group_id = {{chatting_group_id}}, user_role_designation_department_id = {{user_role_designation_department_id}}, chatting_group_permission_id = {{chatting_group_permission_id}}, status = {{status}}, updated_by = {{updated_by}}, created_at = {{created_at}}, updated_at = {{updated_at}} WHERE chatting_group_member_id = {{chatting_group_member_id}}",
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
                "successMessage": "Chatting_group_members updated successfully!",
                "errorMessage": "There was an error updating Chatting_group_members."
            }
            }]
        }
        }]
    }
    };


    global.DeleteChatting_group_members_object = {
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
                    "name": "chatting_group_member_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    }
                ]
                },
                "apiInfo": {
                "query": {
                    "queryNature": "UPDATE",
                    "queryPayload": "UPDATE Chatting_group_members SET status = 'inactive' WHERE chatting_group_member_id = {{chatting_group_member_id}}",
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
                "successMessage": "Chatting_group_members deleted successfully!",
                "errorMessage": "There was an error deleting Chatting_group_members."
            }
            }]
        }
        }]
    }
    };


    global.Addchatting_group_members_object = {
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
                    "name": "chatting_group_member_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "chatting_group_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "user_role_designation_department_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "chatting_group_permission_id",
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
                    "queryPayload": "INSERT INTO chatting_group_members (chatting_group_member_id, chatting_group_id, user_role_designation_department_id, chatting_group_permission_id, status, updated_by, created_at, updated_at) VALUES ({{chatting_group_member_id}}, {{chatting_group_id}}, {{user_role_designation_department_id}}, {{chatting_group_permission_id}}, {{status}}, {{updated_by}}, {{created_at}}, {{updated_at}})",
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
                "successMessage": "chatting_group_members added successfully!",
                "errorMessage": "There was an error adding chatting_group_members."
            }
            }]
        }
        }]
    }
    };