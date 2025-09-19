import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlagMapListRelationFilter } from "../inputs/ItemFlagMapListRelationFilter";
import { ItemFlagWhereInput } from "../inputs/ItemFlagWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemFlagWhereUniqueInput", {})
export class ItemFlagWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagWhereInput], {
    nullable: true
  })
  AND?: ItemFlagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagWhereInput], {
    nullable: true
  })
  OR?: ItemFlagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagWhereInput], {
    nullable: true
  })
  NOT?: ItemFlagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapListRelationFilter, {
    nullable: true
  })
  flagMap?: ItemFlagMapListRelationFilter | undefined;
}
