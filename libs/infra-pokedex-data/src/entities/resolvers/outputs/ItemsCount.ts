import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCountBabyTriggerItemsArgs } from "./args/ItemsCountBabyTriggerItemsArgs";
import { ItemsCountBerriesArgs } from "./args/ItemsCountBerriesArgs";
import { ItemsCountFlagMapArgs } from "./args/ItemsCountFlagMapArgs";
import { ItemsCountGameIndicesArgs } from "./args/ItemsCountGameIndicesArgs";
import { ItemsCountHeldItemsArgs } from "./args/ItemsCountHeldItemsArgs";
import { ItemsCountMachinesArgs } from "./args/ItemsCountMachinesArgs";
import { ItemsCountPokemonItemsArgs } from "./args/ItemsCountPokemonItemsArgs";
import { ItemsCountTriggerItemsArgs } from "./args/ItemsCountTriggerItemsArgs";

@TypeGraphQL.ObjectType("ItemsCount", {})
export class ItemsCount {
  pokemonItems!: number;
  machines!: number;
  berries!: number;
  gameIndices!: number;
  flagMap!: number;
  babyTriggerItems!: number;
  triggerItems!: number;
  heldItems!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokemonItems",
    nullable: false
  })
  getPokemonItems(@TypeGraphQL.Root() root: ItemsCount, @TypeGraphQL.Args() args: ItemsCountPokemonItemsArgs): number {
    return root.pokemonItems;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "machines",
    nullable: false
  })
  getMachines(@TypeGraphQL.Root() root: ItemsCount, @TypeGraphQL.Args() args: ItemsCountMachinesArgs): number {
    return root.machines;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "berries",
    nullable: false
  })
  getBerries(@TypeGraphQL.Root() root: ItemsCount, @TypeGraphQL.Args() args: ItemsCountBerriesArgs): number {
    return root.berries;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "gameIndices",
    nullable: false
  })
  getGameIndices(@TypeGraphQL.Root() root: ItemsCount, @TypeGraphQL.Args() args: ItemsCountGameIndicesArgs): number {
    return root.gameIndices;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "flagMap",
    nullable: false
  })
  getFlagMap(@TypeGraphQL.Root() root: ItemsCount, @TypeGraphQL.Args() args: ItemsCountFlagMapArgs): number {
    return root.flagMap;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "babyTriggerItems",
    nullable: false
  })
  getBabyTriggerItems(@TypeGraphQL.Root() root: ItemsCount, @TypeGraphQL.Args() args: ItemsCountBabyTriggerItemsArgs): number {
    return root.babyTriggerItems;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "triggerItems",
    nullable: false
  })
  getTriggerItems(@TypeGraphQL.Root() root: ItemsCount, @TypeGraphQL.Args() args: ItemsCountTriggerItemsArgs): number {
    return root.triggerItems;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "heldItems",
    nullable: false
  })
  getHeldItems(@TypeGraphQL.Root() root: ItemsCount, @TypeGraphQL.Args() args: ItemsCountHeldItemsArgs): number {
    return root.heldItems;
  }
}
