import ReactGA from 'react-ga';

export const TRACKING_ID = "UA-207358357-1"; // TRACKING_ID
//export const TRACKING_ID = "G-PM8XC1VWGM"; // TRACKING_ID google analytics 4


/**
 * Hook qui permet d'envoyer l'action à google Analytics
 * @param category The type of interaction (e.g. 'play')
 * @returns void
 */
const useAnalyticsEventTracker = (category : string) => {
    const eventTracker = (action: string, label ?: string) => {
      ReactGA.event({category, action, label});
    }
    return eventTracker;
  }

export default useAnalyticsEventTracker;