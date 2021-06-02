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

router.get('/', (req, res) => {
  if (produtos.length > 0) {
    return res.status(200).json(produtos);
  } else {
    return res.status(404).json({ message: 'Nenhum produto cadastrado.' });
  }
});

module.exports = router;
