describe('Learning Paths', function () {
  beforeEach(function () {
    cy.visit('https://tec.gacela.io/');
  });

<<<<<<< HEAD
  
  /*
    Nombre de la prueba: Editanto Equipment Internal Key vacía botón Save desabilitado
    Objetivo: Probar la funcionalidad al editar un Equipment 
    Datos de prueba: ----
    Resultado esperado: Exito, ya que el boton debe de estar desabilitado
    */
  it('Editanto Equipment Internal Key vacía botón, Save desabilitado', function () {
=======
         /*
  Nombre: Verificar editar Equipment, eliminando la Internal Key
  Objetivo: Probar la edición de un Equipment, eliminando la Internal Key
  Datos de la Prueba:
            Internal Key: Vacío
  Resultado esperado: Que se desabilite el botón de guardado
  */

  it('Verificar editar Equipment, eliminando la Internal Key', function () {
>>>>>>> d128f4db6c33ca2987375cfd251d5a844a94a978
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
    cy.get('.list-group > #inventoryMenu > .list-group-item').click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.card-body > .row > :nth-child(3) .form-control').clear();

    cy.get('.btn.btn-company-primary.btn-block').should('be.disabled');

  });
<<<<<<< HEAD

   /*
    Nombre de la prueba: Editanto Equipment Internal Key vacía botón, Solicita Internal Key
    Objetivo: Probar la funcionalidad al editar un Equipment 
    Datos de prueba: ----
    Resultado esperado: Exito ya que al editar deberia de devolver "This field is required"
    */
  it('Editanto Equipment Internal Key vacía botón, Solicita Internal Key', function () {
=======
  
        /*
  Nombre: Verificar editar Equipment, eliminando la Internal Key y que la solicite
  Objetivo: Probar la edición de un Equipment, eliminando la Internal Key
  Datos de la Prueba:
            Internal Key: Vacío
  Resultado esperado: Que la prueba genere un aviso de que se requiere llenar la Internal Key
  */
  it('Verificar editar Equipment, eliminando la Internal Key y que la solicite', function () {
>>>>>>> d128f4db6c33ca2987375cfd251d5a844a94a978
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

<<<<<<< HEAD
  it('Editanto Equipment Serial Number vacío, botón Save desabilitado', function () {
=======
          /*
  Nombre: Verificar editar Equipment, eliminando el Serial Number
  Objetivo: Probar la edición de un Equipment, eliminando el Serial Number
  Datos de la Prueba:
            Serial Number: Vacío
  Resultado esperado: Que se desabilite el botón de guardado
  */

  it('Verificar editar Equipment, eliminando el Serial Number', function () {
>>>>>>> d128f4db6c33ca2987375cfd251d5a844a94a978
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
    cy.get('.list-group > #inventoryMenu > .list-group-item').click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.card-body > .row > :nth-child(4) .form-control').clear();

    cy.get('.btn.btn-company-primary.btn-block').should('be.disabled');
  });

<<<<<<< HEAD

  //Nombre de la prueba: Editanto Equipment Serial Number vacío, Solicita Serial Number
  //Codigo: CP-51

  /*
    Nombre de la prueba: Editanto Equipment Serial Number vacío, Solicita Serial Number
    Objetivo: Probar la funcionalidad al editar un Equipment 
    Datos de prueba: ----
    Resultado esperado: Exito ya que al editar deberia de devolver "This field is required"
    */
  it('Editanto Equipment Serial Number vacío, Solicita Serial Number', function () {
=======
        /*
  Nombre: Verificar editar Equipment, eliminando el Serial Number y que lo solicite
  Objetivo: Probar la edición de un Equipment, eliminando el Serial Number
  Datos de la Prueba:
            Serial Number: Vacío
  Resultado esperado: Que la prueba genere un aviso de que se requiere llenar el Serial Number
  */
  it('Verificar editar Equipment, eliminando el Serial Number y que lo solicite', function () {
>>>>>>> d128f4db6c33ca2987375cfd251d5a844a94a978
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

<<<<<<< HEAD
  /*
    Nombre de la prueba: Editanto Equipment Model vacío, botón Save desabilitado
    Objetivo: Probar la funcionalidad al editar un Equipment 
    Datos de prueba: ----
    Resultado esperado: Exito, ya que el boton debe de estar desabilitado
    */
  it('Editanto Equipment Model vacío, botón Save desabilitado', function () {
=======
         /*
  Nombre: Verificar editar Equipment, eliminando el Model
  Objetivo: Probar la edición de un Equipment, eliminando el Model
  Datos de la Prueba:
            Model: Vacío
  Resultado esperado: Que se desabilite el botón de guardado
  */
 
  it('Verificar editar Equipment, eliminando el Model', function () {
>>>>>>> d128f4db6c33ca2987375cfd251d5a844a94a978
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
    cy.get('.list-group > #inventoryMenu > .list-group-item').click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.card-body > .row > :nth-child(5) .form-control').clear();

    cy.get('.btn.btn-company-primary.btn-block').should('be.disabled');
  });

<<<<<<< HEAD

  /*
    Nombre de la prueba: Editanto Equipment Model vacío, Solicita Model
    Objetivo: Probar la funcionalidad al editar un Equipment 
    Datos de prueba: ----
    Resultado esperado: Exito ya que al editar deberia de devolver "This field is required"
    */
  it('Editanto Equipment Model vacío, Solicita Model', function () {
=======
        /*
  Nombre: Verificar editar Equipment, eliminando el model y que sea solicitado
  Objetivo: Probar la edición de un Equipment, eliminando el Model
  Datos de la Prueba:
            Model: Vacío
  Resultado esperado: Que la prueba genere un aviso de que se requiere llenar el Model
  */
  it('Verificar editar Equipment, eliminando el model y que sea solicitado', function () {
>>>>>>> d128f4db6c33ca2987375cfd251d5a844a94a978
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

<<<<<<< HEAD
  /*
    Nombre de la prueba: Editanto Equipment Description vacía, botón Save desabilitado
    Objetivo: Probar la funcionalidad al editar un Equipment 
    Datos de prueba: ----
    Resultado esperado: Exito, ya que el boton debe de estar desabilitado
    */
  it('Editanto Equipment Description vacía, botón Save desabilitado', function () {
=======

        /*
  Nombre: Verificar editar Equipment, eliminando la Descripción
  Objetivo: Probar la edición de un Equipment, eliminando la Descripción
  Datos de la Prueba:
            Descripción: Vacío
  Resultado esperado: Que se desabilite el botón de guardado
  */
 
  it('Verificar editar Equipment, eliminando la Descripción', function () {
>>>>>>> d128f4db6c33ca2987375cfd251d5a844a94a978
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
    cy.get('.list-group > #inventoryMenu > .list-group-item').click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.card-body > .row > :nth-child(6) .trix-content').clear();


    cy.get('.btn.btn-company-primary.btn-block').should('be.disabled');
  });

<<<<<<< HEAD
  /*
    Nombre de la prueba: Editanto Equipment Description vacía, Solicita descripción
    Objetivo: Probar la funcionalidad al editar un Equipment 
    Datos de prueba: ----
    Resultado esperado: Exito ya que al editar deberia de devolver "This field is required"
    */
  it('Editanto Equipment Description vacía, Solicita descripción', function () {
=======
        /*
  Nombre: Verificar editar Equipment, eliminando la Descripción y que esta sea solicitada
  Objetivo: Probar la edición de un Equipment, eliminando la Descripción
  Datos de la Prueba:
            Descripción: Vacío
  Resultado esperado: Que la prueba genere un aviso de que se requiere llenar la Descripción
  */
  it('Verificar editar Equipment, eliminando la Descripción y que esta sea solicitada', function () {
>>>>>>> d128f4db6c33ca2987375cfd251d5a844a94a978
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

<<<<<<< HEAD
  /*
    Nombre de la prueba: Editanto Equipment Sin fecha, botón Save desabilitado
    Objetivo: Probar la funcionalidad al editar un Equipment 
    Datos de prueba: ----
    Resultado esperado: Exito, ya que el boton debe de estar desabilitado
    */

  it('Editanto Equipment Sin fecha, botón Save desabilitado', function () {
=======
        /*
  Nombre: Verificar editar Equipment, eliminando la Fecha
  Objetivo: Probar la edición de un Equipment, eliminando la Fecha
  Datos de la Prueba:
            Fecha: Vacío
  Resultado esperado: Que se desabilite el botón de guardado
  */
 
  it('Verificar editar Equipment, eliminando la Fecha', function () {
>>>>>>> d128f4db6c33ca2987375cfd251d5a844a94a978
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
