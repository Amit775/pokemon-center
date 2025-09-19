import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureBattleStylePreferenceCreateInput } from "../../../inputs/NatureBattleStylePreferenceCreateInput";
import { NatureBattleStylePreferenceUpdateInput } from "../../../inputs/NatureBattleStylePreferenceUpdateInput";
import { NatureBattleStylePreferenceWhereUniqueInput } from "../../../inputs/NatureBattleStylePreferenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneNatureBattleStylePreferenceArgs {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceWhereUniqueInput, {
    nullable: false
  })
  where!: NatureBattleStylePreferenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceCreateInput, {
    nullable: false
  })
  create!: NatureBattleStylePreferenceCreateInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceUpdateInput, {
    nullable: false
  })
  update!: NatureBattleStylePreferenceUpdateInput;
}
