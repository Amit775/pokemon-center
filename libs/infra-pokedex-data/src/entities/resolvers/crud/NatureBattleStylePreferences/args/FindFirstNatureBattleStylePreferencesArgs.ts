import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureBattleStylePreferencesOrderByWithRelationInput } from "../../../inputs/NatureBattleStylePreferencesOrderByWithRelationInput";
import { NatureBattleStylePreferencesWhereInput } from "../../../inputs/NatureBattleStylePreferencesWhereInput";
import { NatureBattleStylePreferencesWhereUniqueInput } from "../../../inputs/NatureBattleStylePreferencesWhereUniqueInput";
import { NatureBattleStylePreferencesScalarFieldEnum } from "../../../../enums/NatureBattleStylePreferencesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstNatureBattleStylePreferencesArgs {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesWhereInput, {
    nullable: true
  })
  where?: NatureBattleStylePreferencesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: NatureBattleStylePreferencesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesWhereUniqueInput, {
    nullable: true
  })
  cursor?: NatureBattleStylePreferencesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [NatureBattleStylePreferencesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"nature_id" | "move_battle_style_id" | "low_hp_preference" | "high_hp_preference"> | undefined;
}
