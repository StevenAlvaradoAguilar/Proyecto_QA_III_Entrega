describe('Projects', function () {
    beforeEach(function () {
        cy.visit('https://tec.golabs.technology/home');
    });

    //Nombre de la prueba: New project name con espacio en blanco 
    //Codigo: CP-25, CP-53
    it('New project name con espacio en blanco', function () {
        cy.get('#email').type('lisaguilera2107@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/projects"]').click();
        cy.get('.col-md-2 > :nth-child(1)').click();
         cy.get('.pmo-content').click().then(
             function(){
                cy.get(':nth-child(1) > :nth-child(1) > span > .invalid-feedback').should('contain.text', "This field is required");
             }
         );
    });

    //Nombre de la prueba: Client con espacio en blanco  
    //Codigo: CP-26, CP-54
    it('Client con espacio en blanco', function () {
        cy.get('#email').type('lisaguilera2107@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/projects"]').click();
        cy.get('.col-md-2 > :nth-child(1)').click();
        cy.get('span > #name').type('lis');
        cy.get('#client_id').type(' ');
        cy.get('.card-body > :nth-child(2)').click().then(
             function(){
                cy.get('.card-body > :nth-child(1) > :nth-child(2) > span > .invalid-feedback').should('contain.text', "This field is required");
             }
         );
         
    });

    //Nombre de la prueba: Budget con espacio en blanco  
    //Codigo: CP-27, CP-55
    //Pasa la prueba pero no contiene el mensaje visible de "This field is required".
    it('Budget con espacio en blanco', function () {
        cy.get('#email').type('lisaguilera2107@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/projects"]').click();
        cy.get('.col-md-2 > :nth-child(1)').click();
        cy.get('span > #name').type('lis');
        cy.get('#budget').type(' ');
        cy.get('.card-body > :nth-child(2)').click().then(
             function(){
                cy.get('.card-body > :nth-child(1) > :nth-child(3) > span > .invalid-feedback').should('contain.text', "This field is required");
            }
         );
         
    });


    //Nombre de la prueba: Type con espacio en blanco  
    //Codigo: CP-29, CP-57
    it('Type con espacio en blanco', function () {
        cy.get('#email').type('lisaguilera2107@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/projects"]').click();
        cy.get('.col-md-2 > :nth-child(1)').click();
        cy.get('span > #name').type('QA');
        cy.get('span > #type').type(' ');
        cy.get('.card-body > :nth-child(2)').click().then(
             function(){
                cy.get(':nth-child(4) > :nth-child(1) > span > .invalid-feedback').should('contain.text', "This field is required");
             }
         );
         
    });

    //Nombre de la prueba: State con espacio en blanco  
    //Codigo: CP-30, CP-58
    it('State con espacio en blanco', function () {
        cy.get('#email').type('lisaguilera2107@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/projects"]').click();
        cy.get('.col-md-2 > :nth-child(1)').click();
        cy.get('span > #name').type('QA');
        cy.get('span > #state').type(' ');
        cy.get('.card-body > :nth-child(2)').click().then(
             function(){
                cy.get(':nth-child(4) > :nth-child(2) > span > .invalid-feedback').should('contain.text', "This field is required");
             }
         ); 
    });

    //Nombre de la prueba: Status con espacio en blanco  
    //Codigo: CP-31, CP-59
    it('Status con espacio en blanco', function () {
        cy.get('#email').type('lisaguilera2107@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('.btn > .m-0').click();
        cy.get('.list-group > [href="#projectsMenu"]').click();
        cy.get('.list-group > #projectsMenu > [href="/projects"]').click();
        cy.get('.col-md-2 > :nth-child(1)').click();
        cy.get('span > #name').type('QA');
        cy.get('#project_status_id').type(' ');
        cy.get('.card-body > :nth-child(2)').click().then(
             function(){
                cy.get(':nth-child(5) > :nth-child(1) > span > .invalid-feedback').should('contain.text', "This field is required");
             }
         ); 
    });
   

    afterEach(function () {
        cy.reload();
    });
});
