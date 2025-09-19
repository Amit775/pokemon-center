import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("VersionScalarWhereInput", {})
export class VersionScalarWhereInput {
  @TypeGraphQL.Field(_type => [VersionScalarWhereInput], {
    nullable: true
  })
  AND?: VersionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionScalarWhereInput], {
    nullable: true
  })
  OR?: VersionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionScalarWhereInput], {
    nullable: true
  })
  NOT?: VersionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_group_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;
}
