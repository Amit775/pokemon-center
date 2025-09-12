import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupRegionsCreateInput } from "../../../inputs/VersionGroupRegionsCreateInput";
import { VersionGroupRegionsUpdateInput } from "../../../inputs/VersionGroupRegionsUpdateInput";
import { VersionGroupRegionsWhereUniqueInput } from "../../../inputs/VersionGroupRegionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneVersionGroupRegionsArgs {
  @TypeGraphQL.Field(_type => VersionGroupRegionsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupRegionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionsCreateInput, {
    nullable: false
  })
  create!: VersionGroupRegionsCreateInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionsUpdateInput, {
    nullable: false
  })
  update!: VersionGroupRegionsUpdateInput;
}
