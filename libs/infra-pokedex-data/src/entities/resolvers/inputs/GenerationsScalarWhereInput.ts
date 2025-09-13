import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GenerationsScalarWhereInput", {})
export class GenerationsScalarWhereInput {
  @TypeGraphQL.Field(_type => [GenerationsScalarWhereInput], {
    nullable: true
  })
  AND?: GenerationsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationsScalarWhereInput], {
    nullable: true
  })
  OR?: GenerationsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenerationsScalarWhereInput], {
    nullable: true
  })
  NOT?: GenerationsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  main_region_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;
}
