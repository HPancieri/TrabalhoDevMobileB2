import { createContext, useContext, useState } from "react";


const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

	const [ authed, setAuthed ] = useState(false);
	const [ loading, setLoading ] = useState(false);
	const signIn = () =>  {
		return new Promise(resolve => {
			setLoading(true);
			setTimeout(() => {
				setAuthed(true);
				setLoading(false);
			}, 2000);
		});
	}

	return (
		<AuthContext.Provider
			value={{ authed, signIn, loading }}
		>
			{ children }
		</AuthContext.Provider>
	);
}

export default AuthContext;