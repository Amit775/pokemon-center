import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionGroupRegionsOrderByWithRelationInput } from "../../../inputs/VersionGroupRegionsOrderByWithRelationInput";
import { VersionGroupRegionsWhereInput } from "../../../inputs/VersionGroupRegionsWhereInput";
import { VersionGroupRegionsWhereUniqueInput } from "../../../inputs/VersionGroupRegionsWhereUniqueInput";
import { VersionGroupRegionsScalarFieldEnum } from "../../../../enums/VersionGroupRegionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class RegionsVersionGroupsArgs {
  @TypeGraphQL.Field(_type => VersionGroupRegionsWhereInput, {
    nullable: true
  })
  where?: VersionGroupRegionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VersionGroupRegionsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: VersionGroupRegionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"version_group_id" | "region_id"> | undefined;
}
