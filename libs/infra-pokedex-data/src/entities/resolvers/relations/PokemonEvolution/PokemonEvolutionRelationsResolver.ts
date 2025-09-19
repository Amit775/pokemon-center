import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EvolutionTrigger } from "../../../models/EvolutionTrigger";
import { Gender } from "../../../models/Gender";
import { Item } from "../../../models/Item";
import { Location } from "../../../models/Location";
import { Move } from "../../../models/Move";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { Type } from "../../../models/Type";
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

  @TypeGraphQL.FieldResolver(_type => EvolutionTrigger, {
    nullable: false
  })
  async evolutionTrigger(@TypeGraphQL.Root() pokemonEvolution: PokemonEvolution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<EvolutionTrigger> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.findUniqueOrThrow({
      where: {
        id: pokemonEvolution.id,
      },
    }).evolutionTrigger({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Item, {
    nullable: true
  })
  async triggerItem(@TypeGraphQL.Root() pokemonEvolution: PokemonEvolution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonEvolutionTriggerItemArgs): Promise<Item | null> {
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

  @TypeGraphQL.FieldResolver(_type => Gender, {
    nullable: true
  })
  async gender(@TypeGraphQL.Root() pokemonEvolution: PokemonEvolution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonEvolutionGenderArgs): Promise<Gender | null> {
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

  @TypeGraphQL.FieldResolver(_type => Location, {
    nullable: true
  })
  async location(@TypeGraphQL.Root() pokemonEvolution: PokemonEvolution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonEvolutionLocationArgs): Promise<Location | null> {
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

  @TypeGraphQL.FieldResolver(_type => Item, {
    nullable: true
  })
  async heldItem(@TypeGraphQL.Root() pokemonEvolution: PokemonEvolution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonEvolutionHeldItemArgs): Promise<Item | null> {
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

  @TypeGraphQL.FieldResolver(_type => Move, {
    nullable: true
  })
  async knownMove(@TypeGraphQL.Root() pokemonEvolution: PokemonEvolution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonEvolutionKnownMoveArgs): Promise<Move | null> {
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

  @TypeGraphQL.FieldResolver(_type => Type, {
    nullable: true
  })
  async knownMoveType(@TypeGraphQL.Root() pokemonEvolution: PokemonEvolution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonEvolutionKnownMoveTypeArgs): Promise<Type | null> {
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

  @TypeGraphQL.FieldResolver(_type => Type, {
    nullable: true
  })
  async partyType(@TypeGraphQL.Root() pokemonEvolution: PokemonEvolution, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonEvolutionPartyTypeArgs): Promise<Type | null> {
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
