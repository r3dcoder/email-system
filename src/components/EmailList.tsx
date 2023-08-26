// src/components/EmailList.js
import React from 'react';

const EmailList = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Inbox</h2>
      <ul className="space-y-2">
        <li className="flex items-center justify-between p-2 border rounded hover:bg-gray-100">
          <span>Sender: John Doe</span>
          <span className="text-gray-500">Subject: Hello</span>
        </li>
        {/* More email items */}
      </ul>
    </div>
  );
};

export default EmailList;
