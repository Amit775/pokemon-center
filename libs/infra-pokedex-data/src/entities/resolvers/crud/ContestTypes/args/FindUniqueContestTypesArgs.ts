import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestTypesWhereUniqueInput } from "../../../inputs/ContestTypesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueContestTypesArgs {
  @TypeGraphQL.Field(_type => ContestTypesWhereUniqueInput, {
    nullable: false
  })
  where!: ContestTypesWhereUniqueInput;
}
