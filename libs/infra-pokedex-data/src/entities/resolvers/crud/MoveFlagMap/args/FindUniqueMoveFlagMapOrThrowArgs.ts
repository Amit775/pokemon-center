import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagMapWhereUniqueInput } from "../../../inputs/MoveFlagMapWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMoveFlagMapOrThrowArgs {
  @TypeGraphQL.Field(_type => MoveFlagMapWhereUniqueInput, {
    nullable: false
  })
  where!: MoveFlagMapWhereUniqueInput;
}
