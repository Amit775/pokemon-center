import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureBattleStylePreferencesUpdateInput } from "../../../inputs/NatureBattleStylePreferencesUpdateInput";
import { NatureBattleStylePreferencesWhereUniqueInput } from "../../../inputs/NatureBattleStylePreferencesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneNatureBattleStylePreferencesArgs {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesUpdateInput, {
    nullable: false
  })
  data!: NatureBattleStylePreferencesUpdateInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesWhereUniqueInput, {
    nullable: false
  })
  where!: NatureBattleStylePreferencesWhereUniqueInput;
}
