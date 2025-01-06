import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemList from './ItemList';

describe('ItemList', () => {
  const mockItems = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' }
  ];

  test('renders correct number of items', () => {
    render(<ItemList items={mockItems} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
    
    mockItems.forEach(item => {
      expect(screen.getByText(item.text)).toBeInTheDocument();
    });
  });

  test('renders empty list when no items provided', () => {
    render(<ItemList items={[]} />);
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems).toHaveLength(0);
  });
});
