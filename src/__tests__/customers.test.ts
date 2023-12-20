import { Accrue } from '../baseApi';
import Customer from '../endpoints/customers';

// Mock the axiosInstance to avoid actual network requests
jest.mock('axios');

describe('Customer Endpoint', () => {
  let accrue: Accrue;
  let customer: Customer;

  beforeEach(() => {
    accrue = new Accrue();
    customer = new Customer(accrue);
  });

  it('should create a customer successfully', async () => {
    const options = {
      email: 'test@example.com',
      firstname: 'John',
      lastname: 'Doe',
      country: 'US',
    };

    const mockApiResponse = {
          id: '123',
          email: 'test@example.com',
          firstName: 'John',
          lastName: 'Doe',
    };

    accrue.makeRequest = jest.fn().mockResolvedValue(mockApiResponse);
    const result = await customer.createCustomer(options);

    expect(result).toEqual({
      id: '123',
      email: 'test@example.com',
      firstName: 'John',
      lastName: 'Doe',
    });

    expect(accrue.makeRequest).toHaveBeenCalledWith(
      'createCustomer',
      expect.objectContaining({
        query: expect.stringContaining('mutation'),
      })
    );
  });

  it('should get all customers successfully', async () => {
    const mockApiResponse = {
          merchantCustomers: {
            nodes: [
              { id: '1', email: 'customer1@example.com', firstName: 'Alice', lastName: 'Smith' },
              { id: '2', email: 'customer2@example.com', firstName: 'Bob', lastName: 'Johnson' },
            ],
            pageInfo: {
              startCursor: 'startCursor',
              endCursor: 'endCursor',
              hasNextPage: false,
              hasPreviousPage: false,
            },
      },
    };

    accrue.makeRequest = jest.fn().mockResolvedValue(mockApiResponse);
    const result = await customer.getAllCustomers();

    expect(result).toEqual(
        expect.objectContaining({
          merchantCustomers: {
            nodes: expect.arrayContaining([
              { id: '1', email: 'customer1@example.com', firstName: 'Alice', lastName: 'Smith' },
              { id: '2', email: 'customer2@example.com', firstName: 'Bob', lastName: 'Johnson' },
            ]),
            pageInfo: expect.any(Object),
          },
        })
      );

    expect(accrue.makeRequest).toHaveBeenCalledWith(
      'account',
      expect.objectContaining({
        query: expect.stringContaining('query'),
      })
    );
  });

  it('should get a specific customer successfully', async () => {
    const customerId = '123';

    const mockApiResponse = {
          id: '123',
          email: 'test@example.com',
          firstName: 'John',
          lastName: 'Doe',
    };

    accrue.makeRequest = jest.fn().mockResolvedValue(mockApiResponse);
    const result = await customer.getCustomer(customerId);

    expect(result).toEqual({
      id: '123',
      email: 'test@example.com',
      firstName: 'John',
      lastName: 'Doe',
    });

    expect(accrue.makeRequest).toHaveBeenCalledWith(
      'node',
      expect.objectContaining({
        query: expect.stringContaining('query'),
      })
    );
  });

});
