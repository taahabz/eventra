import { useState } from 'react';

const GuestForm = ({ addGuest }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rsvp, setRsvp] = useState('pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    
    addGuest({ 
      id: Date.now(), 
      name, 
      email, 
      confirmed: false,
      rsvp
    });
    
    // Clear form
    setName('');
    setEmail('');
    setRsvp('pending');
  };

  return (
    <div className="p-6 bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-lg border border-opacity-30 border-[#00E5FF] shadow-lg h-full">
      <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#c471ed]">
        Add Guest
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 bg-opacity-70 border border-opacity-30 border-[#00E5FF] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent text-white placeholder-gray-500"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 bg-opacity-70 border border-opacity-30 border-[#00E5FF] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent text-white placeholder-gray-500"
            placeholder="john@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="rsvp" className="block text-sm font-medium text-gray-300 mb-1">
            RSVP Status
          </label>
          <select
            id="rsvp"
            value={rsvp}
            onChange={(e) => setRsvp(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 bg-opacity-70 border border-opacity-30 border-[#00E5FF] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent text-white"
          >
            <option value="pending">Pending</option>
            <option value="attending">Attending</option>
            <option value="not-attending">Not Attending</option>
            <option value="maybe">Maybe</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#00E5FF] to-[#c471ed] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00E5FF] transition-all duration-200"
        >
          Add Guest
        </button>
      </form>
    </div>
  );
};

export default GuestForm;
