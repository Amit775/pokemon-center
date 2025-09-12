import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestEffectsUpdateInput } from "../../../inputs/ContestEffectsUpdateInput";
import { ContestEffectsWhereUniqueInput } from "../../../inputs/ContestEffectsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneContestEffectsArgs {
  @TypeGraphQL.Field(_type => ContestEffectsUpdateInput, {
    nullable: false
  })
  data!: ContestEffectsUpdateInput;

  @TypeGraphQL.Field(_type => ContestEffectsWhereUniqueInput, {
    nullable: false
  })
  where!: ContestEffectsWhereUniqueInput;
}
