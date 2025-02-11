import axios from "axios";

const BASE_URL = "https://umurave-api.onrender.com";

// Create axios instance with default config
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add auth token interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API endpoints
export const authAPI = {
  login: (credentials: { email: string; password: string }) =>
    api.post("/api/auth/login", credentials),
  register: (userData: { email: string; password: string; name: string }) =>
    api.post("/api/auth/register", userData),
};

export const challengesAPI = {
  getAllChallenges: async () => {
    try {
      const response = await fetch(
        "https://umurave-api.onrender.com/api/v1/get_all"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch challenges");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching challenges:", error);
      throw error;
    }
  },
};

export const profileAPI = {
  getProfile: () => api.get("/api/users/profile"),
  updateProfile: (profileData: any) =>
    api.put("/api/users/profile", profileData),
};

export default api;
