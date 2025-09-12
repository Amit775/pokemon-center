import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestEffectsUpdateManyMutationInput } from "../../../inputs/ContestEffectsUpdateManyMutationInput";
import { ContestEffectsWhereInput } from "../../../inputs/ContestEffectsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyContestEffectsArgs {
  @TypeGraphQL.Field(_type => ContestEffectsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ContestEffectsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ContestEffectsWhereInput, {
    nullable: true
  })
  where?: ContestEffectsWhereInput | undefined;
}
