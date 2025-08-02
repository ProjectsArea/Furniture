// src/global.d.ts
declare namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        'auto-rotate'?: boolean | string;
        'camera-controls'?: boolean | string;
        ar?: boolean | string;
        'shadow-intensity'?: number | string;
        loading?: 'eager' | 'lazy';
        reveal?: 'auto' | 'interaction';
        style?: React.CSSProperties;
        slot?: string;
      };
    }
  }
  