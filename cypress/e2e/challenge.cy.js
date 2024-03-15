

describe('authentication', () => {
  before(()=>{
      cy.fixture('testData').then((data) =>{
        globalThis.data = data
      });

  });
  beforeEach(()=>{
    cy.visit('/')
    cy.login(data.username,data.password)
  });
  // Ensure login is successful:
  it('should successfully route to `/secure` path', () => {
    cy.location("pathname").should("include", "/secure");
  });

  it('should success message contains', () => {
    cy.get('b').contains('You logged into a secure area!')
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