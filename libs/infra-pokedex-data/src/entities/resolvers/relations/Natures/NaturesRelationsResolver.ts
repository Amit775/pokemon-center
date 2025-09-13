import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { NatureBattleStylePreferences } from "../../../models/NatureBattleStylePreferences";
import { Natures } from "../../../models/Natures";
import { Stats } from "../../../models/Stats";
import { Types } from "../../../models/Types";
import { NaturesBattleStylePreferencesArgs } from "./args/NaturesBattleStylePreferencesArgs";
import { NaturesDecreasedStatTypesArgs } from "./args/NaturesDecreasedStatTypesArgs";
import { NaturesIncreasedStatTypesArgs } from "./args/NaturesIncreasedStatTypesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Natures)
export class NaturesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Stats, {
    nullable: false
  })
  async decreasedStat(@TypeGraphQL.Root() natures: Natures, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Stats> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findUniqueOrThrow({
      where: {
        id: natures.id,
      },
    }).decreasedStat({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Stats, {
    nullable: false
  })
  async increasedStat(@TypeGraphQL.Root() natures: Natures, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Stats> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findUniqueOrThrow({
      where: {
        id: natures.id,
      },
    }).increasedStat({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [NatureBattleStylePreferences], {
    nullable: false
  })
  async battleStylePreferences(@TypeGraphQL.Root() natures: Natures, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: NaturesBattleStylePreferencesArgs): Promise<NatureBattleStylePreferences[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findUniqueOrThrow({
      where: {
        id: natures.id,
      },
    }).battleStylePreferences({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Types], {
    nullable: false
  })
  async decreasedStatTypes(@TypeGraphQL.Root() natures: Natures, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: NaturesDecreasedStatTypesArgs): Promise<Types[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findUniqueOrThrow({
      where: {
        id: natures.id,
      },
    }).decreasedStatTypes({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Types], {
    nullable: false
  })
  async increasedStatTypes(@TypeGraphQL.Root() natures: Natures, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: NaturesIncreasedStatTypesArgs): Promise<Types[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findUniqueOrThrow({
      where: {
        id: natures.id,
      },
    }).increasedStatTypes({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
