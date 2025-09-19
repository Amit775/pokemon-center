import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestTypeWhereUniqueInput } from "../../../inputs/ContestTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueContestTypeOrThrowArgs {
  @TypeGraphQL.Field(_type => ContestTypeWhereUniqueInput, {
    nullable: false
  })
  where!: ContestTypeWhereUniqueInput;
}
