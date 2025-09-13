import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokedexVersionGroupsArgs } from "./args/AggregatePokedexVersionGroupsArgs";
import { FindFirstPokedexVersionGroupsArgs } from "./args/FindFirstPokedexVersionGroupsArgs";
import { FindFirstPokedexVersionGroupsOrThrowArgs } from "./args/FindFirstPokedexVersionGroupsOrThrowArgs";
import { FindManyPokedexVersionGroupsArgs } from "./args/FindManyPokedexVersionGroupsArgs";
import { FindUniquePokedexVersionGroupsArgs } from "./args/FindUniquePokedexVersionGroupsArgs";
import { FindUniquePokedexVersionGroupsOrThrowArgs } from "./args/FindUniquePokedexVersionGroupsOrThrowArgs";
import { GroupByPokedexVersionGroupsArgs } from "./args/GroupByPokedexVersionGroupsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokedexVersionGroups } from "../../../models/PokedexVersionGroups";
import { AggregatePokedexVersionGroups } from "../../outputs/AggregatePokedexVersionGroups";
import { PokedexVersionGroupsGroupBy } from "../../outputs/PokedexVersionGroupsGroupBy";

@TypeGraphQL.Resolver(_of => PokedexVersionGroups)
export class PokedexVersionGroupsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokedexVersionGroups, {
    nullable: false
  })
  async aggregatePokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokedexVersionGroupsArgs): Promise<AggregatePokedexVersionGroups> {
    return getPrismaFromContext(ctx).pokedexVersionGroups.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => PokedexVersionGroups, {
    nullable: true
  })
  async findFirstPokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokedexVersionGroupsArgs): Promise<PokedexVersionGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokedexVersionGroups, {
    nullable: true
  })
  async findFirstPokedexVersionGroupsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokedexVersionGroupsOrThrowArgs): Promise<PokedexVersionGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokedexVersionGroups], {
    nullable: false
  })
  async findManyPokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokedexVersionGroupsArgs): Promise<PokedexVersionGroups[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokedexVersionGroups, {
    nullable: true
  })
  async findUniquePokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokedexVersionGroupsArgs): Promise<PokedexVersionGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokedexVersionGroups, {
    nullable: true
  })
  async findUniquePokedexVersionGroupsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokedexVersionGroupsOrThrowArgs): Promise<PokedexVersionGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokedexVersionGroupsGroupBy], {
    nullable: false
  })
  async groupByPokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokedexVersionGroupsArgs): Promise<PokedexVersionGroupsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}