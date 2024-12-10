/* API Objects for table: permission_groups_permissions */

      global.ListPermission_groups_permissionsAll_object = {
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
                      "queryPayload": "SELECT permission_group_permission_id as permission_groups_permissions_permissionGroupPermissionId, group_id as permission_groups_permissions_groupId, permission_id as permission_groups_permissions_permissionId, status as permission_groups_permissions_status, updated_by as permission_groups_permissions_updatedBy, updated_at as permission_groups_permissions_updatedAt, created_at as permission_groups_permissions_createdAt, COUNT(*) OVER () AS table_count FROM permission_groups_permissions",
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
                  "successMessage": "permission_groups_permissions retrieved successfully!",
                  "errorMessage": "Failed to retrieve permission_groups_permissions."
                }
              }]
            }
          }]
        }
      };


      global.ListPermission_groups_permissions_object = {
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
                      "queryPayload": "SELECT permission_group_permission_id as permission_groups_permissions_permissionGroupPermissionId, group_id as permission_groups_permissions_groupId, permission_id as permission_groups_permissions_permissionId, status as permission_groups_permissions_status, updated_by as permission_groups_permissions_updatedBy, updated_at as permission_groups_permissions_updatedAt, created_at as permission_groups_permissions_createdAt FROM permission_groups_permissions WHERE permission_group_permission_id = {{id}}",
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
                  "successMessage": "permission_groups_permissions entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve permission_groups_permissions entry."
                }
              }]
            }
          }]
        }
      };


      global.UpdatePermission_groups_permissions_object = {
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
                            "name": "permission_groups_permissions_permissionGroupPermissionId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "permission_groups_permissions_groupId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "permission_groups_permissions_permissionId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "permission_groups_permissions_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE permission_groups_permissions SET permission_group_permission_id = {{permission_groups_permissions_permissionGroupPermissionId}}, group_id = {{permission_groups_permissions_groupId}}, permission_id = {{permission_groups_permissions_permissionId}}, updated_by = {{permission_groups_permissions_updatedBy}} WHERE permission_group_permission_id = {{permission_group_permission_id}}",
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
                  "successMessage": "permission_groups_permissions updated successfully!",
                  "errorMessage": "There was an error updating permission_groups_permissions."
                }
              }]
            }
          }]
        }
      };


    global.DeletePermission_groups_permissions_object = {
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
                    "queryPayload": "UPDATE permission_groups_permissions SET status = 'inactive' WHERE permission_group_permission_id = {{id}}",
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
                "successMessage": "permission_groups_permissions deleted successfully!",
                "errorMessage": "There was an error deleting permission_groups_permissions."
            }
            }]
        }
        }]
    }
    };


      global.AddPermission_groups_permissions_object = {
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
                            "name": "permission_groups_permissions_groupId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "permission_groups_permissions_permissionId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "permission_groups_permissions_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]

                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "INSERT",
                      "queryPayload": "INSERT INTO permission_groups_permissions (group_id, permission_id, updated_by) VALUES ({{permission_group_permission_id}}, {{group_id}}, {{permission_id}}, {{status}}, {{updated_by}}, {{updated_at}}, {{created_at}})",
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
                  "successMessage": "permission_groups_permissions added successfully!",
                  "errorMessage": "There was an error adding permission_groups_permissions."
                }
              }]
            }
          }]
        }
      };