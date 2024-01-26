import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
