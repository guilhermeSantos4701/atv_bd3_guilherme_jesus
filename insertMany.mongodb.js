const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos';

use(database);

db[collection].insertMany(
    [
        {
            "nome": "Tênis de Corrida Nike Air Max",
            "valor": 799.90,
            "quantidade_em_estoque": 30,
            "fabricante": "Nike",
            "categoria": "Calçados",
            "descrição": "Tênis com amortecimento Air Max para máxima conforto."
        },
        {
            "nome": "Camiseta Adidas Climalite",
            "valor": 129.90,
            "quantidade_em_estoque": 100,
            "fabricante": "Adidas",
            "categoria": "Vestuário",
            "descrição": "Camiseta leve e respirável, ideal para treinos."
        },
        {
            "nome": "Tênis New Balance Fresh Foam",
            "valor": 699.90,
            "quantidade_em_estoque": 25,
            "fabricante": "New Balance",
            "categoria": "Calçados",
            "descrição": "Tênis com tecnologia Fresh Foam para conforto e leveza."
        },
        {
            "nome": "Bola de Futebol Puma Liga",
            "valor": 99.90,
            "quantidade_em_estoque": 50,
            "fabricante": "Puma",
            "categoria": "Equipamentos",
            "descrição": "Bola de futebol durável, ideal para jogos amadores."
        },
        {
            "nome": "Shorts Nike Dri-FIT",
            "valor": 179.90,
            "quantidade_em_estoque": 75,
            "fabricante": "Nike",
            "categoria": "Vestuário",
            "descrição": "Shorts leves com tecnologia Dri-FIT para controle de umidade."
        },
        {
            "nome": "Moletom Adidas Essentials",
            "valor": 249.90,
            "quantidade_em_estoque": 40,
            "fabricante": "Adidas",
            "categoria": "Vestuário",
            "descrição": "Moletom confortável para atividades diárias e treinos."
        },
        {
            "nome": "Tênis New Balance 574",
            "valor": 549.90,
            "quantidade_em_estoque": 20,
            "fabricante": "New Balance",
            "categoria": "Calçados",
            "descrição": "Clássico tênis com design atemporal e conforto superior."
        },
        {
            "nome": "Camiseta Puma Active",
            "valor": 109.90,
            "quantidade_em_estoque": 60,
            "fabricante": "Puma",
            "categoria": "Vestuário",
            "descrição": "Camiseta ideal para treinos, com tecnologia de absorção de suor."
        },
        {
            "nome": "Tênis Nike Revolution",
            "valor": 499.90,
            "quantidade_em_estoque": 45,
            "fabricante": "Nike",
            "categoria": "Calçados",
            "descrição": "Tênis versátil para corrida e uso diário."
        },
        {
            "nome": "Sandy Adidas Ultraboost",
            "valor": 899.90,
            "quantidade_em_estoque": 15,
            "fabricante": "Adidas",
            "categoria": "Calçados",
            "descrição": "Tênis com tecnologia Boost, proporcionando energia a cada passo."
        },
        {
            "nome": "Chuteira New Balance Furon",
            "valor": 399.90,
            "quantidade_em_estoque": 35,
            "fabricante": "New Balance",
            "categoria": "Calçados",
            "descrição": "Chuteira leve e responsiva, ideal para campos firmes."
        },
        {
            "nome": "Capa de Chuva Puma",
            "valor": 149.90,
            "quantidade_em_estoque": 50,
            "fabricante": "Puma",
            "categoria": "Acessórios",
            "descrição": "Capa leve e compacta, perfeita para treinos em dias de chuva."
        },
        {
            "nome": "Cinto de Hidratação Nike",
            "valor": 129.90,
            "quantidade_em_estoque": 30,
            "fabricante": "Nike",
            "categoria": "Acessórios",
            "descrição": "Cinto prático para levar água durante corridas."
        },
        {
            "nome": "Tênis Puma RS-X",
            "valor": 749.90,
            "quantidade_em_estoque": 10,
            "fabricante": "Puma",
            "categoria": "Calçados",
            "descrição": "Tênis de estilo retro com conforto moderno."
        },
        {
            "nome": "Jaqueta Adidas Condivo",
            "valor": 349.90,
            "quantidade_em_estoque": 20,
            "fabricante": "Adidas",
            "categoria": "Vestuário",
            "descrição": "Jaqueta leve e respirável, ideal para treinos e uso casual."
        },
        {
            "nome": "Meia New Balance Performance",
            "valor": 39.90,
            "quantidade_em_estoque": 150,
            "fabricante": "New Balance",
            "categoria": "Acessórios",
            "descrição": "Meia de alto desempenho para corrida e atividades esportivas."
        },
        {
            "nome": "Tênis Nike Air Zoom Pegasus",
            "valor": 899.90,
            "quantidade_em_estoque": 25,
            "fabricante": "Nike",
            "categoria": "Calçados",
            "descrição": "Tênis de corrida com amortecimento responsivo."
        },
        {
            "nome": "Camiseta de Compressão Adidas",
            "valor": 159.90,
            "quantidade_em_estoque": 80,
            "fabricante": "Adidas",
            "categoria": "Vestuário",
            "descrição": "Camiseta de compressão que ajuda a melhorar o desempenho."
        },
        {
            "nome": "Tênis Puma Cali",
            "valor": 599.90,
            "quantidade_em_estoque": 15,
            "fabricante": "Puma",
            "categoria": "Calçados",
            "descrição": "Tênis com design estiloso e conforto para o dia a dia."
        },
        {
            "nome": "Cinta de Coração New Balance",
            "valor": 199.90,
            "quantidade_em_estoque": 40,
            "fabricante": "New Balance",
            "categoria": "Acessórios",
            "descrição": "Cinta de monitoramento de batimentos cardíacos para treinos."
        },
        {
            "nome": "Chuteira Adidas Predator",
            "valor": 599.90,
            "quantidade_em_estoque": 30,
            "fabricante": "Adidas",
            "categoria": "Calçados",
            "descrição": "Chuteira projetada para controle e precisão em campo."
        },
        {
            "nome": "Tênis New Balance 860",
            "valor": 699.90,
            "quantidade_em_estoque": 25,
            "fabricante": "New Balance",
            "categoria": "Calçados",
            "descrição": "Tênis de corrida estável com suporte e amortecimento."
        },
        {
            "nome": "Bermuda de Corrida Puma",
            "valor": 129.90,
            "quantidade_em_estoque": 60,
            "fabricante": "Puma",
            "categoria": "Vestuário",
            "descrição": "Bermuda leve e confortável para corridas."
        },
        {
            "nome": "Camiseta Nike Sportswear",
            "valor": 119.90,
            "quantidade_em_estoque": 90,
            "fabricante": "Nike",
            "categoria": "Vestuário",
            "descrição": "Camiseta casual com estilo esportivo."
        },
        {
            "nome": "Tênis Adidas Superstar",
            "valor": 549.90,
            "quantidade_em_estoque": 20,
            "fabricante": "Adidas",
            "categoria": "Calçados",
            "descrição": "Clássico tênis com design icônico e conforto."
        },
        {
            "nome": "Pulseira Fitness New Balance",
            "valor": 249.90,
            "quantidade_em_estoque": 40,
            "fabricante": "New Balance",
            "categoria": "Acessórios",
            "descrição": "Pulseira para monitorar atividades e saúde."
        },
        {
            "nome": "Top Esportivo Puma",
            "valor": 89.90,
            "quantidade_em_estoque": 70,
            "fabricante": "Puma",
            "categoria": "Vestuário",
            "descrição": "Top leve e confortável, ideal para treinos intensos."
        },
        {
            "nome": "Tênis Nike React Infinity",
            "valor": 899.90,
            "quantidade_em_estoque": 15,
            "fabricante": "Nike",
            "categoria": "Calçados",
            "descrição": "Tênis projetado para oferecer suporte e conforto em cada."
        },
        {
            "nome": "Camiseta Adidas Training",
            "valor": 139.90,
            "quantidade_em_estoque": 55,
            "fabricante": "Adidas",
            "categoria": "Vestuário",
            "descrição": "Camiseta ideal para treinos, com tecnologia que controla a umidade."
        },
        {
            "nome": "Tênis New Balance 880",
            "valor": 749.90,
            "quantidade_em_estoque": 20,
            "fabricante": "New Balance",
            "categoria": "Calçados",
            "descrição": "Tênis de corrida com amortecimento excepcional."
        },
        {
            "nome": "Bola de Basquete Puma",
            "valor": 199.90,
            "quantidade_em_estoque": 40,
            "fabricante": "Puma",
            "categoria": "Equipamentos",
            "descrição": "Bola de basquete durável, ideal para treinos e jogos."
        },
        {
            "nome": "Corta-Vento Nike",
            "valor": 299.90,
            "quantidade_em_estoque": 25,
            "fabricante": "Nike",
            "categoria": "Vestuário",
            "descrição": "Corta-vento leve e respirável para dias frios."
        },
        {
            "nome": "Tênis Adidas NMD",
            "valor": 799.90,
            "quantidade_em_estoque": 15,
            "fabricante": "Adidas",
            "categoria": "Calçados",
            "descrição": "Tênis com design moderno e conforto para o dia a dia."
        },
        {
            "nome": "Mochila New Balance",
            "valor": 159.90,
            "quantidade_em_estoque": 45,
            "fabricante": "New Balance",
            "categoria": "Acessórios",
            "descrição": "Mochila espaçosa para transporte de equipamentos esportivos."
        },
        {
            "nome": "Luva de Golfe Puma",
            "valor": 129.90,
            "quantidade_em_estoque": 50,
            "fabricante": "Puma",
            "categoria": "Equipamentos",
            "descrição": "Luva de golfe com excelente aderência e conforto."
        },
        {
            "nome": "Camiseta Nike Dri-FIT",
            "valor": 159.90,
            "quantidade_em_estoque": 70,
            "fabricante": "Nike",
            "categoria": "Vestuário",
            "descrição": "Camiseta que mantém você seco e confortável durante os treinos."
        },
        {
            "nome": "Tênis Adidas Alphatorsion",
            "valor": 699.90,
            "quantidade_em_estoque": 20,
            "fabricante": "Adidas",
            "categoria": "Calçados",
            "descrição": "Tênis projetado para versatilidade em diversos tipos de treino."
        },
        {
            "nome": "Boné New Balance",
            "valor": 79.90,
            "quantidade_em_estoque": 100,
            "fabricante": "New Balance",
            "categoria": "Acessórios",
            "descrição": "Boné leve para proteção contra o sol durante atividades ao ar livre."
        },
        {
            "nome": "Tênis Puma Hybrid",
            "valor": 749.90,
            "quantidade_em_estoque": 15,
            "fabricante": "Puma",
            "categoria": "Calçados",
            "descrição": "Tênis com tecnologia de amortecimento avançada."
        },
        {
            "nome": "Camiseta de Treino New Balance",
            "valor": 119.90,
            "quantidade_em_estoque": 80,
            "fabricante": "New Balance",
            "categoria": "Vestuário",
            "descrição": "Camiseta leve, ideal para qualquer atividade esportiva."
        },
        {
            "nome": "Bola de Vôlei Adidas",
            "valor": 159.90,
            "quantidade_em_estoque": 40,
            "fabricante": "Adidas",
            "categoria": "Equipamentos",
            "descrição": "Bola de vôlei de alta qualidade, perfeita para jogos."
        },
        {
            "nome": "Tênis Nike Air Force 1",
            "valor": 799.90,
            "quantidade_em_estoque": 20,
            "fabricante": "Nike",
            "categoria": "Calçados",
            "descrição": "Clássico tênis com estilo urbano e conforto."
        },
        {
            "nome": "Luvas de Treino Puma",
            "valor": 99.90,
            "quantidade_em_estoque": 60,
            "fabricante": "Puma",
            "categoria": "Acessórios",
            "descrição": "Luvas confortáveis para melhor aderência em treinos."
        },
        {
            "nome": "Tênis New Balance 1500",
            "valor": 799.90,
            "quantidade_em_estoque": 10,
            "fabricante": "New Balance",
            "categoria": "Calçados",
            "descrição": "Tênis de corrida com suporte ideal para longas distâncias."
        },
        {
            "nome": "Jaqueta Nike Windrunner",
            "valor": 349.90,
            "quantidade_em_estoque": 30,
            "fabricante": "Nike",
            "categoria": "Vestuário",
            "descrição": "Jaqueta leve e à prova de vento, perfeita para corridas ao ar livre."
        },
        {
            "nome": "Chuteira Adidas Copa",
            "valor": 699.90,
            "quantidade_em_estoque": 25,
            "fabricante": "Adidas",
            "categoria": "Calçados",
            "descrição": "Chuteira clássica para jogadores que buscam controle e conforto."
        },
        {
            "nome": "Camiseta de Treino Puma",
            "valor": 109.90,
            "quantidade_em_estoque": 50,
            "fabricante": "Puma",
            "categoria": "Vestuário",
            "descrição": "Camiseta confortável e funcional para treinos."
        },
        {
            "nome": "Tênis Nike Zoom Fly",
            "valor": 899.90,
            "quantidade_em_estoque": 15,
            "fabricante": "Nike",
            "categoria": "Calçados",
            "descrição": "Tênis leve e rápido, ideal para corredores."
        },
        {
            "nome": "Cinta Abdominal New Balance",
            "valor": 149.90,
            "quantidade_em_estoque": 40,
            "fabricante": "New Balance",
            "categoria": "Acessórios",
            "descrição": "Cinta para suporte e estabilidade durante os treinos."
        },
        {
            "nome": "Tênis Adidas Pureboost",
            "valor": 799.90,
            "quantidade_em_estoque": 10,
            "fabricante": "Adidas",
            "categoria": "Calçados",
            "descrição": "Tênis com conforto excepcional e responsividade."
        }
    ]
)
