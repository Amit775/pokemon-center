import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Berry } from "../../../models/Berry";
import { BerryFirmness } from "../../../models/BerryFirmness";
import { BerryFlavor } from "../../../models/BerryFlavor";
import { Item } from "../../../models/Item";
import { Type } from "../../../models/Type";
import { BerryFlavorsArgs } from "./args/BerryFlavorsArgs";
import { BerryNaturalGiftTypeArgs } from "./args/BerryNaturalGiftTypeArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Berry)
export class BerryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Item, {
    nullable: false
  })
  async item(@TypeGraphQL.Root() berry: Berry, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Item> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berries.findUniqueOrThrow({
      where: {
        id: berry.id,
      },
    }).item({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => BerryFirmness, {
    nullable: false
  })
  async firmness(@TypeGraphQL.Root() berry: Berry, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<BerryFirmness> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berries.findUniqueOrThrow({
      where: {
        id: berry.id,
      },
    }).firmness({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Type, {
    nullable: true
  })
  async naturalGiftType(@TypeGraphQL.Root() berry: Berry, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: BerryNaturalGiftTypeArgs): Promise<Type | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berries.findUniqueOrThrow({
      where: {
        id: berry.id,
      },
    }).naturalGiftType({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [BerryFlavor], {
    nullable: false
  })
  async flavors(@TypeGraphQL.Root() berry: Berry, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: BerryFlavorsArgs): Promise<BerryFlavor[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berries.findUniqueOrThrow({
      where: {
        id: berry.id,
      },
    }).flavors({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
