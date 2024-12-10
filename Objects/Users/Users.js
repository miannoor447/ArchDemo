/* API Objects for table: users */

    global.ListUsersAll_object = {
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
                    "queryPayload": "SELECT *, COUNT(*) OVER () AS table_count FROM Users",
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
                "successMessage": "Users retrieved successfully!",
                "errorMessage": "Failed to retrieve Users."
            }
            }]
        }
        }]
    }
    };


    global.ListUsers_object = {
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
                    "queryPayload": "SELECT * FROM Users WHERE user_id = {{id}}",
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
                "successMessage": "Users entry retrieved successfully!",
                "errorMessage": "Failed to retrieve Users entry."
            }
            }]
        }
        }]
    }
    };


    global.UpdateUsers_object = {
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
                    "name": "user_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    
                    {
                    "name": "user_id",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "email",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "first_name",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "last_name",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "phone_no",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "cnic",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "gender",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "father_name",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "image_attachment_id",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "address",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "date_of_birth",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "blood_group",
                    "validations": [],
                    "required": false,
                    "source": "req.body"
                    },
                    {
                    "name": "religion",
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
                    "queryPayload": "UPDATE Users SET user_id = {{user_id}}, email = {{email}}, first_name = {{first_name}}, last_name = {{last_name}}, phone_no = {{phone_no}}, cnic = {{cnic}}, gender = {{gender}}, father_name = {{father_name}}, image_attachment_id = {{image_attachment_id}}, address = {{address}}, date_of_birth = {{date_of_birth}}, blood_group = {{blood_group}}, religion = {{religion}}, status = {{status}}, updated_by = {{updated_by}}, created_at = {{created_at}}, updated_at = {{updated_at}} WHERE user_id = {{user_id}}",
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
                "successMessage": "Users updated successfully!",
                "errorMessage": "There was an error updating Users."
            }
            }]
        }
        }]
    }
    };


    global.DeleteUsers_object = {
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
                    "name": "user_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    }
                ]
                },
                "apiInfo": {
                "query": {
                    "queryNature": "UPDATE",
                    "queryPayload": "UPDATE Users SET status = 'inactive' WHERE user_id = {{user_id}}",
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
                "successMessage": "Users deleted successfully!",
                "errorMessage": "There was an error deleting Users."
            }
            }]
        }
        }]
    }
    };


    global.Addusers_object = {
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
                    "name": "user_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "email",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "first_name",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "last_name",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "phone_no",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "cnic",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "gender",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "father_name",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "image_attachment_id",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "address",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "date_of_birth",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "blood_group",
                    "validations": [],
                    "required": true,
                    "source": "req.body"
                    },
                    {
                    "name": "religion",
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
                    "queryPayload": "INSERT INTO users (user_id, email, first_name, last_name, phone_no, cnic, gender, father_name, image_attachment_id, address, date_of_birth, blood_group, religion, status, updated_by, created_at, updated_at) VALUES ({{user_id}}, {{email}}, {{first_name}}, {{last_name}}, {{phone_no}}, {{cnic}}, {{gender}}, {{father_name}}, {{image_attachment_id}}, {{address}}, {{date_of_birth}}, {{blood_group}}, {{religion}}, {{status}}, {{updated_by}}, {{created_at}}, {{updated_at}})",
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
                "successMessage": "users added successfully!",
                "errorMessage": "There was an error adding users."
            }
            }]
        }
        }]
    }
    };