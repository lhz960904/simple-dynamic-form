import fields from './fields';
import widgets from './widgets';
import templates from './templates';

/**
 * 获取默认注册表
 * fields、widgets、template
 */
export function getDefaultRegistry() {
  return { fields, widgets, templates };
}
