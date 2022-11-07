describe('Clients', function () {
    beforeEach(function () {
        cy.visit('https://tec.gacela.io/clients');
    });

    //Nombre de la prueba: Descripcion con espacio blanco en Clients
    //Codigo: CP-7, CP-47
    it('Description con espacio en blanco en en Clients', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/clients"]').click();
        cy.get('.col-md-6 > :nth-child(1)').click();
        cy.get('.pmo-content').click().then(
            function(){
                cy.get('.invalid-feedback').should('contain.text', "This field is required");
            }
        );
    });
    
    afterEach(function () {
        cy.reload();
    });
});