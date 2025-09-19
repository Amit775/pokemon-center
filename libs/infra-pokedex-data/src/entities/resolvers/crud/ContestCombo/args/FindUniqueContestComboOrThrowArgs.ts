import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContestComboWhereUniqueInput } from "../../../inputs/ContestComboWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueContestComboOrThrowArgs {
  @TypeGraphQL.Field(_type => ContestComboWhereUniqueInput, {
    nullable: false
  })
  where!: ContestComboWhereUniqueInput;
}
