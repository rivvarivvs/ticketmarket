import { Publisher, Subjects, TicketCreatedEvent } from '@ticketorganization/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated
}

