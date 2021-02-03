import { OrderCreatedEvent, Publisher, Subjects } from '@ticketorganization/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated
}