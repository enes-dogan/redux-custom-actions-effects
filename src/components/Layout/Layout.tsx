import { childrenProp } from '../../types.ts';

import MainHeader from './MainHeader.tsx';

export default function Layout({ children }: childrenProp) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}
