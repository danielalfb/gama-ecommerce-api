# GAMA ACADEMY E-COMMERCE - REST API

API construída como mockup para a integração de um sistema de gerenciamento de e-commerce.

## Dependências

Esta aplicação tem como dependência:

- ExpressJS
- Nodemon

## Clonando o repositório

No cmd, navegue até o diretório em que deseja clonar o repositório.

Dentro do diretório, utilize o comando:

```
$ git clone https://github.com/danielalfb/gama-ecommerce-api.git
```

## Instalando as dependências

    npm install

## Executando a aplicação

    INSERIR

# REST API

A REST API construída esta especificada abaixo.

## **Host e porta**

<localhost:3000>

## **Métodos**

### **Método 1: GET**

Retorna a lista de todos os produtos existentes.

### **URL**

`/produtos`

### **Requisição**

`/produtos`

### **Resposta de sucesso**

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-200%20OK-brightgreen)

- Conteúdo:

  ```json
  [
    {
      "produto": 1
    },
    {
      "produto": 2
    },
    {
      "produto": 3
    },
    {
      "produto": 4
    }
  ]
  ```

### **Resposta de erro**

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-404%20NOT%20FOUND-red)

- Conteúdo:

  ```json
  {
    "error": "Não existem produtos cadastrados."
  }
  ```

---

### **Método 2: GET**

Retorna os detalhes de 1 único produto.

### **URL**

`/produtos/{id}`

### **Parâmetro de requisição na URL**

`id=[INTEGER]`

### **Parâmetro de requisição no BODY**

Nenhum

### **Requisição**

`/produtos/1`

### **Resposta de sucesso**

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-200%20OK-brightgreen)

- Conteúdo:

  ```json
  [
    {
      "id": 1,
      "nome": "Nome do produto",
      "preco": 5.0,
      "qtd_estoque": 10,
      "disponivel": 1,
      "em_destaque": 0,
      "id_dept": 1,
      "nome_dept": "Nome do departamento"
    }
  ]
  ```

### **Resposta de erro**

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-404%20NOT%20FOUND-red)

- Conteúdo:

  ```json
  {
    "error": "O produto não existe."
  }
  ```

### **Requisição**

`/produtos/id=2`

### **Resposta**

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-400%20BAD%20REQUEST-red)

- Conteúdo:

  ```json
  {
    "error": "Requisição incorreta."
  }
  ```

---

### **Método 3: POST**

Recebe um JSON com dados de um produto e o inclui na base de dados.

### **URL**

`/produto`

### **Parâmetro de requisição na URL**

Nenhum

### **Parâmetro de requisição no BODY**

```json
{
  "nome": "Nome do produto",
  "preco": 5.0,
  "qtd_estoque": 10,
  "disponivel": 1,
  "em_destaque": 0,
  "id_dept": 1,
  "nome_dept": "Nome do departamento"
}
```

### **Resposta de sucesso**

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-200%20OK-brightgreen)

- Conteúdo:

  ```json
  [
    {
      "id": 1,
      "nome": "Nome do produto",
      "preco": 5.0,
      "qtd_estoque": 10,
      "disponivel": 1,
      "em_destaque": 0,
      "id_dept": 1,
      "nome_dept": "Nome do departamento"
    }
  ]
  ```

### **Resposta de erro**

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-400%20BAD%20REQUEST-red)

- Conteúdo:

  ```json
  {
    "error": ""
  }
  ```

---

### **Método 4: PUT**

Recebe um JSON com dados de um produto, cujo ID é especificado na URL e atualiza seus dados na base de dados.

### **URL**

`/produto/{id}`

### **Parâmetro de requisição na URL**

`id=[INTEGER]`

### **Parâmetro de requisição no BODY**

```json
{
  "nome": "",
  "preco": ,
  "qtd_estoque": ,
  "disponivel": ,
  "em_destaque": ,
  "id_dept": ,
  "nome_dept": ""
}
```

### **Resposta de sucesso**

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-200%20OK-brightgreen)

- Conteúdo:

  ```json
  [
    {
      "nome": "",
      "preco": ,
      "qtd_estoque": ,
      "disponivel": ,
      "em_destaque": ,
      "id_dept": ,
      "nome_dept": ""
    }
  ]
  ```

### **Resposta de erro**

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-404%20NOT%20FOUND-red)

- Conteúdo:

  ```json
  {
    "error": "Produto não existe."
  }
  ```

  #### **OU**

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-400%20BAD%20REQUEST-red)

- Conteúdo:

  ```json
  {
    "error": ""
  }
  ```

---

### **Método 5: GET**

Retorna a lista de todos os departamentos existentes.

### **URL**

`/departamentos`

### **Requisição**

`/departamentos`

### **Resposta de sucesso**

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-200%20OK-brightgreen)

- Conteúdo:

  ```json
  [
    {
      "id_dept": 1,
      "nome": "Nome do departamento"
    },
    {
      "id_dept": 2,
      "nome": "Nome do departamento"
    },
    {
      "id_dept": 3,
      "nome": "Nome do departamento"
    },
    {
      "id_dept": 4,
      "nome": "Nome do departamento"
    }
  ]
  ```

### **Resposta de erro**

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-404%20NOT%20FOUND-red)

- Conteúdo:

  ```json
  {
    "error": "Não existem departamentos cadastrados."
  }
  ```

---

### **Método 6: GET**

Retorna o departamento e a lista de produtos que estão associadas a ele.

### **URL**

`/departamentos/{id}`

### **Parâmetro de requisição na URL**

`id=[INTEGER]`

### **Parâmetro de requisição no BODY**

Nenhum

### **Requisição**

`/departamentos/1`

### **Resposta de sucesso**

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-200%20OK-brightgreen)

- Conteúdo:

  ```json
  [
    {
      "id": 1,
      "nome": "Nome do produto",
      "preco": 5.0,
      "qtd_estoque": 10,
      "disponivel": 1,
      "em_destaque": 0,
      "id_dept": 1,
      "nome_dept": "Nome do departamento"
    },
    {
      "id": 2,
      "nome": "Nome do produto 2",
      "preco": 6.0,
      "qtd_estoque": 11,
      "disponivel": 1,
      "em_destaque": 1,
      "id_dept": 1,
      "nome_dept": "Nome do departamento"
    }
  ]
  ```

### **Resposta de erro**

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-404%20NOT%20FOUND-red)

- Conteúdo:

  ```json
  {
    "error": "O departamento não existe."
  }
  ```
