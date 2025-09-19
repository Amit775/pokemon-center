import * as TypeGraphQL from "type-graphql";

export enum CharacteristicScalarFieldEnum {
  id = "id",
  stat_id = "stat_id",
  gene_mod_5 = "gene_mod_5"
}
TypeGraphQL.registerEnumType(CharacteristicScalarFieldEnum, {
  name: "CharacteristicScalarFieldEnum",
  description: undefined,
});
