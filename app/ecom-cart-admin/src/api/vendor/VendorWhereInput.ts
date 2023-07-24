import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type VendorWhereInput = {
  cEmail?: StringFilter;
  cName?: StringFilter;
  cPhone?: IntFilter;
  id?: StringFilter;
  name?: StringFilter;
};
