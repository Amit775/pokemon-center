import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { NatureBattleStylePreferencesListRelationFilter } from "../inputs/NatureBattleStylePreferencesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MoveBattleStylesWhereInput", {})
export class MoveBattleStylesWhereInput {
  @TypeGraphQL.Field(_type => [MoveBattleStylesWhereInput], {
    nullable: true
  })
  AND?: MoveBattleStylesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveBattleStylesWhereInput], {
    nullable: true
  })
  OR?: MoveBattleStylesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveBattleStylesWhereInput], {
    nullable: true
  })
  NOT?: MoveBattleStylesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesListRelationFilter, {
    nullable: true
  })
  naturePreferences?: NatureBattleStylePreferencesListRelationFilter | undefined;
}
