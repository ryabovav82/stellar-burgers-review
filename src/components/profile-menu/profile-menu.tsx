import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProfileMenuUI } from '@ui';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../services/store';
import { logoutUser } from '../../services/slices/userSlice';

export const ProfileMenu: FC = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
      navigate('/login');
    } catch (_) {}
  };

  return <ProfileMenuUI handleLogout={handleLogout} pathname={pathname} />;
};
