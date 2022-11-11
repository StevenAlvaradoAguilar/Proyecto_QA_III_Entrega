describe('Clients', function () {
    beforeEach(function () {
        cy.visit('https://tec.gacela.io/clients');
    });

    /*
    Nombre de la prueba: Descripcion con espacio blanco en Clients
    Objetivo: Probar la funcionalidad agregando un Client
    Datos de prueba: Description: ----
    Resultado esperado: Exito ya que al ingresar un Clients sin descripcion deberia de 
                        devolver "This field is required"
    */
    it('Description con espacio en blanco en Clients', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();

        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/clients"]').click();

        cy.get('.text-right > :nth-child(1)').click();
        cy.get('#description').type(' ');
        
        cy.get('.pmo-content').click().then(
            function(){
                cy.get('.invalid-feedback').should('contain.text', "This field is required");
            }
        );
    });

    /*
    Nombre de la prueba: Descripcion con el nombre de un Clients y sin Type
    Objetivo: Probar la funcionalidad agregando un Client
    Datos de prueba: Description: This is my first client
    Resultado esperado: Exito ya que al ingresar un Clients con descripcion pero sin el Type 
                        deberia de devolver "This field is required"
    */
    it('Description con el nombre de un Clients y sin Type', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();

        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/clients"]').click();

        cy.get('.text-right > :nth-child(1)').click();
        cy.get('#description').type('This is my first client');

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