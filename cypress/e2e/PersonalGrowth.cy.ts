describe('Learning Paths', function () {
  beforeEach(function () {
    cy.visit('https://tec.gacela.io/learning_paths');
  });

  //Nombre de la prueba: Learning Path con espacio en blanco en NAME y  con VERSION completo Boton Save desabilitado
  //Codigo: CP-46
  it('Learning Path con espacio en blanco en NAME y con VERSION completo Boton Save desabilitado', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#LearningPathMenu"]').click();
    cy.get(
      '.list-group > #LearningPathMenu > [href="/learning_paths"]'
    ).click();

    cy.get(
      '.col-12.col-sm-6.order-last.text-right.mt-2.pt-2 > .btn-company-primary > .fas.fa-plus'
    ).click();

    cy.get('#version').type('1');

    cy.get('.btn.btn-company-primary.btn-block').should('be.disabled');
  });

   //Nombre de la prueba: Learning Path con espacio en blanco en VERSION y con NAME completo Boton Save desabilitado
   //Codigo: CP-47
  it('Learning Path con espacio en blanco en VERSION y con NAME completo Boton Save desabilitado', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#LearningPathMenu"]').click();
    cy.get(
      '.list-group > #LearningPathMenu > [href="/learning_paths"]'
    ).click();

    cy.get(
      '.col-12.col-sm-6.order-last.text-right.mt-2.pt-2 > .btn-company-primary > .fas.fa-plus'
    ).click();

    cy.get('.card-body > :nth-child(1)  #name').type('Prueba');
    cy.get('#version').type(' ');
    
    
    cy.get('.btn.btn-company-primary.btn-block').should('be.disabled');
    
  });

  // //Nombre de la prueba: Learning Path con NAME y versión ya existente , debe dar error
  // //Codigo: CP-48
  it('Learning Path con NAME y versión ya existente, debe dar error', function () {
      cy.get('#email').type('qatec2022@gmail.com');
      cy.get('#password').type('qatecjnsc2022');
      cy.get('.btn > .m-0').click();

      cy.get('.list-group > [href="#LearningPathMenu"]').click();
      cy.get('.list-group > #LearningPathMenu > [href="/learning_paths"]').click();

      cy.get('.col-12.col-sm-6.order-last.text-right.mt-2.pt-2 > .btn-company-primary > .fas.fa-plus' ).click()

      cy.get('.card-body > :nth-child(1)  #name').type('QA');
      cy.get('#version').type('1.0.0');
      
      cy.get('.btn.btn-company-primary.btn-block').click()

      cy.get('.card-body > :nth-child(1)  #name').type('Prueba');
      cy.get('#version').type('1.0.0');
        
  });


  // //Nombre de la prueba: Learning Path con NAME  ya existente pero con versión distinta , no debe dar error
  // //Codigo: CP-49
  it('Learning Path con NAME  ya existente pero con versión distinta, no debe dar error', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#LearningPathMenu"]').click();
    cy.get('.list-group > #LearningPathMenu > [href="/learning_paths"]').click();

    cy.get('.col-12.col-sm-6.order-last.text-right.mt-2.pt-2 > .btn-company-primary > .fas.fa-plus' ).click()

    cy.get('.card-body > :nth-child(1)  #name').type('QA');
    cy.get('#version').type('1.0.1');
    
    
    cy.get('.btn.btn-company-primary.btn-block').click()

    cy.get('.card-body > :nth-child(1)  #name').type('Prueba');
      cy.get('#version').type('1.0.0');
     

    

});


  //Nombre de la prueba: Learning Path con espacio en blanco en NAME solicitando el NAME
  //Codigo: CP-50
  it('Learning Path con espacio en blanco en NAME solicitando el NAME', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#LearningPathMenu"]').click();
    cy.get(
      '.list-group > #LearningPathMenu > [href="/learning_paths"]'
    ).click();

    cy.get(
      '.col-12.col-sm-6.order-last.text-right.mt-2.pt-2 > .btn-company-primary > .fas.fa-plus'
    ).click();

    cy.get('.card-body > :nth-child(1)  #name').type(' ');
    cy.get('.card-body > :nth-child(1)  .invalid-feedback').should(
      'contain.text',
      'This field is required'
    );
  });

  //Nombre de la prueba: Learning Path con espacio en blanco en version solicitando el VERSION
  //Codigo: CP-51
  it('Learning Path con espacio en blanco en version solicitando el VERSION', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#LearningPathMenu"]').click();
    cy.get(
      '.list-group > #LearningPathMenu > [href="/learning_paths"]'
    ).click();

    cy.get(
      '.col-12.col-sm-6.order-last.text-right.mt-2.pt-2 > .btn-company-primary > .fas.fa-plus'
    ).click();

    cy.get('#version').type(' ');
    cy.get('.card-body > :nth-child(2)  .invalid-feedback').should(
      'contain.text',
      'This field is required'
    );
  });

  //Nombre de la prueba: Learning Path con 2 espacios llenos, Boton Save habilitado
  //Codigo: CP-52
  it('Learning Path con 2 espacios llenos, Boton Save habilitado', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#LearningPathMenu"]').click();
    cy.get(
      '.list-group > #LearningPathMenu > [href="/learning_paths"]'
    ).click();

    cy.get(
      '.col-12.col-sm-6.order-last.text-right.mt-2.pt-2 > .btn-company-primary > .fas.fa-plus'
    ).click();

    cy.get('.card-body > :nth-child(1)  #name').type('Prueba');
    cy.get('#version').type('1');
    
    
    cy.get('.btn.btn-company-primary.btn-block').should('not.be.disabled');
    
  });

  afterEach(function () {
    cy.reload();
  });
});
