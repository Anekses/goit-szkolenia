import { useAuth } from '../../hooks/useAuth';
import { AuthNav } from '../AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation'
import { UserMenu } from '../UserMenu/UserMenu'
import css from './AppContainer.module.css';

export const AppContainer = () => {
  const { isLoggedIn } = useAuth()

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu/> : <AuthNav />}
    </header>
  )
}