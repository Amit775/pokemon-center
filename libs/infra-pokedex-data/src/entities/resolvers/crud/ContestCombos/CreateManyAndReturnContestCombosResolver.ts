import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnContestCombosArgs } from "./args/CreateManyAndReturnContestCombosArgs";
import { ContestCombos } from "../../../models/ContestCombos";
import { CreateManyAndReturnContestCombos } from "../../outputs/CreateManyAndReturnContestCombos";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestCombos)
export class CreateManyAndReturnContestCombosResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnContestCombos], {
    nullable: false
  })
  async createManyAndReturnContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnContestCombosArgs): Promise<CreateManyAndReturnContestCombos[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
