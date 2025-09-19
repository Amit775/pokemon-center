import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestTypeCreateInput } from "../../../inputs/ContestTypeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneContestTypeArgs {
  @TypeGraphQL.Field(_type => ContestTypeCreateInput, {
    nullable: false
  })
  data!: ContestTypeCreateInput;
}
