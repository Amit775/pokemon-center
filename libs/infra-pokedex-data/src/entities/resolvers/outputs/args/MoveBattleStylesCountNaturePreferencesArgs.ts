import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureBattleStylePreferencesWhereInput } from "../../inputs/NatureBattleStylePreferencesWhereInput";

@TypeGraphQL.ArgsType()
export class MoveBattleStylesCountNaturePreferencesArgs {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesWhereInput, {
    nullable: true
  })
  where?: NatureBattleStylePreferencesWhereInput | undefined;
}
