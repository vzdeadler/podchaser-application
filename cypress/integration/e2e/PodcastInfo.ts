describe('Testing Podcast info screen', () => {

	it('Simple navigation from home to podcast info', () => {
		cy.visit('http://localhost:3000');

		cy.get('h1').contains('All Podcasts');
		cy.get('#home-container > :nth-child(2)').contains('Browse the details of every podcast, ever.');

		cy.wait(2000);

		cy.get('#home-container > :nth-child(3)').click();

		cy.wait(2000);

		cy.get('img').should('be.visible');
		cy.get('h1').contains('The Daily');
		cy.get('.podcast-header-container > div > p').contains('A podcast with 1483 episodes');
	})
})