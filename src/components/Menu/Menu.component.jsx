import { provideState, injectState, update } from '@wonderlandlabs/freactal-connect';
import StoreView from './Store.view.jsx';

console.log('provideState', provideState, 'update:', update);
export default provideState([
  {
    styles: [
      {
        name: 'Const',
        title: 'ConstructorBot',
        hasSingle: true,
        singleTitle: 'Dozer Legs'
      },
      {
        name: 'Basic',
        title: 'TinBot',
        hasSingle: false,
      },
      {
        name: 'Aqua',
        title: 'AquaBot',
        hasSingle: true,
        singleTitle: 'Mermaid Legs'
      },
    ],
  },
  {
    selectPart: update((actions, selectedPart, selectedSide) => () => ({ selectedPart, selectedSide })),
    setName: update((actions, robotName) => {
      console.log('robotName:', robotName);
      return () => ({ robotName });
    }),
  },
])(injectState(StoreView));
