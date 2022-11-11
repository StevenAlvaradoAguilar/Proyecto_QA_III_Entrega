describe('Job Titles', function () {
    beforeEach(function () {
        cy.visit('https://tec.gacela.io/job_titles');
    });

    /*
    Nombre de la prueba: Internal description con espacio en blanco en Talent Management
    Objetivo: Probar la funcionalidad al ingresar un Job Tittle
    Datos de prueba: ----
    Resultado esperado: Que la prueba genere un aviso de que se requiere llenar la Internal Description
    */
    it('Internal description con espacio en blanco en Talent Management', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();

        cy.get('.list-group > [href="#talentManagmentMenu"] > .d-flex > .menu-collapsed').click();
        cy.get('.list-group > #talentManagmentMenu > [href="/job_titles"]').click();

        cy.get('.col-md-6 > :nth-child(1)').click()
    });

    /*
    Nombre de la prueba: External description con espacio en blanco en Talent Management
    Objetivo: Probar la funcionalidad al ingresar un Job Tittle
    Datos de prueba: ----
    Resultado esperado: Que la prueba genere un aviso de que se requiere llenar la External Description
    */
    it('External description con espacio en blanco en Talent Management', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();

        cy.get('.list-group > [href="#talentManagmentMenu"] > .d-flex > .menu-collapsed').click();
        cy.get('.list-group > #talentManagmentMenu > [href="/job_titles"]').click();

        cy.get('.col-md-6 > :nth-child(1)').click()

        cy.get('.form-group > :nth-child(1) > span > #name').type('ejemplo')
        cy.get('.form-group > :nth-child(2) > span > #name').click()

        /*cy.get('.py-4 > .container-fluid').click().then(
            function(){
                cy.get(':nth-child(2) > span > .invalid-feedback').should('contain.text', "This field is required");
            }   
        );*/
    });

    afterEach(function () {
        cy.reload();
    });
});