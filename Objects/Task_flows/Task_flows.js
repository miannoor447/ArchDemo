/* API Objects for table: task_flows */

      global.ListTask_flowsAll_object = {
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
                      "queryPayload": "SELECT task_flow_id as Task_flows_taskFlowId, task_flow_title as Task_flows_taskFlowTitle, task_flow_description as Task_flows_taskFlowDescription, is_default as Task_flows_isDefault, status as Task_flows_status, created_by_user_role_designation_department_id as Task_flows_createdByUserRoleDesignationDepartmentId, updated_at as Task_flows_updatedAt, created_at as Task_flows_createdAt, updated_by as Task_flows_updatedBy, COUNT(*) OVER () AS table_count FROM Task_flows",
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
                  "successMessage": "Task_flows retrieved successfully!",
                  "errorMessage": "Failed to retrieve Task_flows."
                }
              }]
            }
          }]
        }
      };


      global.ListTask_flows_object = {
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
                      "queryPayload": "SELECT task_flow_id as Task_flows_taskFlowId, task_flow_title as Task_flows_taskFlowTitle, task_flow_description as Task_flows_taskFlowDescription, is_default as Task_flows_isDefault, status as Task_flows_status, created_by_user_role_designation_department_id as Task_flows_createdByUserRoleDesignationDepartmentId, updated_at as Task_flows_updatedAt, created_at as Task_flows_createdAt, updated_by as Task_flows_updatedBy FROM Task_flows WHERE task_flow_id = {{id}}",
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
                  "successMessage": "Task_flows entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve Task_flows entry."
                }
              }]
            }
          }]
        }
      };


      global.UpdateTask_flows_object = {
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
                            "name": "Task_flows_taskFlowTitle",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Task_flows_taskFlowDescription",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Task_flows_isDefault",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Task_flows_createdByUserRoleDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "Task_flows_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE Task_flows SET task_flow_title = {{Task_flows_taskFlowTitle}}, task_flow_description = {{Task_flows_taskFlowDescription}}, is_default = {{Task_flows_isDefault}}, created_by_user_role_designation_department_id = {{Task_flows_createdByUserRoleDesignationDepartmentId}}, updated_by = {{Task_flows_updatedBy}} WHERE task_flow_id = {{task_flow_id}}",
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
                  "successMessage": "Task_flows updated successfully!",
                  "errorMessage": "There was an error updating Task_flows."
                }
              }]
            }
          }]
        }
      };


    global.DeleteTask_flows_object = {
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
                    "queryPayload": "UPDATE Task_flows SET status = 'inactive' WHERE task_flow_id = {{id}}",
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
                "successMessage": "Task_flows deleted successfully!",
                "errorMessage": "There was an error deleting Task_flows."
            }
            }]
        }
        }]
    }
    };


      global.Addtask_flows_object = {
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
                            "name": "task_flows_taskFlowTitle",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "task_flows_taskFlowDescription",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "task_flows_isDefault",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "task_flows_createdByUserRoleDesignationDepartmentId",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            },
                            {
                            "name": "task_flows_updatedBy",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }
                    ]

                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "INSERT",
                      "queryPayload": "INSERT INTO task_flows (task_flow_title, task_flow_description, is_default, created_by_user_role_designation_department_id, updated_by) VALUES ({{task_flow_id}}, {{task_flow_title}}, {{task_flow_description}}, {{is_default}}, {{status}}, {{created_by_user_role_designation_department_id}}, {{updated_at}}, {{created_at}}, {{updated_by}})",
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
                  "successMessage": "task_flows added successfully!",
                  "errorMessage": "There was an error adding task_flows."
                }
              }]
            }
          }]
        }
      };