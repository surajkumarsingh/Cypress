describe('API Test', () => {

	it('GET Request', () => {
		cy.request('GET','https://reqres.in/api/users?page=2').then((res)=>{
	  cy.log(res.headers.date);
		cy.log(JSON.stringify(res.body.data[0]));
		expect(res.status).to.equal(200);
		});
	});

	it('Post Request', () => {
		cy.request('POST','https://reqres.in/api/users?page=2',{
			"name": "morpheus",
			"job": "leader"
		}).then((res)=>{
			 cy.log(res.headers.date);
			 expect(res.status).to.equal(201);
		});
	});

});