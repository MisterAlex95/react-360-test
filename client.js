import { ReactInstance, Surface } from 'react-360-web';

const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
const lowPanel = new Surface(1000, 600, Surface.SurfaceShape.Flat);

lowPanel.setAngle(0, -Math.PI / 2);
leftPanel.setAngle(-Math.PI / 2, 0);

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    cursorVisibility: "visible",
    ...options,
  });

  r360.renderToSurface(r360.createRoot('Scene', { /* initial props */ }), r360.getDefaultSurface());
  // r360.renderToSurface(r360.createRoot('Scene', { /* initial props */ }), lowPanel);
  r360.renderToSurface(r360.createRoot('Menu', { /* initial props */ }), leftPanel);
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
