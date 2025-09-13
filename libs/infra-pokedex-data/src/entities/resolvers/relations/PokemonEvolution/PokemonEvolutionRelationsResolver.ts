import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EvolutionTriggers } from "../../../models/EvolutionTriggers";
import { Genders } from "../../../models/Genders";
import { Items } from "../../../models/Items";
import { Locations } from "../../../models/Locations";
import { Moves } from "../../../models/Moves";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { Types } from "../../../models/Types";
import { PokemonEvolutionGenderArgs } from "./args/PokemonEvolutionGenderArgs";
import { PokemonEvolutionHeldItemArgs } from "./args/PokemonEvolutionHeldItemArgs";
import { PokemonEvolutionKnownMoveArgs } from "./args/PokemonEvolutionKnownMoveArgs";
import { PokemonEvolutionKnownMoveTypeArgs } from "./args/PokemonEvolutionKnownMoveTypeArgs";
import { PokemonEvolutionLocationArgs } from "./args/PokemonEvolutionLocationArgs";
import { PokemonEvolutionPartySpeciesArgs } from "./args/PokemonEvolutionPartySpeciesArgs";
import { PokemonEvolutionPartyTypeArgs } from "./args/PokemonEvolutionPartyTypeArgs";
import { PokemonEvolutionTradeSpeciesArgs } from "./args/PokemonEvolutionTradeSpeciesArgs";
import { PokemonEvolutionTriggerItemArgs } from "./args/PokemonEvolutionTriggerItemArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEvolution)
export class PokemonEvolutionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => PokemonSpecies, {
    nullable: false
  })
  async evolvedSpecies(@TypeGraphQL.Root() pokemonEvolution: PokemonEvolution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<PokemonSpecies> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.findUniqueOrThrow({
      where: {
        id: pokemonEvolution.id,
      },
    }).evolvedSpecies({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => EvolutionTriggers, {
    nullable: false
  })
  async evolutionTrigger(@TypeGraphQL.Root() pokemonEvolution: PokemonEvolution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<EvolutionTriggers> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.findUniqueOrThrow({
      where: {
        id: pokemonEvolution.id,
      },
    }).evolutionTrigger({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Items, {
    nullable: true
  })
  async triggerItem(@TypeGraphQL.Root() pokemonEvolution: PokemonEvolution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonEvolutionTriggerItemArgs): Promise<Items | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.findUniqueOrThrow({
      where: {
        id: pokemonEvolution.id,
      },
    }).triggerItem({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Genders, {
    nullable: true
  })
  async gender(@TypeGraphQL.Root() pokemonEvolution: PokemonEvolution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonEvolutionGenderArgs): Promise<Genders | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.findUniqueOrThrow({
      where: {
        id: pokemonEvolution.id,
      },
    }).gender({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Locations, {
    nullable: true
  })
  async location(@TypeGraphQL.Root() pokemonEvolution: PokemonEvolution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonEvolutionLocationArgs): Promise<Locations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.findUniqueOrThrow({
      where: {
        id: pokemonEvolution.id,
      },
    }).location({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Items, {
    nullable: true
  })
  async heldItem(@TypeGraphQL.Root() pokemonEvolution: PokemonEvolution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonEvolutionHeldItemArgs): Promise<Items | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.findUniqueOrThrow({
      where: {
        id: pokemonEvolution.id,
      },
    }).heldItem({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Moves, {
    nullable: true
  })
  async knownMove(@TypeGraphQL.Root() pokemonEvolution: PokemonEvolution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonEvolutionKnownMoveArgs): Promise<Moves | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.findUniqueOrThrow({
      where: {
        id: pokemonEvolution.id,
      },
    }).knownMove({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Types, {
    nullable: true
  })
  async knownMoveType(@TypeGraphQL.Root() pokemonEvolution: PokemonEvolution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonEvolutionKnownMoveTypeArgs): Promise<Types | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.findUniqueOrThrow({
      where: {
        id: pokemonEvolution.id,
      },
    }).knownMoveType({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => PokemonSpecies, {
    nullable: true
  })
  async partySpecies(@TypeGraphQL.Root() pokemonEvolution: PokemonEvolution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonEvolutionPartySpeciesArgs): Promise<PokemonSpecies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.findUniqueOrThrow({
      where: {
        id: pokemonEvolution.id,
      },
    }).partySpecies({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Types, {
    nullable: true
  })
  async partyType(@TypeGraphQL.Root() pokemonEvolution: PokemonEvolution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonEvolutionPartyTypeArgs): Promise<Types | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.findUniqueOrThrow({
      where: {
        id: pokemonEvolution.id,
      },
    }).partyType({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => PokemonSpecies, {
    nullable: true
  })
  async tradeSpecies(@TypeGraphQL.Root() pokemonEvolution: PokemonEvolution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonEvolutionTradeSpeciesArgs): Promise<PokemonSpecies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.findUniqueOrThrow({
      where: {
        id: pokemonEvolution.id,
      },
    }).tradeSpecies({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
