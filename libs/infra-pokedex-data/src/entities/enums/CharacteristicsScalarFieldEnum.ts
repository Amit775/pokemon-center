import * as TypeGraphQL from "type-graphql";

export enum CharacteristicsScalarFieldEnum {
  id = "id",
  stat_id = "stat_id",
  gene_mod_5 = "gene_mod_5"
}
TypeGraphQL.registerEnumType(CharacteristicsScalarFieldEnum, {
  name: "CharacteristicsScalarFieldEnum",
  description: undefined,
});
