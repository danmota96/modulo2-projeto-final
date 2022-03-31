const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const regioes= [
  
  {
      "id": 1,
      "nome": "Baião de dois",
      "imagem": "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/07/comidas-tipicas-nordeste-00007.jpg"
  },
  {
      "id": 2,
      "nome": "Tacacá",
      "imagem": "https://acozinhabrasileira.com.br/wp-content/uploads/2021/09/receita-de-tacaca.jpg"
  },

  {
    "id": 3,
    "nome": "Mojica de Pintado em Cuiabá",
    "imagem": "https://ibis.accor.com/editorial/imagerie/article/mojica-de-pintado-comida-tipica-do-centro-oeste-a6ef_660x440.jpg"
    
},

{
    "id": 5,
    "nome": "Pão de Queijo",
    "imagem": "https://cdn.viajala.com/img/blog/shutterstock_579999919.jpg?5_JIOl8RBx4OYcuBcdVj7mJiHPpLfz6g"
},

{
   "id": 6,
   "nome": "Costela Assada",
   "imagem": "https://malaprontagramado.com.br/wp-content/uploads/2020/10/Costela-Assada-1536x768.jpg"
}

]
const norte=[
  {
    "id":7,
    "nome":"Damurida",
    "descricao":"A damurida é um prato típico de Roraima e a receita original tem origem nas comunidades indígenas que vivem no extremo norte do Brasil.É um  caldo bem apimentado  feito com tucupi, que é o sumo da mandioca, que também leva carne de peixe ou caça, chicória e jambu",
    "imagem":"https://www.penaestrada.blog.br/wp-content/uploads/2021/02/comidas-tipicas-do-brasil-damurida-768x495.jpg"
  },
  {
    "id":8,
    "nome":"Doce de cupuaçu",
    "descricao":"O cupuaçu é uma fruta típica da Região Norte, muito encontrada nos estados do Amapá, Pará e Amazonas. Com ela dá para fazer muitas receitas, mas o doce de cupuaçu é a receita mais tradicional.Normalmente, tem uma consistência pastosa, mas também pode ser encontrado na forma cristalizada. Além do consumo direto como sobremesa, o doce serve também para  rechear bolos e bombons. ",
    "imagem":"https://www.penaestrada.blog.br/wp-content/uploads/2021/02/comidas-tipicas-do-brasil-cupuacu-768x495.jpg"
  },
  {
    "id":9,
    "nome":"Pato no tucupi",
    "descricao":"O pato no tucupi é típico Região Norte, especialmente do Pará. É feito com tucupi, líquido de cor amarela extraído da raiz da mandioca brava, e com jambu, erva famosa por dar uma leve sensação de dormência na língua.Ele pode ser acompanhado de arroz branco ou farinha-d’água – feita da mandioca. O pato no tucupi é um dos pratos principais servidos no  tradicional almoço do Círio de Nazaré , juntamente com a maniçoba",
    "imagem":"https://www.penaestrada.blog.br/wp-content/uploads/2021/02/comidas-tipicas-do-brasil-pato-no-tucupi.jpg"  
  },
]
const nordeste=[
  {
    "id":10,
    "nome":"Acarajé",
    "descricao":"Não dá para viajar pela Bahia e não comer acarajé, o prato mais típico do Estado. Vendido pelas tradicionalíssimas baianas vestidas de branco, esse bolinho de feijão frito no azeite de dendê é uma das iguarias brasileiras mais famosas no exterior: os gringos adoram.",
    "imagem":"https://www.penaestrada.blog.br/wp-content/uploads/2021/02/comidas-tipicas-do-brasil-acaraje-768x495.jpg"
  },

  {
    "id":11,
    "nome":"Bricelet",
    "descricao":"Esse biscoito de massa finíssima é produzido exclusivamente pelas freiras do do Lar Irmã Imaculada Conceição, que fica na cidade de São Cristóvão, em Sergipe.",
    "imagem":"https://www.penaestrada.blog.br/wp-content/uploads/2013/06/sao-cristovao-10-768x495.jpg"
  },
  {
    "id":12,
    "nome":"Cartola",
    "descricao":"A cartola é uma sobremesa típica de Pernambuco e tem sua origem nas casas-grandes dos engenhos – durante o período colonial.",
    "imagem":"https://www.penaestrada.blog.br/wp-content/uploads/2021/02/comidas-tipicas-do-brasil-cartola-768x495.jpg"
  },

]
const centroOeste=[
  {
  "id":13,
  "nome":"Caldo de piranha",
  "descricao":"Feito com o peixe piranha, esse caldo é servido na Região Centro-Oeste, especialmente na área do Pantanal. Eu comi caldo de piranha pela primeira vez na Chapada dos Guimarães, que fica no Mato Grosso.",
  "imagem":"https://www.penaestrada.blog.br/wp-content/uploads/2021/02/comidas-tipicas-do-brasil-caldo-de-piranha-768x495.jpg"
},

{
  "id":14,
  "nome":"Empadão goiano",
  "descricao":"Eu aposto que você já comeu uma empada, mas o empadão goiano é único em sabor, textura e em história.A verdade é que  não existe apenas uma receita do empadão,  já que cada família acrescenta ou elimina ingredientes de acordo com seu gosto.Entretanto, os itens básicos são toucinho de porco, trigo, sal e azeitona. Uma forte presença regional nesse saboroso prato é a guariroba, um tipo de palmito amargo.",
  "imagem":"https://www.penaestrada.blog.br/wp-content/uploads/2021/02/comidas-tipicas-do-brasil-empadao-768x495.jpg"
},
{
  "id":15,
  "nome":"Chipa",
  "descricao":"A chipa é uma receita tradicional das culinárias paraguaia e argentina, mas ganhou espaço na mesa de alguns estados brasileiros, especialmente no Mato Grosso do Sul.",
  "imagem":"https://www.penaestrada.blog.br/wp-content/uploads/2018/01/onde-comer-em-bonito-11-768x960.jpg"
},
]

const sudeste=[
  {
    "id":16,
    "nome":"Moqueca capixaba",
    "descricao":"Entre todos os sabores do Espírito Santo, a moqueca capixaba é a tradição em forma de deliciosas postas de peixe servidas com pirão e arroz branco. Há quem a confunda com a moqueca baiana, então alguém sempre tem que explicar que  a moqueca do Espírito Santo não tem leite de coco e nem azeite de dendê  na lista de ingredientes.Mais leve, preparada e servida na autêntica panela de barro das paneleiras de Goiabeiras, a moqueca capixaba ganhou o título de original, já que o resto não passa de peixada, como dizem os nativos da ilha de Vitória",
    "imagem":"https://www.penaestrada.blog.br/wp-content/uploads/2020/12/IMG_9595-768x495.jpg"
  },
  {
    "id":17,
    "nome":"Feijão tropeiro",
    "descricao":"O feijão tropeiro é associado às culinárias típicas dos estados de São Paulo, Minas Gerais e Goiás. O nome remete aos tropeiros, homens que cumpriam a estratégia dos portugueses para integrar povoados das regiões Sudeste e Centro-Oeste",
    "imagem":"https://www.penaestrada.blog.br/wp-content/uploads/2021/02/comidas-tipicas-do-brasil-tropeiro-768x495.jpg"
  },
  {
    "id":18,
    "nome":"Sanduíche de mortadela",
    "descricao":"Um programa imperdível de São Paulo é comer um sanduíche de mortadela do Mercadão. É que o famoso lanche de pão francês recheado com 300 gramas do embutido foi elevado ao patamar de símbolo da cidade e, por isso, entrou na lista das comidas típicas do Brasil que você precisa provar.",
    "imagem":"https://www.penaestrada.blog.br/wp-content/uploads/2021/02/comidas-tipicas-do-brasil-sanduiche.jpg"
  },

]
const sul =[
  {
    "id":19,
    "nome":"Arroz carreteiro",
    "descricao":"O arroz carreteiro surgiu nos pampas do Rio Grande do Sul. Para suportarem as longas distâncias, os gaúchos preparavam uma  mistura de arroz e charque  – semelhante à carne seca -, ingredientes que resistiam aos longos dias de viagem.",
    "imagem":"https://www.penaestrada.blog.br/wp-content/uploads/2021/02/comidas-tipicas-do-brasil-arroz-de-carreteiro-768x495.jpg"

  },
  {
  "id":20,
  "nome":"Barreado",
  "descricao":"O barreado é um prato típico do Paraná. Na região de Morretes, onde o prato é mais conhecido, dizem que ele surgiu no tempo das festas, quando as pessoas não queriam perder tempo preparando a refeição: como não perde o gosto ao ser requentado, dá para comer essa iguaria por dias seguidos sem reclamar",
  "imagem":"https://www.penaestrada.blog.br/wp-content/uploads/2021/02/comidas-tipicas-do-brasil-barreado-768x495.jpg"
  },
{
"id":21,
  "nome":"Entrevero de pinhão",
  "descricao":"Muito tradicional na cidade de Lages, na serra de Santa Catarina, o prato leva pinhão, ingrediente típico no inverno sulista, carnes suína, bovina, bacon, calabresa e temperos a gosto.O nome do prato tem inspiração na língua espanhola:  entrevero significa confusão, mistura desordenada. ",
  "imagem":"https://www.penaestrada.blog.br/wp-content/uploads/2021/02/comidas-tipicas-do-brasil-entrevero.jpg"
  }
]

app.get("/", (req, res) => {
  res.render("index", {
    regioes,
  });
});


app.get('/lista',  (req, res) => {
  res.render('lista') // Nome do arquivo, o EJS já busca dentro da pasta views.
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);