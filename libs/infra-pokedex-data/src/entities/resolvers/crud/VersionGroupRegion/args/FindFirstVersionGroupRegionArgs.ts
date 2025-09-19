import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupRegionOrderByWithRelationInput } from "../../../inputs/VersionGroupRegionOrderByWithRelationInput";
import { VersionGroupRegionWhereInput } from "../../../inputs/VersionGroupRegionWhereInput";
import { VersionGroupRegionWhereUniqueInput } from "../../../inputs/VersionGroupRegionWhereUniqueInput";
import { VersionGroupRegionScalarFieldEnum } from "../../../../enums/VersionGroupRegionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstVersionGroupRegionArgs {
  @TypeGraphQL.Field(_type => VersionGroupRegionWhereInput, {
    nullable: true
  })
  where?: VersionGroupRegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VersionGroupRegionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionWhereUniqueInput, {
    nullable: true
  })
  cursor?: VersionGroupRegionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"version_group_id" | "region_id"> | undefined;
}
