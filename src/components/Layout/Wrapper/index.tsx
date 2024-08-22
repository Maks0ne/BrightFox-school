import { FC, ReactNode } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

interface IWrapperProps {
  children: ReactNode;
}
const Wrapper: FC<IWrapperProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Wrapper;
