describe('Learning Paths', function () {
  beforeEach(function () {
    cy.visit('https://tec.gacela.io/');
  });


       /*
  Nombre: Verificar la creación de un candidato sin nombre
  Objetivo: Verificar si es posible crear un candidato sin nombre
  Datos de la Prueba:
            Nombre: Vacío
            Apellidos:'Hurtado'
            Correo: 'Hurtado@gmail.com'
            Número:'88845665'
  Resultado esperado: Se espera que la aplicación muestre un mensaje "This field is required",
  solicitando que se dijite un nombre
  */

  it('Verificar la creación de un candidato sin nombre', function () {
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
  Nombre: Verificar la creación de un candidato sin apellidos
  Objetivo: Verificar si es posible crear un candidato sin Apellido
  Datos de la Prueba:
            Nombre:'Mario'
            Apellidos: Vacío
            Correo: 'Hurtado@gmail.com'
            Número:'88845665'
  Resultado esperado: Se espera que la aplicación muestre un mensaje "This field is required",
  solicitando que se dijite un apellido
  */

  it('Verificar la creación de un candidato sin apellidos', function () {
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
  Nombre: Verificar la creación de un candidato sin correo
  Objetivo: Verificar si es posible crear un candidato sin Correo
  Datos de la Prueba:
            Nombre:'Mario'
            Apellidos:'Hurtado'
            Correo: Vacío
            Número:'88845665'
  Resultado esperado: Se espera que la aplicación muestre un mensaje "This field is required",
  solicitando que se dijite un correo
  */

  it('Verificar la creación de un candidato sin correo', function () {
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
  Nombre: Verificar la creación de un candidato con un correo erroneo
  Objetivo: Verificar si es posible crear un candidato con un correo erroneo
  Datos de la Prueba:
            Nombre:'Mario'
            Apellidos:'Hurtado'
            Correo: 'Prueba'
            Número:'88845665'
  Resultado esperado: Se espera que la aplicación muestre un mensaje "This field should have a valid email address",
  solicitando que se dijite un correo correcto 
  */

  it('Verificar la creación de un candidato con un correo erroneo', function () {
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
  Nombre: Verificar la creación de un candidato sin número de telefono
  Objetivo: Verificar si es posible crear un candidato sin un número telefonico
  Datos de la Prueba:
            Nombre:'Mario'
            Apellidos:'Hurtado'
            Correo: 'Hurtado@gmail.com'
            Número: Vacío
  Resultado esperado: Se espera que la aplicación muestre un mensaje "This field is required",
  solicitando que se dijite un numero de telefono
  */

  it('Verificar la creación de un candidato sin número de telefono', function () {
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
