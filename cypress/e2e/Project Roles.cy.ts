describe('Project Roles', function () {
    beforeEach(function () {
        cy.visit('https://tec.gacela.io/project_roles');
    });

    //Nombre de la prueba: Descripcion con espacio blanco en Project Roles
    //Codigo: CP-6, CP-46
    it('Description con espacio en blanco en Project Roles', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/project_roles"]').click();
        cy.get('.col-md-2 > :nth-child(1)').click();
        cy.get('.pmo-content').click().then(
            function () {
                cy.get('.invalid-feedback').should('contain.text', "This field is required");
            }
        );
    });

    afterEach(function () {
        cy.reload();    
    });
});
