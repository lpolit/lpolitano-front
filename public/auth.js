import Data from './data.js';

const Auth = (() => {
  let accessToken = null; // Token en memoria

  return {
    setToken: (token) => {
      accessToken = token;
    },
    getToken: () => accessToken,
    clearToken: () => {
      accessToken = null;
    },
    async refreshToken() {
      try {
        const response = await fetch(Data.getServerName()+'/refresh-token', {
          method: 'POST',
          credentials: 'include', // Importante para enviar cookies HttpOnly
        });

        if (!response.ok) {
          throw new Error('No se pudo refrescar el token');
        }

        const data = await response.json();
        this.setToken(data.accessToken); // Guardamos el nuevo Access Token en memoria
        return data.accessToken;
      } catch (error) {
        console.error('Error al refrescar el token:', error);
        return null;
      }
    },
  };
})();

export default Auth;
