import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncounterSlotArgs } from "./args/AggregateEncounterSlotArgs";
import { FindFirstEncounterSlotArgs } from "./args/FindFirstEncounterSlotArgs";
import { FindFirstEncounterSlotOrThrowArgs } from "./args/FindFirstEncounterSlotOrThrowArgs";
import { FindManyEncounterSlotArgs } from "./args/FindManyEncounterSlotArgs";
import { FindUniqueEncounterSlotArgs } from "./args/FindUniqueEncounterSlotArgs";
import { FindUniqueEncounterSlotOrThrowArgs } from "./args/FindUniqueEncounterSlotOrThrowArgs";
import { GroupByEncounterSlotArgs } from "./args/GroupByEncounterSlotArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { EncounterSlot } from "../../../models/EncounterSlot";
import { AggregateEncounterSlot } from "../../outputs/AggregateEncounterSlot";
import { EncounterSlotGroupBy } from "../../outputs/EncounterSlotGroupBy";

@TypeGraphQL.Resolver(_of => EncounterSlot)
export class EncounterSlotCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateEncounterSlot, {
    nullable: false
  })
  async aggregateEncounterSlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEncounterSlotArgs): Promise<AggregateEncounterSlot> {
    return getPrismaFromContext(ctx).encounterSlots.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterSlot, {
    nullable: true
  })
  async findFirstEncounterSlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterSlotArgs): Promise<EncounterSlot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterSlot, {
    nullable: true
  })
  async findFirstEncounterSlotOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterSlotOrThrowArgs): Promise<EncounterSlot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EncounterSlot], {
    nullable: false
  })
  async encounterSlots(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEncounterSlotArgs): Promise<EncounterSlot[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterSlot, {
    nullable: true
  })
  async encounterSlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterSlotArgs): Promise<EncounterSlot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterSlot, {
    nullable: true
  })
  async getEncounterSlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterSlotOrThrowArgs): Promise<EncounterSlot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EncounterSlotGroupBy], {
    nullable: false
  })
  async groupByEncounterSlot(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEncounterSlotArgs): Promise<EncounterSlotGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}