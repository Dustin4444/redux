import Button from '../components/Button';
import Checkbox from '../components/Checkbox';

export function resolveComponent(componentId) {
  switch (componentId) {
    case 'BUTTON':
      return Button;
    case 'CHECKBOX':
      return Checkbox;
    default:
      return null;
  }
}
