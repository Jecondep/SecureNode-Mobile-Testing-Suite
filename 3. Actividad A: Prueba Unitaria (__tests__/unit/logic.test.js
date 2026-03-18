// Función de lógica de negocio desacoplada
const processSensorData = (data) => {
  if (!data) throw new Error("DATA_EMPTY");
  return `SECURE_NODE_VALIDATED: ${data.toUpperCase()}`;
};

describe('SecureNode Unit Tests - Business Logic', () => {
  test('Debe transformar datos de sensor correctamente', () => {
    const result = processSensorData('gps_active');
    expect(result).toBe('SECURE_NODE_VALIDATED: GPS_ACTIVE');
  });

  test('Debe lanzar error si los datos están vacíos', () => {
    expect(() => processSensorData(null)).toThrow("DATA_EMPTY");
  });
});
