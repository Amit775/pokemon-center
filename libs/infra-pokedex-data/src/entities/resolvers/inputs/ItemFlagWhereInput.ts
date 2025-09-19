import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ItemFlagMapListRelationFilter } from "../inputs/ItemFlagMapListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemFlagWhereInput", {})
export class ItemFlagWhereInput {
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
