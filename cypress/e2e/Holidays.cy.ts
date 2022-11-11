describe('Holidays', function () {
    beforeEach(function () {
        cy.visit('https://tec.gacela.io/vacation/holidays');
    });

    /*
    Nombre de la prueba: Description con espacio en blanco en Holidays
    Objetivo: Probar la funcionalidad al agregar un dato en Holidays
    Datos de prueba: ----
    Resultado esperado: Que la prueba genere un aviso de que se requiere llenar la Descripción
    */
    it('Description con espacio en blanco en Holidays', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();

        cy.get('.list-group > [href="#talentManagmentMenu"] > .d-flex > .menu-collapsed').click();
        cy.get('.list-group > #talentManagmentMenu > [href="/vacation/holidays"]').click();

        cy.get('.col-md-3 > :nth-child(2)').click()

        /*cy.get('.card-body').click().then(
            function(){
                cy.get(':nth-child(1) > span > .invalid-feedback').should('contain.text', "This field is required");
            }
        );*/
    });

    afterEach(function () {
        cy.reload();
    });
});