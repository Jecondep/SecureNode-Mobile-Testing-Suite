import * as SecureStore from 'expo-secure-store';

export const useAuth = () => {
  const saveToken = async (token) => {
    await SecureStore.setItemAsync('user_token', token);
  };

  const loadToken = async () => {
    return await SecureStore.getItemAsync('user_token');
  };

  return { saveToken, loadToken };
};
