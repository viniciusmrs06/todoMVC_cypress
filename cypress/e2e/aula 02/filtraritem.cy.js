import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects';

describe('Validar os foltros da aplicação após adição de itens', () => {

        beforeEach(()=>{

            cy.visit('/');
            var todoItens = ["Maça", "Banana", "Cenoura"]
            
            todoItens.forEach(function(item, indice, array )
            {
            telaInicial.inputText(item);
            
            })
           
            telaInicial.concluirItem(); // Concluindo o item nesse método


        })

        /*
        Clicar no filtro
        o item ser exibido
        e o contador deve bater com a infromação
        */

        it('Filtrar itens ativos', () => {

            telaInicial.filtrarItem("Active");
            telaInicial.filtrarItem("Completed");

        })

        // it('Filtrar itens concluídos', () => {

        //     telaInicial.concluirItem();
  
        // })
        
})
