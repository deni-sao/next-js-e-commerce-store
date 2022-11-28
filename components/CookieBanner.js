import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default function CookieBanner() {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  useEffect(() => {
    const initialValue = getLocalStorage('isBannerOpen');
    if (initialValue) {
      setIsBannerOpen(initialValue);
    }
  }, []);

  return (
    <>
      <div className="mt-20 border-solid px-20 py-15">
        <span>Please accept our cookie policy</span>
      </div>
      <button
        onClick={() => {
          setIsBannerOpen(false);
          setLocalStorage('isBannerOpen', false);
        }}
      >
        yes
      </button>
    </>
  );
}
