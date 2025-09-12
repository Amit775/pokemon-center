import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("VersionsScalarWhereInput", {})
export class VersionsScalarWhereInput {
  @TypeGraphQL.Field(_type => [VersionsScalarWhereInput], {
    nullable: true
  })
  AND?: VersionsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionsScalarWhereInput], {
    nullable: true
  })
  OR?: VersionsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionsScalarWhereInput], {
    nullable: true
  })
  NOT?: VersionsScalarWhereInput[] | undefined;

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
