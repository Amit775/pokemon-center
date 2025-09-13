import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateGenerationsArgs } from "./args/AggregateGenerationsArgs";
import { FindFirstGenerationsArgs } from "./args/FindFirstGenerationsArgs";
import { FindFirstGenerationsOrThrowArgs } from "./args/FindFirstGenerationsOrThrowArgs";
import { FindManyGenerationsArgs } from "./args/FindManyGenerationsArgs";
import { FindUniqueGenerationsArgs } from "./args/FindUniqueGenerationsArgs";
import { FindUniqueGenerationsOrThrowArgs } from "./args/FindUniqueGenerationsOrThrowArgs";
import { GroupByGenerationsArgs } from "./args/GroupByGenerationsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Generations } from "../../../models/Generations";
import { AggregateGenerations } from "../../outputs/AggregateGenerations";
import { GenerationsGroupBy } from "../../outputs/GenerationsGroupBy";

@TypeGraphQL.Resolver(_of => Generations)
export class GenerationsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateGenerations, {
    nullable: false
  })
  async aggregateGenerations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGenerationsArgs): Promise<AggregateGenerations> {
    return getPrismaFromContext(ctx).generations.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => Generations, {
    nullable: true
  })
  async findFirstGenerations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGenerationsArgs): Promise<Generations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Generations, {
    nullable: true
  })
  async findFirstGenerationsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGenerationsOrThrowArgs): Promise<Generations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Generations], {
    nullable: false
  })
  async findManyGenerations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGenerationsArgs): Promise<Generations[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Generations, {
    nullable: true
  })
  async findUniqueGenerations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGenerationsArgs): Promise<Generations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Generations, {
    nullable: true
  })
  async findUniqueGenerationsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGenerationsOrThrowArgs): Promise<Generations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GenerationsGroupBy], {
    nullable: false
  })
  async groupByGenerations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGenerationsArgs): Promise<GenerationsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}