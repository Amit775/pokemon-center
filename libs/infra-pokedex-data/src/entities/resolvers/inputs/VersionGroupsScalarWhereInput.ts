import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("VersionGroupsScalarWhereInput", {})
export class VersionGroupsScalarWhereInput {
  @TypeGraphQL.Field(_type => [VersionGroupsScalarWhereInput], {
    nullable: true
  })
  AND?: VersionGroupsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsScalarWhereInput], {
    nullable: true
  })
  OR?: VersionGroupsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsScalarWhereInput], {
    nullable: true
  })
  NOT?: VersionGroupsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  generation_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  order?: IntFilter | undefined;
}
