import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveFlagWhereUniqueInput } from "../../../inputs/MoveFlagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMoveFlagOrThrowArgs {
  @TypeGraphQL.Field(_type => MoveFlagWhereUniqueInput, {
    nullable: false
  })
  where!: MoveFlagWhereUniqueInput;
}
