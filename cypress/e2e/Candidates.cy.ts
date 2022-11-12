describe('Learning Paths', function () {
  beforeEach(function () {
    cy.visit('https://tec.gacela.io/');
  });


       /*
  Nombre: 
  Objetivo: 
  Datos de la Prueba:
            Nombre:
            Apellidos:
            Correo:
            Número:
  Resultado esperado: 
  */

  it('Nombre', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#talentAcquisitionMenu"]').click();
    cy.get(
      '.list-group > #talentAcquisitionMenu > [href="/external_candidates"]'
    ).click();

    cy.get('.breadcrumb >.container-fluid >.row >:nth-child(2) > .btn.btn-company-primary > .fas.fa-plus').click()

    cy.get('#last_name').type('Hurtado')
    cy.get('#email').type('Hurtado@gmail.com')
    cy.get('#phone').type('88845665')
    cy.get('#first_name').type(' ').then(
        function(){
            cy.get('.invalid-feedback').should('contain.text', "This field is required");
        }
    );
  });

        /*
  Nombre: 
  Objetivo: 
  Datos de la Prueba:
            Nombre:
            Apellidos:
            Correo:
            Número:
  Resultado esperado: 
  */

  it('Apellido', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#talentAcquisitionMenu"]').click();
    cy.get(
      '.list-group > #talentAcquisitionMenu > [href="/external_candidates"]'
    ).click();

    cy.get('.breadcrumb >.container-fluid >.row >:nth-child(2) > .btn.btn-company-primary > .fas.fa-plus').click()

  
    cy.get('#email').type('Hurtado@gmail.com')
    cy.get('#phone').type('88845665')
    cy.get('#first_name').type('Mario')

    cy.get('#last_name').type(' ').then(
        function(){
            cy.get('.invalid-feedback').should('contain.text', "This field is required");
        }
    );
  });


        /*
  Nombre: 
  Objetivo: 
  Datos de la Prueba:
            Nombre:
            Apellidos:
            Correo:
            Número:
  Resultado esperado: 
  */

  it('Correo null', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#talentAcquisitionMenu"]').click();
    cy.get(
      '.list-group > #talentAcquisitionMenu > [href="/external_candidates"]'
    ).click();

    cy.get('.breadcrumb >.container-fluid >.row >:nth-child(2) > .btn.btn-company-primary > .fas.fa-plus').click()

    cy.get('#last_name').type('Hurtado')
    cy.get('#phone').type('88845665')
    cy.get('#first_name').type('Mario')

    cy.get('#email').type(' ').then(
        function(){
            cy.get('.invalid-feedback').should('contain.text', "This field is required");
        }
    );
  });


        /*
  Nombre: 
  Objetivo: 
  Datos de la Prueba:
            Nombre:
            Apellidos:
            Correo:
            Número:
  Resultado esperado: 
  */

  it('Correo mal', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#talentAcquisitionMenu"]').click();
    cy.get(
      '.list-group > #talentAcquisitionMenu > [href="/external_candidates"]'
    ).click();

    cy.get('.breadcrumb >.container-fluid >.row >:nth-child(2) > .btn.btn-company-primary > .fas.fa-plus').click()

    cy.get('#last_name').type('Hurtado')
    cy.get('#phone').type('88845665')
    cy.get('#first_name').type('Mario')

    cy.get('#email').type('Prueba').then(
        function(){
            cy.get('.invalid-feedback').should('contain.text', "This field should have a valid email address");
        }
    );
  });


        /*
  Nombre: 
  Objetivo: 
  Datos de la Prueba:
            Nombre:
            Apellidos:
            Correo:
            Número:
  Resultado esperado: 
  */

  it('Numero', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#talentAcquisitionMenu"]').click();
    cy.get(
      '.list-group > #talentAcquisitionMenu > [href="/external_candidates"]'
    ).click();

    cy.get('.breadcrumb >.container-fluid >.row >:nth-child(2) > .btn.btn-company-primary > .fas.fa-plus').click()

    cy.get('#last_name').type('Hurtado')
    cy.get('#email').type('Hurtado@gmail.com')
    cy.get('#first_name').type('Mario')
    cy.get('#phone').type(' ').then(
        function(){
            cy.get('.invalid-feedback').should('contain.text', "This field is required");
        }
    );
  });





  afterEach(function () {
    cy.reload();
  });
});
