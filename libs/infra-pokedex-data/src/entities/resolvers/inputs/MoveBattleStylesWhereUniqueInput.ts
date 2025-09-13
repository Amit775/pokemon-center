import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStylesWhereInput } from "../inputs/MoveBattleStylesWhereInput";
import { NatureBattleStylePreferencesListRelationFilter } from "../inputs/NatureBattleStylePreferencesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MoveBattleStylesWhereUniqueInput", {})
export class MoveBattleStylesWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesListRelationFilter, {
    nullable: true
  })
  naturePreferences?: NatureBattleStylePreferencesListRelationFilter | undefined;
}
