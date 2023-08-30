import { useAuth } from '@/context/auth-provider';
import React from 'react';


function OAuthSignInButton() {


  const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  const params: Record<string, string> = {
    client_id: process.env.CLIENT_ID || '',
    redirect_uri: 'http://localhost:3000/callback',
    response_type: 'token',
    scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
    include_granted_scopes: 'true',
    state: 'pass-through value'
  };

  const handleSubmit = () => {
    const form = document.createElement('form');
    form.method = 'GET';
    form.action = oauth2Endpoint;
  
    for (const param in params) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = param;
      input.value = params[param];
      form.appendChild(input);
    }
  
    document.body.appendChild(form);
    form.submit();
  
    // Log the response
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const response = new URLSearchParams(window.location.hash.substr(1));
      console.log('OAuth Response:', response);
    });
  };
  

  return (
    <button onClick={handleSubmit}>OAuth Sign In</button>
  );
}

export default OAuthSignInButton;
