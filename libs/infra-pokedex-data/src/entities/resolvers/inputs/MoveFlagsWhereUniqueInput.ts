import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagMapListRelationFilter } from "../inputs/MoveFlagMapListRelationFilter";
import { MoveFlagsWhereInput } from "../inputs/MoveFlagsWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MoveFlagsWhereUniqueInput", {})
export class MoveFlagsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagsWhereInput], {
    nullable: true
  })
  AND?: MoveFlagsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagsWhereInput], {
    nullable: true
  })
  OR?: MoveFlagsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagsWhereInput], {
    nullable: true
  })
  NOT?: MoveFlagsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapListRelationFilter, {
    nullable: true
  })
  flagMap?: MoveFlagMapListRelationFilter | undefined;
}
