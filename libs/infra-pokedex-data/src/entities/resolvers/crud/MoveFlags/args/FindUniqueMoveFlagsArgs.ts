import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagsWhereUniqueInput } from "../../../inputs/MoveFlagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMoveFlagsArgs {
  @TypeGraphQL.Field(_type => MoveFlagsWhereUniqueInput, {
    nullable: false
  })
  where!: MoveFlagsWhereUniqueInput;
}
