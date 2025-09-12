import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMachinesArgs } from "./args/AggregateMachinesArgs";
import { Machines } from "../../../models/Machines";
import { AggregateMachines } from "../../outputs/AggregateMachines";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Machines)
export class AggregateMachinesResolver {
  @TypeGraphQL.Query(_returns => AggregateMachines, {
    nullable: false
  })
  async aggregateMachines(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMachinesArgs): Promise<AggregateMachines> {
    return getPrismaFromContext(ctx).machines.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
