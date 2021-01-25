import { Publisher, Subjects, TicketUpdatedEvent } from '@ticketorganization/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}

