import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestTypeUpdateInput } from "../../../inputs/ContestTypeUpdateInput";
import { ContestTypeWhereUniqueInput } from "../../../inputs/ContestTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneContestTypeArgs {
  @TypeGraphQL.Field(_type => ContestTypeUpdateInput, {
    nullable: false
  })
  data!: ContestTypeUpdateInput;

  @TypeGraphQL.Field(_type => ContestTypeWhereUniqueInput, {
    nullable: false
  })
  where!: ContestTypeWhereUniqueInput;
}
