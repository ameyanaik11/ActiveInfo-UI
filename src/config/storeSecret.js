export const FIREBASE_API_KEY = "firebase_api_key";

export const getFirebaseApiKey = () => {
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
