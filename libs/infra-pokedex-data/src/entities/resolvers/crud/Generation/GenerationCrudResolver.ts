import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateGenerationArgs } from "./args/AggregateGenerationArgs";
import { FindFirstGenerationArgs } from "./args/FindFirstGenerationArgs";
import { FindFirstGenerationOrThrowArgs } from "./args/FindFirstGenerationOrThrowArgs";
import { FindManyGenerationArgs } from "./args/FindManyGenerationArgs";
import { FindUniqueGenerationArgs } from "./args/FindUniqueGenerationArgs";
import { FindUniqueGenerationOrThrowArgs } from "./args/FindUniqueGenerationOrThrowArgs";
import { GroupByGenerationArgs } from "./args/GroupByGenerationArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Generation } from "../../../models/Generation";
import { AggregateGeneration } from "../../outputs/AggregateGeneration";
import { GenerationGroupBy } from "../../outputs/GenerationGroupBy";

@TypeGraphQL.Resolver(_of => Generation)
export class GenerationCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateGeneration, {
    nullable: false
  })
  async aggregateGeneration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGenerationArgs): Promise<AggregateGeneration> {
    return getPrismaFromContext(ctx).generations.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => Generation, {
    nullable: true
  })
  async findFirstGeneration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGenerationArgs): Promise<Generation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Generation, {
    nullable: true
  })
  async findFirstGenerationOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGenerationOrThrowArgs): Promise<Generation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Generation], {
    nullable: false
  })
  async generations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGenerationArgs): Promise<Generation[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Generation, {
    nullable: true
  })
  async generation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGenerationArgs): Promise<Generation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Generation, {
    nullable: true
  })
  async getGeneration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGenerationOrThrowArgs): Promise<Generation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GenerationGroupBy], {
    nullable: false
  })
  async groupByGeneration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGenerationArgs): Promise<GenerationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}