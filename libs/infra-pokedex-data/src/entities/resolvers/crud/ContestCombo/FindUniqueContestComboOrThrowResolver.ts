import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueContestComboOrThrowArgs } from "./args/FindUniqueContestComboOrThrowArgs";
import { ContestCombo } from "../../../models/ContestCombo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestCombo)
export class FindUniqueContestComboOrThrowResolver {
  @TypeGraphQL.Query(_returns => ContestCombo, {
    nullable: true
  })
  async getContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueContestComboOrThrowArgs): Promise<ContestCombo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
