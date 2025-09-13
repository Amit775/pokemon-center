import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueContestEffectsOrThrowArgs } from "./args/FindUniqueContestEffectsOrThrowArgs";
import { ContestEffects } from "../../../models/ContestEffects";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestEffects)
export class FindUniqueContestEffectsOrThrowResolver {
  @TypeGraphQL.Query(_returns => ContestEffects, {
    nullable: true
  })
  async findUniqueContestEffectsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueContestEffectsOrThrowArgs): Promise<ContestEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestEffects.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
