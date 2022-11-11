describe('Learning Paths', function () {
  beforeEach(function () {
    cy.visit('https://tec.gacela.io/');
  });

   //Nombre de la prueba: Editar Learning Path con espacio en blanco en NAME y con VERSION completo Boton Save desabilitado
   //Codigo: CP-57
  it('Editar Learning Path con espacio en blanco en NAME y con VERSION completo Boton Save desabilitado', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();
    cy.get('.list-group > [href="#LearningPathMenu"]').click();
    cy.get(
      '.list-group > #LearningPathMenu > [href="/learning_paths"]'
    ).click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.card-body > :nth-child(1) #name').clear();


    cy.get('.btn.btn-company-primary.btn-block').should('be.disabled');
  });

     //Nombre de la prueba: Editar Learning Path con espacio en blanco en NAME, Solicita el NAME
   //Codigo: CP-58
   it('Editar Learning Path con espacio en blanco en NAME, Solicita el NAME', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();
    cy.get('.list-group > [href="#LearningPathMenu"]').click();
    cy.get(
      '.list-group > #LearningPathMenu > [href="/learning_paths"]'
    ).click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.card-body > :nth-child(1) #name').clear().then(


      function(){
          cy.get('.row > :nth-child(1) .card-body > :nth-child(1)  .invalid-feedback').should('contain.text', "This field is required");
      }
  );
  });


     //Nombre de la prueba: Editar Learniing Path con espacio en blanco en VERSION y con NAME completo Boton Save desabilitado
  //Codigo: CP-59
  it('Editar Learniing Path con espacio en blanco en VERSION y con NAME completo Boton Save desabilitado', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();
    cy.get('.list-group > [href="#LearningPathMenu"]').click();
    cy.get(
      '.list-group > #LearningPathMenu > [href="/learning_paths"]'
    ).click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.card-body > :nth-child(2) #version').clear();

    cy.get('.btn.btn-company-primary.btn-block').should('be.disabled');
  });

      //Nombre de la prueba: Editar Learniing Path con espacio en blanco en VERSION y con NAME completo, Solicita la VERSION
  //Codigo: CP-59
  it('Editar Learniing Path con espacio en blanco en VERSION y con NAME completo, Solicita la VERSION', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();
    cy.get('.list-group > [href="#LearningPathMenu"]').click();
    cy.get(
      '.list-group > #LearningPathMenu > [href="/learning_paths"]'
    ).click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.card-body > :nth-child(2) #version').clear().then(

      function(){
          cy.get('.row > :nth-child(1) .card-body > :nth-child(2)  .invalid-feedback').should('contain.text', "This field is required");
      }
  );

  });






  afterEach(function () {
    cy.reload();
  });
});
