import { Subjects, Publisher, PaymentCreatedEvent } from '@ticketorganization/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
