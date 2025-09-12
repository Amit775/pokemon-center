import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureBattleStylePreferencesCreateInput } from "../../../inputs/NatureBattleStylePreferencesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneNatureBattleStylePreferencesArgs {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesCreateInput, {
    nullable: false
  })
  data!: NatureBattleStylePreferencesCreateInput;
}
