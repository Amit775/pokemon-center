import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestTypesCreateInput } from "../../../inputs/ContestTypesCreateInput";
import { ContestTypesUpdateInput } from "../../../inputs/ContestTypesUpdateInput";
import { ContestTypesWhereUniqueInput } from "../../../inputs/ContestTypesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneContestTypesArgs {
  @TypeGraphQL.Field(_type => ContestTypesWhereUniqueInput, {
    nullable: false
  })
  where!: ContestTypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestTypesCreateInput, {
    nullable: false
  })
  create!: ContestTypesCreateInput;

  @TypeGraphQL.Field(_type => ContestTypesUpdateInput, {
    nullable: false
  })
  update!: ContestTypesUpdateInput;
}
