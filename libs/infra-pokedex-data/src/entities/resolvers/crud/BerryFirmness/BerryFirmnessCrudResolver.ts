import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateBerryFirmnessArgs } from "./args/AggregateBerryFirmnessArgs";
import { FindFirstBerryFirmnessArgs } from "./args/FindFirstBerryFirmnessArgs";
import { FindFirstBerryFirmnessOrThrowArgs } from "./args/FindFirstBerryFirmnessOrThrowArgs";
import { FindManyBerryFirmnessArgs } from "./args/FindManyBerryFirmnessArgs";
import { FindUniqueBerryFirmnessArgs } from "./args/FindUniqueBerryFirmnessArgs";
import { FindUniqueBerryFirmnessOrThrowArgs } from "./args/FindUniqueBerryFirmnessOrThrowArgs";
import { GroupByBerryFirmnessArgs } from "./args/GroupByBerryFirmnessArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { BerryFirmness } from "../../../models/BerryFirmness";
import { AggregateBerryFirmness } from "../../outputs/AggregateBerryFirmness";
import { BerryFirmnessGroupBy } from "../../outputs/BerryFirmnessGroupBy";

@TypeGraphQL.Resolver(_of => BerryFirmness)
export class BerryFirmnessCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateBerryFirmness, {
    nullable: false
  })
  async aggregateBerryFirmness(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBerryFirmnessArgs): Promise<AggregateBerryFirmness> {
    return getPrismaFromContext(ctx).berryFirmness.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => BerryFirmness, {
    nullable: true
  })
  async findFirstBerryFirmness(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBerryFirmnessArgs): Promise<BerryFirmness | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFirmness.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => BerryFirmness, {
    nullable: true
  })
  async findFirstBerryFirmnessOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBerryFirmnessOrThrowArgs): Promise<BerryFirmness | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFirmness.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [BerryFirmness], {
    nullable: false
  })
  async berryFirmnesses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBerryFirmnessArgs): Promise<BerryFirmness[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFirmness.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => BerryFirmness, {
    nullable: true
  })
  async berryFirmness(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBerryFirmnessArgs): Promise<BerryFirmness | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFirmness.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => BerryFirmness, {
    nullable: true
  })
  async getBerryFirmness(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBerryFirmnessOrThrowArgs): Promise<BerryFirmness | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFirmness.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [BerryFirmnessGroupBy], {
    nullable: false
  })
  async groupByBerryFirmness(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBerryFirmnessArgs): Promise<BerryFirmnessGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFirmness.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}