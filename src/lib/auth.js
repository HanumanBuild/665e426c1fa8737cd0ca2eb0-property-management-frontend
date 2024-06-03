
// src/lib/auth.js

// This file handles basic authentication logic. It exports functions for login, logout, and checking
// authentication status. This will be useful for future enhancements where user authentication might be required.

const auth = {
  isAuthenticated: false,
  
  login(callback) {
    auth.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  
  logout(callback) {
    auth.isAuthenticated = false;
    setTimeout(callback, 100); // fake async
  },
  
  isAuthenticated() {
    return auth.isAuthenticated;
  }
};

export const login = (callback) => {
  auth.login(callback);
};

export const logout = (callback) => {
  auth.logout(callback);
};

export const isAuthenticated = () => {
  return auth.isAuthenticated;
};
