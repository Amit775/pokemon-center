import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupsWhereUniqueInput } from "../../../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueVersionGroupsOrThrowArgs {
  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupsWhereUniqueInput;
}
