import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Nature } from "../../../models/Nature";
import { NatureBattleStylePreference } from "../../../models/NatureBattleStylePreference";
import { Stat } from "../../../models/Stat";
import { Type } from "../../../models/Type";
import { NatureBattleStylePreferencesArgs } from "./args/NatureBattleStylePreferencesArgs";
import { NatureDecreasedStatTypesArgs } from "./args/NatureDecreasedStatTypesArgs";
import { NatureIncreasedStatTypesArgs } from "./args/NatureIncreasedStatTypesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Nature)
export class NatureRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Stat, {
    nullable: false
  })
  async decreasedStat(@TypeGraphQL.Root() nature: Nature, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Stat> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findUniqueOrThrow({
      where: {
        id: nature.id,
      },
    }).decreasedStat({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Stat, {
    nullable: false
  })
  async increasedStat(@TypeGraphQL.Root() nature: Nature, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Stat> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findUniqueOrThrow({
      where: {
        id: nature.id,
      },
    }).increasedStat({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [NatureBattleStylePreference], {
    nullable: false
  })
  async battleStylePreferences(@TypeGraphQL.Root() nature: Nature, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: NatureBattleStylePreferencesArgs): Promise<NatureBattleStylePreference[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findUniqueOrThrow({
      where: {
        id: nature.id,
      },
    }).battleStylePreferences({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Type], {
    nullable: false
  })
  async decreasedStatTypes(@TypeGraphQL.Root() nature: Nature, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: NatureDecreasedStatTypesArgs): Promise<Type[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findUniqueOrThrow({
      where: {
        id: nature.id,
      },
    }).decreasedStatTypes({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Type], {
    nullable: false
  })
  async increasedStatTypes(@TypeGraphQL.Root() nature: Nature, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: NatureIncreasedStatTypesArgs): Promise<Type[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findUniqueOrThrow({
      where: {
        id: nature.id,
      },
    }).increasedStatTypes({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
