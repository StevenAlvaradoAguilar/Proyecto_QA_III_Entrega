describe('Learning Paths', function () {
  beforeEach(function () {
    cy.visit('https://tec.gacela.io/learning_paths');
  });

//   //Nombre de la prueba: Editanto Equipment Internal Key vacía botón Save desabilitado
//   //Codigo: CP-55
//   it('Editanto Equipment Internal Key vacía botón, Save desabilitado', function () {
//     cy.get('#email').type('qatec2022@gmail.com');
//     cy.get('#password').type('qatecjnsc2022');
//     cy.get('.btn > .m-0').click();
//     cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
//     cy.get('.list-group > #inventoryMenu > .list-group-item').click();

    
//     cy.get('.col-md-3 > :nth-child(1)').click()
//     cy.get('#serial_number').click()
//     cy.get('.card-body').click().then(
//         function(){
//             cy.get(':nth-child(4) > span > .invalid-feedback').should('contain.text', "This field is required");
//         }
//     );
// });
//   //Nombre de la prueba: Editanto Equipment Serial Number vacío botón Save desabilitado
//   //Codigo: CP-56
//   it('Editanto Equipment Serial Number vacío, botón Save desabilitado', function () {
//     cy.get('#email').type('qatec2022@gmail.com');
//     cy.get('#password').type('qatecjnsc2022');
//     cy.get('.btn > .m-0').click();
//     cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
//     cy.get('.list-group > #inventoryMenu > .list-group-item').click();

    
//     cy.get('.col-md-3 > :nth-child(1)').click()
//     cy.get('#serial_number').click()
//     cy.get('.card-body').click().then(
//         function(){
//             cy.get(':nth-child(4) > span > .invalid-feedback').should('contain.text', "This field is required");
//         }
//     );
// });
//   //Nombre de la prueba: Editanto Equipment Internal Key vacía botón, Solicita Internal Key
//   //Codigo: CP-57
//   it('Editanto Equipment Internal Key vacía botón, Solicita Internal Key', function () {
//     cy.get('#email').type('qatec2022@gmail.com');
//     cy.get('#password').type('qatecjnsc2022');
//     cy.get('.btn > .m-0').click();
//     cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
//     cy.get('.list-group > #inventoryMenu > .list-group-item').click();

    
//     cy.get('.col-md-3 > :nth-child(1)').click()
//     cy.get('#serial_number').click()
//     cy.get('.card-body').click().then(
//         function(){
//             cy.get(':nth-child(4) > span > .invalid-feedback').should('contain.text', "This field is required");
//         }
//     );
// });
//   //Nombre de la prueba: Editanto Equipment Serial Number vacío, Solicita Serial Number
//   //Codigo: CP-58
//   it('Editanto Equipment Serial Number vacío, Solicita Serial Number', function () {
//     cy.get('#email').type('qatec2022@gmail.com');
//     cy.get('#password').type('qatecjnsc2022');
//     cy.get('.btn > .m-0').click();
//     cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
//     cy.get('.list-group > #inventoryMenu > .list-group-item').click();

    
//     cy.get('.col-md-3 > :nth-child(1)').click()
//     cy.get('#serial_number').click()
//     cy.get('.card-body').click().then(
//         function(){
//             cy.get(':nth-child(4) > span > .invalid-feedback').should('contain.text', "This field is required");
//         }
//     );
// });
//   //Nombre de la prueba: Editanto Equipment Model vacío, botón Save desabilitado
//   //Codigo: CP-59
//   it('Editanto Equipment Model vacío, botón Save desabilitado', function () {
//     cy.get('#email').type('qatec2022@gmail.com');
//     cy.get('#password').type('qatecjnsc2022');
//     cy.get('.btn > .m-0').click();
//     cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
//     cy.get('.list-group > #inventoryMenu > .list-group-item').click();

    
//     cy.get('.col-md-3 > :nth-child(1)').click()
//     cy.get('#serial_number').click()
//     cy.get('.card-body').click().then(
//         function(){
//             cy.get(':nth-child(4) > span > .invalid-feedback').should('contain.text', "This field is required");
//         }
//     );
// });
//   //Nombre de la prueba: Editanto Equipment Description vacía, botónSave desabilitado
//   //Codigo: CP-60
//   it('Editanto Equipment Description vacía, botón Save desabilitado', function () {
//     cy.get('#email').type('qatec2022@gmail.com');
//     cy.get('#password').type('qatecjnsc2022');
//     cy.get('.btn > .m-0').click();
//     cy.get('.list-group > [href="#inventoryMenu"] > .d-flex').click();
//     cy.get('.list-group > #inventoryMenu > .list-group-item').click();

    
//     cy.get('.col-md-3 > :nth-child(1)').click()
//     cy.get('#serial_number').click()
//     cy.get('.card-body').click().then(
//         function(){
//             cy.get(':nth-child(4) > span > .invalid-feedback').should('contain.text', "This field is required");
//         }
//     );
// });


  afterEach(function () {
    cy.reload();
  });
});
