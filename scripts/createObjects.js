const fs = require('fs');
const path = require('path');
const projectdb = require('../databases/projectDb');
const { executeQuery } = require('../databases/queryExecution');
// Database connection configuration
const dbConfig = {
  host: 'localhost',  // Replace with your DB host
  user: 'root',       // Replace with your DB user
  password: '',       // Replace with your DB password
  database: 'projectdb_new', // Replace with your DB name
};
// Helper function to convert snake_case to camelCase
const snakeToCamel = (str) => {
    return str.replace(/_([a-z])/g, (match, group1) => group1.toUpperCase());
  };
  
// Template for the API objects
const apiTemplates = {
    listAll: (table, columns, objectName) => {
        const aliasedColumns = columns.map(col => `${col.COLUMN_NAME} as ${table}_${snakeToCamel(col.COLUMN_NAME)}`).join(', ');
      
        return `
      global.List${objectName}All_object = {
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
                      "queryPayload": "SELECT ${aliasedColumns}, COUNT(*) OVER () AS table_count FROM ${table}",
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
                  "successMessage": "${table} retrieved successfully!",
                  "errorMessage": "Failed to retrieve ${table}."
                }
              }]
            }
          }]
        }
      };`;
      },
      
      listOne: (table, primaryKey, columns, objectName) => {
        const aliasedColumns = columns.map(col => `${col.COLUMN_NAME} as ${table}_${snakeToCamel(col.COLUMN_NAME)}`).join(', ');
      
        return `
      global.List${objectName}_object = {
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
                      "queryPayload": "SELECT ${aliasedColumns} FROM ${table} WHERE ${primaryKey} = {{id}}",
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
                  "successMessage": "${table} entry retrieved successfully!",
                  "errorMessage": "Failed to retrieve ${table} entry."
                }
              }]
            }
          }]
        }
      };`;
      },
      
      update: (table, primaryKey, columns,objectName) => {
        const setClause = columns.filter(col => !["status", "created_at", "updated_at"].includes(col.COLUMN_NAME)).map(col => `${col.COLUMN_NAME} = {{${table}_${snakeToCamel(col.COLUMN_NAME)}}}`).join(', ');
      
        return `
      global.Update${objectName}_object = {
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
                        ${columns
                            .filter(col => ![ "status", "created_at", "updated_at"].includes(col.COLUMN_NAME)) // Exclude specific columns
                            .map(col => `
                            {
                            "name": "${table}_${snakeToCamel(col.COLUMN_NAME)}",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }`).join(',')}
                    ]
                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "UPDATE",
                      "queryPayload": "UPDATE ${table} SET ${setClause} WHERE ${primaryKey} = {{${primaryKey}}}",
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
                  "successMessage": "${table} updated successfully!",
                  "errorMessage": "There was an error updating ${table}."
                }
              }]
            }
          }]
        }
      };`;
      },
      
    delete: (table, primaryKey,objectName) => `
    global.Delete${objectName}_object = {
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
                    "queryPayload": "UPDATE ${table} SET status = 'inactive' WHERE ${primaryKey} = {{id}}",
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
                "successMessage": "${table} deleted successfully!",
                "errorMessage": "There was an error deleting ${table}."
            }
            }]
        }
        }]
    }
    };`,

    add: (table, columns, primaryKey,objectName) => {
        return `
      global.Add${objectName}_object = {
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
                        ${columns
                            .filter(col => ![primaryKey, "status", "created_at", "updated_at"].includes(col.COLUMN_NAME)) // Exclude specific columns
                            .map(col => `
                            {
                            "name": "${table}_${snakeToCamel(col.COLUMN_NAME)}",
                            "validations": [],
                            "required": true,
                            "source": "req.body"
                            }`).join(',')}
                    ]

                  },
                  "apiInfo": {
                    "query": {
                      "queryNature": "INSERT",
                      "queryPayload": "INSERT INTO ${table} (${columns.filter(col => ![primaryKey, "status", "created_at", "updated_at"].includes(col.COLUMN_NAME)).map(col => col.COLUMN_NAME).join(', ')}) VALUES (${columns.map(col => `{{${col.COLUMN_NAME}}}`).join(', ')})",
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
                  "successMessage": "${table} added successfully!",
                  "errorMessage": "There was an error adding ${table}."
                }
              }]
            }
          }]
        }
      };`;
      },
      
      

};

// Helper function to capitalize the first letter of a string
const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

(async () => {
  try {
    let connection = await projectdb();
    const tables = await executeQuery(
      null,
      "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = ?",
      [dbConfig.database],
      connection
    );

    if (!fs.existsSync('Objects')) {
      fs.mkdirSync('Objects');
    }

    for (const { TABLE_NAME } of tables) {
      connection = await projectdb();
      const columns = await executeQuery(
        null,
        "SELECT COLUMN_NAME, COLUMN_KEY FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?",
        [dbConfig.database, TABLE_NAME],
        connection
      );

      const primaryKey = columns.find(col => col.COLUMN_KEY === 'PRI')?.COLUMN_NAME;

      if (!primaryKey) {
        console.warn(`No primary key found for table ${TABLE_NAME}. Skipping.`);
        continue;
      }

      // Capitalize table name for the object name
      const capitalizedTableName = capitalizeFirstLetter(TABLE_NAME);

      // Create folder for the table
      const tableFolder = path.join('Objects', capitalizedTableName);
      if (!fs.existsSync(tableFolder)) {
        fs.mkdirSync(tableFolder);
      }

      const fileName = path.join(tableFolder, `${capitalizedTableName}.js`);
      let fileContent = `
/* API Objects for table: ${TABLE_NAME} */
`;

      // Add listAll API template
      fileContent += apiTemplates.listAll(TABLE_NAME, columns, capitalizedTableName);
      fileContent += '\n\n';

      // Add listOne API template
      fileContent += apiTemplates.listOne(TABLE_NAME, primaryKey, columns, capitalizedTableName);
      fileContent += '\n\n';

      // Add update API template
      fileContent += apiTemplates.update(TABLE_NAME, primaryKey, columns, capitalizedTableName);
      fileContent += '\n\n';

      // Add delete API template
      fileContent += apiTemplates.delete(TABLE_NAME, primaryKey, capitalizedTableName);
      fileContent += '\n\n';

      // Add add API template
      fileContent += apiTemplates.add(TABLE_NAME, columns, primaryKey, capitalizedTableName);
      fileContent += '\n\n';

      // Write to file in the table's folder
      fs.writeFileSync(fileName, fileContent.trim(), 'utf8');
      console.log(`Generated API objects for table: ${capitalizedTableName}`);
    }

    console.log('All API objects generated successfully!');
  } catch (error) {
    console.error('Error generating API objects:', error);
  }
})();
