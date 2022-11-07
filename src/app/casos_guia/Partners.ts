describe('Partners', function () {
    beforeEach(function () {
        cy.visit('https://pepe.golabs.technology/project_roles');
    });

    //Nombre de la prueba: Name con espacio en blanco en Partners
    //Codigo: CP-8, CP-48
    it('Name con espacio en blanco en Partners', function () {
        cy.get('#email').type('jeremmysq17@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/partners"]').click();
        cy.get('.col-md-2 > :nth-child(1)').click()
        cy.get('span > #type').select("Consultant");
        cy.get('.pmo-content').click().then(
            function(){
                cy.get(':nth-child(1) > span > .invalid-feedback').should('contain.text', "This field is required");
            }
        );
    });

    //Nombre de la prueba: Type con espacio en blanco en Partners
    //Codigo: CP-9, CP-49
    it('Type con espacio en blanco en Partners', function () {
        cy.get('#email').type('jeremmysq17@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/partners"]').click();
        cy.get('.col-md-2 > :nth-child(1)').click()
        cy.get('span > #name').type("Nuevo Partner")
        cy.get('#website').type("www.partner.com")
        cy.get('.trix-content').type("Nueva Descripcion")
        cy.get('.form-row > :nth-child(1) > #name').type("Nueva Contacto")
        cy.get('#position').type("CEO")
        cy.get('#email').type("contacto@gmail.com")
        cy.get('#phone').type("88888888")
        cy.get('.d-flex > .btn > .fas').click()
        cy.get('.btn-primary').should('be.disabled');
    });

    afterEach(function () {
        cy.reload();
    });
});