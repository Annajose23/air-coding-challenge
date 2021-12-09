import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
    test('renders person details if request succeeds', async () => {
      window.fetch = jest.fn();
      window.fetch.mockResolvedValueOnce({
        json: async () => [{
            id: 1,
            name: "Dyanna Cullingford",
            email: "dcullingford0@nba.com",
            avatar: "https://robohash.org/rerumliberoamet.png?size=200x200&set=set1",
            description: "Nondisplaced fracture of lower epiphysis (separation) of left femur, initial encounter for closed fracture"
            }],
      });
      render(<App />);
      const elements = await screen.getByText('Card')
      expect(elements).not.toHaveLength(0);
    });
  });