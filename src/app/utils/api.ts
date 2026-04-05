const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

interface LoginCredentials {
  username: string;
  password: string;
}

export interface GemFormData {
  name: string;
  category: string;
  carat: string;
  origin: string;
  clarity?: string;
  price: string;
  cut?: string;
  treatment?: string;
  certification?: string;
  description?: string;
  specifications?: string;
  highlights?: string;
}

export const api = {
  // Auth endpoints
  login: async (credentials: LoginCredentials) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Login failed');
    }
    return response.json();
  },

  verifyToken: async (token: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/verify`, {
      headers: { 'Authorization': `Bearer ${token}` },
    });
    return response.json();
  },

  // Gem endpoints
  getAllGems: async (category?: string) => {
    const url = category 
      ? `${API_BASE_URL}/gems?category=${encodeURIComponent(category)}`
      : `${API_BASE_URL}/gems`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch gems');
    return response.json();
  },

  getGemById: async (id: string | number) => {
    const response = await fetch(`${API_BASE_URL}/gems/${id}`);
    if (!response.ok) throw new Error('Failed to fetch gem');
    return response.json();
  },

  createGem: async (formData: FormData, token: string) => {
    const response = await fetch(`${API_BASE_URL}/gems`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      body: formData,
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create gem');
    }
    return response.json();
  },

  updateGem: async (id: string | number, formData: FormData, token: string) => {
    const response = await fetch(`${API_BASE_URL}/gems/${id}`, {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${token}` },
      body: formData,
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to update gem');
    }
    return response.json();
  },

  deleteGem: async (id: string | number, token: string) => {
    const response = await fetch(`${API_BASE_URL}/gems/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to delete gem');
    }
    return response.json();
  },
};
