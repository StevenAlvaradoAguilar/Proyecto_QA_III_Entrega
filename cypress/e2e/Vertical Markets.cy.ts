describe('Vertical Markets', function () {
    beforeEach(function () {
        cy.visit('https://tec.gacela.io/vertical_markets');
    });

    /*
    Nombre de la prueba: Description con espacio en blanco en Vertical Markets
    Objetivo: Probar la funcionalidad al agregar un dato en Estimations
    Datos de prueba: Description: Vacia
    Resultado esperado: Que la prueba genere un aviso de que se requiere llenar la Descripción
    */
    it('Description con espacio en blanco en Vertical Markets ', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/vertical_markets"] > .menu-collapsed').click();
        cy.get('.text-right > :nth-child(1)').click()
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