import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLocationGameIndicesArgs } from "./args/AggregateLocationGameIndicesArgs";
import { FindFirstLocationGameIndicesArgs } from "./args/FindFirstLocationGameIndicesArgs";
import { FindFirstLocationGameIndicesOrThrowArgs } from "./args/FindFirstLocationGameIndicesOrThrowArgs";
import { FindManyLocationGameIndicesArgs } from "./args/FindManyLocationGameIndicesArgs";
import { FindUniqueLocationGameIndicesArgs } from "./args/FindUniqueLocationGameIndicesArgs";
import { FindUniqueLocationGameIndicesOrThrowArgs } from "./args/FindUniqueLocationGameIndicesOrThrowArgs";
import { GroupByLocationGameIndicesArgs } from "./args/GroupByLocationGameIndicesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { LocationGameIndices } from "../../../models/LocationGameIndices";
import { AggregateLocationGameIndices } from "../../outputs/AggregateLocationGameIndices";
import { LocationGameIndicesGroupBy } from "../../outputs/LocationGameIndicesGroupBy";

@TypeGraphQL.Resolver(_of => LocationGameIndices)
export class LocationGameIndicesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateLocationGameIndices, {
    nullable: false
  })
  async aggregateLocationGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLocationGameIndicesArgs): Promise<AggregateLocationGameIndices> {
    return getPrismaFromContext(ctx).locationGameIndices.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => LocationGameIndices, {
    nullable: true
  })
  async findFirstLocationGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationGameIndicesArgs): Promise<LocationGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationGameIndices, {
    nullable: true
  })
  async findFirstLocationGameIndicesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationGameIndicesOrThrowArgs): Promise<LocationGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LocationGameIndices], {
    nullable: false
  })
  async findManyLocationGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyLocationGameIndicesArgs): Promise<LocationGameIndices[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationGameIndices, {
    nullable: true
  })
  async findUniqueLocationGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationGameIndicesArgs): Promise<LocationGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationGameIndices, {
    nullable: true
  })
  async findUniqueLocationGameIndicesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationGameIndicesOrThrowArgs): Promise<LocationGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LocationGameIndicesGroupBy], {
    nullable: false
  })
  async groupByLocationGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLocationGameIndicesArgs): Promise<LocationGameIndicesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}