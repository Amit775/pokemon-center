import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ContestCombos } from "../../../models/ContestCombos";
import { ContestEffects } from "../../../models/ContestEffects";
import { ContestTypes } from "../../../models/ContestTypes";
import { Generations } from "../../../models/Generations";
import { Machines } from "../../../models/Machines";
import { MoveDamageClasses } from "../../../models/MoveDamageClasses";
import { MoveEffects } from "../../../models/MoveEffects";
import { MoveFlagMap } from "../../../models/MoveFlagMap";
import { MoveMeta } from "../../../models/MoveMeta";
import { MoveMetaStatChanges } from "../../../models/MoveMetaStatChanges";
import { MoveTargets } from "../../../models/MoveTargets";
import { Moves } from "../../../models/Moves";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { PokemonMoves } from "../../../models/PokemonMoves";
import { SuperContestCombos } from "../../../models/SuperContestCombos";
import { SuperContestEffects } from "../../../models/SuperContestEffects";
import { Types } from "../../../models/Types";
import { MovesContestCombosArgs } from "./args/MovesContestCombosArgs";
import { MovesContestCombosSecondArgs } from "./args/MovesContestCombosSecondArgs";
import { MovesContestEffectArgs } from "./args/MovesContestEffectArgs";
import { MovesContestTypeArgs } from "./args/MovesContestTypeArgs";
import { MovesEffectArgs } from "./args/MovesEffectArgs";
import { MovesFlagMapArgs } from "./args/MovesFlagMapArgs";
import { MovesKnownMovesArgs } from "./args/MovesKnownMovesArgs";
import { MovesMachinesArgs } from "./args/MovesMachinesArgs";
import { MovesMetaArgs } from "./args/MovesMetaArgs";
import { MovesMetaStatChangesArgs } from "./args/MovesMetaStatChangesArgs";
import { MovesPokemonMovesArgs } from "./args/MovesPokemonMovesArgs";
import { MovesSuperContestCombosArgs } from "./args/MovesSuperContestCombosArgs";
import { MovesSuperContestCombosSecondArgs } from "./args/MovesSuperContestCombosSecondArgs";
import { MovesSuperContestEffectArgs } from "./args/MovesSuperContestEffectArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Moves)
export class MovesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Generations, {
    nullable: false
  })
  async generation(@TypeGraphQL.Root() moves: Moves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Generations> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: moves.id,
      },
    }).generation({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Types, {
    nullable: false
  })
  async type(@TypeGraphQL.Root() moves: Moves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Types> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: moves.id,
      },
    }).type({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MoveTargets, {
    nullable: false
  })
  async target(@TypeGraphQL.Root() moves: Moves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MoveTargets> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: moves.id,
      },
    }).target({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MoveDamageClasses, {
    nullable: false
  })
  async damageClass(@TypeGraphQL.Root() moves: Moves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MoveDamageClasses> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: moves.id,
      },
    }).damageClass({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MoveEffects, {
    nullable: true
  })
  async effect(@TypeGraphQL.Root() moves: Moves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovesEffectArgs): Promise<MoveEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: moves.id,
      },
    }).effect({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => ContestTypes, {
    nullable: true
  })
  async contestType(@TypeGraphQL.Root() moves: Moves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovesContestTypeArgs): Promise<ContestTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: moves.id,
      },
    }).contestType({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => ContestEffects, {
    nullable: true
  })
  async contestEffect(@TypeGraphQL.Root() moves: Moves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovesContestEffectArgs): Promise<ContestEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: moves.id,
      },
    }).contestEffect({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => SuperContestEffects, {
    nullable: true
  })
  async superContestEffect(@TypeGraphQL.Root() moves: Moves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovesSuperContestEffectArgs): Promise<SuperContestEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: moves.id,
      },
    }).superContestEffect({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonMoves], {
    nullable: false
  })
  async pokemonMoves(@TypeGraphQL.Root() moves: Moves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovesPokemonMovesArgs): Promise<PokemonMoves[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: moves.id,
      },
    }).pokemonMoves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Machines], {
    nullable: false
  })
  async machines(@TypeGraphQL.Root() moves: Moves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovesMachinesArgs): Promise<Machines[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: moves.id,
      },
    }).machines({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MoveMeta], {
    nullable: false
  })
  async meta(@TypeGraphQL.Root() moves: Moves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovesMetaArgs): Promise<MoveMeta[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: moves.id,
      },
    }).meta({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MoveMetaStatChanges], {
    nullable: false
  })
  async metaStatChanges(@TypeGraphQL.Root() moves: Moves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovesMetaStatChangesArgs): Promise<MoveMetaStatChanges[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: moves.id,
      },
    }).metaStatChanges({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MoveFlagMap], {
    nullable: false
  })
  async flagMap(@TypeGraphQL.Root() moves: Moves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovesFlagMapArgs): Promise<MoveFlagMap[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: moves.id,
      },
    }).flagMap({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ContestCombos], {
    nullable: false
  })
  async contestCombos(@TypeGraphQL.Root() moves: Moves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovesContestCombosArgs): Promise<ContestCombos[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: moves.id,
      },
    }).contestCombos({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ContestCombos], {
    nullable: false
  })
  async contestCombosSecond(@TypeGraphQL.Root() moves: Moves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovesContestCombosSecondArgs): Promise<ContestCombos[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: moves.id,
      },
    }).contestCombosSecond({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [SuperContestCombos], {
    nullable: false
  })
  async superContestCombos(@TypeGraphQL.Root() moves: Moves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovesSuperContestCombosArgs): Promise<SuperContestCombos[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: moves.id,
      },
    }).superContestCombos({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [SuperContestCombos], {
    nullable: false
  })
  async superContestCombosSecond(@TypeGraphQL.Root() moves: Moves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovesSuperContestCombosSecondArgs): Promise<SuperContestCombos[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: moves.id,
      },
    }).superContestCombosSecond({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonEvolution], {
    nullable: false
  })
  async knownMoves(@TypeGraphQL.Root() moves: Moves, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovesKnownMovesArgs): Promise<PokemonEvolution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: moves.id,
      },
    }).knownMoves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
