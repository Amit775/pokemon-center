import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestComboUpdateManyMutationInput } from "../../../inputs/ContestComboUpdateManyMutationInput";
import { ContestComboWhereInput } from "../../../inputs/ContestComboWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyContestComboArgs {
  @TypeGraphQL.Field(_type => ContestComboUpdateManyMutationInput, {
    nullable: false
  })
  data!: ContestComboUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ContestComboWhereInput, {
    nullable: true
  })
  where?: ContestComboWhereInput | undefined;
}
