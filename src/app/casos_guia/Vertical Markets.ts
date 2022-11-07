describe('Vertical Markets', function () {
    beforeEach(function () {
        cy.visit('https://pepe.golabs.technology');
    });

    //Nombre de la prueba: Description con espacio en blanco en Vertical Markets
    //Codigo: CP-11
    it('Description con espacio en blanco en Vertical Markets ', function () {
        cy.get('#email').type('jeremmysq17@gmail.com');
        cy.get('#password').type('12345678');
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