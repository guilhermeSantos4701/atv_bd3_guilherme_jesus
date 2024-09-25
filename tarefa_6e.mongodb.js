const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);

/* SELECIONA PRODUTOS DA CATEGORIA ACESSORIOS E VESTUARIO DA COLEÇÃO */
db[collection].find({
    $or:[
        {categoria:{$eq:'Acessórios'}},
        {categoria:{$eq:'Vestuário'}}
    ]
});