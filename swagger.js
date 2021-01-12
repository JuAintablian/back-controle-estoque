export const swaggerDocument = {
  "swagger": "2.0",
  "info": {
    "description": "API para consumo no projeto frontend Controle de estoque",
    "version": "1.0.0",
    "title": "API Controle de Estoque",
    "termsOfService": "http://swagger.io/terms/"
  },
  "host": "back-controle-estoque.herokuapp.com",
  "tags": [
    {
      "name": "product",
      "description": "Everything about Products"
    },
    {
      "name": "category",
      "description": "Everything about Category"
    },
    {
      "name": "order",
      "description": "Everything about Order"
    }
  ],
  "schemes": [
    "https",
    "http"
  ],
  "paths": {
    "/product": {
      "post": {
        "tags": [
          "product"
        ],
        "summary": "Add a new product",
        "description": "",
        "operationId": "createProduct",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Pet object that needs to be added to the store",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Product"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "500": {
            "description": "Internal server error"
          }
        }
      },
      "get": {
        "tags": [
          "product"
        ],
        "summary": "Get products list",
        "description": "",
        "operationId": "getProductsList",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "500": {
            "description": "Internal server error"
          }
        }
      }
    },
    "/product/repo": {
      "get": {
        "tags": [
          "product"
        ],
        "summary": "Get products replacement list",
        "description": "",
        "operationId": "getProductsRepo",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "qtd": "number",
            "name": "qtd",
            "description": "Quantity max to replacement",
            "required": true,
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "404": {
            "description": "Not found"
          },
          "500": {
            "description": "Internal server error"
          }
        }
      },
    },
    "/product/{productId}": {
      "get": {
        "tags": [
          "product"
        ],
        "summary": "Get products list",
        "description": "",
        "operationId": "getProductsById",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "productId",
            "in": "path",
            "description": "ID of product to return",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "404": {
            "description": "Not found"
          },
          "500": {
            "description": "Internal server error"
          }
        }
      },
      "patch": {
        "tags": [
          "product"
        ],
        "summary": "Add a new product",
        "description": "",
        "operationId": "editProduct",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "productId",
            "in": "path",
            "description": "name that need to be updated",
            "required": true,
            "type": "string"
          },
          {
            "in": "body",
            "name": "body",
            "description": "Updated user object",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Product"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "500": {
            "description": "Internal server error"
          }
        }
      },
      "delete": {
        "tags": [
          "product"
        ],
        "summary": "Deletes a product",
        "description": "",
        "operationId": "deleteProduct",
        "produces": [
          "application/xml",
          "application/json"
        ],
        "parameters": [
          {
            "name": "api_key",
            "in": "header",
            "required": false,
            "type": "string"
          },
          {
            "name": "productId",
            "in": "path",
            "description": "Product id to delete",
            "required": true,
            "type": "integer"
          }
        ],
        "responses": {
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "Product not found"
          }
        }
      }
    },
    "/category": {
      "post": {
        "tags": [
          "category"
        ],
        "summary": "Add a new category",
        "description": "",
        "operationId": "createCategory",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Category object that needs to be added to the store",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Category"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "500": {
            "description": "Internal server error"
          }
        }
      },
      "get": {
        "tags": [
          "category"
        ],
        "summary": "Get categories list",
        "description": "",
        "operationId": "getCategoriesList",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "500": {
            "description": "Internal server error"
          }
        }
      }
    },
    "/category/{categoryId}": {
      "get": {
        "tags": [
          "category"
        ],
        "summary": "Get category by id",
        "description": "",
        "operationId": "getCategoryById",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "categoryId",
            "in": "path",
            "description": "ID of category to return",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "404": {
            "description": "Not found"
          },
          "500": {
            "description": "Internal server error"
          }
        }
      },
      "patch": {
        "tags": [
          "category"
        ],
        "summary": "Add a new category",
        "description": "",
        "operationId": "editCategory",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "categoryId",
            "in": "path",
            "description": "name that need to be updated",
            "required": true,
            "type": "string"
          },
          {
            "in": "body",
            "name": "body",
            "description": "",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Product"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "500": {
            "description": "Internal server error"
          }
        }
      },
      "delete": {
        "tags": [
          "category"
        ],
        "summary": "Deletes a category",
        "description": "",
        "operationId": "deleteCategory",
        "produces": [
          "application/xml",
          "application/json"
        ],
        "parameters": [
          {
            "name": "api_key",
            "in": "header",
            "required": false,
            "type": "string"
          },
          {
            "name": "categoryId",
            "in": "path",
            "description": "Category id to delete",
            "required": true,
            "type": "integer"
          }
        ],
        "responses": {
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "Product not found"
          }
        }
      }
    }
  },
  "definitions": {
    "Order": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "products": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Product"
          }
        },
        "orderDate": {
          "type": "string",
          "format": "date-time"
        },
        "paymentForm": {
          "type": "string",
          "example": "Débito"
        }
      },
      "xml": {
        "name": "Order"
      }
    },
    "Category": {
      "type": "object",
      "required": [
        "name"
      ],
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string",
          "example": "Categoria 1"
        }
      }
    },
    "Product": {
      "type": "object",
      "required": [
        "name",
        "category",
        "price",
        "quantity"
      ],
      "properties": {
        "id": {
          "type": "string",
        },
        "name": {
          "type": "string",
          "example": "Produto 1"
        },
        "category": {
          "type": "string",
          "example": "Categoria 1"
        },
        "price": {
          "type": "number",
          "example": 30
        },
        "quantity": {
          "type": "number",
          "example": 100
        }
      }
    }
  }
}