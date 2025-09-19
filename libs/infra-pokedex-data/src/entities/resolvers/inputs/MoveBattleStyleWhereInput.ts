import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { NatureBattleStylePreferenceListRelationFilter } from "../inputs/NatureBattleStylePreferenceListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MoveBattleStyleWhereInput", {})
export class MoveBattleStyleWhereInput {
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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceListRelationFilter, {
    nullable: true
  })
  naturePreferences?: NatureBattleStylePreferenceListRelationFilter | undefined;
}
