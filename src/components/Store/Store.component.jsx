import {provideState, injectState, update} from '@wonderlandlabs/freactal-connect';
import StoreView from './Store.view.jsx';

console.log('provideState', provideState, 'update:', update);
export default provideState([
  {
    robotName: 'Mr. Roboto',
    torso: false,
    head: false,
    leftarm: false,
    rightarm: false,
    leftleg: false,
    rightleg: false,
    legunit: false,
    selectedpart: false,
    selectedside: false,
  },
  {
    selectPart: update((actions, selectedSide, selectedPart) => () => ({
      selectedPart,
      selectedSide
    })),
    setPart: update((actions, type) => ({selectedPart, selectedSide}) => {
      console.log('key:', type, selectedSide, selectedPart);
      let out = {
        selectedPart: false,
        selectedSide: false
      };
      if (selectedPart && selectedSide) {
        if (selectedSide === 'center') {
          out[selectedPart] = type;
        } else {
          out[selectedSide + selectedPart] = type;
        }
      }
      return out;
    }),
    setName: update((actions, robotName) => {
      console.log('robotName:', robotName);
      return () => ({robotName});
    }),
  },
])(injectState(StoreView));
