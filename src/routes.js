const { Router } = require('express');
const router = new Router();

const produtos = [
  {
    id: 1,
    nome: 'SSD Kingston A400, 480GB',
    preco: 409.9,
    qtd_estoque: 70,
    disponivel: 1,
    em_destaque: 1,
    id_dept: 1,
    nome_dept: 'Hardware',
  },
  {
    id: 2,
    nome: 'Fone de Ouvido Sem Fio Sennheiser HD450BT',
    preco: 989,
    qtd_estoque: 10,
    disponivel: 1,
    em_destaque: 0,
    id_dept: 2,
    nome_dept: 'Audio',
  },
  {
    id: 3,
    nome: 'Fone de Ouvido JBL In Ear, Preto, JBLC50HIBLK',
    preco: 39,
    qtd_estoque: 30,
    disponivel: 1,
    em_destaque: 0,
    id_dept: 2,
    nome_dept: 'Audio',
  },
  {
    id: 4,
    nome: 'Smartphone Xiaomi Redmi 9, 64GB',
    preco: 1429.9,
    qtd_estoque: 5,
    disponivel: 1,
    em_destaque: 1,
    id_dept: 3,
    nome_dept: 'Smartphones',
  },
];

router.get('/produtos', (req, res) => {
  if (produtos.length > 0) {
    return res.status(200).json(produtos);
  } else {
    return res.status(404).json({ message: 'Nenhum produto cadastrado.' });
  }
});

router.get('/produtos/:id', (req, res) => {});

router.post('/produtos', (req, res) => {
  const produto = {
    id: produtos.length + 1,
    nome: req.body.nome,
    preco: req.body.preco,
    qtd_estoque: req.body.qtd_estoque,
    disponivel: req.body.disponivel,
    em_destaque: req.body.em_destaque,
    id_dept: req.body.id_dept,
    nome_dept: req.body.nome_dept,
  };

  const { nome, qtd_estoque, disponivel, em_destaque, id_dept, nome_dept } =
    produto;

  if (
    !nome ||
    !qtd_estoque ||
    !disponivel ||
    !em_destaque ||
    !id_dept ||
    !nome_dept
  ) {
    return res
      .status(400)
      .json({ err: 'Preenchimento incorreto, cheque os campos.' });
  } else if (produto.preco === 0) {
    return res.status(400).json({ err: 'O preço do produto não pode ser 0.' });
  } else {
    produtos.push(produto);
    return res.status(200).json(produto);
  }
});

router.put('/produtos/:id', (req, res) => {});

router.get('/departamentos', (req, res) => {});

router.get('/departamentos/:id', (req, res) => {});

module.exports = router;
