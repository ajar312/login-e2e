export function selectById(id){
    return `#${id}`
}
export const login = (username, password) =>{
    cy.get(selectById('username')).type(username);
    cy.get(selectById('password')).type(password);
    cy.get(selectById('login > .btn')).click();
}