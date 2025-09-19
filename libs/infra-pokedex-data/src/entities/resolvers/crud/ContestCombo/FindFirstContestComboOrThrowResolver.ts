import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstContestComboOrThrowArgs } from "./args/FindFirstContestComboOrThrowArgs";
import { ContestCombo } from "../../../models/ContestCombo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestCombo)
export class FindFirstContestComboOrThrowResolver {
  @TypeGraphQL.Query(_returns => ContestCombo, {
    nullable: true
  })
  async findFirstContestComboOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstContestComboOrThrowArgs): Promise<ContestCombo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
