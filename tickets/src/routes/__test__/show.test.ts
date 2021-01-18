import request from 'supertest';
import { app } from '../../app';

it('returns a 404 if not found', async () => {
	await request(app).get('/api/tickets/asdlhjaksjdklasdj').send().expect(404);
});

it('it returns the ticket if its found', async () => {
	const title = 'title';
	const price = 10;

	const response = await request(app)
		.post('/api/tickets')
		.set('Cookie', global.signin())
		.send({
			title,
			price,
		})
		.expect(201);

	const ticketResponse = await request(app)
		.get(`/api/tickets/${response.body.id}`)
		.send()
        .expect(200);
        
    expect(ticketResponse.body.title).toEqual(title)
    expect(ticketResponse.body.price).toEqual(price)
});
