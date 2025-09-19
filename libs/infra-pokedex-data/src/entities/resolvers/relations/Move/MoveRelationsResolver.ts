import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ContestCombo } from "../../../models/ContestCombo";
import { ContestEffect } from "../../../models/ContestEffect";
import { ContestType } from "../../../models/ContestType";
import { Generation } from "../../../models/Generation";
import { Machine } from "../../../models/Machine";
import { Move } from "../../../models/Move";
import { MoveDamageClass } from "../../../models/MoveDamageClass";
import { MoveEffect } from "../../../models/MoveEffect";
import { MoveFlagMap } from "../../../models/MoveFlagMap";
import { MoveMeta } from "../../../models/MoveMeta";
import { MoveMetaStatChanges } from "../../../models/MoveMetaStatChanges";
import { MoveTarget } from "../../../models/MoveTarget";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { PokemonMove } from "../../../models/PokemonMove";
import { SuperContestCombo } from "../../../models/SuperContestCombo";
import { SuperContestEffect } from "../../../models/SuperContestEffect";
import { Type } from "../../../models/Type";
import { MoveContestCombosArgs } from "./args/MoveContestCombosArgs";
import { MoveContestCombosSecondArgs } from "./args/MoveContestCombosSecondArgs";
import { MoveContestEffectArgs } from "./args/MoveContestEffectArgs";
import { MoveContestTypeArgs } from "./args/MoveContestTypeArgs";
import { MoveEffectArgs } from "./args/MoveEffectArgs";
import { MoveFlagMapArgs } from "./args/MoveFlagMapArgs";
import { MoveKnownMovesArgs } from "./args/MoveKnownMovesArgs";
import { MoveMachinesArgs } from "./args/MoveMachinesArgs";
import { MoveMetaArgs } from "./args/MoveMetaArgs";
import { MoveMetaStatChangesArgs } from "./args/MoveMetaStatChangesArgs";
import { MovePokemonMovesArgs } from "./args/MovePokemonMovesArgs";
import { MoveSuperContestCombosArgs } from "./args/MoveSuperContestCombosArgs";
import { MoveSuperContestCombosSecondArgs } from "./args/MoveSuperContestCombosSecondArgs";
import { MoveSuperContestEffectArgs } from "./args/MoveSuperContestEffectArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Move)
export class MoveRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Generation, {
    nullable: false
  })
  async generation(@TypeGraphQL.Root() move: Move, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Generation> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: move.id,
      },
    }).generation({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Type, {
    nullable: false
  })
  async type(@TypeGraphQL.Root() move: Move, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Type> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: move.id,
      },
    }).type({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MoveTarget, {
    nullable: false
  })
  async target(@TypeGraphQL.Root() move: Move, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MoveTarget> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: move.id,
      },
    }).target({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MoveDamageClass, {
    nullable: false
  })
  async damageClass(@TypeGraphQL.Root() move: Move, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MoveDamageClass> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: move.id,
      },
    }).damageClass({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MoveEffect, {
    nullable: true
  })
  async effect(@TypeGraphQL.Root() move: Move, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveEffectArgs): Promise<MoveEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: move.id,
      },
    }).effect({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => ContestType, {
    nullable: true
  })
  async contestType(@TypeGraphQL.Root() move: Move, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveContestTypeArgs): Promise<ContestType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: move.id,
      },
    }).contestType({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => ContestEffect, {
    nullable: true
  })
  async contestEffect(@TypeGraphQL.Root() move: Move, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveContestEffectArgs): Promise<ContestEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: move.id,
      },
    }).contestEffect({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => SuperContestEffect, {
    nullable: true
  })
  async superContestEffect(@TypeGraphQL.Root() move: Move, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveSuperContestEffectArgs): Promise<SuperContestEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: move.id,
      },
    }).superContestEffect({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonMove], {
    nullable: false
  })
  async pokemonMoves(@TypeGraphQL.Root() move: Move, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MovePokemonMovesArgs): Promise<PokemonMove[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: move.id,
      },
    }).pokemonMoves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Machine], {
    nullable: false
  })
  async machines(@TypeGraphQL.Root() move: Move, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveMachinesArgs): Promise<Machine[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: move.id,
      },
    }).machines({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MoveMeta], {
    nullable: false
  })
  async meta(@TypeGraphQL.Root() move: Move, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveMetaArgs): Promise<MoveMeta[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: move.id,
      },
    }).meta({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MoveMetaStatChanges], {
    nullable: false
  })
  async metaStatChanges(@TypeGraphQL.Root() move: Move, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveMetaStatChangesArgs): Promise<MoveMetaStatChanges[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: move.id,
      },
    }).metaStatChanges({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MoveFlagMap], {
    nullable: false
  })
  async flagMap(@TypeGraphQL.Root() move: Move, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveFlagMapArgs): Promise<MoveFlagMap[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: move.id,
      },
    }).flagMap({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ContestCombo], {
    nullable: false
  })
  async contestCombos(@TypeGraphQL.Root() move: Move, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveContestCombosArgs): Promise<ContestCombo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: move.id,
      },
    }).contestCombos({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ContestCombo], {
    nullable: false
  })
  async contestCombosSecond(@TypeGraphQL.Root() move: Move, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveContestCombosSecondArgs): Promise<ContestCombo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: move.id,
      },
    }).contestCombosSecond({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [SuperContestCombo], {
    nullable: false
  })
  async superContestCombos(@TypeGraphQL.Root() move: Move, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveSuperContestCombosArgs): Promise<SuperContestCombo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: move.id,
      },
    }).superContestCombos({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [SuperContestCombo], {
    nullable: false
  })
  async superContestCombosSecond(@TypeGraphQL.Root() move: Move, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveSuperContestCombosSecondArgs): Promise<SuperContestCombo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: move.id,
      },
    }).superContestCombosSecond({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonEvolution], {
    nullable: false
  })
  async knownMoves(@TypeGraphQL.Root() move: Move, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveKnownMovesArgs): Promise<PokemonEvolution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moves.findUniqueOrThrow({
      where: {
        id: move.id,
      },
    }).knownMoves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
