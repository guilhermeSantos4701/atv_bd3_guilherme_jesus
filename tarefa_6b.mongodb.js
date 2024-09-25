const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);

/* SELECIONA PRODUTOS DE MENOR VALOR DA COLEÇÃO */
db[collection].find().sort({ valor: 1}).limit(1);