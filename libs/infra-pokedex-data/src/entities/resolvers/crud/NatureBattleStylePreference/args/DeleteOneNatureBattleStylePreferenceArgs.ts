import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureBattleStylePreferenceWhereUniqueInput } from "../../../inputs/NatureBattleStylePreferenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneNatureBattleStylePreferenceArgs {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceWhereUniqueInput, {
    nullable: false
  })
  where!: NatureBattleStylePreferenceWhereUniqueInput;
}
