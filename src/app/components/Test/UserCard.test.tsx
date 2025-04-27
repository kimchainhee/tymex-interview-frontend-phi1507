import { render, screen } from '@testing-library/react';
import UserCard from '../Card/UserCard';
import { User } from '../../types/user';

const mockUser: User = {
  id: 1,
  name: 'Nguyễn Văn A',
  email: 'a.nguyen@example.com',
};

describe('UserCard', () => {
  it('hiển thị đúng tên và email', () => {
    render(<UserCard user={mockUser} />);
    
    expect(screen.getByText('Nguyễn Văn A')).toBeInTheDocument();
    expect(screen.getByText('a.nguyen@example.com')).toBeInTheDocument();
  });
});
