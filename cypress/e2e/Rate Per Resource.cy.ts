describe('Rate Per User', function () {
    beforeEach(function () {
        cy.visit('https://tec.gacela.io/rate_per_user');
    });
    it('Project con espacio en blanco en Rate Per User', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/rate_per_user"]').click();
        cy.get('.vs__selected-options').type("Poject1")
        cy.wait(2000)
        cy.get('.vs__selected-options').type('io{enter}')
        cy.get('.btn').click()
        cy.get(':nth-child(3) > .form-control').type("50000")
        cy.get('.btn-company-secondary').should('be.disabled');
    });

    /*
    Nombre de la prueba: Project con espacio en blanco en Rate Per User
    Objetivo: Probar la funcionalidad de Rate Per Resource
    Datos de prueba: ----
    Resultado esperado: Que la prueba genere un aviso de que el boton se encuentra desabilitado
    */
    it('Project con espacio en blanco en Rate Per User', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/rate_per_user"]').click();
        cy.get('.vs__selected-options').type(" ")
        cy.wait(2000)
        cy.get('.vs__selected-options').type('io{enter}')
        cy.get('.btn').click()
        cy.get(':nth-child(3) > .form-control').type("50000")
        cy.get('.btn-company-secondary').should('be.disabled');
    });

    //Nombre de la prueba: User con espacio en blanco en Rate Per User
    //Codigo: CP-24, CP-52
    //Falla, porque el boton no esta desabilitado
    /*
    Nombre de la prueba: Project con espacio en blanco en Rate Per User
    Objetivo: Probar la funcionalidad de Rate Per Resource
    Datos de prueba: ----
    Resultado esperado: Que la prueba genere un aviso de que el boton se encuentra desabilitado
    */
    it('User con espacio en blanco en Rate Per User', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/rate_per_user"]').click();
        cy.get('.vs__selected-options').type(" ")
        cy.wait(2000)
        cy.get('.vs__selected-options').type('io{enter}')
        cy.get('.btn').click().then(
            function () {
                cy.get('.vd-picker__input').click()
                cy.get('[type="button"][data-date="2022-06-14"] > .vd-picker__table-day__wrapper').click()
                cy.get('.btn-company-secondary').should('be.disabled');
            }
        );
    });

    afterEach(function () {
        cy.reload();
    });
});