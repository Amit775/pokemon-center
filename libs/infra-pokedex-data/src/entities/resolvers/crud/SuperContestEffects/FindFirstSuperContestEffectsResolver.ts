import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSuperContestEffectsArgs } from "./args/FindFirstSuperContestEffectsArgs";
import { SuperContestEffects } from "../../../models/SuperContestEffects";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestEffects)
export class FindFirstSuperContestEffectsResolver {
  @TypeGraphQL.Query(_returns => SuperContestEffects, {
    nullable: true
  })
  async findFirstSuperContestEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSuperContestEffectsArgs): Promise<SuperContestEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
