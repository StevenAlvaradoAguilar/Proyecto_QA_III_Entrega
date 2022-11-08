describe('Learning Paths', function () {
    beforeEach(function () {
        cy.visit('https://tec.gacela.io/learning_paths');
    });

    //Nombre de la prueba: Learning Path con espacio en blanco en NAME
    //Codigo: CP-45
    it('Learning Path con espacio en blanco en NAME', function () {
        cy.get('#email').type('qatec2022@gmail.com');
        cy.get('#password').type('qatecjnsc2022');
        cy.get('.btn > .m-0').click();
        
        cy.get('.list-group > [href="#LearningPathMenu"]').click();
        cy.get('.list-group > #LearningPathMenu > [href="/learning_paths"]').click();

        cy.get('.col-12.col-sm-6.order-last.text-right.mt-2.pt-2 > .btn-company-primary > .fas.fa-plus' ).click()


        cy.get('.card-body').click().then(
            function(){
                cy.get('.invalid-feedback').should('contain.text', "This field is required");
            }
        );
    });

    // //Nombre de la prueba: Learning Path con espacio en blanco en NAME
    // //Codigo: CP-46
    // it('Learning Path con espacio en blanco en VERSION', function () {
    //     cy.get('#email').type('qatec2022@gmail.com');
    //     cy.get('#password').type('qatecjnsc2022');
    //     cy.get('.btn > .m-0').click();
        
    //     cy.get('.list-group > [href="#LearningPathMenu"]').click();
    //     cy.get('.list-group > #LearningPathMenu > [href="/learning_paths"]').click();

    //     cy.get('.col-12.col-sm-6.order-last.text-right.mt-2.pt-2 > .btn-company-primary > .fas.fa-plus' ).click()



    //     cy.get('.card-body').click().then(
    //         function(){
    //             cy.get('.invalid-feedback').should('contain.text', "This field is required");
    //         }
    //     );
    // });

    // //Nombre de la prueba: Learning Path con espacio en blanco en Los 2 espacios completos y con NAME y VERSION ya existentes
    // //Codigo: CP-47
    // it('Learning Path con espacio en blanco en Los 2 espacios completos y con NAME y VERSION ya existentes', function () {
    //     cy.get('#email').type('qatec2022@gmail.com');
    //     cy.get('#password').type('qatecjnsc2022');
    //     cy.get('.btn > .m-0').click();
        
    //     cy.get('.list-group > [href="#LearningPathMenu"]').click();
    //     cy.get('.list-group > #LearningPathMenu > [href="/learning_paths"]').click();

    //     cy.get('.col-12.col-sm-6.order-last.text-right.mt-2.pt-2 > .btn-company-primary > .fas.fa-plus' ).click()

    
    //     cy.get('.card-body').click().then(
    //         function(){
    //             cy.get('.invalid-feedback').should('contain.text', "This field is required");
    //         }
    //     );
    // });

    afterEach(function () {
        cy.reload();
    });
});