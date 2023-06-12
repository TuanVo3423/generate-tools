import { LocalStorage } from '@/services/localStorage';
import { useEffect } from 'react';

const useIntro = () => {
  const currTimestamp = Date.now();
  const timestamp = JSON.parse(LocalStorage.get('timestamp') || '1000');

  const timeLimit = 5 * 60 * 1000; // 5 minutes

  const hasTimePassed = currTimestamp - timestamp > timeLimit;

  useEffect(() => {
    hasTimePassed
      ? LocalStorage.set('timestamp', currTimestamp.toString())
      : LocalStorage.set('timestamp', timestamp.toString());
  }, [currTimestamp, hasTimePassed, timestamp]);

  return hasTimePassed;
};

export default useIntro;
