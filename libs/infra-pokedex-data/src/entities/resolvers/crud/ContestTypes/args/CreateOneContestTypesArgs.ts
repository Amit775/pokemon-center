import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestTypesCreateInput } from "../../../inputs/ContestTypesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneContestTypesArgs {
  @TypeGraphQL.Field(_type => ContestTypesCreateInput, {
    nullable: false
  })
  data!: ContestTypesCreateInput;
}
