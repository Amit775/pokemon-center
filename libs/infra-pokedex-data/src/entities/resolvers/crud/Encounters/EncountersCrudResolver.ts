import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncountersArgs } from "./args/AggregateEncountersArgs";
import { FindFirstEncountersArgs } from "./args/FindFirstEncountersArgs";
import { FindFirstEncountersOrThrowArgs } from "./args/FindFirstEncountersOrThrowArgs";
import { FindManyEncountersArgs } from "./args/FindManyEncountersArgs";
import { FindUniqueEncountersArgs } from "./args/FindUniqueEncountersArgs";
import { FindUniqueEncountersOrThrowArgs } from "./args/FindUniqueEncountersOrThrowArgs";
import { GroupByEncountersArgs } from "./args/GroupByEncountersArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Encounters } from "../../../models/Encounters";
import { AggregateEncounters } from "../../outputs/AggregateEncounters";
import { EncountersGroupBy } from "../../outputs/EncountersGroupBy";

@TypeGraphQL.Resolver(_of => Encounters)
export class EncountersCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateEncounters, {
    nullable: false
  })
  async aggregateEncounters(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEncountersArgs): Promise<AggregateEncounters> {
    return getPrismaFromContext(ctx).encounters.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => Encounters, {
    nullable: true
  })
  async findFirstEncounters(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncountersArgs): Promise<Encounters | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Encounters, {
    nullable: true
  })
  async findFirstEncountersOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncountersOrThrowArgs): Promise<Encounters | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Encounters], {
    nullable: false
  })
  async findManyEncounters(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEncountersArgs): Promise<Encounters[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Encounters, {
    nullable: true
  })
  async findUniqueEncounters(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncountersArgs): Promise<Encounters | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Encounters, {
    nullable: true
  })
  async findUniqueEncountersOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncountersOrThrowArgs): Promise<Encounters | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EncountersGroupBy], {
    nullable: false
  })
  async groupByEncounters(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEncountersArgs): Promise<EncountersGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}