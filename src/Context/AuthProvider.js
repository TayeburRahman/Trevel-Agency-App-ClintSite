
import React, { createContext } from 'react';
import useFirebase from '../Firebase/Hook/useFirebase';

export const AuthContext = createContext();
const AuthProvider = (props) => {
    const { children } = props;    
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;