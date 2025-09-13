import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAbilitiesArgs } from "./args/AggregateAbilitiesArgs";
import { FindFirstAbilitiesArgs } from "./args/FindFirstAbilitiesArgs";
import { FindFirstAbilitiesOrThrowArgs } from "./args/FindFirstAbilitiesOrThrowArgs";
import { FindManyAbilitiesArgs } from "./args/FindManyAbilitiesArgs";
import { FindUniqueAbilitiesArgs } from "./args/FindUniqueAbilitiesArgs";
import { FindUniqueAbilitiesOrThrowArgs } from "./args/FindUniqueAbilitiesOrThrowArgs";
import { GroupByAbilitiesArgs } from "./args/GroupByAbilitiesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Abilities } from "../../../models/Abilities";
import { AbilitiesGroupBy } from "../../outputs/AbilitiesGroupBy";
import { AggregateAbilities } from "../../outputs/AggregateAbilities";

@TypeGraphQL.Resolver(_of => Abilities)
export class AbilitiesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateAbilities, {
    nullable: false
  })
  async aggregateAbilities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAbilitiesArgs): Promise<AggregateAbilities> {
    return getPrismaFromContext(ctx).abilities.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => Abilities, {
    nullable: true
  })
  async findFirstAbilities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAbilitiesArgs): Promise<Abilities | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).abilities.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Abilities, {
    nullable: true
  })
  async findFirstAbilitiesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAbilitiesOrThrowArgs): Promise<Abilities | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).abilities.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Abilities], {
    nullable: false
  })
  async findManyAbilities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyAbilitiesArgs): Promise<Abilities[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).abilities.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Abilities, {
    nullable: true
  })
  async findUniqueAbilities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAbilitiesArgs): Promise<Abilities | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).abilities.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Abilities, {
    nullable: true
  })
  async findUniqueAbilitiesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAbilitiesOrThrowArgs): Promise<Abilities | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).abilities.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [AbilitiesGroupBy], {
    nullable: false
  })
  async groupByAbilities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAbilitiesArgs): Promise<AbilitiesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).abilities.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}