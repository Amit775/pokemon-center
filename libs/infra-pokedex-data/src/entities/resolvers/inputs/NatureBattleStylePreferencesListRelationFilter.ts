import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferencesWhereInput } from "../inputs/NatureBattleStylePreferencesWhereInput";

@TypeGraphQL.InputType("NatureBattleStylePreferencesListRelationFilter", {})
export class NatureBattleStylePreferencesListRelationFilter {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesWhereInput, {
    nullable: true
  })
  every?: NatureBattleStylePreferencesWhereInput | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesWhereInput, {
    nullable: true
  })
  some?: NatureBattleStylePreferencesWhereInput | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesWhereInput, {
    nullable: true
  })
  none?: NatureBattleStylePreferencesWhereInput | undefined;
}
