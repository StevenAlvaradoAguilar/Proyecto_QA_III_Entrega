describe('Margin Calculator', function () {
    beforeEach(function () {
        cy.visit('https://tec.gacela.io/margin_calculator');
    });

    /*
    Nombre de la prueba: Description con espacio en blanco en Margin Calculator
    Objetivo: Probar la funcionalidad del modulo Magin Calculator
    Datos de prueba: 
    Resultado esperado: Que la prueba genere un aviso de que se requiere llenar la Descripción
    */
    it('Description con espacio en blanco en Margin Calculator', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();

        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/margin_calculator"]').click();

        cy.get('.text-right > :nth-child(1)').click();
        cy.get('#name').type(' ');  
    }); 

    afterEach(function () {
        cy.reload();
    });
});