import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from '../../App'; // Ajusta la ruta a tu App.js

// Mock de sensores para entorno de pruebas
jest.mock('expo-location', () => ({
  requestForegroundPermissionsAsync: jest.fn(() => Promise.resolve({ status: 'granted' })),
  getCurrentPositionAsync: jest.fn(() => Promise.resolve({
    coords: { latitude: -0.18, longitude: -78.46 }
  })),
}));

describe('SecureNode Integration - UI & Sensors', () => {
  test('Debe mostrar coordenadas en pantalla al presionar el botón GPS', async () => {
    const { getByText, findByText } = render(<App />);
    
    const button = getByText('Obtener Ubicación');
    fireEvent.press(button);

    // Verifica la integración Hook -> UI
    const latDisplay = await findByText(/Latitud: -0.18/);
    expect(latDisplay).toBeTruthy();
  });
});
