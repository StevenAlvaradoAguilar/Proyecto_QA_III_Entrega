describe('Welcome', function () {
    beforeEach(function () {
        cy.visit('https://gacela.io/welcome');
    });

    // Nombre = Name Company con espacio en blaco
    // Codigo: CP-3, CP-43
    it('Name Company con espacio en blaco', function () {

        cy.xpath('//*[@id="component"]/button').click(
        ).then(function () {
            cy.get('div[class="card w-75 border-danger py-2 px-3 text-justiy"]').should('contain.text', "The company you're searching for doesn't exist.");
        });
    });

    afterEach(function () {
        cy.reload();
    });
});