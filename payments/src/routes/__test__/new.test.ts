import request from 'supertest';
import { app } from '../../app';
import { Order } from '../../models/order';
import mongoose from 'mongoose';
import { OrderStatus } from '@ticketorganization/common';

it('returns a 404 when purchasing a order that doesnot exist', async () => {
	await request(app)
		.post('/api/payments')
		.set('Cookie', global.signin())
		.send({
			token: 'asdasd',
			orderId: new mongoose.Types.ObjectId().toHexString(),
		})
		.expect(404);
});

it('returns a 401 when purchasing a order that does not belong to the user', async () => {
	const order = Order.build({
		id: new mongoose.Types.ObjectId().toHexString(),
		userId: new mongoose.Types.ObjectId().toHexString(),
		version: 0,
		price: 20,
		status: OrderStatus.Created,
	});

	await order.save();

	await request(app)
		.post('/api/payments')
		.set('Cookie', global.signin())
		.send({
			token: 'asdasd',
			orderId: order.id,
		})
		.expect(401);
});

it('returns a 400 when purchasing a cancelled order', async () => {
	const userId = new mongoose.Types.ObjectId().toHexString();

	const order = Order.build({
		id: new mongoose.Types.ObjectId().toHexString(),
		userId: userId,
		version: 0,
		price: 20,
		status: OrderStatus.Cancelled,
	});

	await order.save();

	await request(app)
		.post('/api/payments')
		.set('Cookie', global.signin(userId))
		.send({
			orderId: order.id,
			token: 'asdasd',
		})
		.expect(400);
});
