import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestComboCreateInput } from "../../../inputs/ContestComboCreateInput";
import { ContestComboUpdateInput } from "../../../inputs/ContestComboUpdateInput";
import { ContestComboWhereUniqueInput } from "../../../inputs/ContestComboWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneContestComboArgs {
  @TypeGraphQL.Field(_type => ContestComboWhereUniqueInput, {
    nullable: false
  })
  where!: ContestComboWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestComboCreateInput, {
    nullable: false
  })
  create!: ContestComboCreateInput;

  @TypeGraphQL.Field(_type => ContestComboUpdateInput, {
    nullable: false
  })
  update!: ContestComboUpdateInput;
}
