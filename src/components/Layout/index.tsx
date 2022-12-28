import React, { FC } from 'react';

interface IProps {
  children?: React.ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>{children}</div>;
};

export default Layout;
