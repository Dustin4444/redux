export const LOAD_COMPONENT = 'LOAD_COMPONENT';

export const loadComponent = (componentId) => ({
  type: LOAD_COMPONENT,
  componentId,
});
