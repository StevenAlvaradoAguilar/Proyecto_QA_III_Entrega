describe('New Project', function () {
    beforeEach(function () {
        cy.visit('https://pepe.golabs.technology');
    });

    //Nombre de la prueba: Description con espacio en blanco en New Projects
    //Codigo: CP-28, CP-56
    it('Description con espacio en blanco en New Projects', function () {
        cy.get('#email').type('jeremmysq17@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"] > .d-flex').click();
        cy.get('.list-group > #projectsMenu > [href="/projects"]').click();
        cy.get('.col-md-2 > :nth-child(1)').click();
        cy.get(':nth-child(1) > .src-components-trix_container-5Bcy > .trix-content').click()
        cy.get('.card-body').click().then(
            function(){
                cy.get(':nth-child(1) > span > .invalid-feedback').should('contain.text', "This field is required");
            }
        );
    });

    //Nombre de la prueba: Start date con espacio en blanco en New Projects
    //Codigo: CP-32, CP-60
    it('Start date con espacio en blanco en New Projects', function () {
        cy.get('#email').type('jeremmysq17@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"] > .d-flex').click();
        cy.get('.list-group > #projectsMenu > [href="/projects"]').click();
        cy.get('.col-md-2 > :nth-child(1)').click();
        cy.get(':nth-child(1) > span > .vd-wrapper > .vd-picker__input > .vd-picker__input-clear > .vd-picker__input-clear__icon > .vd-icon > svg').click().then(
            function(){
                cy.get(':nth-child(6) > :nth-child(1) > span > .invalid-feedback').should('contain.text', "This field is required");
            }
        );
    });

    //Nombre de la prueba: End date con espacio en blanco en New Projects
    //Codigo: CP-33
    it('End date con espacio en blanco en New Projects', function () {
        cy.get('#email').type('jeremmysq17@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"] > .d-flex').click();
        cy.get('.list-group > #projectsMenu > [href="/projects"]').click();
        cy.get('.col-md-2 > :nth-child(1)').click();
        cy.get(':nth-child(6) > :nth-child(2) > span > .vd-wrapper > .vd-picker__input > .vd-picker__input-clear > .vd-picker__input-clear__icon > .vd-icon > svg').click().then(
            function(){
                cy.get(':nth-child(6) > :nth-child(2) > span > .invalid-feedback').should('contain.text', "This field is required");
            }
        );
    });

    afterEach(function () {
        cy.reload();
    });
});