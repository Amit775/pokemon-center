import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Generations } from "../../models/Generations";
import { Items } from "../../models/Items";

@TypeGraphQL.ObjectType("CreateManyAndReturnItemGameIndices", {})
export class CreateManyAndReturnItemGameIndices {
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

  @TypeGraphQL.Field(_type => Items, {
    nullable: false
  })
  item!: Items;

  @TypeGraphQL.Field(_type => Generations, {
    nullable: false
  })
  generation!: Generations;
}
