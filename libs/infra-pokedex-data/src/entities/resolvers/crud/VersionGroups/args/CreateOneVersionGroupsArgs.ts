import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupsCreateInput } from "../../../inputs/VersionGroupsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneVersionGroupsArgs {
  @TypeGraphQL.Field(_type => VersionGroupsCreateInput, {
    nullable: false
  })
  data!: VersionGroupsCreateInput;
}
