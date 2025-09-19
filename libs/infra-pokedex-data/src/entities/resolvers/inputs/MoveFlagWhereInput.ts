import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MoveFlagMapListRelationFilter } from "../inputs/MoveFlagMapListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MoveFlagWhereInput", {})
export class MoveFlagWhereInput {
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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapListRelationFilter, {
    nullable: true
  })
  flagMap?: MoveFlagMapListRelationFilter | undefined;
}
