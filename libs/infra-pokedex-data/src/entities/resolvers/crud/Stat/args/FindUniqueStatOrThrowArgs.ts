import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatWhereUniqueInput } from "../../../inputs/StatWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueStatOrThrowArgs {
  @TypeGraphQL.Field(_type => StatWhereUniqueInput, {
    nullable: false
  })
  where!: StatWhereUniqueInput;
}
