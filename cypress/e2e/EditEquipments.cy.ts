describe('Learning Paths', function () {
  beforeEach(function () {
    cy.visit('https://tec.gacela.io/');
  });

  //Nombre de la prueba: Editanto Equipment Internal Key vacía botón Save desabilitado
  //Codigo: CP-48
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

   //Nombre de la prueba: Editanto Equipment Internal Key vacía botón, Solicita Internal Key
  //Codigo: CP-49
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


  //Nombre de la prueba: Editanto Equipment Serial Number vacío botón Save desabilitado
  //Codigo: CP-50
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


  //Nombre de la prueba: Editanto Equipment Model vacío, botón Save desabilitado
  //Codigo: CP-52
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

  //Nombre de la prueba: Editanto Equipment Model vacío, Solicita Model
  //Codigo: CP-53
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





  //Nombre de la prueba: Editanto Equipment Description vacía, botón Save desabilitado
  //Codigo: CP-54
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

  //Nombre de la prueba: Editanto Equipment Description vacía, Solicita descripción
  //Codigo: CP-55
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


   //Nombre de la prueba: Editanto Equipment Sin fecha, botón Save desabilitado
  //Codigo: CP-56
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
