describe('Business Units', function () {
    beforeEach(function () {
        cy.visit('https://tec.golabs.technology/home');
    });

    //Nombre: 'Description con espacio en blanco en Business Units'
    //Codigo: CP-21, CP-39
    it('Description con espacio en blanco en Business Units', function () {
        cy.get('#email').type('lisaguilera2107@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/business_units"]').click();
        cy.get('.text-right > :nth-child(1)').click();
        cy.get('#name').type(' ');
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