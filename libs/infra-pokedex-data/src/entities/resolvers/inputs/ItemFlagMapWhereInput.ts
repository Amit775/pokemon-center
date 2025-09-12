import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ItemFlagsRelationFilter } from "../inputs/ItemFlagsRelationFilter";
import { ItemsRelationFilter } from "../inputs/ItemsRelationFilter";

@TypeGraphQL.InputType("ItemFlagMapWhereInput", {})
export class ItemFlagMapWhereInput {
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
  item_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  item_flag_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ItemsRelationFilter, {
    nullable: true
  })
  item?: ItemsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ItemFlagsRelationFilter, {
    nullable: true
  })
  flag?: ItemFlagsRelationFilter | undefined;
}
