import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects';


describe('Regressivo Todo APP', () => {

    context.skip('Validar a tela inicial',()=>{
 
        beforeEach(()=>{

            cy.visit('/');
  
        })

        
        it('validar a area de teste label de imput de dados', () => {

            telaInicial.validarImput("What needs to be done?")
       
         })
        
    })

    context('Validar a adição de itens',()=>{

        beforeEach(()=>{

            cy.visit('/');
  
        })

        it('adicionar mais de um item na lista com for', () => {
            var todoItens = ["Maça", "Banana", "Cenoura"]
            todoItens.forEach(function(item, indice, array ){ 
            telaInicial.inputText(item);
            })

            // validar que o cantador é igual a três
            telaInicial.validarContador(3);

        })
        
        
    })
    context('Validar a conclusão de itens',()=>{

        beforeEach(()=>{

            cy.visit('/');
            var todoItens = ["Maça", "Banana", "Cenoura"]
            
            todoItens.forEach(function(item, indice, array )
            {
            telaInicial.inputText(item);
            
            })

        });

        it('Concluir um item da lista de todo', () => {

            telaInicial.concluirItem();
            telaInicial.validarContador(2);

        })

        
    })
    context('Validar o filtro da aplicação',()=>{
        
        beforeEach(()=>{

            cy.visit('/');
            var todoItens = ["Maça", "Banana", "Cenoura"]
            
            todoItens.forEach(function(item, indice, array )
            {
            telaInicial.inputText(item);
            
            })
           
            telaInicial.concluirItem(); // Concluindo o item nesse método
        
        })


        it('Validar a lista de itens ativos', () => {
            telaInicial.filtrarItem("Active");
            telaInicial.validarSize(2);

        })

        it('Validar a lista de itens concluídos', () => {

            telaInicial.filtrarItem("Completed");
            telaInicial.validarSizeCompleto(1)

        })

        
    })
    context('Validar a remoção de itens',()=>{
        beforeEach(()=>{

            cy.visit('/');
            var todoItens = ["Maça", "Banana", "Cenoura"]
            
            todoItens.forEach(function(item, indice, array )
            {
                telaInicial.inputText(item);
            })

        })

        it('Deletando um item da lista', () => {

            telaInicial.deletarItem();
            telaInicial.validarSize(2);
       
        })

        
    })


})