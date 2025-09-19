import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveFlagArgs } from "./args/AggregateMoveFlagArgs";
import { MoveFlag } from "../../../models/MoveFlag";
import { AggregateMoveFlag } from "../../outputs/AggregateMoveFlag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveFlag)
export class AggregateMoveFlagResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveFlag, {
    nullable: false
  })
  async aggregateMoveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveFlagArgs): Promise<AggregateMoveFlag> {
    return getPrismaFromContext(ctx).moveFlags.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
