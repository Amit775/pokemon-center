import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Berries } from "../../../models/Berries";
import { EvolutionChains } from "../../../models/EvolutionChains";
import { ItemCategories } from "../../../models/ItemCategories";
import { ItemFlagMap } from "../../../models/ItemFlagMap";
import { ItemFlingEffects } from "../../../models/ItemFlingEffects";
import { ItemGameIndices } from "../../../models/ItemGameIndices";
import { Items } from "../../../models/Items";
import { Machines } from "../../../models/Machines";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { PokemonItems } from "../../../models/PokemonItems";
import { ItemsBabyTriggerItemsArgs } from "./args/ItemsBabyTriggerItemsArgs";
import { ItemsBerriesArgs } from "./args/ItemsBerriesArgs";
import { ItemsFlagMapArgs } from "./args/ItemsFlagMapArgs";
import { ItemsFlingEffectArgs } from "./args/ItemsFlingEffectArgs";
import { ItemsGameIndicesArgs } from "./args/ItemsGameIndicesArgs";
import { ItemsHeldItemsArgs } from "./args/ItemsHeldItemsArgs";
import { ItemsMachinesArgs } from "./args/ItemsMachinesArgs";
import { ItemsPokemonItemsArgs } from "./args/ItemsPokemonItemsArgs";
import { ItemsTriggerItemsArgs } from "./args/ItemsTriggerItemsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Items)
export class ItemsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => ItemCategories, {
    nullable: false
  })
  async category(@TypeGraphQL.Root() items: Items, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<ItemCategories> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.findUniqueOrThrow({
      where: {
        id: items.id,
      },
    }).category({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => ItemFlingEffects, {
    nullable: true
  })
  async flingEffect(@TypeGraphQL.Root() items: Items, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemsFlingEffectArgs): Promise<ItemFlingEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.findUniqueOrThrow({
      where: {
        id: items.id,
      },
    }).flingEffect({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonItems], {
    nullable: false
  })
  async pokemonItems(@TypeGraphQL.Root() items: Items, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemsPokemonItemsArgs): Promise<PokemonItems[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.findUniqueOrThrow({
      where: {
        id: items.id,
      },
    }).pokemonItems({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Machines], {
    nullable: false
  })
  async machines(@TypeGraphQL.Root() items: Items, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemsMachinesArgs): Promise<Machines[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.findUniqueOrThrow({
      where: {
        id: items.id,
      },
    }).machines({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Berries], {
    nullable: false
  })
  async berries(@TypeGraphQL.Root() items: Items, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemsBerriesArgs): Promise<Berries[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.findUniqueOrThrow({
      where: {
        id: items.id,
      },
    }).berries({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ItemGameIndices], {
    nullable: false
  })
  async gameIndices(@TypeGraphQL.Root() items: Items, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemsGameIndicesArgs): Promise<ItemGameIndices[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.findUniqueOrThrow({
      where: {
        id: items.id,
      },
    }).gameIndices({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ItemFlagMap], {
    nullable: false
  })
  async flagMap(@TypeGraphQL.Root() items: Items, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemsFlagMapArgs): Promise<ItemFlagMap[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.findUniqueOrThrow({
      where: {
        id: items.id,
      },
    }).flagMap({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [EvolutionChains], {
    nullable: false
  })
  async babyTriggerItems(@TypeGraphQL.Root() items: Items, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemsBabyTriggerItemsArgs): Promise<EvolutionChains[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.findUniqueOrThrow({
      where: {
        id: items.id,
      },
    }).babyTriggerItems({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonEvolution], {
    nullable: false
  })
  async triggerItems(@TypeGraphQL.Root() items: Items, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemsTriggerItemsArgs): Promise<PokemonEvolution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.findUniqueOrThrow({
      where: {
        id: items.id,
      },
    }).triggerItems({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonEvolution], {
    nullable: false
  })
  async heldItems(@TypeGraphQL.Root() items: Items, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemsHeldItemsArgs): Promise<PokemonEvolution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).items.findUniqueOrThrow({
      where: {
        id: items.id,
      },
    }).heldItems({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
