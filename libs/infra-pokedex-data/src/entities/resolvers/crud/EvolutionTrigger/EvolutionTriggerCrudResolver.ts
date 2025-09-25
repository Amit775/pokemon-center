import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEvolutionTriggerArgs } from "./args/AggregateEvolutionTriggerArgs";
import { FindFirstEvolutionTriggerArgs } from "./args/FindFirstEvolutionTriggerArgs";
import { FindFirstEvolutionTriggerOrThrowArgs } from "./args/FindFirstEvolutionTriggerOrThrowArgs";
import { FindManyEvolutionTriggerArgs } from "./args/FindManyEvolutionTriggerArgs";
import { FindUniqueEvolutionTriggerArgs } from "./args/FindUniqueEvolutionTriggerArgs";
import { FindUniqueEvolutionTriggerOrThrowArgs } from "./args/FindUniqueEvolutionTriggerOrThrowArgs";
import { GroupByEvolutionTriggerArgs } from "./args/GroupByEvolutionTriggerArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { EvolutionTrigger } from "../../../models/EvolutionTrigger";
import { AggregateEvolutionTrigger } from "../../outputs/AggregateEvolutionTrigger";
import { EvolutionTriggerGroupBy } from "../../outputs/EvolutionTriggerGroupBy";

@TypeGraphQL.Resolver(_of => EvolutionTrigger)
export class EvolutionTriggerCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateEvolutionTrigger, {
    nullable: false
  })
  async aggregateEvolutionTrigger(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEvolutionTriggerArgs): Promise<AggregateEvolutionTrigger> {
    return getPrismaFromContext(ctx).evolutionTriggers.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => EvolutionTrigger, {
    nullable: true
  })
  async findFirstEvolutionTrigger(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEvolutionTriggerArgs): Promise<EvolutionTrigger | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EvolutionTrigger, {
    nullable: true
  })
  async findFirstEvolutionTriggerOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEvolutionTriggerOrThrowArgs): Promise<EvolutionTrigger | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EvolutionTrigger], {
    nullable: false
  })
  async evolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEvolutionTriggerArgs): Promise<EvolutionTrigger[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EvolutionTrigger, {
    nullable: true
  })
  async evolutionTrigger(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEvolutionTriggerArgs): Promise<EvolutionTrigger | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EvolutionTrigger, {
    nullable: true
  })
  async getEvolutionTrigger(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEvolutionTriggerOrThrowArgs): Promise<EvolutionTrigger | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EvolutionTriggerGroupBy], {
    nullable: false
  })
  async groupByEvolutionTrigger(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEvolutionTriggerArgs): Promise<EvolutionTriggerGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}