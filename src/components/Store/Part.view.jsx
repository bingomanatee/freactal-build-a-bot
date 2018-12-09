import style from './Part.module.css';
import ReactSVG from 'react-svg';

const PART_SUFFIX = {
  leftleg: 'LegLeft',
  rightleg: 'LegRight',
  leftarm: 'ArmLeft',
  rightarm: 'ArmRight',
  torso: 'Torso',
  head: 'Head'
};

export default (props) => {
  console.log('---- props', {props});
  return (
    <div className={style.part}
         onClick={props.onClick} style={({
      left: props.x * props.scale,
      top: props.y * props.scale,
      width: props.w * props.scale,
      height: props.h * props.scale
    })}>
      <img
        src={`bots/${props.name}/${props.name}${PART_SUFFIX[props.bodyPart]}.svg`}
        width={props.w * props.scale}
        height={props.h * props.scale}
      />
    </div>
  );
}
