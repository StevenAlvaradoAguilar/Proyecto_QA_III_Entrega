describe('Bots', function () {
    beforeEach(function () {
        cy.visit('https://pepe.golabs.technology');
    });

    //Nombre de la prueba: Name con espacio en blanco en Bots
    //Codigo: CP-34
    it('Name con espacio en blanco en Bots', function () {
        cy.get('#email').type('jeremmysq17@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#securityMenu"] > .d-flex').click();
        cy.get('.list-group > #securityMenu > [href="/bots"]').click();
        cy.get('.col-md-2 > :nth-child(1)').click()
        cy.get('.card-body').click().then(
            function(){
                cy.get('.invalid-feedback').should('contain.text', "This field is required");
            }
        );
    });

    //Nombre de la prueba: Bot sin Permissions
    //Codigo: CP-35
    it('Bot sin Permissions', function () {
        cy.get('#email').type('jeremmysq17@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#securityMenu"] > .d-flex').click();
        cy.get('.list-group > #securityMenu > [href="/bots"]').click();
        cy.get('.col-md-2 > :nth-child(1)').click()
        cy.get('span > #name').type("Kevin")
        cy.get('.border-0').click()
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