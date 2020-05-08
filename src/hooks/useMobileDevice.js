import { useEffect, useState } from 'react';

import { isMobileOrTabletDevice } from '../utils/detectDevice';

const useMobileDevice = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    setIsMobileOrTablet(isMobileOrTabletDevice());
  });

  return [isMobileOrTablet];
};

export default useMobileDevice;
