import { Accrue } from '../baseApi';
import Account from '../endpoints/account';

jest.mock('axios');

describe('Account Endpoint', () => {
  let accrue: Accrue;
  let account: Account;

  beforeEach(() => {
    accrue = new Accrue();
    account = new Account(accrue);
  });

  it('should get account details successfully', async () => {
    const mockApiResponse = {
          id: '123',
          accountBalance: 1000,
          depositAddress: 'xyz123',
    };

    accrue.makeRequest = jest.fn().mockResolvedValue(mockApiResponse);

    const result = await account.getAccountDetails();

    expect(result).toEqual({
      id: '123',
      accountBalance: 1000,
      depositAddress: 'xyz123',
    });

    // Assert that makeRequest was called with an argument containing at least {query: "query"}
    expect(accrue.makeRequest).toHaveBeenCalledWith(
      'account',
      expect.objectContaining({
        query: expect.stringContaining('query'),
      })
    );
    
  });

  it('should handle API error', async () => {
    accrue.makeRequest = jest.fn().mockRejectedValue(new Error('API error'));

    try {
      await account.getAccountDetails();

      fail('Expected an error to be thrown');
    } catch (error: any) {
      expect(error.message).toBe('API error');
    }
  });
});
