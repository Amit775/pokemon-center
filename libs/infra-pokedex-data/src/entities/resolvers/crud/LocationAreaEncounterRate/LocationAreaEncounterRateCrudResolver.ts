import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLocationAreaEncounterRateArgs } from "./args/AggregateLocationAreaEncounterRateArgs";
import { CreateManyAndReturnLocationAreaEncounterRateArgs } from "./args/CreateManyAndReturnLocationAreaEncounterRateArgs";
import { CreateManyLocationAreaEncounterRateArgs } from "./args/CreateManyLocationAreaEncounterRateArgs";
import { CreateOneLocationAreaEncounterRateArgs } from "./args/CreateOneLocationAreaEncounterRateArgs";
import { DeleteManyLocationAreaEncounterRateArgs } from "./args/DeleteManyLocationAreaEncounterRateArgs";
import { DeleteOneLocationAreaEncounterRateArgs } from "./args/DeleteOneLocationAreaEncounterRateArgs";
import { FindFirstLocationAreaEncounterRateArgs } from "./args/FindFirstLocationAreaEncounterRateArgs";
import { FindFirstLocationAreaEncounterRateOrThrowArgs } from "./args/FindFirstLocationAreaEncounterRateOrThrowArgs";
import { FindManyLocationAreaEncounterRateArgs } from "./args/FindManyLocationAreaEncounterRateArgs";
import { FindUniqueLocationAreaEncounterRateArgs } from "./args/FindUniqueLocationAreaEncounterRateArgs";
import { FindUniqueLocationAreaEncounterRateOrThrowArgs } from "./args/FindUniqueLocationAreaEncounterRateOrThrowArgs";
import { GroupByLocationAreaEncounterRateArgs } from "./args/GroupByLocationAreaEncounterRateArgs";
import { UpdateManyLocationAreaEncounterRateArgs } from "./args/UpdateManyLocationAreaEncounterRateArgs";
import { UpdateOneLocationAreaEncounterRateArgs } from "./args/UpdateOneLocationAreaEncounterRateArgs";
import { UpsertOneLocationAreaEncounterRateArgs } from "./args/UpsertOneLocationAreaEncounterRateArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { LocationAreaEncounterRate } from "../../../models/LocationAreaEncounterRate";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateLocationAreaEncounterRate } from "../../outputs/AggregateLocationAreaEncounterRate";
import { CreateManyAndReturnLocationAreaEncounterRate } from "../../outputs/CreateManyAndReturnLocationAreaEncounterRate";
import { LocationAreaEncounterRateGroupBy } from "../../outputs/LocationAreaEncounterRateGroupBy";

@TypeGraphQL.Resolver(_of => LocationAreaEncounterRate)
export class LocationAreaEncounterRateCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateLocationAreaEncounterRate, {
    nullable: false
  })
  async aggregateLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLocationAreaEncounterRateArgs): Promise<AggregateLocationAreaEncounterRate> {
    return getPrismaFromContext(ctx).locationAreaEncounterRates.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyLocationAreaEncounterRateArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLocationAreaEncounterRate], {
    nullable: false
  })
  async createManyAndReturnLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnLocationAreaEncounterRateArgs): Promise<CreateManyAndReturnLocationAreaEncounterRate[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LocationAreaEncounterRate, {
    nullable: false
  })
  async createOneLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneLocationAreaEncounterRateArgs): Promise<LocationAreaEncounterRate> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyLocationAreaEncounterRateArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LocationAreaEncounterRate, {
    nullable: true
  })
  async deleteOneLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneLocationAreaEncounterRateArgs): Promise<LocationAreaEncounterRate | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationAreaEncounterRate, {
    nullable: true
  })
  async findFirstLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationAreaEncounterRateArgs): Promise<LocationAreaEncounterRate | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationAreaEncounterRate, {
    nullable: true
  })
  async findFirstLocationAreaEncounterRateOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationAreaEncounterRateOrThrowArgs): Promise<LocationAreaEncounterRate | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LocationAreaEncounterRate], {
    nullable: false
  })
  async locationAreaEncounterRates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyLocationAreaEncounterRateArgs): Promise<LocationAreaEncounterRate[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationAreaEncounterRate, {
    nullable: true
  })
  async locationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationAreaEncounterRateArgs): Promise<LocationAreaEncounterRate | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => LocationAreaEncounterRate, {
    nullable: true
  })
  async getLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationAreaEncounterRateOrThrowArgs): Promise<LocationAreaEncounterRate | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LocationAreaEncounterRateGroupBy], {
    nullable: false
  })
  async groupByLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLocationAreaEncounterRateArgs): Promise<LocationAreaEncounterRateGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyLocationAreaEncounterRateArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LocationAreaEncounterRate, {
    nullable: true
  })
  async updateOneLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneLocationAreaEncounterRateArgs): Promise<LocationAreaEncounterRate | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => LocationAreaEncounterRate, {
    nullable: false
  })
  async upsertOneLocationAreaEncounterRate(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneLocationAreaEncounterRateArgs): Promise<LocationAreaEncounterRate> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreaEncounterRates.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
