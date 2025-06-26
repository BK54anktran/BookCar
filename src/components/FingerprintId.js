import { useEffect } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

const FingerprintId = ({ onReady }) => {
  useEffect(() => {
    const getOrCreateVisitorId = async () => {
      const storedId = localStorage.getItem('visitor_id');
      if (storedId) {
        if (onReady) onReady(storedId);
        return;
      }

      const fp = await FingerprintJS.load();
      const result = await fp.get();
      localStorage.setItem('visitor_id', result.visitorId);
      if (onReady) onReady(result.visitorId);
    };

    getOrCreateVisitorId();
  }, [onReady]);

  return null;
};

export default FingerprintId;
