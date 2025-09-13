import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Characteristics } from "../../../models/Characteristics";
import { MoveMetaStatChanges } from "../../../models/MoveMetaStatChanges";
import { Natures } from "../../../models/Natures";
import { PokemonStats } from "../../../models/PokemonStats";
import { Stats } from "../../../models/Stats";
import { StatsCharacteristicsArgs } from "./args/StatsCharacteristicsArgs";
import { StatsMoveMetaStatChangesArgs } from "./args/StatsMoveMetaStatChangesArgs";
import { StatsNaturesArgs } from "./args/StatsNaturesArgs";
import { StatsNaturesIncreasedArgs } from "./args/StatsNaturesIncreasedArgs";
import { StatsPokemonStatsArgs } from "./args/StatsPokemonStatsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Stats)
export class StatsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [PokemonStats], {
    nullable: false
  })
  async pokemonStats(@TypeGraphQL.Root() stats: Stats, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: StatsPokemonStatsArgs): Promise<PokemonStats[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).stats.findUniqueOrThrow({
      where: {
        id: stats.id,
      },
    }).pokemonStats({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MoveMetaStatChanges], {
    nullable: false
  })
  async moveMetaStatChanges(@TypeGraphQL.Root() stats: Stats, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: StatsMoveMetaStatChangesArgs): Promise<MoveMetaStatChanges[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).stats.findUniqueOrThrow({
      where: {
        id: stats.id,
      },
    }).moveMetaStatChanges({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Characteristics], {
    nullable: false
  })
  async characteristics(@TypeGraphQL.Root() stats: Stats, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: StatsCharacteristicsArgs): Promise<Characteristics[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).stats.findUniqueOrThrow({
      where: {
        id: stats.id,
      },
    }).characteristics({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Natures], {
    nullable: false
  })
  async natures(@TypeGraphQL.Root() stats: Stats, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: StatsNaturesArgs): Promise<Natures[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).stats.findUniqueOrThrow({
      where: {
        id: stats.id,
      },
    }).natures({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Natures], {
    nullable: false
  })
  async naturesIncreased(@TypeGraphQL.Root() stats: Stats, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: StatsNaturesIncreasedArgs): Promise<Natures[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).stats.findUniqueOrThrow({
      where: {
        id: stats.id,
      },
    }).naturesIncreased({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
