const client = require('./client');



const listaCardapio = () => {
  client.PegaCardapio(null, (err, data) => {
    if (!err) {
      console.log(data)

    }
  });

}, inserirItem = () => {
    let novoItem = {
      item: "Rafael's Podrão Burguer",
      preco: "15.90"
    };
    client.InsereItem(novoItem, (err, data) => {
      if (err) throw err;
      console.log("Item inserido no cardápio com sucesso. -> ", data);
      listaCardapio()

    });
  }, deleteItem = () => {
    item = { id: '9' }
    client.RemoveItem(item, (err, data) => {
      if (err) throw err;

      console.log("Item removido do cardápio com sucesso. -> ", data);
      listaCardapio()

    });
  }, itemById = (id) => {
    item = { id: `${id}` }

    client.PegaItem(item, (err, data) => {
      if (err) throw err;

      console.log("Item encontrado -> ", data);
      listaCarrinho()
      //()

    });
  }, listaCarrinho = () => {
    client.PegaCarrinho(null, (err, data) => {
      if (!err) {
        console.log(data)
  
      }
    });
  }
  


//listaCardapio()
//inserirItem()
//deleteItem()
//itemById()

itemById(1)
itemById(2)
itemById(3)


listaCardapio()