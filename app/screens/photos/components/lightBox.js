import React from 'react';
import PhotoView from '@merryjs/photo-viewer';

export const LightBox = ({visibility, imgData, setState}) => {
  return (
    <PhotoView
      visible={visibility}
      data={imgData}
      hideStatusBar={true}
      hideShareButton={true}
      initial={1}
      onDismiss={() => setState(false)}
    />
  );
};
