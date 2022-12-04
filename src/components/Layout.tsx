import React, { FC } from 'react';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {

  return (
    <div className={'layout container'}>
      <header>
        <Link href={'/'}>
          <h2>
            Main
          </h2>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
