import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateBerryFlavorsArgs } from "./args/AggregateBerryFlavorsArgs";
import { FindFirstBerryFlavorsArgs } from "./args/FindFirstBerryFlavorsArgs";
import { FindFirstBerryFlavorsOrThrowArgs } from "./args/FindFirstBerryFlavorsOrThrowArgs";
import { FindManyBerryFlavorsArgs } from "./args/FindManyBerryFlavorsArgs";
import { FindUniqueBerryFlavorsArgs } from "./args/FindUniqueBerryFlavorsArgs";
import { FindUniqueBerryFlavorsOrThrowArgs } from "./args/FindUniqueBerryFlavorsOrThrowArgs";
import { GroupByBerryFlavorsArgs } from "./args/GroupByBerryFlavorsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { BerryFlavors } from "../../../models/BerryFlavors";
import { AggregateBerryFlavors } from "../../outputs/AggregateBerryFlavors";
import { BerryFlavorsGroupBy } from "../../outputs/BerryFlavorsGroupBy";

@TypeGraphQL.Resolver(_of => BerryFlavors)
export class BerryFlavorsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateBerryFlavors, {
    nullable: false
  })
  async aggregateBerryFlavors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBerryFlavorsArgs): Promise<AggregateBerryFlavors> {
    return getPrismaFromContext(ctx).berryFlavors.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => BerryFlavors, {
    nullable: true
  })
  async findFirstBerryFlavors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBerryFlavorsArgs): Promise<BerryFlavors | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => BerryFlavors, {
    nullable: true
  })
  async findFirstBerryFlavorsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBerryFlavorsOrThrowArgs): Promise<BerryFlavors | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [BerryFlavors], {
    nullable: false
  })
  async findManyBerryFlavors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBerryFlavorsArgs): Promise<BerryFlavors[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => BerryFlavors, {
    nullable: true
  })
  async findUniqueBerryFlavors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBerryFlavorsArgs): Promise<BerryFlavors | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => BerryFlavors, {
    nullable: true
  })
  async findUniqueBerryFlavorsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBerryFlavorsOrThrowArgs): Promise<BerryFlavors | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [BerryFlavorsGroupBy], {
    nullable: false
  })
  async groupByBerryFlavors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBerryFlavorsArgs): Promise<BerryFlavorsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}