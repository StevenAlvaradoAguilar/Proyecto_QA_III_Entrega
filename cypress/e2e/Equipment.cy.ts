describe('Equipment', function () {
    beforeEach(function () {
        cy.visit('https://tec.gacela.io/equipment');
    });

    /*
    Nombre de la prueba: Date sin seleccionar
    Objetivo: Probar la funcionalidad al editar un Equipment 
    Datos de prueba: ----
    Resultado esperado: Que la prueba genere un aviso de que se requiere llenar la Descripción
    */
    it('Date sin seleccionar', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();

        cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
        cy.get('.list-group > #inventoryMenu > .list-group-item').click();

        cy.get('.col-md-3 > :nth-child(1)').click()
        cy.get('#serial_number').click()

        cy.get('.card-body').click().then(
        function(){
            cy.get(':nth-child(4) > span > .invalid-feedback').should('contain.text', "This field is required");
        }
    );
    });

    
    /*
    Nombre de la prueba: Internal key con espacios en blanco
    Objetivo: Probar la funcionalidad al editar un Equipment 
    Datos de prueba: ----
    Resultado esperado: Que la prueba genere un aviso de que se requiere llenar la Internal key
    */
    it('Internal key con espacios en blanco', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();
        
        cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
        cy.get('.list-group > #inventoryMenu > .list-group-item').click();
        cy.get('.col-md-3 > :nth-child(1)').click()

        cy.get('#serial_number').click()

        cy.get('.card-body').click().then(
            function(){
                cy.get(':nth-child(3) > span > .invalid-feedback').should('contain.text', "This field is required");
            }
        );
    });


    /*
    Nombre de la prueba: Serial number con espacios en blanco
    Objetivo: Probar la funcionalidad al editar un Equipment 
    Datos de prueba: ----
    Resultado esperado: Que la prueba genere un aviso de que se requiere llenar la el Serial
    */
    it('Serial number con espacios en blanco', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();

        cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
        cy.get('.list-group > #inventoryMenu > .list-group-item').click();
        cy.get('.col-md-3 > :nth-child(1)').click()

        cy.get('#serial_number').click()
        
        cy.get('.card-body').click().then(
            function(){
                cy.get(':nth-child(4) > span > .invalid-feedback').should('contain.text', "This field is required");
            }
        );
    });

    afterEach(function () {
        cy.reload();
    });
});