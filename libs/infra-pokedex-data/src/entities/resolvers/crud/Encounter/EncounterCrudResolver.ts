import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncounterArgs } from "./args/AggregateEncounterArgs";
import { FindFirstEncounterArgs } from "./args/FindFirstEncounterArgs";
import { FindFirstEncounterOrThrowArgs } from "./args/FindFirstEncounterOrThrowArgs";
import { FindManyEncounterArgs } from "./args/FindManyEncounterArgs";
import { FindUniqueEncounterArgs } from "./args/FindUniqueEncounterArgs";
import { FindUniqueEncounterOrThrowArgs } from "./args/FindUniqueEncounterOrThrowArgs";
import { GroupByEncounterArgs } from "./args/GroupByEncounterArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Encounter } from "../../../models/Encounter";
import { AggregateEncounter } from "../../outputs/AggregateEncounter";
import { EncounterGroupBy } from "../../outputs/EncounterGroupBy";

@TypeGraphQL.Resolver(_of => Encounter)
export class EncounterCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateEncounter, {
    nullable: false
  })
  async aggregateEncounter(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEncounterArgs): Promise<AggregateEncounter> {
    return getPrismaFromContext(ctx).encounters.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => Encounter, {
    nullable: true
  })
  async findFirstEncounter(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterArgs): Promise<Encounter | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Encounter, {
    nullable: true
  })
  async findFirstEncounterOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterOrThrowArgs): Promise<Encounter | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Encounter], {
    nullable: false
  })
  async encounters(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEncounterArgs): Promise<Encounter[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Encounter, {
    nullable: true
  })
  async encounter(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterArgs): Promise<Encounter | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Encounter, {
    nullable: true
  })
  async getEncounter(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterOrThrowArgs): Promise<Encounter | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EncounterGroupBy], {
    nullable: false
  })
  async groupByEncounter(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEncounterArgs): Promise<EncounterGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}