import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestComboUpdateInput } from "../../../inputs/ContestComboUpdateInput";
import { ContestComboWhereUniqueInput } from "../../../inputs/ContestComboWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneContestComboArgs {
  @TypeGraphQL.Field(_type => ContestComboUpdateInput, {
    nullable: false
  })
  data!: ContestComboUpdateInput;

  @TypeGraphQL.Field(_type => ContestComboWhereUniqueInput, {
    nullable: false
  })
  where!: ContestComboWhereUniqueInput;
}
