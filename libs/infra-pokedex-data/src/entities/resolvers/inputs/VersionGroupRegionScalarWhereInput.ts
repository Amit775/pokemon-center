import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("VersionGroupRegionScalarWhereInput", {})
export class VersionGroupRegionScalarWhereInput {
  @TypeGraphQL.Field(_type => [VersionGroupRegionScalarWhereInput], {
    nullable: true
  })
  AND?: VersionGroupRegionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionScalarWhereInput], {
    nullable: true
  })
  OR?: VersionGroupRegionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionScalarWhereInput], {
    nullable: true
  })
  NOT?: VersionGroupRegionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_group_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  region_id?: IntFilter | undefined;
}
