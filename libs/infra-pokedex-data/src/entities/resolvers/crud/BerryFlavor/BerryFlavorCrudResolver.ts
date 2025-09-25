import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateBerryFlavorArgs } from "./args/AggregateBerryFlavorArgs";
import { FindFirstBerryFlavorArgs } from "./args/FindFirstBerryFlavorArgs";
import { FindFirstBerryFlavorOrThrowArgs } from "./args/FindFirstBerryFlavorOrThrowArgs";
import { FindManyBerryFlavorArgs } from "./args/FindManyBerryFlavorArgs";
import { FindUniqueBerryFlavorArgs } from "./args/FindUniqueBerryFlavorArgs";
import { FindUniqueBerryFlavorOrThrowArgs } from "./args/FindUniqueBerryFlavorOrThrowArgs";
import { GroupByBerryFlavorArgs } from "./args/GroupByBerryFlavorArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { BerryFlavor } from "../../../models/BerryFlavor";
import { AggregateBerryFlavor } from "../../outputs/AggregateBerryFlavor";
import { BerryFlavorGroupBy } from "../../outputs/BerryFlavorGroupBy";

@TypeGraphQL.Resolver(_of => BerryFlavor)
export class BerryFlavorCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateBerryFlavor, {
    nullable: false
  })
  async aggregateBerryFlavor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBerryFlavorArgs): Promise<AggregateBerryFlavor> {
    return getPrismaFromContext(ctx).berryFlavors.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => BerryFlavor, {
    nullable: true
  })
  async findFirstBerryFlavor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBerryFlavorArgs): Promise<BerryFlavor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => BerryFlavor, {
    nullable: true
  })
  async findFirstBerryFlavorOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBerryFlavorOrThrowArgs): Promise<BerryFlavor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [BerryFlavor], {
    nullable: false
  })
  async berryFlavors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBerryFlavorArgs): Promise<BerryFlavor[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => BerryFlavor, {
    nullable: true
  })
  async berryFlavor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBerryFlavorArgs): Promise<BerryFlavor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => BerryFlavor, {
    nullable: true
  })
  async getBerryFlavor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBerryFlavorOrThrowArgs): Promise<BerryFlavor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [BerryFlavorGroupBy], {
    nullable: false
  })
  async groupByBerryFlavor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBerryFlavorArgs): Promise<BerryFlavorGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}