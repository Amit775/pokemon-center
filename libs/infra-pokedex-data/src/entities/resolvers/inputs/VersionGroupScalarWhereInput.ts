import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("VersionGroupScalarWhereInput", {})
export class VersionGroupScalarWhereInput {
  @TypeGraphQL.Field(_type => [VersionGroupScalarWhereInput], {
    nullable: true
  })
  AND?: VersionGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupScalarWhereInput], {
    nullable: true
  })
  OR?: VersionGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupScalarWhereInput], {
    nullable: true
  })
  NOT?: VersionGroupScalarWhereInput[] | undefined;

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
