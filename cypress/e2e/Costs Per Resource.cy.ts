describe('Costs Per Resource', function () {
    beforeEach(function () {
        cy.visit('https://tec.gacela.io/cost_per_user');
    });

    //Nombre de la prueba: User con valor desconocido en Costs Per Resource
    //Codigo: CP-24, CP-52
    //Acierta, porque se espera que al buscar un usuario retorne empty
    it('User con valor desconocido en Costs Per Resource', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/cost_per_user"]').click();
        cy.get('.vs__search').type("Admin2").should("be.empty")
    });

    //Nombre de la prueba: Date con espacio en blanco en Costs Per Resource
    //Codigo: CP-23, CP-51
    //Falla, porque el boton no esta habilitado
    it('Date con espacio en blanco en Costs Per Resource', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/cost_per_user"]').click();
        cy.get('.vs__search').type("admin")
        cy.wait(2000)
        cy.get('.vs__search').type('io{enter}')
        cy.get('.btn').click()
        cy.get(':nth-child(3) > .form-control').type("50000")
        cy.get('.btn-company-secondary').should('be.disabled');
    });

    //Nombre de la prueba: Cost con espacio en blanco en Costs Per Resource
    //Codigo: CP-24, CP-52
    //Falla, porque el boton no esta habilitado
    it('Cost con espacio en blanco en Costs Per Resource', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/cost_per_user"]').click();
        cy.get('.vs__search').type("admin")
        cy.wait(2000)
        cy.get('.vs__search').type('io{enter}')
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