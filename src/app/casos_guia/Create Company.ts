describe('Create Company', function () {
    beforeEach(function () {
        cy.visit('https://golabs.technology/register_company');
    });

    //Nombre de la prueba: Name de la compañia con espacio en blanco
    //Codigo: CP-1, CP-41
    it('Name de la compañia con espacio en blanco', function () {
        cy.get(':nth-child(1) > :nth-child(4) > span > .form-control').click()
        cy.get(':nth-child(1) > .d-flex').click().then(
            function(){
                cy.get(':nth-child(1) > :nth-child(4) > span > .invalid-feedback').should('contain.text', "This field is required");
            }
        );
    }); 

    //Nombre de la prueba: Solo presionando el boton Next
    //Codigo: CP-2, CP-42
    it('Solo presionando el boton Next', function () {
        cy.get(':nth-child(1) > .row > .btn').should('be.disabled');
    });

    afterEach(function () {
        cy.reload();
    });
});


