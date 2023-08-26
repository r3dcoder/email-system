import RegistrationForm from '@/components/form/RegistrationForm';
import React  from 'react';
 
const RegistrationPage: React.FC = () => {
 

    return (
      <div className='bg-gradient-to-r from-purple-300 to-indigo-600 h-screen flex'>
        <RegistrationForm/>
      </div>
        
    );
};

export default RegistrationPage;
