import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Generation } from "../../models/Generation";
import { Item } from "../../models/Item";

@TypeGraphQL.ObjectType("CreateManyAndReturnItemGameIndex", {})
export class CreateManyAndReturnItemGameIndex {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  item_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  generation_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  game_index!: number;

  @TypeGraphQL.Field(_type => Item, {
    nullable: false
  })
  item!: Item;

  @TypeGraphQL.Field(_type => Generation, {
    nullable: false
  })
  generation!: Generation;
}
