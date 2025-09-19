import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureBattleStylePreferenceUpdateInput } from "../../../inputs/NatureBattleStylePreferenceUpdateInput";
import { NatureBattleStylePreferenceWhereUniqueInput } from "../../../inputs/NatureBattleStylePreferenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneNatureBattleStylePreferenceArgs {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceUpdateInput, {
    nullable: false
  })
  data!: NatureBattleStylePreferenceUpdateInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceWhereUniqueInput, {
    nullable: false
  })
  where!: NatureBattleStylePreferenceWhereUniqueInput;
}
