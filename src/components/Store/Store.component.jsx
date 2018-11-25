import { provideState, injectState, update } from '@wonderlandlabs/freactal-connect';
import StoreView from './Store.view.jsx';

console.log('provideState', provideState, 'update:', update);
export default provideState([
  {
    robotName: 'Mr. Roboto',
    torso: false,
    head: false,
    leftArm: false,
    rightArm: false,
    leftLeg: false,
    rightLeg: false,
    legUnit: false,
    selectedPart: false,
    selectedSide: false,
  },
  {
    selectPart: update((actions, selectedPart, selectedSide) => ({ selectedPart, selectedSide })),
    setName: update((actions, robotName) => {
      console.log('robotName:', robotName);
      return () => ({ robotName });
    }),
  },
])(injectState(StoreView));
