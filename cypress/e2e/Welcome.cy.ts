describe('Welcome', function () {
    beforeEach(function () {
        cy.visit('https://gacela.io/welcome');
    });

    /*
    Nombre de la prueba: Name Company con espacio en blaco
    Objetivo: Probar la funcionalidad de Rate Per Resource
    Datos de prueba: 
    Resultado esperado: Que la prueba genere un aviso de que se debe de ingresar el nombre de una Company
    */

    it('Name Company con espacio en blanco', function () {

        cy.xpath('//*[@id="component"]/button').click(
        ).then(function () {
            cy.get('div[class="card w-75 border-danger py-2 px-3 text-justiy"]').should('contain.text', "The company you're searching for doesn't exist.");
        });
    });

    

    afterEach(function () {
        cy.reload();
    });
});