import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueStatsOrThrowArgs } from "./args/FindUniqueStatsOrThrowArgs";
import { Stats } from "../../../models/Stats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Stats)
export class FindUniqueStatsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Stats, {
    nullable: true
  })
  async findUniqueStatsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueStatsOrThrowArgs): Promise<Stats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).stats.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
