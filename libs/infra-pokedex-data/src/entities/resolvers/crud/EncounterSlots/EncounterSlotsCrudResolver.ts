import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncounterSlotsArgs } from "./args/AggregateEncounterSlotsArgs";
import { FindFirstEncounterSlotsArgs } from "./args/FindFirstEncounterSlotsArgs";
import { FindFirstEncounterSlotsOrThrowArgs } from "./args/FindFirstEncounterSlotsOrThrowArgs";
import { FindManyEncounterSlotsArgs } from "./args/FindManyEncounterSlotsArgs";
import { FindUniqueEncounterSlotsArgs } from "./args/FindUniqueEncounterSlotsArgs";
import { FindUniqueEncounterSlotsOrThrowArgs } from "./args/FindUniqueEncounterSlotsOrThrowArgs";
import { GroupByEncounterSlotsArgs } from "./args/GroupByEncounterSlotsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { EncounterSlots } from "../../../models/EncounterSlots";
import { AggregateEncounterSlots } from "../../outputs/AggregateEncounterSlots";
import { EncounterSlotsGroupBy } from "../../outputs/EncounterSlotsGroupBy";

@TypeGraphQL.Resolver(_of => EncounterSlots)
export class EncounterSlotsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateEncounterSlots, {
    nullable: false
  })
  async aggregateEncounterSlots(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEncounterSlotsArgs): Promise<AggregateEncounterSlots> {
    return getPrismaFromContext(ctx).encounterSlots.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterSlots, {
    nullable: true
  })
  async findFirstEncounterSlots(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterSlotsArgs): Promise<EncounterSlots | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterSlots, {
    nullable: true
  })
  async findFirstEncounterSlotsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterSlotsOrThrowArgs): Promise<EncounterSlots | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EncounterSlots], {
    nullable: false
  })
  async findManyEncounterSlots(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEncounterSlotsArgs): Promise<EncounterSlots[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterSlots, {
    nullable: true
  })
  async findUniqueEncounterSlots(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterSlotsArgs): Promise<EncounterSlots | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterSlots, {
    nullable: true
  })
  async findUniqueEncounterSlotsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterSlotsOrThrowArgs): Promise<EncounterSlots | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EncounterSlotsGroupBy], {
    nullable: false
  })
  async groupByEncounterSlots(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEncounterSlotsArgs): Promise<EncounterSlotsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}