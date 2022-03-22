describe('Testing Podcast List', () => {

	it('Simple testing api for Podcast Info...', () => {
		const apiRoute: string = `https://api.podchaser.com/podcasts/243479`;
	
		cy.request('GET', apiRoute).then((response) => {
			expect(response.status).to.eq(200);
			expect(response.body).to.have.property('id');
		})
	});
})

