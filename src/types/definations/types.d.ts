declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.png';
declare module '*.jpg';

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
