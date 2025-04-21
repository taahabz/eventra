import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import GuestForm from './components/GuestForm'
import GuestList from './components/GuestList'
import SummaryPanel from './components/SummaryPanel'

function App() {
  const [guests, setGuests] = useState([])

  // Load guests from localStorage on initial render
  useEffect(() => {
    const savedGuests = localStorage.getItem('guests')
    if (savedGuests) {
      try {
        const parsedGuests = JSON.parse(savedGuests)
        // Ensure all guests have an RSVP property
        const updatedGuests = parsedGuests.map(guest => ({
          ...guest,
          rsvp: guest.rsvp || 'pending'
        }))
        setGuests(updatedGuests)
      } catch (error) {
        console.error('Error parsing guests from localStorage:', error)
        setGuests([])
      }
    }
  }, [])

  // Save guests to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('guests', JSON.stringify(guests))
  }, [guests])

  const addGuest = (newGuest) => {
    setGuests([...guests, newGuest])
  }

  const toggleConfirm = (id) => {
    setGuests(
      guests.map((guest) =>
        guest.id === id ? { ...guest, confirmed: !guest.confirmed } : guest
      )
    )
  }

  const removeGuest = (id) => {
    setGuests(guests.filter((guest) => guest.id !== id))
  }

  const updateGuest = (id, updatedInfo) => {
    setGuests(
      guests.map((guest) =>
        guest.id === id ? { ...guest, ...updatedInfo } : guest
      )
    )
  }

  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center mb-4">  {/* Changed from mb-12 to mb-4 */}
          <h1 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#c471ed]">
            Event Planner
          </h1>
          <p className="text-lg text-gray-300">
            Manage your guest list easily
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-3">
            <SummaryPanel guests={guests} />
          </div>

          <div className="md:col-span-1">
            <GuestForm addGuest={addGuest} />
          </div>
          
          <div className="md:col-span-2">
            <GuestList
              guests={guests}
              toggleConfirm={toggleConfirm}
              removeGuest={removeGuest}
              updateGuest={updateGuest}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
