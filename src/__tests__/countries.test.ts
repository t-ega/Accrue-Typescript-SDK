import { Accrue } from '../baseApi';
import Countries from '../endpoints/countries';
jest.mock('axios');

describe('Countries Endpoint', () => {
  let accrue: Accrue;
  let countries: Countries;

  beforeEach(() => {
    accrue = new Accrue();
    countries = new Countries(accrue);
  });

  it('should get available countries successfully', async () => {
    const mockApiResponse = [
          { id: '1', name: 'Country A', code: 'A' },
          { id: '2', name: 'Country B', code: 'B' },
    ]

    accrue.makeRequest = jest.fn().mockResolvedValue(mockApiResponse);
    const result = await countries.getCountries();
    expect(result).toEqual([
      { id: '1', name: 'Country A', code: 'A' },
      { id: '2', name: 'Country B', code: 'B' },
    ]);
    expect(accrue.makeRequest).toHaveBeenCalledWith(
      'availableCountries',
      expect.objectContaining({
        query: expect.stringContaining('query'),
      })
    );
  });

});
