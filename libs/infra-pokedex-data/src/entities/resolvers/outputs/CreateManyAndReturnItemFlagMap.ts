import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Item } from "../../models/Item";
import { ItemFlag } from "../../models/ItemFlag";

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

  @TypeGraphQL.Field(_type => Item, {
    nullable: false
  })
  item!: Item;

  @TypeGraphQL.Field(_type => ItemFlag, {
    nullable: false
  })
  flag!: ItemFlag;
}
