import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("LanguageWhereInput", {})
export class LanguageWhereInput {
  @TypeGraphQL.Field(_type => [LanguageWhereInput], {
    nullable: true
  })
  AND?: LanguageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageWhereInput], {
    nullable: true
  })
  OR?: LanguageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageWhereInput], {
    nullable: true
  })
  NOT?: LanguageWhereInput[] | undefined;

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
