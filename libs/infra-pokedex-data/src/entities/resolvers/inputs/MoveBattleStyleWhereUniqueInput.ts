import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStyleWhereInput } from "../inputs/MoveBattleStyleWhereInput";
import { NatureBattleStylePreferenceListRelationFilter } from "../inputs/NatureBattleStylePreferenceListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MoveBattleStyleWhereUniqueInput", {})
export class MoveBattleStyleWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveBattleStyleWhereInput], {
    nullable: true
  })
  AND?: MoveBattleStyleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveBattleStyleWhereInput], {
    nullable: true
  })
  OR?: MoveBattleStyleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveBattleStyleWhereInput], {
    nullable: true
  })
  NOT?: MoveBattleStyleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceListRelationFilter, {
    nullable: true
  })
  naturePreferences?: NatureBattleStylePreferenceListRelationFilter | undefined;
}
