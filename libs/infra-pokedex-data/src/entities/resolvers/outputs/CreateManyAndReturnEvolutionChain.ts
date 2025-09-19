import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnEvolutionChainBabyTriggerItemArgs } from "./args/CreateManyAndReturnEvolutionChainBabyTriggerItemArgs";
import { Item } from "../../models/Item";

@TypeGraphQL.ObjectType("CreateManyAndReturnEvolutionChain", {})
export class CreateManyAndReturnEvolutionChain {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  baby_trigger_item_id!: number | null;

  babyTriggerItem!: Item | null;

  @TypeGraphQL.Field(_type => Item, {
    name: "babyTriggerItem",
    nullable: true
  })
  getBabyTriggerItem(@TypeGraphQL.Root() root: CreateManyAndReturnEvolutionChain, @TypeGraphQL.Args() args: CreateManyAndReturnEvolutionChainBabyTriggerItemArgs): Item | null {
    return root.babyTriggerItem;
  }
}
