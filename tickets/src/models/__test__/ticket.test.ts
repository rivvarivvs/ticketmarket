import { Ticket } from '../ticket'

it('implements optimistic concurrency control', async (done) => {
    // Create an instance of a ticket
    const ticket = Ticket.build({
        title: 'concert',
        price: 5,
        userId: '123'
    })

    // Save the ticket to the database
    await ticket.save()

    // Fetch the ticket twice
    const fetchOne = await Ticket.findById(ticket.id)
    const fetchTwo = await Ticket.findById(ticket.id)

    // Make two separate changes to the tickets we fetch
    fetchOne.set({ price: 10})
    fetchTwo.set({ price: 20})

    // Save the first fetched ticket
    await fetchOne.save()

    // Save the second fetched ticket and expect an error
    try {
        await fetchTwo.save()
    } catch (err) {
        return done()
    }

    throw new Error('Should not reach this point')
})

it('increments the version number on multiple saves', async () => {
    const ticket = Ticket.build({
        title: 'concert',
        price: 20,
        userId: '123'
    })

    await ticket.save()
    expect(ticket.version).toEqual(0)

    await ticket.save()
    expect(ticket.version).toEqual(1)

    await ticket.save()
    expect(ticket.version).toEqual(2)
})