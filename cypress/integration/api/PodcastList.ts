describe('Testing Podcast List', () => {

	it('Simple Testing api for Podcast List...', () => {
		const apiRoute: string = `https://api.podchaser.com/userlists/27998`;
	
		cy.request('GET', apiRoute).then((response) => {
			expect(response.status).to.eq(200);
			expect(response.body).to.have.property('additional_entities');
			expect(response.body).to.have.property('list');
		})
	});
})

