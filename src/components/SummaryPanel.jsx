const SummaryPanel = ({ guests }) => {
  const totalGuests = guests.length;
  const confirmedGuests = guests.filter(guest => guest.confirmed).length;
  const unconfirmedGuests = totalGuests - confirmedGuests;
  
  // RSVP statistics
  const attending = guests.filter(guest => guest.rsvp === 'attending').length;
  const notAttending = guests.filter(guest => guest.rsvp === 'not-attending').length;
  const maybe = guests.filter(guest => guest.rsvp === 'maybe').length;
  const pending = guests.filter(guest => guest.rsvp === 'pending' || !guest.rsvp).length;

  return (
    <div className="p-6 bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-lg border border-opacity-30 border-[#00E5FF] shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#c471ed]">
        Event Summary
      </h2>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
        <div className="p-4 bg-gray-800 bg-opacity-70 rounded-lg border border-opacity-20 border-[#00E5FF] text-center">
          <p className="text-sm text-[#00E5FF] uppercase font-semibold">Total Guests</p>
          <p className="text-3xl font-bold text-white">{totalGuests}</p>
        </div>
        <div className="p-4 bg-gray-800 bg-opacity-70 rounded-lg border border-opacity-20 border-[#00E5FF] text-center">
          <p className="text-sm text-[#00E5FF] uppercase font-semibold">Confirmed</p>
          <p className="text-3xl font-bold text-white">{confirmedGuests}</p>
        </div>
        <div className="p-4 bg-gray-800 bg-opacity-70 rounded-lg border border-opacity-20 border-[#c471ed] text-center">
          <p className="text-sm text-[#c471ed] uppercase font-semibold">Unconfirmed</p>
          <p className="text-3xl font-bold text-white">{unconfirmedGuests}</p>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#c471ed]">
        RSVP Status
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="p-4 bg-gray-800 bg-opacity-70 rounded-lg border border-opacity-20 border-green-500 text-center">
          <p className="text-sm text-green-400 uppercase font-semibold">Attending</p>
          <p className="text-3xl font-bold text-white">{attending}</p>
        </div>
        <div className="p-4 bg-gray-800 bg-opacity-70 rounded-lg border border-opacity-20 border-red-500 text-center">
          <p className="text-sm text-red-400 uppercase font-semibold">Not Attending</p>
          <p className="text-3xl font-bold text-white">{notAttending}</p>
        </div>
        <div className="p-4 bg-gray-800 bg-opacity-70 rounded-lg border border-opacity-20 border-yellow-500 text-center">
          <p className="text-sm text-yellow-400 uppercase font-semibold">Maybe</p>
          <p className="text-3xl font-bold text-white">{maybe}</p>
        </div>
        <div className="p-4 bg-gray-800 bg-opacity-70 rounded-lg border border-opacity-20 border-gray-500 text-center">
          <p className="text-sm text-gray-400 uppercase font-semibold">Pending</p>
          <p className="text-3xl font-bold text-white">{pending}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryPanel; 