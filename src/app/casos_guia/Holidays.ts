describe('Holidays', function () {
    beforeEach(function () {
        cy.visit('https://pepe.golabs.technology');
    });

    //Nombre de la prueba: Description con espacio en blanco en Holidays
    //Codigo: CP-16
    it('Description con espacio en blanco en Holidays', function () {
        cy.get('#email').type('jeremmysq17@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#talentManagmentMenu"] > .d-flex > .menu-collapsed').click();
        cy.get('.list-group > #talentManagmentMenu > [href="/vacation/holidays"]').click();
        cy.get('.col-md-2 > :nth-child(1)').click()
        cy.get('.card-body').click().then(
            function(){
                cy.get(':nth-child(1) > span > .invalid-feedback').should('contain.text', "This field is required");
            }
        );
    });

    afterEach(function () {
        cy.reload();
    });
});