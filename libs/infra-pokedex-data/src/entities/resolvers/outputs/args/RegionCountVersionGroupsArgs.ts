import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupRegionWhereInput } from "../../inputs/VersionGroupRegionWhereInput";

@TypeGraphQL.ArgsType()
export class RegionCountVersionGroupsArgs {
  @TypeGraphQL.Field(_type => VersionGroupRegionWhereInput, {
    nullable: true
  })
  where?: VersionGroupRegionWhereInput | undefined;
}
