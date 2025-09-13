import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMachinesArgs } from "./args/AggregateMachinesArgs";
import { FindFirstMachinesArgs } from "./args/FindFirstMachinesArgs";
import { FindFirstMachinesOrThrowArgs } from "./args/FindFirstMachinesOrThrowArgs";
import { FindManyMachinesArgs } from "./args/FindManyMachinesArgs";
import { FindUniqueMachinesArgs } from "./args/FindUniqueMachinesArgs";
import { FindUniqueMachinesOrThrowArgs } from "./args/FindUniqueMachinesOrThrowArgs";
import { GroupByMachinesArgs } from "./args/GroupByMachinesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Machines } from "../../../models/Machines";
import { AggregateMachines } from "../../outputs/AggregateMachines";
import { MachinesGroupBy } from "../../outputs/MachinesGroupBy";

@TypeGraphQL.Resolver(_of => Machines)
export class MachinesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMachines, {
    nullable: false
  })
  async aggregateMachines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMachinesArgs): Promise<AggregateMachines> {
    return getPrismaFromContext(ctx).machines.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => Machines, {
    nullable: true
  })
  async findFirstMachines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMachinesArgs): Promise<Machines | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).machines.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Machines, {
    nullable: true
  })
  async findFirstMachinesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMachinesOrThrowArgs): Promise<Machines | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).machines.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Machines], {
    nullable: false
  })
  async findManyMachines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMachinesArgs): Promise<Machines[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).machines.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Machines, {
    nullable: true
  })
  async findUniqueMachines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMachinesArgs): Promise<Machines | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).machines.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Machines, {
    nullable: true
  })
  async findUniqueMachinesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMachinesOrThrowArgs): Promise<Machines | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).machines.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MachinesGroupBy], {
    nullable: false
  })
  async groupByMachines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMachinesArgs): Promise<MachinesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).machines.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}