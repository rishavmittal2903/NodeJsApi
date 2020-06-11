export const swaggerDocumentation= {
    
    "swagger": "2.0",
    "info": {
      "description": "UI defination documentation.",
      "version": "1.0.0",
      "title": "UI defination documentation",
      "contact": {
        "email": "no-reply@jda.com"
      }
      
    },
    "tags": [
      {
        "name": "UI Defination from json schema",
        "description": "Normalized json schema and create UI Defination"
      },
      {
        "name":"Get OAuth token",
        "description":"OAuth token for validate the api"
      }
    ],
    "schemes": [
      "https",
      "http"
    ],
    "paths": {
      "/Entity/getUIDefination": {
        "get": {
          "tags": [
            "UI Defination from json schema"
          ],
          "summary": "Get simplified UI Defination from json schema",
          "description": "Return simplified json object",
          "operationId": "getUIDefination",
          "consumes": [
            "application/json",
            "application/xml"
          ],
          "produces": [
            "application/xml",
            "application/json"
          ],
          "responses": {
            "400": {
              "description": "Invalid status value"
            },
            "405": {
              "description": "Invalid input"
            },
            "200":{
              "description":"Success"
            }
          },
          
        }
      },
      "/Entity/pageConfig/{tenantId}": {
        "get": {
          "tags": [
            "UI Defination from json schema"
          ],
          "summary": "Get page config for specific tenant id",
          "description": "Get page config for specific tenant id",
          "operationId": "pageConfig/{tenantId}",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "name": "tenantId",
              "in": "path",
              "description": "tenantId",
              "required": true,
              "type": "string",
              "example": "xxxxxxxxxx"
            }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "type": "object"
              }
            },
            "400": {
              "description": "Invalid status value"
            },"405": {
              "description": "Invalid input"
            },
          }
        }
      },
      "/Entity/pageConfig/{existingTenantId}": {
        "put": {
          "tags": [
            "UI Defination from json schema"
          ],
          "summary": "Update page config for existing tenant id",
          "description": "Update page config for existing tenant id",
          "operationId": "pageConfig/{existingTenantId}",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "name": "existingTenantId",
              "in": "path",
              "description": "existing TenantId",
              "required": true,
              "type": "string",
              "example": "xxxxxxxxxx"
            }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "type": "object"
              }
            },
            "400": {
              "description": "Invalid status value"
            },"405": {
              "description": "Invalid input"
            },
          }
        }
      },
      "/Entity/pageConfig": {
        "post": {
          "tags": [
            "UI Defination from json schema"
          ],
          "summary": "Insert page config into database",
          "description": "Insert page config into database",
          "operationId": "pageConfig",
          "consumes": [
            "application/json",
            "application/xml"
          ],
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Payment data object",
              "required": true
            }
          ],
          "responses": {
            "405": {
              "description": "Invalid input"
            }
          },
          
        }
      },
      "/token/getToken": {
        "get": {
          "tags": [
            "Get OAuth token"
          ],
          "summary": "Get OAuth token",
          "description": "Get OAuth token",
          "operationId": "getToken",
          "consumes": [
            "application/json",
            "application/xml"
          ],
          "produces": [
            "application/xml",
            "application/json"
          ],
          "responses": {
            "400": {
              "description": "Invalid status value"
            },
            "405": {
              "description": "Invalid input"
            },
            "200":{
              "description":"Success"
            }
          },
          
        }
      },
      
    }
  }