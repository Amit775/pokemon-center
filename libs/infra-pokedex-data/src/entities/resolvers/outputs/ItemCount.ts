import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCountBabyTriggerItemsArgs } from "./args/ItemCountBabyTriggerItemsArgs";
import { ItemCountBerriesArgs } from "./args/ItemCountBerriesArgs";
import { ItemCountFlagMapArgs } from "./args/ItemCountFlagMapArgs";
import { ItemCountGameIndicesArgs } from "./args/ItemCountGameIndicesArgs";
import { ItemCountHeldItemsArgs } from "./args/ItemCountHeldItemsArgs";
import { ItemCountMachinesArgs } from "./args/ItemCountMachinesArgs";
import { ItemCountPokemonItemsArgs } from "./args/ItemCountPokemonItemsArgs";
import { ItemCountTriggerItemsArgs } from "./args/ItemCountTriggerItemsArgs";

@TypeGraphQL.ObjectType("ItemCount", {})
export class ItemCount {
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
  getPokemonItems(@TypeGraphQL.Root() root: ItemCount, @TypeGraphQL.Args() args: ItemCountPokemonItemsArgs): number {
    return root.pokemonItems;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "machines",
    nullable: false
  })
  getMachines(@TypeGraphQL.Root() root: ItemCount, @TypeGraphQL.Args() args: ItemCountMachinesArgs): number {
    return root.machines;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "berries",
    nullable: false
  })
  getBerries(@TypeGraphQL.Root() root: ItemCount, @TypeGraphQL.Args() args: ItemCountBerriesArgs): number {
    return root.berries;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "gameIndices",
    nullable: false
  })
  getGameIndices(@TypeGraphQL.Root() root: ItemCount, @TypeGraphQL.Args() args: ItemCountGameIndicesArgs): number {
    return root.gameIndices;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "flagMap",
    nullable: false
  })
  getFlagMap(@TypeGraphQL.Root() root: ItemCount, @TypeGraphQL.Args() args: ItemCountFlagMapArgs): number {
    return root.flagMap;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "babyTriggerItems",
    nullable: false
  })
  getBabyTriggerItems(@TypeGraphQL.Root() root: ItemCount, @TypeGraphQL.Args() args: ItemCountBabyTriggerItemsArgs): number {
    return root.babyTriggerItems;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "triggerItems",
    nullable: false
  })
  getTriggerItems(@TypeGraphQL.Root() root: ItemCount, @TypeGraphQL.Args() args: ItemCountTriggerItemsArgs): number {
    return root.triggerItems;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "heldItems",
    nullable: false
  })
  getHeldItems(@TypeGraphQL.Root() root: ItemCount, @TypeGraphQL.Args() args: ItemCountHeldItemsArgs): number {
    return root.heldItems;
  }
}
