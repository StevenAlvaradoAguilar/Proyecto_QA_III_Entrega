describe('Learning Paths', function () {
  beforeEach(function () {
    cy.visit('https://tec.gacela.io/');
  });

  
  /*
    Nombre de la prueba: Editanto Equipment Internal Key vacía botón Save desabilitado
    Objetivo: Probar la funcionalidad al editar un Equipment 
    Datos de prueba: ----
    Resultado esperado: Exito, ya que el boton debe de estar desabilitado
    */
  it('Editanto Equipment Internal Key vacía botón, Save desabilitado', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
    cy.get('.list-group > #inventoryMenu > .list-group-item').click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.card-body > .row > :nth-child(3) .form-control').clear();

    cy.get('.btn.btn-company-primary.btn-block').should('be.disabled');

  });

   /*
    Nombre de la prueba: Editanto Equipment Internal Key vacía botón, Solicita Internal Key
    Objetivo: Probar la funcionalidad al editar un Equipment 
    Datos de prueba: ----
    Resultado esperado: Exito ya que al editar deberia de devolver "This field is required"
    */
  it('Editanto Equipment Internal Key vacía botón, Solicita Internal Key', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
    cy.get('.list-group > #inventoryMenu > .list-group-item').click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.card-body > .row > :nth-child(3) .form-control').clear().then(

        function(){
            cy.get(':nth-child(3) > span > .invalid-feedback').should('contain.text', "This field is required");
        }
    );
  });

  /*
    Nombre de la prueba: Editanto Equipment Serial Number vacío botón Save desabilitado
    Objetivo: Probar la funcionalidad al editar un Equipment 
    Datos de prueba: ----
    Resultado esperado: Exito, ya que el boton debe de estar desabilitado
    */

  it('Editanto Equipment Serial Number vacío, botón Save desabilitado', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
    cy.get('.list-group > #inventoryMenu > .list-group-item').click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.card-body > .row > :nth-child(4) .form-control').clear();

    cy.get('.btn.btn-company-primary.btn-block').should('be.disabled');
  });


  //Nombre de la prueba: Editanto Equipment Serial Number vacío, Solicita Serial Number
  //Codigo: CP-51

  /*
    Nombre de la prueba: Editanto Equipment Serial Number vacío, Solicita Serial Number
    Objetivo: Probar la funcionalidad al editar un Equipment 
    Datos de prueba: ----
    Resultado esperado: Exito ya que al editar deberia de devolver "This field is required"
    */
  it('Editanto Equipment Serial Number vacío, Solicita Serial Number', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
    cy.get('.list-group > #inventoryMenu > .list-group-item').click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.card-body > .row > :nth-child(4) .form-control').clear().then(

      function(){
          cy.get(':nth-child(4) > span > .invalid-feedback').should('contain.text', "This field is required");
      }
    );
  });

  /*
    Nombre de la prueba: Editanto Equipment Model vacío, botón Save desabilitado
    Objetivo: Probar la funcionalidad al editar un Equipment 
    Datos de prueba: ----
    Resultado esperado: Exito, ya que el boton debe de estar desabilitado
    */
  it('Editanto Equipment Model vacío, botón Save desabilitado', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
    cy.get('.list-group > #inventoryMenu > .list-group-item').click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.card-body > .row > :nth-child(5) .form-control').clear();

    cy.get('.btn.btn-company-primary.btn-block').should('be.disabled');
  });


  /*
    Nombre de la prueba: Editanto Equipment Model vacío, Solicita Model
    Objetivo: Probar la funcionalidad al editar un Equipment 
    Datos de prueba: ----
    Resultado esperado: Exito ya que al editar deberia de devolver "This field is required"
    */
  it('Editanto Equipment Model vacío, Solicita Model', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
    cy.get('.list-group > #inventoryMenu > .list-group-item').click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.card-body > .row > :nth-child(5) .form-control').clear().then(

      function(){
          cy.get(':nth-child(5) > span > .invalid-feedback').should('contain.text', "This field is required");
      }
    );
  });

  /*
    Nombre de la prueba: Editanto Equipment Description vacía, botón Save desabilitado
    Objetivo: Probar la funcionalidad al editar un Equipment 
    Datos de prueba: ----
    Resultado esperado: Exito, ya que el boton debe de estar desabilitado
    */
  it('Editanto Equipment Description vacía, botón Save desabilitado', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
    cy.get('.list-group > #inventoryMenu > .list-group-item').click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.card-body > .row > :nth-child(6) .trix-content').clear();


    cy.get('.btn.btn-company-primary.btn-block').should('be.disabled');
  });

  /*
    Nombre de la prueba: Editanto Equipment Description vacía, Solicita descripción
    Objetivo: Probar la funcionalidad al editar un Equipment 
    Datos de prueba: ----
    Resultado esperado: Exito ya que al editar deberia de devolver "This field is required"
    */
  it('Editanto Equipment Description vacía, Solicita descripción', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
    cy.get('.list-group > #inventoryMenu > .list-group-item').click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.card-body > .row > :nth-child(6) .trix-content').clear().then(

      function(){
          cy.get(':nth-child(5) > span > .invalid-feedback').should('contain.text', "This field is required");
      }
    );
  });

  /*
    Nombre de la prueba: Editanto Equipment Sin fecha, botón Save desabilitado
    Objetivo: Probar la funcionalidad al editar un Equipment 
    Datos de prueba: ----
    Resultado esperado: Exito, ya que el boton debe de estar desabilitado
    */

  it('Editanto Equipment Sin fecha, botón Save desabilitado', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
    cy.get('.list-group > #inventoryMenu > .list-group-item').click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.vd-picker__input-clear__icon').click();

    cy.get('.btn.btn-company-primary.btn-block').should('be.disabled');
  });
  
  afterEach(function () {
    cy.reload();
  });
});
