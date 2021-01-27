import mongoose, { mongo } from 'mongoose';
import { OrderStatus } from '@ticketorganization/common'

interface OrderAttrs {
	userId: string;
	status: OrderStatus;
	expiresAt: Date;
	ticket: TicketDoc;
}

interface OrderModel extends mongoose.Model<OrderDoc> {
	build(attrs: OrderAttrs): OrderDoc;
}

interface OrderDoc extends mongoose.Document {
	userId: string;
	status: string;
	expiresAt: Date;
	ticket: TicketDoc;
}

const orderSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			required: true,
			enum: Object.values(OrderStatus),
			default: OrderStatus.Created
		},
		expiresAt: {
			type: mongoose.Schema.Types.Date,
		},
		ticket: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Ticket',
		},
	},
	{
		toJSON: {
			transform(doc, ret) {
				ret.id = ret._id;
				delete ret._id;
			},
		},
	}
);

orderSchema.static.build = (attrs: OrderAttrs) => {
	return new Order(attrs);
};

const Order = mongoose.model<any, any>('Order', orderSchema);

export { Order };
