
export const login =  (username, password) =>{
    cy.session([username, password], () => {
        cy.visit('/');
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('#login > .btn').click();
      })

    }