// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance } from 'react-360-web';
// To construct a new Flat Surface in your app runtime:
import {Surface} from 'react-360-web';
const myFlatSurface = new Surface(
  300, /* width */
  600, /* height */
  Surface.SurfaceShape.Flat /* shape */
);

myFlatSurface.setAngle(
  -Math.PI / 2, /* horiz angle */
  0 /* vertical angle */
);

// import SimpleRaycaster from "simple-raycaster";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    cursorVisibility: "visible",
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('Scene', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  r360.renderToSurface(
    r360.createRoot('Menu', { /* initial props */ }),
    myFlatSurface    // r360.getDefaultSurface()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
  // r360.controls.clearRaycasters();
  // r360.controls.addRaycaster(SimpleRaycaster);
}

window.React360 = {init};
