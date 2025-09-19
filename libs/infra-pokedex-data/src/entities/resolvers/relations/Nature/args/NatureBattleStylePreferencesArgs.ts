import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureBattleStylePreferenceOrderByWithRelationInput } from "../../../inputs/NatureBattleStylePreferenceOrderByWithRelationInput";
import { NatureBattleStylePreferenceWhereInput } from "../../../inputs/NatureBattleStylePreferenceWhereInput";
import { NatureBattleStylePreferenceWhereUniqueInput } from "../../../inputs/NatureBattleStylePreferenceWhereUniqueInput";
import { NatureBattleStylePreferenceScalarFieldEnum } from "../../../../enums/NatureBattleStylePreferenceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class NatureBattleStylePreferencesArgs {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceWhereInput, {
    nullable: true
  })
  where?: NatureBattleStylePreferenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: NatureBattleStylePreferenceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceWhereUniqueInput, {
    nullable: true
  })
  cursor?: NatureBattleStylePreferenceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferenceScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"nature_id" | "move_battle_style_id" | "low_hp_preference" | "high_hp_preference"> | undefined;
}
