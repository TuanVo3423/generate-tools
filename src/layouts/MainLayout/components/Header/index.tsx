import { useAuth } from '@/store';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
export const Header = () => {
  const currentUser = useAuth((state) => state.profile);
  return (
    <div>
      <HeaderMobile currentUser={currentUser} />
      <HeaderDesktop currentUser={currentUser} />
    </div>
  );
};
