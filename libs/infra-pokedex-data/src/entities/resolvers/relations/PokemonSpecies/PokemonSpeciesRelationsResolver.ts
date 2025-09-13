import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EvolutionChains } from "../../../models/EvolutionChains";
import { Generations } from "../../../models/Generations";
import { GrowthRates } from "../../../models/GrowthRates";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonColors } from "../../../models/PokemonColors";
import { PokemonDexNumbers } from "../../../models/PokemonDexNumbers";
import { PokemonEggGroups } from "../../../models/PokemonEggGroups";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { PokemonHabitats } from "../../../models/PokemonHabitats";
import { PokemonShapes } from "../../../models/PokemonShapes";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { PokemonSpeciesDexNumbersArgs } from "./args/PokemonSpeciesDexNumbersArgs";
import { PokemonSpeciesEggGroupsArgs } from "./args/PokemonSpeciesEggGroupsArgs";
import { PokemonSpeciesEvolutionArgs } from "./args/PokemonSpeciesEvolutionArgs";
import { PokemonSpeciesEvolvesFromArgs } from "./args/PokemonSpeciesEvolvesFromArgs";
import { PokemonSpeciesEvolvesToArgs } from "./args/PokemonSpeciesEvolvesToArgs";
import { PokemonSpeciesHabitatArgs } from "./args/PokemonSpeciesHabitatArgs";
import { PokemonSpeciesPartySpeciesArgs } from "./args/PokemonSpeciesPartySpeciesArgs";
import { PokemonSpeciesPokemonArgs } from "./args/PokemonSpeciesPokemonArgs";
import { PokemonSpeciesTradeSpeciesArgs } from "./args/PokemonSpeciesTradeSpeciesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonSpecies)
export class PokemonSpeciesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Generations, {
    nullable: false
  })
  async generation(@TypeGraphQL.Root() pokemonSpecies: PokemonSpecies, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Generations> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findUniqueOrThrow({
      where: {
        id: pokemonSpecies.id,
      },
    }).generation({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => PokemonSpecies, {
    nullable: true
  })
  async evolvesFrom(@TypeGraphQL.Root() pokemonSpecies: PokemonSpecies, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonSpeciesEvolvesFromArgs): Promise<PokemonSpecies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findUniqueOrThrow({
      where: {
        id: pokemonSpecies.id,
      },
    }).evolvesFrom({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonSpecies], {
    nullable: false
  })
  async evolvesTo(@TypeGraphQL.Root() pokemonSpecies: PokemonSpecies, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonSpeciesEvolvesToArgs): Promise<PokemonSpecies[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findUniqueOrThrow({
      where: {
        id: pokemonSpecies.id,
      },
    }).evolvesTo({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => EvolutionChains, {
    nullable: false
  })
  async evolutionChain(@TypeGraphQL.Root() pokemonSpecies: PokemonSpecies, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<EvolutionChains> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findUniqueOrThrow({
      where: {
        id: pokemonSpecies.id,
      },
    }).evolutionChain({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => PokemonColors, {
    nullable: false
  })
  async color(@TypeGraphQL.Root() pokemonSpecies: PokemonSpecies, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<PokemonColors> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findUniqueOrThrow({
      where: {
        id: pokemonSpecies.id,
      },
    }).color({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => PokemonShapes, {
    nullable: false
  })
  async shape(@TypeGraphQL.Root() pokemonSpecies: PokemonSpecies, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<PokemonShapes> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findUniqueOrThrow({
      where: {
        id: pokemonSpecies.id,
      },
    }).shape({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => PokemonHabitats, {
    nullable: true
  })
  async habitat(@TypeGraphQL.Root() pokemonSpecies: PokemonSpecies, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonSpeciesHabitatArgs): Promise<PokemonHabitats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findUniqueOrThrow({
      where: {
        id: pokemonSpecies.id,
      },
    }).habitat({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => GrowthRates, {
    nullable: false
  })
  async growthRate(@TypeGraphQL.Root() pokemonSpecies: PokemonSpecies, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<GrowthRates> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findUniqueOrThrow({
      where: {
        id: pokemonSpecies.id,
      },
    }).growthRate({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Pokemon], {
    nullable: false
  })
  async pokemon(@TypeGraphQL.Root() pokemonSpecies: PokemonSpecies, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonSpeciesPokemonArgs): Promise<Pokemon[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findUniqueOrThrow({
      where: {
        id: pokemonSpecies.id,
      },
    }).pokemon({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonEggGroups], {
    nullable: false
  })
  async eggGroups(@TypeGraphQL.Root() pokemonSpecies: PokemonSpecies, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonSpeciesEggGroupsArgs): Promise<PokemonEggGroups[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findUniqueOrThrow({
      where: {
        id: pokemonSpecies.id,
      },
    }).eggGroups({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonDexNumbers], {
    nullable: false
  })
  async dexNumbers(@TypeGraphQL.Root() pokemonSpecies: PokemonSpecies, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonSpeciesDexNumbersArgs): Promise<PokemonDexNumbers[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findUniqueOrThrow({
      where: {
        id: pokemonSpecies.id,
      },
    }).dexNumbers({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonEvolution], {
    nullable: false
  })
  async evolution(@TypeGraphQL.Root() pokemonSpecies: PokemonSpecies, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonSpeciesEvolutionArgs): Promise<PokemonEvolution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findUniqueOrThrow({
      where: {
        id: pokemonSpecies.id,
      },
    }).evolution({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonEvolution], {
    nullable: false
  })
  async partySpecies(@TypeGraphQL.Root() pokemonSpecies: PokemonSpecies, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonSpeciesPartySpeciesArgs): Promise<PokemonEvolution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findUniqueOrThrow({
      where: {
        id: pokemonSpecies.id,
      },
    }).partySpecies({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonEvolution], {
    nullable: false
  })
  async tradeSpecies(@TypeGraphQL.Root() pokemonSpecies: PokemonSpecies, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonSpeciesTradeSpeciesArgs): Promise<PokemonEvolution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.findUniqueOrThrow({
      where: {
        id: pokemonSpecies.id,
      },
    }).tradeSpecies({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
