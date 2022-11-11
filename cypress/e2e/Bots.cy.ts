describe('Bots', function () {
    beforeEach(function () {
        cy.visit('https://tec.gacela.io/bots');
    });

    /*
    Nombre de la prueba: Bot sin Permissions
    Objetivo: Probar la funcionalidad de agregar un bot sin permissions
    Datos de prueba: Permissios: ----
    Resultado esperado: Se espera que succeda un error al registrar el bot.
    */
    it('Bot sin Permissions', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();

        cy.get('.list-group > [href="#securityMenu"] > .d-flex').click();
        cy.get('.list-group > #securityMenu > [href="/bots"]').click();
        cy.get('.col-md-6 > :nth-child(1)').click()

        cy.get('.col-sm-12.col-md-6 > .company-control').click();
        cy.get('#name').type("qatec2022")
        cy.get('.company-control').click()

        /*cy.get('.card-body').click().then(
            function(){
                cy.get('.invalid-feedback').should('contain.text', "This field is required");
            }
        );*/
    });
    
    /*
    Nombre de la prueba: Name con espacio en blanco en Bots
    Objetivo: Probar la funcionalidad de agregar un bot sin nombre
    Datos de prueba: Name: ----
    Resultado esperado: Se espera que se pueda registrar el bot con exito.
    */
    it('Name con espacio en blanco en Bots', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();

        cy.get('.list-group > [href="#securityMenu"] > .d-flex').click();
        cy.get('.list-group > #securityMenu > [href="/bots"]').click();

        cy.get('.col-md-6 > :nth-child(1)').click()
    });

    afterEach(function () {
        cy.reload();
    });
});