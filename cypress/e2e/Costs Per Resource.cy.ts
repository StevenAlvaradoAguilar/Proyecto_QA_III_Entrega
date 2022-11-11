describe('Costs Per Resource', function () {
    beforeEach(function () {
        cy.visit('https://tec.gacela.io/cost_per_user');
    });
    /*
    Nombre de la prueba: Cost con espacio en blanco en Costs Per Resource
    Objetivo: Probar la funcionalidad al agregar un costo en Costs Per Resource
    Datos de prueba: User: admin
    Resultado esperado: Exito, porque se espera que al buscar un usuario retorne empty
                        ya que ese usuario no existe.
    */
    it('Cost con espacio en blanco en Costs Per Resource', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();

        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/cost_per_user"]').click();

        cy.get('.vs__search').type("admin")
        cy.wait(2000)

        cy.get('.vs__search').type(' ').should("be.empty")
        cy.get('.btn').click()
    });

    //Acierta, porque se espera que al buscar un usuario retorne empty
    /*
    Nombre de la prueba: User con valor desconocido en Costs Per Resource
    Objetivo: Probar la funcionalidad al agregar un costo en Costs Per Resource
    Datos de prueba: User: Admin2
    Resultado esperado: Exito, porque se espera que al buscar un usuario retorne empty
                        ya que ese usuario no existe.
    */
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

    /*
    Nombre de la prueba: Date con espacio en blanco en Costs Per Resource
    Objetivo: Probar la funcionalidad al agregar un costo en Costs Per Resource
    Datos de prueba: User: admin
    Resultado esperado: Exito, porque se espera que al buscar un usuario retorne empty
                        ya que ese usuario no existe.
    */
    it('Date con espacio en blanco en Costs Per Resource', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();

        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/cost_per_user"]').click();

        cy.get('.vs__search').type("admin")
        cy.wait(2000)

        cy.get('.vs__search').type(' ').should("be.empty")
        cy.get('.btn').click()
    });

    afterEach(function () {
        cy.reload();
    });
});