context('app', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('should load', () => {
    // Test all elements are visible
    cy
      .get('h1')
      .should('be.visible')
      .contains('Featured Programs');
  });

  it('should login', () => {
    const username = 'tobias';
    cy
      .get('#btnLogin')
      .click()
      .wait(500);
    cy
      .get('#userName')
      .should('be.visible')
      .type(username);
    cy
      .get('#password')
      .should('be.visible')
      .type('123');
    cy
      .get('.ant-form-item-children > .ant-btn')
      .should('be.visible')
      .click();
    cy
      .get('#header__userName')
      .should('be.visible')
      .contains(username);
  });

  it('should load the video page', () => {
    const pathname = '/video/1';
    cy
      .get(`[href="${pathname}"]`)
      .should('be.visible')
      .click()
      .wait(1000);
    cy.location().should(location => expect(location.pathname).to.eq(pathname));
    cy
      .get('h2')
      .scrollIntoView()
      .should('be.visible')
      .contains('Skam');
    cy.wait(1000);
    cy
      .get('.player__video')
      .first()
      .scrollIntoView()
      .should('be.visible');
  });
});
