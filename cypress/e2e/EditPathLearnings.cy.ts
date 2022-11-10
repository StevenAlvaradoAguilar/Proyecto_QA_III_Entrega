describe('Learning Paths', function () {
  beforeEach(function () {
    cy.visit('https://tec.gacela.io/learning_paths');
  });

  //Nombre de la prueba: Editar Learning Path con espacio en blanco en NAME y con VERSION completo Boton Save desabilitado
  //Codigo: CP-53
  it('Editar Learning Path con espacio en blanco en NAME y con VERSION completo Boton Save desabilitado', function () {
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

  //Nombre de la prueba: Editar Learniing Path con espacio en blanco en VERSION y con NAME completo Boton Save desabilitado
  //Codigo: CP-54
  it('Editar Learniing Path con espacio en blanco en VERSION y con NAME completo Boton Save desabilitado', function () {
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

  afterEach(function () {
    cy.reload();
  });
});
