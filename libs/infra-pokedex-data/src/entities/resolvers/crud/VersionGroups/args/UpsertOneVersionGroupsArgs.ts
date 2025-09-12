import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupsCreateInput } from "../../../inputs/VersionGroupsCreateInput";
import { VersionGroupsUpdateInput } from "../../../inputs/VersionGroupsUpdateInput";
import { VersionGroupsWhereUniqueInput } from "../../../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneVersionGroupsArgs {
  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupsCreateInput, {
    nullable: false
  })
  create!: VersionGroupsCreateInput;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateInput, {
    nullable: false
  })
  update!: VersionGroupsUpdateInput;
}
