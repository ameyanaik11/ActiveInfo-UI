const FIREBASE_API_KEY = "firebase_api_key";

// eslint-disable-next-line
const getFirebaseApiKeyFromStorage = () => {
  const cachedApiKey = localStorage.getItem(FIREBASE_API_KEY);
  if (!cachedApiKey) {
    const apiKey = prompt("Please provide API Key for Firebase");
    if (apiKey.length > 38) {
      // 39 to be precise
      localStorage.setItem(FIREBASE_API_KEY, apiKey);
      return apiKey;
    }
  }
  return cachedApiKey;
};

const publicFirebaseApiKey = () => "AIzaSyD-xTs_FdAUP4c6CDyAVjwSp_a8r1VLt1g";

export const getFirebaseApiKey = publicFirebaseApiKey;
