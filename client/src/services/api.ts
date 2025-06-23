// API configuration for different environments
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api'  // Use relative path for production - will be proxied by web server
  : 'http://localhost:5000/api';

const getAuthToken = () => {
  const token = localStorage.getItem('adminToken');
  console.log('getAuthToken called, token found:', !!token, 'token value:', token ? token.substring(0, 20) + '...' : 'null');
  if (!token) {
    console.warn('No admin token found in localStorage');
    console.log('localStorage contents:', Object.keys(localStorage));
  }
  return token;
};

export const apiRequest = async (method: string, endpoint: string, data?: any) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(url, config);
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// Auth API
export const authAPI = {
  login: async (username: string, password: string) => {
    console.log('Making login request to:', `${API_BASE_URL}/auth/login`); // Debug log
    return await apiRequest('POST', '/auth/login', { username, password });
  },
};

// Deals API
export const dealsAPI = {
  getAll: async () => {
    return await apiRequest('GET', '/deals');
  },

  getActive: async () => {
    return await apiRequest('GET', '/deals/active');
  },

  create: async (deal: any) => {
    console.log('Creating deal with data:', deal); // Debug log
    return await apiRequest('POST', '/deals', deal);
  },

  update: async (id: string, deal: any) => {
    return await apiRequest('PUT', `/deals/${id}`, deal);
  },

  delete: async (id: string) => {
    return await apiRequest('DELETE', `/deals/${id}`);
  },
}; 