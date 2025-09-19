import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestTypeCreateInput } from "../../../inputs/ContestTypeCreateInput";
import { ContestTypeUpdateInput } from "../../../inputs/ContestTypeUpdateInput";
import { ContestTypeWhereUniqueInput } from "../../../inputs/ContestTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneContestTypeArgs {
  @TypeGraphQL.Field(_type => ContestTypeWhereUniqueInput, {
    nullable: false
  })
  where!: ContestTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestTypeCreateInput, {
    nullable: false
  })
  create!: ContestTypeCreateInput;

  @TypeGraphQL.Field(_type => ContestTypeUpdateInput, {
    nullable: false
  })
  update!: ContestTypeUpdateInput;
}
