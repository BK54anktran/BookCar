// src/components/FingerprintId.js
import { useEffect, useState } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

const FingerprintId = ({ onReady }) => {
  const [visitorId, setVisitorId] = useState(null);

  useEffect(() => {
    const getOrCreateVisitorId = async () => {
      // Kiểm tra nếu đã có visitorId trong localStorage
      const storedId = localStorage.getItem('visitor_id');
      if (storedId) {
        setVisitorId(storedId);
        if (onReady) onReady(storedId);
        return;
      }

      // Nếu chưa có, tạo mới
      const fp = await FingerprintJS.load();
      const result = await fp.get();
      setVisitorId(result.visitorId);
      localStorage.setItem('visitor_id', result.visitorId);
      if (onReady) onReady(result.visitorId);
    };

    getOrCreateVisitorId();
  }, [onReady]);

  return null;
};

export default FingerprintId;
