import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneSuperContestCombosArgs } from "./args/DeleteOneSuperContestCombosArgs";
import { SuperContestCombos } from "../../../models/SuperContestCombos";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestCombos)
export class DeleteOneSuperContestCombosResolver {
  @TypeGraphQL.Mutation(_returns => SuperContestCombos, {
    nullable: true
  })
  async deleteOneSuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSuperContestCombosArgs): Promise<SuperContestCombos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
