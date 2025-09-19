import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyContestEffectArgs } from "./args/FindManyContestEffectArgs";
import { ContestEffect } from "../../../models/ContestEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestEffect)
export class FindManyContestEffectResolver {
  @TypeGraphQL.Query(_returns => [ContestEffect], {
    nullable: false
  })
  async contestEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyContestEffectArgs): Promise<ContestEffect[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestEffects.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
