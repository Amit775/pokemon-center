import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMachineArgs } from "./args/AggregateMachineArgs";
import { Machine } from "../../../models/Machine";
import { AggregateMachine } from "../../outputs/AggregateMachine";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Machine)
export class AggregateMachineResolver {
  @TypeGraphQL.Query(_returns => AggregateMachine, {
    nullable: false
  })
  async aggregateMachine(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMachineArgs): Promise<AggregateMachine> {
    return getPrismaFromContext(ctx).machines.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
