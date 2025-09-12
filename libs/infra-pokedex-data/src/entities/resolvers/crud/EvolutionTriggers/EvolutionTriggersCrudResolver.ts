import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEvolutionTriggersArgs } from "./args/AggregateEvolutionTriggersArgs";
import { CreateManyAndReturnEvolutionTriggersArgs } from "./args/CreateManyAndReturnEvolutionTriggersArgs";
import { CreateManyEvolutionTriggersArgs } from "./args/CreateManyEvolutionTriggersArgs";
import { CreateOneEvolutionTriggersArgs } from "./args/CreateOneEvolutionTriggersArgs";
import { DeleteManyEvolutionTriggersArgs } from "./args/DeleteManyEvolutionTriggersArgs";
import { DeleteOneEvolutionTriggersArgs } from "./args/DeleteOneEvolutionTriggersArgs";
import { FindFirstEvolutionTriggersArgs } from "./args/FindFirstEvolutionTriggersArgs";
import { FindFirstEvolutionTriggersOrThrowArgs } from "./args/FindFirstEvolutionTriggersOrThrowArgs";
import { FindManyEvolutionTriggersArgs } from "./args/FindManyEvolutionTriggersArgs";
import { FindUniqueEvolutionTriggersArgs } from "./args/FindUniqueEvolutionTriggersArgs";
import { FindUniqueEvolutionTriggersOrThrowArgs } from "./args/FindUniqueEvolutionTriggersOrThrowArgs";
import { GroupByEvolutionTriggersArgs } from "./args/GroupByEvolutionTriggersArgs";
import { UpdateManyEvolutionTriggersArgs } from "./args/UpdateManyEvolutionTriggersArgs";
import { UpdateOneEvolutionTriggersArgs } from "./args/UpdateOneEvolutionTriggersArgs";
import { UpsertOneEvolutionTriggersArgs } from "./args/UpsertOneEvolutionTriggersArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { EvolutionTriggers } from "../../../models/EvolutionTriggers";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateEvolutionTriggers } from "../../outputs/AggregateEvolutionTriggers";
import { CreateManyAndReturnEvolutionTriggers } from "../../outputs/CreateManyAndReturnEvolutionTriggers";
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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyEvolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyEvolutionTriggersArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEvolutionTriggers], {
    nullable: false
  })
  async createManyAndReturnEvolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEvolutionTriggersArgs): Promise<CreateManyAndReturnEvolutionTriggers[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EvolutionTriggers, {
    nullable: false
  })
  async createOneEvolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEvolutionTriggersArgs): Promise<EvolutionTriggers> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyEvolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyEvolutionTriggersArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EvolutionTriggers, {
    nullable: true
  })
  async deleteOneEvolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneEvolutionTriggersArgs): Promise<EvolutionTriggers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyEvolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyEvolutionTriggersArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EvolutionTriggers, {
    nullable: true
  })
  async updateOneEvolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneEvolutionTriggersArgs): Promise<EvolutionTriggers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EvolutionTriggers, {
    nullable: false
  })
  async upsertOneEvolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEvolutionTriggersArgs): Promise<EvolutionTriggers> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
