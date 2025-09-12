import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Berries } from "../../../models/Berries";
import { BerryFirmness } from "../../../models/BerryFirmness";
import { BerryFlavors } from "../../../models/BerryFlavors";
import { Items } from "../../../models/Items";
import { Types } from "../../../models/Types";
import { BerriesFlavorsArgs } from "./args/BerriesFlavorsArgs";
import { BerriesNaturalGiftTypeArgs } from "./args/BerriesNaturalGiftTypeArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Berries)
export class BerriesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Items, {
    nullable: false
  })
  async item(@TypeGraphQL.Root() berries: Berries, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Items> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berries.findUniqueOrThrow({
      where: {
        id: berries.id,
      },
    }).item({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => BerryFirmness, {
    nullable: false
  })
  async firmness(@TypeGraphQL.Root() berries: Berries, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<BerryFirmness> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berries.findUniqueOrThrow({
      where: {
        id: berries.id,
      },
    }).firmness({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Types, {
    nullable: true
  })
  async naturalGiftType(@TypeGraphQL.Root() berries: Berries, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: BerriesNaturalGiftTypeArgs): Promise<Types | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berries.findUniqueOrThrow({
      where: {
        id: berries.id,
      },
    }).naturalGiftType({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [BerryFlavors], {
    nullable: false
  })
  async flavors(@TypeGraphQL.Root() berries: Berries, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: BerriesFlavorsArgs): Promise<BerryFlavors[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berries.findUniqueOrThrow({
      where: {
        id: berries.id,
      },
    }).flavors({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
