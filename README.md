# GAMA ACADEMY E-COMMERCE - REST API

API construída como mockup para a integração de um sistema de gerenciamento de e-commerce.

## Dependências

Esta aplicação tem como dependência:

- ExpressJS
- Nodemon
- Sucrase

## Clonando o repositório

No cmd, navegue até o diretório em que deseja clonar o repositório.

Dentro do diretório, utilize o comando:

```
$ git clone https://github.com/danielalfb/gama-ecommerce-api.git
```

## Instalando as dependências

    npm install

## Executando a aplicação

    npm run dev

# REST API

A REST API construída esta especificada abaixo.

## **Host e porta**

<localhost:3000>

## **Métodos**

### **Método 1: GET**

Retorna a lista de todos os produtos existentes.

### **URL**

`/produtos`

### **Resposta de sucesso**

- Requisição:

  `/produtos`

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-200%20OK-brightgreen)

- Conteúdo:

  ```json
  [
    {
      "id": 1,
      "nome": "SSD Kingston A400, 480GB",
      "preco": 409.9,
      "qtd_estoque": 70,
      "disponivel": 1,
      "em_destaque": 1,
      "id_dept": 1,
      "nome_dept": "Hardware"
    },
    {
      "id": 2,
      "nome": "Fone de Ouvido Sem Fio Sennheiser HD450BT",
      "preco": 989,
      "qtd_estoque": 10,
      "disponivel": 1,
      "em_destaque": 0,
      "id_dept": 2,
      "nome_dept": "Audio"
    },
    {
      "id": 3,
      "nome": "Fone de Ouvido JBL In Ear, Preto, JBLC50HIBLK",
      "preco": 39,
      "qtd_estoque": 30,
      "disponivel": 1,
      "em_destaque": 0,
      "id_dept": 2,
      "nome_dept": "Audio"
    },
    {
      "id": 4,
      "nome": "Smartphone Xiaomi Redmi 9, 64GB",
      "preco": 1429.9,
      "qtd_estoque": 5,
      "disponivel": 1,
      "em_destaque": 1,
      "id_dept": 3,
      "nome_dept": "Smartphones"
    }
  ]
  ```

### **Resposta de erro**

Dispara caso o array de Produtos esteja vazio.

- Requisição:

  `/produtos`

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-404%20NOT%20FOUND-red)

- Conteúdo:

  ```json
  {
    "err": "Nenhum produto cadastrado."
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

### **Resposta de sucesso**

- Requisição:

  `/produtos/1`

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-200%20OK-brightgreen)

- Conteúdo:

  ```json
  {
    "id": 1,
    "nome": "SSD Kingston A400, 480GB",
    "preco": 409.9,
    "qtd_estoque": 70,
    "disponivel": 1,
    "em_destaque": 1,
    "id_dept": 1,
    "nome_dept": "Hardware"
  }
  ```

### **Resposta de erro**

- Requisição:

  `/produtos/10`

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-404%20NOT%20FOUND-red)

- Conteúdo:

  ```json
  {
    "err": "Produto não encontrado."
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

```
{
  "nome": STRING,
  "preco": INT,
  "qtd_estoque": INT,
  "disponivel": 1 || 0,
  "em_destaque": 1 || 0,
  "id_dept": INT,
  "nome_dept": STRING
}
```

### **Resposta de sucesso**

- Requisição:

  ```json
  {
    "nome": "Smartphone Asus Zenfone 6, 256GB",
    "preco": 3869,
    "qtd_estoque": 7,
    "disponivel": 1,
    "em_destaque": 0,
    "id_dept": 3,
    "nome_dept": "Smartphones"
  }
  ```

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-200%20OK-brightgreen)

- Conteúdo:

  ```json
  {
    "id": 5,
    "nome": "Smartphone Asus Zenfone 6, 256GB",
    "preco": 3869,
    "qtd_estoque": 7,
    "disponivel": 1,
    "em_destaque": 1,
    "id_dept": 3,
    "nome_dept": "Smartphones"
  }
  ```

### **Respostas de erro**

- Requisição:

  ```json
  {
    "nome": "Smartphone Asus Zenfone 6, 256GB",
    "preco": 0,
    "qtd_estoque": 7,
    "disponivel": 1,
    "em_destaque": 0,
    "id_dept": 3,
    "nome_dept": "Smartphones"
  }
  ```

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-400%20BAD%20REQUEST-red)

- Conteúdo:

  ```json
  {
    "error": "O preço do produto não pode ser 0."
  }
  ```

  #### **_OU_**

- Requisição:

  ```json
  {
    "preco": 3869,
    "qtd_estoque": 7,
    "disponivel": 1,
    "em_destaque": 1,
    "id_dept": 3,
    "nome_dept": "Smartphones"
  }
  ```

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-400%20BAD%20REQUEST-red)

- Conteúdo:

  ```json
  {
    "err": "Preenchimento incorreto, cheque os campos."
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

```
{
  "nome": STRING,
  "preco": INT,
  "qtd_estoque": INT,
  "disponivel": 1 || 0,
  "em_destaque": 1 || 0,
  "id_dept": INT,
  "nome_dept": STRING
}
```

### **Resposta de sucesso**

- Requisição na URL:

  `/produtos/1`

- Requisição no BODY:

  ```json
  {
    "nome": "SSD Kingston A400, 480GB",
    "preco": 309,
    "qtd_estoque": 20,
    "disponivel": 1,
    "em_destaque": 1,
    "id_dept": 1,
    "nome_dept": "Hardware"
  }
  ```

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-200%20OK-brightgreen)

- Conteúdo:

  ```json
  {
    "id": 1,
    "nome": "SSD Kingston A400, 480GB",
    "preco": 309,
    "qtd_estoque": 20,
    "disponivel": 1,
    "em_destaque": 1,
    "id_dept": 1,
    "nome_dept": "Hardware"
  }
  ```

### **Respostas de erro**

- Requisição na URL:

  `/produtos/10`

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-404%20NOT%20FOUND-red)

- Conteúdo:

  ```json
  {
    "err": "Produto não existe."
  }
  ```

  #### **_OU_**

- Requisição na URL:

  `/produtos/1`

- Requisição no BODY:

  ```json
  {
    "nome": "SSD Kingston A400, 480GB",
    "preco": 309,
    "disponivel": 1,
    "em_destaque": 1,
    "id_dept": 1,
    "nome_dept": "Hardware"
  }
  ```

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-400%20BAD%20REQUEST-red)

- Conteúdo:

  ```json
  {
    "err": "Preenchimento incorreto, cheque os campos."
  }
  ```

  #### **_OU_**

- Requisição na URL:

  `/produtos/1`

- Requisição no BODY:

  ```json
  {
    "nome": "SSD Kingston A400, 480GB",
    "preco": 0,
    "qtd_estoque": 20,
    "disponivel": 1,
    "em_destaque": 1,
    "id_dept": 1,
    "nome_dept": "Hardware"
  }
  ```

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-400%20BAD%20REQUEST-red)

- Conteúdo:

  ```json
  {
    "err": "O preço do produto não pode ser 0."
  }
  ```

---

### **Método 5: GET**

Retorna a lista de todos os departamentos existentes.

### **URL**

`/departamentos`

### **Resposta de sucesso**

- Requisição:

  `/departamentos`

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-200%20OK-brightgreen)

- Conteúdo:

  ```json
  [
    {
      "id": 1,
      "nome": "Hardware"
    },
    {
      "id": 2,
      "nome": "Audio"
    },
    {
      "id": 2,
      "nome": "Audio"
    },
    {
      "id": 3,
      "nome": "Smartphones"
    }
  ]
  ```

### **Resposta de erro**

Dispara caso o array de Departamentos esteja vazio.

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-404%20NOT%20FOUND-red)

- Conteúdo:

  ```json
  {
    "err": "Não existem departamentos cadastrados."
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

### **Resposta de sucesso**

- Requisição:

  `/departamentos/2`

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-200%20OK-brightgreen)

- Conteúdo:

  ```json
  [
    {
      "id": 2,
      "nome": "Audio"
    },
    [
      {
        "produto": "Fone de Ouvido Sem Fio Sennheiser HD450BT"
      },
      {
        "produto": "Fone de Ouvido JBL In Ear, Preto, JBLC50HIBLK"
      }
    ]
  ]
  ```

### **Resposta de erro**

- Requisição:

  `/departamentos/12`

- Status:

  ![Status da requisicao](https://img.shields.io/badge/-404%20NOT%20FOUND-red)

- Conteúdo:

  ```json
  {
    "err": "O departamento não existe."
  }
  ```
