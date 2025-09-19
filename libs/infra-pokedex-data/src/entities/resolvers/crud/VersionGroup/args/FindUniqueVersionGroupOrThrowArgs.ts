import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupWhereUniqueInput } from "../../../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueVersionGroupOrThrowArgs {
  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupWhereUniqueInput;
}
