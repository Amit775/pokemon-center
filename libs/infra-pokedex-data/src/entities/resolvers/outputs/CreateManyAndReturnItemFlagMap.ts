import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemFlags } from "../../models/ItemFlags";
import { Items } from "../../models/Items";

@TypeGraphQL.ObjectType("CreateManyAndReturnItemFlagMap", {})
export class CreateManyAndReturnItemFlagMap {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  item_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  item_flag_id!: number;

  @TypeGraphQL.Field(_type => Items, {
    nullable: false
  })
  item!: Items;

  @TypeGraphQL.Field(_type => ItemFlags, {
    nullable: false
  })
  flag!: ItemFlags;
}
