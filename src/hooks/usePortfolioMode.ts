import { useMemo } from 'react';

export type PortfolioMode = 'tech' | 'dev';

export const usePortfolioMode = (): PortfolioMode => {
  return useMemo(() => {
    const params = new URLSearchParams(globalThis.location.search);
    const mode = params.get('mode');
    return mode === 'dev' ? 'dev' : 'tech';
  }, []);
};