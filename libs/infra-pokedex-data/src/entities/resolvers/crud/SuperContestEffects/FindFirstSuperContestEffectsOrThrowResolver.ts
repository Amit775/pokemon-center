import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSuperContestEffectsOrThrowArgs } from "./args/FindFirstSuperContestEffectsOrThrowArgs";
import { SuperContestEffects } from "../../../models/SuperContestEffects";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestEffects)
export class FindFirstSuperContestEffectsOrThrowResolver {
  @TypeGraphQL.Query(_returns => SuperContestEffects, {
    nullable: true
  })
  async findFirstSuperContestEffectsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSuperContestEffectsOrThrowArgs): Promise<SuperContestEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
