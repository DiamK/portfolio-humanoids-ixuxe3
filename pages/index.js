import styles from '../styles/containers.module.css';

import TeamPlaatje from '../public/plaatjes/team.svg';
import AccessibilityPlaatje from '../public/plaatjes/accessibility.svg';
import DevelopmentPlaatje from '../public/plaatjes/development.svg';
import { Navigatie } from '../components/navigatie';

export default () => {
  return (
    <>
      <Navigatie />
      <h1>Hallo ik ben Diam !</h1>
    </>
  );
};
