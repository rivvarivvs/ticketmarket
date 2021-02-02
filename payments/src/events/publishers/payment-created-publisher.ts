import { Subjects, Publisher, PaymentCreatedEvent } from '@ticketorganization/common'
import { Message } from 'node-nats-streaming'

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated
}