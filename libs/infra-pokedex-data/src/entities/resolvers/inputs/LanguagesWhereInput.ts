import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("LanguagesWhereInput", {})
export class LanguagesWhereInput {
  @TypeGraphQL.Field(_type => [LanguagesWhereInput], {
    nullable: true
  })
  AND?: LanguagesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguagesWhereInput], {
    nullable: true
  })
  OR?: LanguagesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguagesWhereInput], {
    nullable: true
  })
  NOT?: LanguagesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  iso639?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  iso3166?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  official?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  order?: IntFilter | undefined;
}
