import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureBattleStylePreferencesWhereUniqueInput } from "../../../inputs/NatureBattleStylePreferencesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueNatureBattleStylePreferencesArgs {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesWhereUniqueInput, {
    nullable: false
  })
  where!: NatureBattleStylePreferencesWhereUniqueInput;
}
