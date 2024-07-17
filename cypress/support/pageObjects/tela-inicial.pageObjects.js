
const elem = require('../elements/tela-inicial.elements').ELEMENTS
const concluirItem = require('../elements/tela-inicial.elements').ITENS
const filtroItem = require('../elements/tela-inicial.elements').FILTROS

class telaInicial{  


    inputText(dado){ 
     cy.get(elem.inputTodo).type(dado).type('{enter}')     

    }

 
    concluirItem(){
     cy.get(concluirItem.buttonConcluir)
     .last()
     .click();

    }

    filtrarItem(menu){
        //jeito que eu fiz
    
        // cy.get(filtroItem.filtro).contains('Active').and('be.visible').click();
        // cy.get(filtroItem.filtro).contains('Completed').and('be.visible').click();

        cy.get(filtroItem.filtro).contains(menu).and('be.visible').click()


    }

     deletarItem(){
        cy.get(concluirItem.listaItens)
        .first()
        .find('button')
        .invoke('show')
        .click()


    }

     validarImput(texto){
    
        cy.get(elem.inputTodo)
        .should('have.attr','placeholder')
        .and('include', texto)
    }

    validarContador(numero)
    {
         cy.get(filtroItem.contador).contains(numero)
    }
    

    validarSize(numero)
    {
    cy.get(filtroItem.validarListaItens)
    .should('have.length', 2)

    }

    validarSizeCompleto(numero)
    {
    cy.get(filtroItem.validarListaItens)
    .should('have.length', 1)

    }
    
}

export default  new telaInicial();