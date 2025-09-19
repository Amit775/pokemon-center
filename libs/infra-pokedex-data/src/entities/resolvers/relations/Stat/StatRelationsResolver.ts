import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Characteristic } from "../../../models/Characteristic";
import { MoveMetaStatChanges } from "../../../models/MoveMetaStatChanges";
import { Nature } from "../../../models/Nature";
import { PokemonStat } from "../../../models/PokemonStat";
import { Stat } from "../../../models/Stat";
import { StatCharacteristicsArgs } from "./args/StatCharacteristicsArgs";
import { StatMoveMetaStatChangesArgs } from "./args/StatMoveMetaStatChangesArgs";
import { StatNaturesArgs } from "./args/StatNaturesArgs";
import { StatNaturesIncreasedArgs } from "./args/StatNaturesIncreasedArgs";
import { StatPokemonStatsArgs } from "./args/StatPokemonStatsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Stat)
export class StatRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [PokemonStat], {
    nullable: false
  })
  async pokemonStats(@TypeGraphQL.Root() stat: Stat, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: StatPokemonStatsArgs): Promise<PokemonStat[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).stats.findUniqueOrThrow({
      where: {
        id: stat.id,
      },
    }).pokemonStats({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MoveMetaStatChanges], {
    nullable: false
  })
  async moveMetaStatChanges(@TypeGraphQL.Root() stat: Stat, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: StatMoveMetaStatChangesArgs): Promise<MoveMetaStatChanges[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).stats.findUniqueOrThrow({
      where: {
        id: stat.id,
      },
    }).moveMetaStatChanges({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Characteristic], {
    nullable: false
  })
  async characteristics(@TypeGraphQL.Root() stat: Stat, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: StatCharacteristicsArgs): Promise<Characteristic[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).stats.findUniqueOrThrow({
      where: {
        id: stat.id,
      },
    }).characteristics({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Nature], {
    nullable: false
  })
  async natures(@TypeGraphQL.Root() stat: Stat, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: StatNaturesArgs): Promise<Nature[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).stats.findUniqueOrThrow({
      where: {
        id: stat.id,
      },
    }).natures({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Nature], {
    nullable: false
  })
  async naturesIncreased(@TypeGraphQL.Root() stat: Stat, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: StatNaturesIncreasedArgs): Promise<Nature[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).stats.findUniqueOrThrow({
      where: {
        id: stat.id,
      },
    }).naturesIncreased({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
