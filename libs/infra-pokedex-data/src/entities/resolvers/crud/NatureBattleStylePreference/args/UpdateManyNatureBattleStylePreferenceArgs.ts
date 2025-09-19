import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureBattleStylePreferenceUpdateManyMutationInput } from "../../../inputs/NatureBattleStylePreferenceUpdateManyMutationInput";
import { NatureBattleStylePreferenceWhereInput } from "../../../inputs/NatureBattleStylePreferenceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNatureBattleStylePreferenceArgs {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceUpdateManyMutationInput, {
    nullable: false
  })
  data!: NatureBattleStylePreferenceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferenceWhereInput, {
    nullable: true
  })
  where?: NatureBattleStylePreferenceWhereInput | undefined;
}
