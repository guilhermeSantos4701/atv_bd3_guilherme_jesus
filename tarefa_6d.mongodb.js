const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);

/* SELECIONA PRODUTOS DA CATEGORIA ACESSORIOS DA COLEÇÃO */
db[collection].find({"categoria":"Acessórios"});
