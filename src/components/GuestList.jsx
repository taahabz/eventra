import { useState } from 'react';

const GuestItem = ({ guest, toggleConfirm, removeGuest, updateGuest }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(guest.name);
  const [email, setEmail] = useState(guest.email);
  const [rsvp, setRsvp] = useState(guest.rsvp || 'pending');

  const handleEdit = () => {
    if (isEditing) {
      updateGuest(guest.id, { name, email, rsvp });
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setName(guest.name);
    setEmail(guest.email);
    setRsvp(guest.rsvp || 'pending');
    setIsEditing(false);
  };

  return (
    <li className={`p-4 mb-2 rounded-lg transition-all duration-300 ${
      guest.confirmed 
        ? 'bg-gray-800 bg-opacity-70 border border-opacity-30 border-[#00E5FF]' 
        : 'bg-gray-800 bg-opacity-60 border border-opacity-30 border-[#c471ed]'
    }`}>
      {isEditing ? (
        <div className="space-y-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 bg-opacity-70 border border-opacity-30 border-[#00E5FF] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent text-white placeholder-gray-500"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 bg-opacity-70 border border-opacity-30 border-[#00E5FF] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent text-white placeholder-gray-500"
          />
          <select
            value={rsvp}
            onChange={(e) => setRsvp(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 bg-opacity-70 border border-opacity-30 border-[#00E5FF] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent text-white"
          >
            <option value="pending">Pending</option>
            <option value="attending">Attending</option>
            <option value="not-attending">Not Attending</option>
            <option value="maybe">Maybe</option>
          </select>
          <div className="flex space-x-2">
            <button
              onClick={handleEdit}
              className="px-4 py-2 text-sm text-white bg-gradient-to-r from-[#00E5FF] to-[#00a5ff] rounded hover:opacity-90 transition-opacity duration-200"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 text-sm text-white bg-gray-600 rounded hover:bg-gray-700 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-white">{guest.name}</h3>
            <p className="text-sm text-gray-300">{guest.email}</p>
            <div className="flex gap-2 mt-1">
              <span 
                className={`inline-block px-2 py-1 text-xs rounded-full ${
                  guest.confirmed 
                    ? 'bg-[#00E5FF] bg-opacity-20 text-[#00E5FF]' 
                    : 'bg-[#c471ed] bg-opacity-20 text-[#c471ed]'
                }`}
              >
                {guest.confirmed ? 'Confirmed' : 'Unconfirmed'}
              </span>
              <span 
                className={`inline-block px-2 py-1 text-xs rounded-full ${
                  rsvp === 'attending' ? 'bg-green-500 bg-opacity-20 text-green-400' :
                  rsvp === 'not-attending' ? 'bg-red-500 bg-opacity-20 text-red-400' :
                  rsvp === 'maybe' ? 'bg-yellow-500 bg-opacity-20 text-yellow-400' :
                  'bg-gray-500 bg-opacity-20 text-gray-400'
                }`}
              >
                {rsvp === 'attending' ? 'Attending' :
                 rsvp === 'not-attending' ? 'Not Attending' :
                 rsvp === 'maybe' ? 'Maybe' : 'Pending'}
              </span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => toggleConfirm(guest.id)}
              className={`px-3 py-1 text-sm rounded transition-colors duration-200 ${
                guest.confirmed
                  ? 'bg-[#c471ed] bg-opacity-20 text-[#c471ed] hover:bg-opacity-30'
                  : 'bg-[#00E5FF] bg-opacity-20 text-[#00E5FF] hover:bg-opacity-30'
              }`}
            >
              {guest.confirmed ? 'Unconfirm' : 'Confirm'}
            </button>
            <button
              onClick={handleEdit}
              className="px-3 py-1 text-sm bg-[#00E5FF] bg-opacity-20 text-[#00E5FF] rounded hover:bg-opacity-30 transition-colors duration-200"
            >
              Edit
            </button>
            <button
              onClick={() => removeGuest(guest.id)}
              className="px-3 py-1 text-sm bg-[#c471ed] bg-opacity-20 text-[#c471ed] rounded hover:bg-opacity-30 transition-colors duration-200"
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

const GuestList = ({ guests, toggleConfirm, removeGuest, updateGuest }) => {
  return (
    <div className="p-6 bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-lg border border-opacity-30 border-[#00E5FF] shadow-lg h-full">
      <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#c471ed]">
        Guest List
      </h2>
      
      {guests.length === 0 ? (
        <div className="p-6 text-center bg-gray-800 bg-opacity-50 rounded-lg">
          <p className="text-gray-400">No guests added yet.</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {guests.map((guest) => (
            <GuestItem
              key={guest.id}
              guest={guest}
              toggleConfirm={toggleConfirm}
              removeGuest={removeGuest}
              updateGuest={updateGuest}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default GuestList;
