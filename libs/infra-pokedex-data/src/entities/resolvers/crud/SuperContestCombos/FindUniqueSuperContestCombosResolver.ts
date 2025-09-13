import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSuperContestCombosArgs } from "./args/FindUniqueSuperContestCombosArgs";
import { SuperContestCombos } from "../../../models/SuperContestCombos";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestCombos)
export class FindUniqueSuperContestCombosResolver {
  @TypeGraphQL.Query(_returns => SuperContestCombos, {
    nullable: true
  })
  async findUniqueSuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSuperContestCombosArgs): Promise<SuperContestCombos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
