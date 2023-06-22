import { createContext } from "react";


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	return (
		<AuthContext.Provider
			value={{ authed: false }}
		>
			{ children }
		</AuthContext.Provider>
	);
}

export default AuthContext;