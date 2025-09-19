import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagMapListRelationFilter } from "../inputs/MoveFlagMapListRelationFilter";
import { MoveFlagWhereInput } from "../inputs/MoveFlagWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MoveFlagWhereUniqueInput", {})
export class MoveFlagWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagWhereInput], {
    nullable: true
  })
  AND?: MoveFlagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagWhereInput], {
    nullable: true
  })
  OR?: MoveFlagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagWhereInput], {
    nullable: true
  })
  NOT?: MoveFlagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapListRelationFilter, {
    nullable: true
  })
  flagMap?: MoveFlagMapListRelationFilter | undefined;
}
