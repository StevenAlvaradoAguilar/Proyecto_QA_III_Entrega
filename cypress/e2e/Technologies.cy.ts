describe('Technologies', function () {
    beforeEach(function () {
        cy.visit('https://tec.gacela.io/technologies');
    });

    //Nombre de la prueba: Descripcion con espacio blanco en Technologies
    
    /*
    Nombre de la prueba: Descripcion con espacio blanco en Technologies
    Objetivo: Probar la funcionalidad del modulo Technologies
    Datos de prueba: Description: Vacia
    Resultado esperado: Que la prueba genere un aviso de que se requiere llenar la Descripción
    */
    it('Description con espacio en blanco en Technologies', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();

        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/technologies"]').click();

        cy.get('.text-right > :nth-child(1)').click()

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