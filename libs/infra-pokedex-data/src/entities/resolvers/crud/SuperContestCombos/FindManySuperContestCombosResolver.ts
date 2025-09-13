import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManySuperContestCombosArgs } from "./args/FindManySuperContestCombosArgs";
import { SuperContestCombos } from "../../../models/SuperContestCombos";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestCombos)
export class FindManySuperContestCombosResolver {
  @TypeGraphQL.Query(_returns => [SuperContestCombos], {
    nullable: false
  })
  async findManySuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySuperContestCombosArgs): Promise<SuperContestCombos[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
