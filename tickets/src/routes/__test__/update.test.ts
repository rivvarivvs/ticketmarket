import request from 'supertest';
import { app } from '../../app';

it('returns a 404 if the ticket doesnt exist', async () => {
	await request(app)
		.put('/api/tickets/asdasdasdasd')
		.set('Cookie', global.signin())
		.send({
			title: 'title',
			price: 10,
		})
		.expect(404);
});

it('returns a 400 if the user is not logged in', async () => {
	await request(app)
		.put('/api/tickets/asdasdasdasd')
		.send({
			title: 'title',
			price: 10,
		})
		.expect(400);
});

it('returns a 400 if the user is not the owner of the ticket', async () => {
	const res = await request(app)
		.post('/api/tickets')
		.set('Cookie', global.signin())
		.send({
			title: 'title',
			price: 10,
		});

	await request(app)
		.put(`/api/tickets/${res.body.id}`)
		.set('Cookie', global.signin())
		.send({
			title: 'another',
			price: 11,
		})
		.expect(400);
});

it('returns a 400 if the user provides an invalid title or price', async () => {
	const cookie = global.signin();

	const res = await request(app)
		.post('/api/tickets')
		.set('Cookie', cookie)
		.send({
			title: 'title',
			price: 10,
		});

	await request(app)
		.put(`/api/tickets/${res.body.id}`)
		.set('Cookie', cookie)
		.send({
			title: '',
			price: 11,
		})
		.expect(400);

	await request(app)
		.put(`/api/tickets/${res.body.id}`)
		.set('Cookie', cookie)
		.send({
			title: 'newtitle',
			price: -11,
		})
		.expect(400);
});

it('it updates the ticket and returns a 200', async () => {
	const cookie = global.signin();

	const res = await request(app)
		.post('/api/tickets')
		.set('Cookie', cookie)
		.send({
			title: 'title',
			price: 10,
		});

	await request(app)
		.put(`/api/tickets/${res.body.id}`)
		.set('Cookie', cookie)
		.send({
			title: 'newtitle',
			price: 11,
		})
		.expect(200);
});
