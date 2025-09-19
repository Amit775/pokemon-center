import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureBattleStylePreferenceWhereInput } from "../inputs/NatureBattleStylePreferenceWhereInput";

@TypeGraphQL.InputType("NatureBattleStylePreferenceListRelationFilter", {})
export class NatureBattleStylePreferenceListRelationFilter {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceWhereInput, {
    nullable: true
  })
  every?: NatureBattleStylePreferenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceWhereInput, {
    nullable: true
  })
  some?: NatureBattleStylePreferenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceWhereInput, {
    nullable: true
  })
  none?: NatureBattleStylePreferenceWhereInput | undefined;
}
