import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Berry } from "../../../models/Berry";
import { EvolutionChain } from "../../../models/EvolutionChain";
import { Item } from "../../../models/Item";
import { ItemCategory } from "../../../models/ItemCategory";
import { ItemFlagMap } from "../../../models/ItemFlagMap";
import { ItemFlingEffect } from "../../../models/ItemFlingEffect";
import { ItemGameIndex } from "../../../models/ItemGameIndex";
import { Machine } from "../../../models/Machine";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { PokemonItem } from "../../../models/PokemonItem";
import { ItemBabyTriggerItemsArgs } from "./args/ItemBabyTriggerItemsArgs";
import { ItemBerriesArgs } from "./args/ItemBerriesArgs";
import { ItemFlagMapArgs } from "./args/ItemFlagMapArgs";
import { ItemFlingEffectArgs } from "./args/ItemFlingEffectArgs";
import { ItemGameIndicesArgs } from "./args/ItemGameIndicesArgs";
import { ItemHeldItemsArgs } from "./args/ItemHeldItemsArgs";
import { ItemMachinesArgs } from "./args/ItemMachinesArgs";
import { ItemPokemonItemsArgs } from "./args/ItemPokemonItemsArgs";
import { ItemTriggerItemsArgs } from "./args/ItemTriggerItemsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Item)
export class ItemRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => ItemCategory, {
    nullable: false
  })
  async category(@TypeGraphQL.Root() item: Item, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<ItemCategory> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.findUniqueOrThrow({
      where: {
        id: item.id,
      },
    }).category({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => ItemFlingEffect, {
    nullable: true
  })
  async flingEffect(@TypeGraphQL.Root() item: Item, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemFlingEffectArgs): Promise<ItemFlingEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.findUniqueOrThrow({
      where: {
        id: item.id,
      },
    }).flingEffect({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonItem], {
    nullable: false
  })
  async pokemonItems(@TypeGraphQL.Root() item: Item, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemPokemonItemsArgs): Promise<PokemonItem[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.findUniqueOrThrow({
      where: {
        id: item.id,
      },
    }).pokemonItems({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Machine], {
    nullable: false
  })
  async machines(@TypeGraphQL.Root() item: Item, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemMachinesArgs): Promise<Machine[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.findUniqueOrThrow({
      where: {
        id: item.id,
      },
    }).machines({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Berry], {
    nullable: false
  })
  async berries(@TypeGraphQL.Root() item: Item, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemBerriesArgs): Promise<Berry[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.findUniqueOrThrow({
      where: {
        id: item.id,
      },
    }).berries({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ItemGameIndex], {
    nullable: false
  })
  async gameIndices(@TypeGraphQL.Root() item: Item, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemGameIndicesArgs): Promise<ItemGameIndex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.findUniqueOrThrow({
      where: {
        id: item.id,
      },
    }).gameIndices({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ItemFlagMap], {
    nullable: false
  })
  async flagMap(@TypeGraphQL.Root() item: Item, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemFlagMapArgs): Promise<ItemFlagMap[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.findUniqueOrThrow({
      where: {
        id: item.id,
      },
    }).flagMap({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [EvolutionChain], {
    nullable: false
  })
  async babyTriggerItems(@TypeGraphQL.Root() item: Item, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemBabyTriggerItemsArgs): Promise<EvolutionChain[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.findUniqueOrThrow({
      where: {
        id: item.id,
      },
    }).babyTriggerItems({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonEvolution], {
    nullable: false
  })
  async triggerItems(@TypeGraphQL.Root() item: Item, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemTriggerItemsArgs): Promise<PokemonEvolution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.findUniqueOrThrow({
      where: {
        id: item.id,
      },
    }).triggerItems({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonEvolution], {
    nullable: false
  })
  async heldItems(@TypeGraphQL.Root() item: Item, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemHeldItemsArgs): Promise<PokemonEvolution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.findUniqueOrThrow({
      where: {
        id: item.id,
      },
    }).heldItems({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
