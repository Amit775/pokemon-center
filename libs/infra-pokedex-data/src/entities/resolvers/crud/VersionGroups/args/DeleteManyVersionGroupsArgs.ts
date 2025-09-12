import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupsWhereInput } from "../../../inputs/VersionGroupsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyVersionGroupsArgs {
  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  where?: VersionGroupsWhereInput | undefined;
}
