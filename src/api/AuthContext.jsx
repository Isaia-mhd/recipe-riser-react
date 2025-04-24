import { createContext, useState, useContext, useEffect} from 'react';
import api from './axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check the session in refresh
  const fetchUser = async () => {
    try {
      await api.get("/sanctum/csrf-cookie");
      const res = await api.get("/api/user");
      setUser(res.data);
    } catch (err) {
      setUser(null);
      console.log(err.response.data.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      await api.get("/sanctum/csrf-cookie");
      const response = await api.post('/api/login', { email, password });
      setToken(response.data.token);
      setUser(response.data.user);
      setError(null);
      return true;
      
    } catch (error) {
      if(user)
      {
        console.log('A user already authenticated');
        setError("A user already authenticated");
      } else{
        console.log('Login failed:', error.response?.data?.message);
        setError(error.response?.data?.message || 'Login failed');
      }
    
      return false;
    }
  };
  

  const logout = async() => {
    await api.post('/api/logout');

    setToken(null);
    setUser(null);
  };


   //Check the auth every loading
   useEffect(() => {
    api.get('/api/user')
      .then(res => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ token, user, error, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
