import { axiosInstance } from ".";

// Récupérer toutes les cartes
export const GetCards = async () => {
    const response = await axiosInstance("get", '/cards');
    return response;
}

// Récupérer une carte par ID
export const GetCardById = async (cardId) => {
    const response = await axiosInstance("get", `/cards/${cardId}`);
    return response;
}

// Récupérer une carte par NFC ID
export const GetCardByNfcId = async (nfcId) => {
    const response = await axiosInstance("get", `/cards/nfc/${nfcId}`);
    return response;
}

// Récupérer les cartes d'un utilisateur
export const GetCardsByUser = async (userId) => {
    const response = await axiosInstance("get", `/cards/user/${userId}`);
    return response;
}

// Créer une nouvelle carte
export const CreateCard = async (cardData) => {
    const response = await axiosInstance("post", '/cards', cardData);
    return response;
}

// Modifier une carte
export const UpdateCard = async (cardId, cardData) => {
    const response = await axiosInstance("put", `/cards/${cardId}`, cardData);
    return response;
}

// Supprimer une carte
export const DeleteCard = async (cardId) => {
    const response = await axiosInstance("delete", `/cards/${cardId}`);
    return response;
}

// Activer ou désactiver une carte
export const ToggleCardActivation = async (cardId) => {
    const response = await axiosInstance("patch", `/cards/${cardId}/toggle`);
    return response;
}