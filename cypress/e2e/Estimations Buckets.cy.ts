describe('Estimations Buckets', function () {
    beforeEach(function () {
        cy.visit('https://tec.gacela.io/estimation_buckets');
    });

    //Nombre de la prueba: Description con espacio en blanco en Estimation Buckets
    //Codigo: CP-12
    it('Description con espacio en blanco en Estimation Buckets', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#estimationsMenu"]').click();
        cy.get('.list-group > #estimationsMenu > [href="/estimation_buckets"]').click();
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