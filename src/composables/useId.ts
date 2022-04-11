let globalId = 0;

// Auto Generating Ids for components
export function useId(prefix: string, id?: string) {
  const _id = id || ++globalId;
  return `${prefix}_${_id}`;
}
