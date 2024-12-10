/* API Objects for table: user_role_designation_permissions */

      global.ListUser_role_designation_permissionsAll_object = {
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
                    //"encryption" : false
                    "encryption": {
                      "platformEncryption" : true,
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
                      "queryPayload": "SELECT user_role_designation_permission_id as User_role_designation_permissions_userRoleDesignationPermissionId, user_role_designation_department_id as User_role_designation_permissions_userRoleDesignationDepartmentId, permission_id as User_role_designation_permissions_permissionId, status as User_role_designation_permissions_status, updated_by as User_role_designation_permissions_updatedBy, updated_at as User_role_designation_permissions_updatedAt, created_at as User_role_designation_permissions_createdAt, COUNT(*) OVER () AS table_count FROM User_role_designation_permissions",
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
                  "successMessage": "User_role_designation_permissions retrieved successfully!",
                  "errorMessage": "Failed to retrieve User_role_designation_permissions."
                }
              }]
            }
          }]
        }
      };


      global.ListUser_role_designation_permissions_object = {
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
                    //"encryption" : false
                    "encryption": {
                      "platformEncryption" : true,
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
                      "queryPayload": "SELECT user_role_designation_permission_id as User_role_designation_permissions_userRoleDesignationPermissionId, user_role_designation_department_id as User_role_designation_permissions_userRoleDesignationDepartmentId, permission_id as User_role_designation_permissions_permissionId, status as User_role_designation_permissions_status, updated_by as User_role_designation_permissions_updatedBy, updated_at as User_role_designation_permissions_updatedAt, created_at as User_role_designation_permissions_createdAt FROM User_role_designation_permissions WHERE user_role_designation_permission_id = {{id}}",
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
                  "successMessage": "User_role_designation_permissions entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve User_role_designation_permissions entry."
                }
              }]
            }
          }]
        }
      };


      global.UpdateUser_role_designation_permissions_object = {
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
                    //"encryption" : false
                    "encryption": {
                      "platformEncryption" : true,
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
                            "name": "User_role_designation_permissions_userRoleDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "User_role_designation_permissions_permissionId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "User_role_designation_permissions_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE User_role_designation_permissions SET user_role_designation_department_id = {{User_role_designation_permissions_userRoleDesignationDepartmentId}}, permission_id = {{User_role_designation_permissions_permissionId}}, updated_by = {{User_role_designation_permissions_updatedBy}} WHERE user_role_designation_permission_id = {{user_role_designation_permission_id}}",
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
                  "successMessage": "User_role_designation_permissions updated successfully!",
                  "errorMessage": "There was an error updating User_role_designation_permissions."
                }
              }]
            }
          }]
        }
      };


    global.DeleteUser_role_designation_permissions_object = {
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
                    "source": "req.body"
                    }
                ]
                },
                "apiInfo": {
                "query": {
                    "queryNature": "UPDATE",
                    "queryPayload": "UPDATE User_role_designation_permissions SET status = 'inactive' WHERE user_role_designation_permission_id = {{id}}",
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
                "successMessage": "User_role_designation_permissions deleted successfully!",
                "errorMessage": "There was an error deleting User_role_designation_permissions."
            }
            }]
        }
        }]
    }
    };


      global.Adduser_role_designation_permissions_object = {
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
                    "encryption": {
                      "platformEncryption": true,
                      "accessTokenEncryption": false
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
                            "name": "user_role_designation_permissions_userRoleDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_role_designation_permissions_permissionId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "user_role_designation_permissions_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]

                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "INSERT",
                      "queryPayload": "INSERT INTO user_role_designation_permissions (user_role_designation_department_id, permission_id, updated_by) VALUES ({{user_role_designation_permission_id}}, {{user_role_designation_department_id}}, {{permission_id}}, {{status}}, {{updated_by}}, {{updated_at}}, {{created_at}})",
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
                  "successMessage": "user_role_designation_permissions added successfully!",
                  "errorMessage": "There was an error adding user_role_designation_permissions."
                }
              }]
            }
          }]
        }
      };