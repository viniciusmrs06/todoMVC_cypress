import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects';

describe('Concluir itens na lista de todo', () => {

        beforeEach(()=>{

            cy.visit('/');
            var todoItens = ["Maça", "Banana", "Cenoura"]
            
            todoItens.forEach(function(item, indice, array )
            {
            telaInicial.inputText(item);
            
            })

        })

        it('Concluir um item da lista de todo', () => {

          telaInicial.concluirItem();

        })




   

   
        
        
        
})
