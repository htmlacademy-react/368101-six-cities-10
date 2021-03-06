import { Outlet, useLocation } from 'react-router-dom';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';

export default function DetaultLayout(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <div className="page">
      <Header />

      <main>
        <Outlet />
      </main>

      { pathname.includes('favorites') && <Footer /> }
    </div>
  );
}
