import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects';

describe('Acessar a pagina do todoMVC', () => {

        beforeEach(()=>{

          cy.visit('/');

        })

        it('adicionar um item na lista', () => {

          telaInicial.inputText("Pera");
          telaInicial.inputText("Banana");
          telaInicial.inputText("Cenoura");
        
        })
          
          it('adicionar mais de um item na lista com for', () => {

            var todoItens = ["Maça", "Banana", "Cenoura"]

            todoItens.forEach(function(item, indice, array )
            {
            telaInicial.inputText(item);
            
            })

          })
        
        
})
