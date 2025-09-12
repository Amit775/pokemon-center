import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupsUpdateInput } from "../../../inputs/VersionGroupsUpdateInput";
import { VersionGroupsWhereUniqueInput } from "../../../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneVersionGroupsArgs {
  @TypeGraphQL.Field(_type => VersionGroupsUpdateInput, {
    nullable: false
  })
  data!: VersionGroupsUpdateInput;

  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupsWhereUniqueInput;
}
