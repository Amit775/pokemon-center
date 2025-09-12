import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnEvolutionChainsBabyTriggerItemArgs } from "./args/CreateManyAndReturnEvolutionChainsBabyTriggerItemArgs";
import { Items } from "../../models/Items";

@TypeGraphQL.ObjectType("CreateManyAndReturnEvolutionChains", {})
export class CreateManyAndReturnEvolutionChains {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  baby_trigger_item_id!: number | null;

  babyTriggerItem!: Items | null;

  @TypeGraphQL.Field(_type => Items, {
    name: "babyTriggerItem",
    nullable: true
  })
  getBabyTriggerItem(@TypeGraphQL.Root() root: CreateManyAndReturnEvolutionChains, @TypeGraphQL.Args() args: CreateManyAndReturnEvolutionChainsBabyTriggerItemArgs): Items | null {
    return root.babyTriggerItem;
  }
}
