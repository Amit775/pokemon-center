import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSuperContestEffectsOrThrowArgs } from "./args/FindUniqueSuperContestEffectsOrThrowArgs";
import { SuperContestEffects } from "../../../models/SuperContestEffects";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestEffects)
export class FindUniqueSuperContestEffectsOrThrowResolver {
  @TypeGraphQL.Query(_returns => SuperContestEffects, {
    nullable: true
  })
  async findUniqueSuperContestEffectsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSuperContestEffectsOrThrowArgs): Promise<SuperContestEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
