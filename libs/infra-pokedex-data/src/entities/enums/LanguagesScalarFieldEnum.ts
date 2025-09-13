import * as TypeGraphQL from "type-graphql";

export enum LanguagesScalarFieldEnum {
  id = "id",
  iso639 = "iso639",
  iso3166 = "iso3166",
  identifier = "identifier",
  official = "official",
  order = "order"
}
TypeGraphQL.registerEnumType(LanguagesScalarFieldEnum, {
  name: "LanguagesScalarFieldEnum",
  description: undefined,
});
