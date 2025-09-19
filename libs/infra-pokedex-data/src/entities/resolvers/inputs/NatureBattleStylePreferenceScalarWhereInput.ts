import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("NatureBattleStylePreferenceScalarWhereInput", {})
export class NatureBattleStylePreferenceScalarWhereInput {
  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceScalarWhereInput], {
    nullable: true
  })
  AND?: NatureBattleStylePreferenceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceScalarWhereInput], {
    nullable: true
  })
  OR?: NatureBattleStylePreferenceScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceScalarWhereInput], {
    nullable: true
  })
  NOT?: NatureBattleStylePreferenceScalarWhereInput[] | undefined;

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
