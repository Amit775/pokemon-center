import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureBattleStylePreferencesUpdateManyMutationInput } from "../../../inputs/NatureBattleStylePreferencesUpdateManyMutationInput";
import { NatureBattleStylePreferencesWhereInput } from "../../../inputs/NatureBattleStylePreferencesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNatureBattleStylePreferencesArgs {
  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesUpdateManyMutationInput, {
    nullable: false
  })
  data!: NatureBattleStylePreferencesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesWhereInput, {
    nullable: true
  })
  where?: NatureBattleStylePreferencesWhereInput | undefined;
}
