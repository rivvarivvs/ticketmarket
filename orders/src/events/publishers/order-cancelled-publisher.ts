import { OrderCancelledEvent, Publisher, Subjects } from '@ticketorganization/common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled
}