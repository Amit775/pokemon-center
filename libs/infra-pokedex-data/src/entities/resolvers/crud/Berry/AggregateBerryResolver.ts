import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateBerryArgs } from "./args/AggregateBerryArgs";
import { Berry } from "../../../models/Berry";
import { AggregateBerry } from "../../outputs/AggregateBerry";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Berry)
export class AggregateBerryResolver {
  @TypeGraphQL.Query(_returns => AggregateBerry, {
    nullable: false
  })
  async aggregateBerry(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBerryArgs): Promise<AggregateBerry> {
    return getPrismaFromContext(ctx).berries.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
