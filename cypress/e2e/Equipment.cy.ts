describe('Equipment', function () {
    beforeEach(function () {
        cy.visit('https://tec.gacela.io/equipment');
    });

    //Nombre de la prueba: Date sin seleccionar
    //Codigo: CP-17
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

    //Nombre de la prueba: Internal key con espacios en blanco
    //Codigo: CP-18
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

    //Nombre de la prueba: Serial number con espacios en blanco
    //Codigo: CP-19
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