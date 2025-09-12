import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureBattleStylePreferencesCreateInput } from "../../../inputs/NatureBattleStylePreferencesCreateInput";
import { NatureBattleStylePreferencesUpdateInput } from "../../../inputs/NatureBattleStylePreferencesUpdateInput";
import { NatureBattleStylePreferencesWhereUniqueInput } from "../../../inputs/NatureBattleStylePreferencesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneNatureBattleStylePreferencesArgs {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesWhereUniqueInput, {
    nullable: false
  })
  where!: NatureBattleStylePreferencesWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesCreateInput, {
    nullable: false
  })
  create!: NatureBattleStylePreferencesCreateInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesUpdateInput, {
    nullable: false
  })
  update!: NatureBattleStylePreferencesUpdateInput;
}
