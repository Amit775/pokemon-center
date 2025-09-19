import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnSuperContestComboArgs } from "./args/CreateManyAndReturnSuperContestComboArgs";
import { SuperContestCombo } from "../../../models/SuperContestCombo";
import { CreateManyAndReturnSuperContestCombo } from "../../outputs/CreateManyAndReturnSuperContestCombo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestCombo)
export class CreateManyAndReturnSuperContestComboResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnSuperContestCombo], {
    nullable: false
  })
  async createManyAndReturnSuperContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnSuperContestComboArgs): Promise<CreateManyAndReturnSuperContestCombo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
