import { useMediaQuery } from './useMediaQuery';

export const useIsDesktop = () => {
  return useMediaQuery('(min-width: 600px)');
};
