import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSuperContestComboArgs } from "./args/FindFirstSuperContestComboArgs";
import { SuperContestCombo } from "../../../models/SuperContestCombo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestCombo)
export class FindFirstSuperContestComboResolver {
  @TypeGraphQL.Query(_returns => SuperContestCombo, {
    nullable: true
  })
  async findFirstSuperContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSuperContestComboArgs): Promise<SuperContestCombo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
