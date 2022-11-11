describe('Business Units', function () {
    beforeEach(function () {
        cy.visit('https://tec.gacela.io/business_units');
    });

    /*
    Nombre de la prueba: Description con espacio en blanco en Business Units
    Objetivo: Probar la funcionalidad de Business Units
    Datos de prueba: Description: ----
    Resultado esperado: Exito ya que al ingresar un Business Units sin descripcion deberia de 
                        devolver "This field is required"
    */
    it('Description con espacio en blanco en Business Units', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
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
    
    /*
    Nombre de la prueba: Description con un nombre para buscar en Business Units
    Objetivo: Probar la funcionalidad de Business Units
    Datos de prueba: Description: Ejemplo
    Resultado esperado: Se espera exito, ya que se puede agregar la descripcion
    */
    it('Description con un nombre para buscar en Business Units', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();

        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/business_units"]').click();
        
        cy.get('.text-right > :nth-child(1)').click();
        cy.get('#name').type('Ejemplo');
        cy.get('.company-control').click()

        cy.get('.pmo-content').click().then(
            function(){
               cy.get('.invalid-feedback').should('contain.text', "");
            }
        );
    }); 

    afterEach(function () {
        cy.reload();
    });
});