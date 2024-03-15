

describe('authentication', () => {
  before(()=>{
      cy.fixture('testData').then((data) =>{
        globalThis.data = data
      });

  });
  beforeEach(()=>{
    cy.login(data.username,data.password);
    cy.visit('/')
  });
  // Ensure login is successful:
  it('should successfully route to `/secure` path', () => {
    cy.location("pathname").should("include", "/secure");
  });

  it('should contain success message', () => {
    cy.get('b').contains(`You're logged in. Please log out before logging in as a different user`)
  });

  it('should header exist on secure page', () => {
    cy.get('h1').contains('Secure Area')
  });

  it('should subheader exist on secure page', () => {
    cy.get('.subheader').contains('Welcome to the Secure Area. When you are done click logout below.')
  });

 it('should logout hyperlink exist on secure page', () => {
    cy.get('a').contains('Logout')
  });
 
})