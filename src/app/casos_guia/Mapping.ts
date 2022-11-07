describe('Mapping', function () {
    beforeEach(function () {
        cy.visit('https://pepe.golabs.technology');
    });

    //Nombre de la prueba: Model con espacio en blanco en Integrations
    //Codigo: CP-36
    it('Model con espacio en blanco en Integrations', function () {
        cy.get('#email').type('jeremmysq17@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#securityMenu"] > .d-flex').click();
        cy.get('.list-group > #securityMenu > [href="/integrations"]').click();
        cy.wait(2000)
        cy.get('.custom-control > .btn').click()
        cy.get('.text-right > :nth-child(1)').click()
        cy.get('span > #model').type('io{enter}')
        cy.get('.py-4 > .container-fluid').click().then(
            function(){
                cy.get(':nth-child(1) > span > .invalid-feedback').should('contain.text', "This field is required");
            }
        );
    });

    //Nombre de la prueba: Internal Id
    //Codigo: CP-37
    it('Internal Id', function () {
        cy.get('#email').type('jeremmysq17@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#securityMenu"] > .d-flex').click();
        cy.get('.list-group > #securityMenu > [href="/integrations"]').click();
        cy.wait(2000)
        cy.get('.custom-control > .btn').click()
        cy.get('.text-right > :nth-child(1)').click()
        cy.get('#internal_id').click()
        cy.get('.py-4 > .container-fluid').click().then(
            function(){
                cy.get(':nth-child(1) > span > .invalid-feedback').should('contain.text', "This field is required");
            }
        );
    });

    //Nombre de la prueba: External Id
    //Codigo: CP-38
    it('External Id', function () {
        cy.get('#email').type('jeremmysq17@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#securityMenu"] > .d-flex').click();
        cy.get('.list-group > #securityMenu > [href="/integrations"]').click();
        cy.wait(2000)
        cy.get('.custom-control > .btn').click()
        cy.get('.text-right > :nth-child(1)').click()
        cy.get('#phoexternal_idne').click()
        cy.get('.py-4 > .container-fluid').click().then(
            function(){
                cy.get(':nth-child(1) > span > .invalid-feedback').should('contain.text', "This field is required");
            }
        );
    });

    afterEach(function () {
        cy.reload();
    });
});