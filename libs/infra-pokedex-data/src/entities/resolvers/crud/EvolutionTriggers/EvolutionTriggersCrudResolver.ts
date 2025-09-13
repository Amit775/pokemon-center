import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEvolutionTriggersArgs } from "./args/AggregateEvolutionTriggersArgs";
import { FindFirstEvolutionTriggersArgs } from "./args/FindFirstEvolutionTriggersArgs";
import { FindFirstEvolutionTriggersOrThrowArgs } from "./args/FindFirstEvolutionTriggersOrThrowArgs";
import { FindManyEvolutionTriggersArgs } from "./args/FindManyEvolutionTriggersArgs";
import { FindUniqueEvolutionTriggersArgs } from "./args/FindUniqueEvolutionTriggersArgs";
import { FindUniqueEvolutionTriggersOrThrowArgs } from "./args/FindUniqueEvolutionTriggersOrThrowArgs";
import { GroupByEvolutionTriggersArgs } from "./args/GroupByEvolutionTriggersArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { EvolutionTriggers } from "../../../models/EvolutionTriggers";
import { AggregateEvolutionTriggers } from "../../outputs/AggregateEvolutionTriggers";
import { EvolutionTriggersGroupBy } from "../../outputs/EvolutionTriggersGroupBy";

@TypeGraphQL.Resolver(_of => EvolutionTriggers)
export class EvolutionTriggersCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateEvolutionTriggers, {
    nullable: false
  })
  async aggregateEvolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEvolutionTriggersArgs): Promise<AggregateEvolutionTriggers> {
    return getPrismaFromContext(ctx).evolutionTriggers.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => EvolutionTriggers, {
    nullable: true
  })
  async findFirstEvolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEvolutionTriggersArgs): Promise<EvolutionTriggers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EvolutionTriggers, {
    nullable: true
  })
  async findFirstEvolutionTriggersOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEvolutionTriggersOrThrowArgs): Promise<EvolutionTriggers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EvolutionTriggers], {
    nullable: false
  })
  async findManyEvolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEvolutionTriggersArgs): Promise<EvolutionTriggers[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EvolutionTriggers, {
    nullable: true
  })
  async findUniqueEvolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEvolutionTriggersArgs): Promise<EvolutionTriggers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EvolutionTriggers, {
    nullable: true
  })
  async findUniqueEvolutionTriggersOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEvolutionTriggersOrThrowArgs): Promise<EvolutionTriggers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EvolutionTriggersGroupBy], {
    nullable: false
  })
  async groupByEvolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEvolutionTriggersArgs): Promise<EvolutionTriggersGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}