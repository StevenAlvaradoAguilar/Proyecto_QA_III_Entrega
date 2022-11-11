describe('Partners', function () {
    beforeEach(function () {
        cy.visit('https://tec.gacela.io/partners');
    });

    /*
    Nombre de la prueba: Name con espacio en blanco en Partners
    Objetivo: Probar la funcionalidad al agregar un dato en Partners
    Datos de prueba: Name: Vacio
    Resultado esperado: Que la prueba genere un aviso de que se requiere llenar la Descripción
    */
    it('Name con espacio en blanco en Partners', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();

        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/partners"]').click();
        
        cy.get('.col-md-6 > :nth-child(2)').click()
        //cy.get('span > #type').select("Consultant");
    });

    /*
    Nombre de la prueba: Type con espacio en blanco en Partners
    Objetivo: Probar la funcionalidad al agregar un dato en Partners
    Datos de prueba:    name: Nuevo Partner
                        website: www.partner.com
                        email: correo82828@gmail.com
                        position: CEO
                        phone: 87878689
    Resultado esperado: Que la prueba genere un error
    */
    it('Type con espacio en blanco en Partners', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();

        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/partners"]').click();

        cy.get('.col-md-2 > :nth-child(1)').click()
        cy.get('span > #name').type("Nuevo Partner")
        cy.get('#website').type("www.partner.com")
        cy.get('.trix-content').type("Nueva Descripcion")
        cy.get('.form-row > :nth-child(1) > #name').type("Nueva Contacto")
        cy.get('#position').type("CEO")
        cy.get('#email').type("correo82828@gmail.com")
        cy.get('#phone').type("87878689")
        cy.get('.d-flex > .btn > .fas').click()
        cy.get('.btn-primary').should('be.disabled');
    });

    afterEach(function () {
        cy.reload();
    });
});