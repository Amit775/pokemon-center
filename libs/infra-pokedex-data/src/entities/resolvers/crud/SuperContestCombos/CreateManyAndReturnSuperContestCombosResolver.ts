import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnSuperContestCombosArgs } from "./args/CreateManyAndReturnSuperContestCombosArgs";
import { SuperContestCombos } from "../../../models/SuperContestCombos";
import { CreateManyAndReturnSuperContestCombos } from "../../outputs/CreateManyAndReturnSuperContestCombos";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestCombos)
export class CreateManyAndReturnSuperContestCombosResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnSuperContestCombos], {
    nullable: false
  })
  async createManyAndReturnSuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnSuperContestCombosArgs): Promise<CreateManyAndReturnSuperContestCombos[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
