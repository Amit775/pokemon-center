import * as TypeGraphQL from "type-graphql";

export enum LanguageScalarFieldEnum {
  id = "id",
  iso639 = "iso639",
  iso3166 = "iso3166",
  identifier = "identifier",
  official = "official",
  order = "order"
}
TypeGraphQL.registerEnumType(LanguageScalarFieldEnum, {
  name: "LanguageScalarFieldEnum",
  description: undefined,
});
