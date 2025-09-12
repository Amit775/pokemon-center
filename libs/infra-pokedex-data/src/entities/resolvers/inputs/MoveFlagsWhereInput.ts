import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MoveFlagMapListRelationFilter } from "../inputs/MoveFlagMapListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MoveFlagsWhereInput", {})
export class MoveFlagsWhereInput {
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
