import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupRegionCreateInput } from "../../../inputs/VersionGroupRegionCreateInput";
import { VersionGroupRegionUpdateInput } from "../../../inputs/VersionGroupRegionUpdateInput";
import { VersionGroupRegionWhereUniqueInput } from "../../../inputs/VersionGroupRegionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneVersionGroupRegionArgs {
  @TypeGraphQL.Field(_type => VersionGroupRegionWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupRegionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionCreateInput, {
    nullable: false
  })
  create!: VersionGroupRegionCreateInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionUpdateInput, {
    nullable: false
  })
  update!: VersionGroupRegionUpdateInput;
}
