import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokedexArgs } from "./args/AggregatePokedexArgs";
import { FindFirstPokedexArgs } from "./args/FindFirstPokedexArgs";
import { FindFirstPokedexOrThrowArgs } from "./args/FindFirstPokedexOrThrowArgs";
import { FindManyPokedexArgs } from "./args/FindManyPokedexArgs";
import { FindUniquePokedexArgs } from "./args/FindUniquePokedexArgs";
import { FindUniquePokedexOrThrowArgs } from "./args/FindUniquePokedexOrThrowArgs";
import { GroupByPokedexArgs } from "./args/GroupByPokedexArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Pokedex } from "../../../models/Pokedex";
import { AggregatePokedex } from "../../outputs/AggregatePokedex";
import { PokedexGroupBy } from "../../outputs/PokedexGroupBy";

@TypeGraphQL.Resolver(_of => Pokedex)
export class PokedexCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokedex, {
    nullable: false
  })
  async aggregatePokedex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokedexArgs): Promise<AggregatePokedex> {
    return getPrismaFromContext(ctx).pokedexes.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => Pokedex, {
    nullable: true
  })
  async findFirstPokedex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokedexArgs): Promise<Pokedex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexes.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Pokedex, {
    nullable: true
  })
  async findFirstPokedexOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokedexOrThrowArgs): Promise<Pokedex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexes.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Pokedex], {
    nullable: false
  })
  async pokedexes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokedexArgs): Promise<Pokedex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexes.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Pokedex, {
    nullable: true
  })
  async pokedex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokedexArgs): Promise<Pokedex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexes.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Pokedex, {
    nullable: true
  })
  async getPokedex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokedexOrThrowArgs): Promise<Pokedex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexes.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokedexGroupBy], {
    nullable: false
  })
  async groupByPokedex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokedexArgs): Promise<PokedexGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexes.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}