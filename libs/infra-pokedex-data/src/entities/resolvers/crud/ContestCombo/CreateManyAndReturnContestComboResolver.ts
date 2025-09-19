import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnContestComboArgs } from "./args/CreateManyAndReturnContestComboArgs";
import { ContestCombo } from "../../../models/ContestCombo";
import { CreateManyAndReturnContestCombo } from "../../outputs/CreateManyAndReturnContestCombo";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestCombo)
export class CreateManyAndReturnContestComboResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnContestCombo], {
    nullable: false
  })
  async createManyAndReturnContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnContestComboArgs): Promise<CreateManyAndReturnContestCombo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
