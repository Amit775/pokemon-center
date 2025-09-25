import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokedexVersionGroupArgs } from "./args/AggregatePokedexVersionGroupArgs";
import { FindFirstPokedexVersionGroupArgs } from "./args/FindFirstPokedexVersionGroupArgs";
import { FindFirstPokedexVersionGroupOrThrowArgs } from "./args/FindFirstPokedexVersionGroupOrThrowArgs";
import { FindManyPokedexVersionGroupArgs } from "./args/FindManyPokedexVersionGroupArgs";
import { FindUniquePokedexVersionGroupArgs } from "./args/FindUniquePokedexVersionGroupArgs";
import { FindUniquePokedexVersionGroupOrThrowArgs } from "./args/FindUniquePokedexVersionGroupOrThrowArgs";
import { GroupByPokedexVersionGroupArgs } from "./args/GroupByPokedexVersionGroupArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokedexVersionGroup } from "../../../models/PokedexVersionGroup";
import { AggregatePokedexVersionGroup } from "../../outputs/AggregatePokedexVersionGroup";
import { PokedexVersionGroupGroupBy } from "../../outputs/PokedexVersionGroupGroupBy";

@TypeGraphQL.Resolver(_of => PokedexVersionGroup)
export class PokedexVersionGroupCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokedexVersionGroup, {
    nullable: false
  })
  async aggregatePokedexVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokedexVersionGroupArgs): Promise<AggregatePokedexVersionGroup> {
    return getPrismaFromContext(ctx).pokedexVersionGroups.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokedexVersionGroup, {
    nullable: true
  })
  async findFirstPokedexVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokedexVersionGroupArgs): Promise<PokedexVersionGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokedexVersionGroup, {
    nullable: true
  })
  async findFirstPokedexVersionGroupOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokedexVersionGroupOrThrowArgs): Promise<PokedexVersionGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokedexVersionGroup], {
    nullable: false
  })
  async pokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokedexVersionGroupArgs): Promise<PokedexVersionGroup[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokedexVersionGroup, {
    nullable: true
  })
  async pokedexVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokedexVersionGroupArgs): Promise<PokedexVersionGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokedexVersionGroup, {
    nullable: true
  })
  async getPokedexVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokedexVersionGroupOrThrowArgs): Promise<PokedexVersionGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokedexVersionGroupGroupBy], {
    nullable: false
  })
  async groupByPokedexVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokedexVersionGroupArgs): Promise<PokedexVersionGroupGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}