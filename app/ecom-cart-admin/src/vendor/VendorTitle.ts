import { Vendor as TVendor } from "../api/vendor/Vendor";

export const VENDOR_TITLE_FIELD = "cName";

export const VendorTitle = (record: TVendor): string => {
  return record.cName || String(record.id);
};
