import { GoogleLogin } from '@react-oauth/google';

import React from 'react'

export default function GoogleLoginButton() {
    return (
        <div>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log("credentialResponse", credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                useOneTap
            />
        </div>
    )
}
