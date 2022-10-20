import ReactGA from 'react-ga';

export const TRACKING_ID = process.env.REACT_APP_TRACKING_ID; // TRACKING_ID


/**
 * Hook qui permet d'envoyer l'action à google Analytics
 * @param category 
 * @returns 
 */
const useAnalyticsEventTracker = (category : string) => {
    const eventTracker = (action: string, label ?: string) => {
      ReactGA.event({category, action, label});
    }
    return eventTracker;
  }

export default useAnalyticsEventTracker;