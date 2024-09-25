const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);

/* SELECIONA PRODUTOS DE VALOR ENTRE 300 E 500 DA COLEÇÃO */
db[collection].find({
    valor:{$gte:300, $lte:500}
})
