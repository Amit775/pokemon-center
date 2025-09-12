import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ItemFlagMapListRelationFilter } from "../inputs/ItemFlagMapListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemFlagsWhereInput", {})
export class ItemFlagsWhereInput {
  @TypeGraphQL.Field(_type => [ItemFlagsWhereInput], {
    nullable: true
  })
  AND?: ItemFlagsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagsWhereInput], {
    nullable: true
  })
  OR?: ItemFlagsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagsWhereInput], {
    nullable: true
  })
  NOT?: ItemFlagsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapListRelationFilter, {
    nullable: true
  })
  flagMap?: ItemFlagMapListRelationFilter | undefined;
}
