import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("NatureBattleStylePreferencesScalarWhereInput", {})
export class NatureBattleStylePreferencesScalarWhereInput {
  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesScalarWhereInput], {
    nullable: true
  })
  AND?: NatureBattleStylePreferencesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesScalarWhereInput], {
    nullable: true
  })
  OR?: NatureBattleStylePreferencesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesScalarWhereInput], {
    nullable: true
  })
  NOT?: NatureBattleStylePreferencesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  nature_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  move_battle_style_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  low_hp_preference?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  high_hp_preference?: IntFilter | undefined;
}
