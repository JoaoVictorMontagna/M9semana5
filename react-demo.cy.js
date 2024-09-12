// react-demo.cy.js
describe('React todo example', () => {
    it('Should add and verify todo list', () => {
      cy.visit('https://reactjs.org/'); // Navega até a página React.js
      cy.get('#new-todo').type("My first todo item"); // Digita o primeiro item
      cy.get('#new-todo').siblings('button').click(); // Clica no botão para adicionar
      cy.get('#new-todo').type("My second todo item"); // Digita o segundo item
      cy.get('#new-todo').siblings('button').click(); // Clica no botão para adicionar
  
      // Valida se o primeiro item está correto
      cy.get('div[id="todos-example"] > div > ul > li').eq(0).should('have.text', 'My first todo item');
      // Valida se o segundo item está correto
      cy.get('div[id="todos-example"] > div > ul > li').eq(1).should('have.text', 'My second todo item');
    });
  });
  