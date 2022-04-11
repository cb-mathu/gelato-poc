import { ItemType, ItemTypeLabel } from './types';

export function getItemTypeLabel(entityType: ItemType | undefined): ItemTypeLabel {
  switch (entityType) {
    case ItemType.Plan:
      return ItemTypeLabel.Plan;
    case ItemType.Addon:
      return ItemTypeLabel.Addon;
    case ItemType.Adhoc:
    case ItemType.Charge:
    default:
      return ItemTypeLabel.Charge;
  }
}
