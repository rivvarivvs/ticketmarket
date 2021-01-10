import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
	return request(app)
		.post('/api/users/signup')
		.send({
			email: 'test@test.com',
			password: 'password',
		})
		.expect(201);
});

it('returns a 400 with an invalid email', async () => {
	return request(app)
		.post('/api/users/signup')
		.send({
			email: 'asdasd',
			password: 'password',
		})
		.expect(400);
});

it('returns a 400 with an invalid password', async () => {
	return request(app)
		.post('/api/users/signup')
		.send({
			email: 'test1@test.com',
			password: '1',
		})
		.expect(400);
});

it('returns a 400 with missing email and password', async () => {
	return request(app).post('/api/users/signup').send({}).expect(400);
});

it('does not allow to register with the same email', async () => {
	await request(app)
		.post('/api/users/signup')
		.send({
			email: 'test1@test.com',
			password: 'asdfasdf',
		})
		.expect(201);

	await request(app)
		.post('/api/users/signup')
		.send({
			email: 'test1@test.com',
			password: 'asdfasdf',
		})
		.expect(400);
});

it('sets a cookie after signing up', async () => {
	const response = await request(app)
		.post('/api/users/signup')
		.send({
			email: 'test1@test.com',
			password: 'asdfasdf',
        })
        .expect(201);

    expect(response.get('Set-Cookie')).toBeUndefined;
});
