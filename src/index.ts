import './styles/index.scss';
import testConsole from './scripts/test-console';
window.addEventListener('load', () => {
  testConsole('End Load');
});

document.addEventListener('DOMContentLoaded', () => {
  testConsole('End DOMContentLoad');
});
