declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': {
      src?: string;
      alt?: string;
      'camera-controls'?: boolean;
      'auto-rotate'?: boolean;
      'camera-orbit'?: string;
      'min-camera-orbit'?: string;
      'max-camera-orbit'?: string;
      'field-of-view'?: string;
      'shadow-intensity'?: string;
      'environment-image'?: string;
      'exposure'?: string;
      'shadow-softness'?: string;
      'ar'?: boolean;
      'ar-modes'?: string;
      'camera-target'?: string;
      onLoad?: (event: Event) => void;
      onError?: (event: Event) => void;
      className?: string;
      style?: React.CSSProperties;
      children?: React.ReactNode;
      ref?: React.RefObject<any>;
    };
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': {
        src?: string;
        alt?: string;
        'camera-controls'?: boolean;
        'auto-rotate'?: boolean;
        'camera-orbit'?: string;
        'min-camera-orbit'?: string;
        'max-camera-orbit'?: string;
        'field-of-view'?: string;
        'shadow-intensity'?: string;
        'environment-image'?: string;
        'exposure'?: string;
        'shadow-softness'?: string;
        'ar'?: boolean;
        'ar-modes'?: string;
        'camera-target'?: string;
        onLoad?: (event: Event) => void;
        onError?: (event: Event) => void;
        className?: string;
        style?: React.CSSProperties;
        children?: React.ReactNode;
        ref?: React.RefObject<any>;
      };
    }
  }
} 