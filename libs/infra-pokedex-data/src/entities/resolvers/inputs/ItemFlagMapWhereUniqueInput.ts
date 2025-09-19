import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ItemFlagMapWhereInput } from "../inputs/ItemFlagMapWhereInput";
import { ItemFlagRelationFilter } from "../inputs/ItemFlagRelationFilter";
import { ItemRelationFilter } from "../inputs/ItemRelationFilter";

@TypeGraphQL.InputType("ItemFlagMapWhereUniqueInput", {})
export class ItemFlagMapWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  item_id?: number | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapWhereInput], {
    nullable: true
  })
  AND?: ItemFlagMapWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapWhereInput], {
    nullable: true
  })
  OR?: ItemFlagMapWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapWhereInput], {
    nullable: true
  })
  NOT?: ItemFlagMapWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  item_flag_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ItemRelationFilter, {
    nullable: true
  })
  item?: ItemRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ItemFlagRelationFilter, {
    nullable: true
  })
  flag?: ItemFlagRelationFilter | undefined;
}
