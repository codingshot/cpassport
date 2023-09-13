import { useEffect } from 'react';

import { MetaTags } from '@/components/MetaTags';
import { LinktreeBOS } from '@/components/polygon';
import { useDefaultLayout } from '@/hooks/useLayout';
import { useAuthStore } from '@/stores/auth';
import { useCurrentComponentStore } from '@/stores/current-component';
import type { NextPageWithLayout } from '@/utils/types';

const HomePage: NextPageWithLayout = () => {
  const signedIn = useAuthStore((store) => store.signedIn);
  const setComponentSrc = useCurrentComponentStore((store) => store.setSrc);

  useEffect(() => {
    if (!signedIn) {
      setComponentSrc(null);
    }
  }, [signedIn, setComponentSrc]);


  return (
    <>
      <MetaTags
        title={`Passport | CreativesDAO`}
        description={`Collect passports from CreativesDAO Constellations around the world`}
      />
      <LinktreeBOS />
    </>
  );
};

HomePage.getLayout = useDefaultLayout;

export default HomePage;
