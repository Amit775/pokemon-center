import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("VersionGroupRegionsScalarWhereInput", {})
export class VersionGroupRegionsScalarWhereInput {
  @TypeGraphQL.Field(_type => [VersionGroupRegionsScalarWhereInput], {
    nullable: true
  })
  AND?: VersionGroupRegionsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsScalarWhereInput], {
    nullable: true
  })
  OR?: VersionGroupRegionsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsScalarWhereInput], {
    nullable: true
  })
  NOT?: VersionGroupRegionsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_group_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  region_id?: IntFilter | undefined;
}
