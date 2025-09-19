import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureBattleStylePreferenceCreateInput } from "../../../inputs/NatureBattleStylePreferenceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneNatureBattleStylePreferenceArgs {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceCreateInput, {
    nullable: false
  })
  data!: NatureBattleStylePreferenceCreateInput;
}
