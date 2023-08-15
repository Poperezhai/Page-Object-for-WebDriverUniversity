
const baseUrl = 'https://automationintesting.online/';
const userAdmin = {
    name: 'admin',
    password: 'password'
}

let token = 'test';
let regex = /token=([^;]+)/;
const match = token.match(regex);
let tokenValue;
let cookieValue; 

describe('API', () => {
    it('Check data with API', () => {
        cy.request('POST', `${baseUrl}auth/login`, {"username": userAdmin.name, "password": userAdmin.password}).as('login');

        cy.get('@login').then((response) => {
            expect(response.status).to.equal(200);
            token = response.headers['set-cookie'];           
            let tokenValue = token[0].match(regex);
            console.log(tokenValue);
            return tokenValue
        }).then((token) => {
            cy.setCookie('token', `${token}`)
        }).then(() => {
            cy.getCookie('token').should('have.property', 'value', tokenValue)
        }).then(() => {
            cy.visit(`${baseUrl}#/admin`)
        }) 
        
    })
})