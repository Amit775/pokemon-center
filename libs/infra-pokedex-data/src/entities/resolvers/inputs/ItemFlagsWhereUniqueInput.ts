import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagMapListRelationFilter } from "../inputs/ItemFlagMapListRelationFilter";
import { ItemFlagsWhereInput } from "../inputs/ItemFlagsWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemFlagsWhereUniqueInput", {})
export class ItemFlagsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapListRelationFilter, {
    nullable: true
  })
  flagMap?: ItemFlagMapListRelationFilter | undefined;
}
