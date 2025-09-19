import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureBattleStylePreferenceWhereInput } from "../../inputs/NatureBattleStylePreferenceWhereInput";

@TypeGraphQL.ArgsType()
export class MoveBattleStyleCountNaturePreferencesArgs {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceWhereInput, {
    nullable: true
  })
  where?: NatureBattleStylePreferenceWhereInput | undefined;
}
