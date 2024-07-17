import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects';

describe('Deeltar itens da lista', () => {

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
       
        })

        
})