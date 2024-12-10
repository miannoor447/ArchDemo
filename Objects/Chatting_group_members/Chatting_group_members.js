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
                      "queryPayload": "SELECT chatting_group_member_id as chatting_group_members_chattingGroupMemberId, chatting_group_id as chatting_group_members_chattingGroupId, user_role_designation_department_id as chatting_group_members_userRoleDesignationDepartmentId, chatting_group_permission_id as chatting_group_members_chattingGroupPermissionId, status as chatting_group_members_status, updated_by as chatting_group_members_updatedBy, created_at as chatting_group_members_createdAt, updated_at as chatting_group_members_updatedAt, COUNT(*) OVER () AS table_count FROM chatting_group_members",
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
                  "successMessage": "chatting_group_members retrieved successfully!",
                  "errorMessage": "Failed to retrieve chatting_group_members."
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
                      "queryPayload": "SELECT chatting_group_member_id as chatting_group_members_chattingGroupMemberId, chatting_group_id as chatting_group_members_chattingGroupId, user_role_designation_department_id as chatting_group_members_userRoleDesignationDepartmentId, chatting_group_permission_id as chatting_group_members_chattingGroupPermissionId, status as chatting_group_members_status, updated_by as chatting_group_members_updatedBy, created_at as chatting_group_members_createdAt, updated_at as chatting_group_members_updatedAt FROM chatting_group_members WHERE chatting_group_member_id = {{id}}",
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
                  "successMessage": "chatting_group_members entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve chatting_group_members entry."
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
                            "name": "chatting_group_members_chattingGroupMemberId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "chatting_group_members_chattingGroupId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "chatting_group_members_userRoleDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "chatting_group_members_chattingGroupPermissionId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "chatting_group_members_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE chatting_group_members SET chatting_group_member_id = {{chatting_group_members_chattingGroupMemberId}}, chatting_group_id = {{chatting_group_members_chattingGroupId}}, user_role_designation_department_id = {{chatting_group_members_userRoleDesignationDepartmentId}}, chatting_group_permission_id = {{chatting_group_members_chattingGroupPermissionId}}, updated_by = {{chatting_group_members_updatedBy}} WHERE chatting_group_member_id = {{chatting_group_member_id}}",
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
                  "successMessage": "chatting_group_members updated successfully!",
                  "errorMessage": "There was an error updating chatting_group_members."
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
                    "queryPayload": "UPDATE chatting_group_members SET status = 'inactive' WHERE chatting_group_member_id = {{id}}",
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
                "successMessage": "chatting_group_members deleted successfully!",
                "errorMessage": "There was an error deleting chatting_group_members."
            }
            }]
        }
        }]
    }
    };


      global.AddChatting_group_members_object = {
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
                            "name": "chatting_group_members_chattingGroupId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "chatting_group_members_userRoleDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "chatting_group_members_chattingGroupPermissionId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "chatting_group_members_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]

                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "INSERT",
                      "queryPayload": "INSERT INTO chatting_group_members (chatting_group_id, user_role_designation_department_id, chatting_group_permission_id, updated_by) VALUES ({{chatting_group_member_id}}, {{chatting_group_id}}, {{user_role_designation_department_id}}, {{chatting_group_permission_id}}, {{status}}, {{updated_by}}, {{created_at}}, {{updated_at}})",
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