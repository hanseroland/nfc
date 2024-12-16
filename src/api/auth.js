import { axiosInstance } from ".";

// Créer un nouvel utilisateur
export const RegisterUser = async (userData) => {
    const response = await axiosInstance("post", '/users/register', userData);
    return response;
}

// Se connecter avec un utilisateur
export const LoginUser = async (loginData) => {
    const response = await axiosInstance("post", '/users/login', loginData);
    return response; 
}
