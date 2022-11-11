describe('Estimations', function () {
    beforeEach(function () {
        cy.visit('https://tec.gacela.io/estimations');
    });

    /*
    Nombre de la prueba: Description con espacio en blanco en Estimation
    Objetivo: Probar la funcionalidad al agregar un dato en Estimations
    Datos de prueba: ----
    Resultado esperado: Que la prueba genere un aviso de que se requiere llenar la Descripción
    */
    it('Description con espacio en blanco en Estimation', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();

        cy.get('.list-group > [href="#estimationsMenu"]').click();
        cy.get('.list-group > #estimationsMenu > [href="/estimations"]').click();

        cy.get('.text-right > :nth-child(1)').click()

        cy.get('.card-body').click().then(
            function(){
                cy.get('.invalid-feedback').should('contain.text', "This field is required");
            }
        );
    });

    //Nombre de la prueba: Description con un nombre en Estimation
    //Codigo: CP-13
    it('Description con un nombre en Estimation', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();

        cy.get('.list-group > [href="#estimationsMenu"]').click();
        cy.get('.list-group > #estimationsMenu > [href="/estimations"]').click();

        cy.get('.text-right > :nth-child(1)').click()
        cy.get('#description').type("devesa")
        
        cy.get('.card-body').click().then(
            function(){
                cy.get('.invalid-feedback').should('contain.text', "This field is required");
            }
        );
    });

    afterEach(function () {
        cy.reload();
    });
});