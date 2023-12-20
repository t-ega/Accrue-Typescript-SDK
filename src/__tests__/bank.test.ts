import { Accrue } from '../baseApi';
import Banks from '../endpoints/banks';

// Mock the axiosInstance to avoid actual network requests
jest.mock('axios');

describe('Banks Endpoint', () => {
  let accrue: Accrue;
  let banks: Banks;

  beforeEach(() => {
    accrue = new Accrue();
    banks = new Banks(accrue);
  });

  it('should get banks for a valid country code', async () => {
    // Mock the response you expect from the API
    const mockApiResponse = [
          { id: '1', name: 'Bank A', code: 'A' },
          { id: '2', name: 'Bank B', code: 'B' },
    ]

    // Mock the makeRequest method to return the mockApiResponse
    accrue.makeRequest = jest.fn().mockResolvedValue(mockApiResponse);

    // Call the method being tested
    const result = await banks.getBanks('NG');

    // Assert the result
    expect(result).toEqual( [
      { id: '1', name: 'Bank A', code: 'A' },
      { id: '2', name: 'Bank B', code: 'B' },
    ]);

    // Verify that makeRequest was called with the correct parameters
    expect(accrue.makeRequest).toHaveBeenCalledWith(
      'banks',
      expect.objectContaining({
        query: expect.stringContaining('query'),
      })
    );
  });

});
