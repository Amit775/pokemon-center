import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnContestEffectArgs } from "./args/CreateManyAndReturnContestEffectArgs";
import { ContestEffect } from "../../../models/ContestEffect";
import { CreateManyAndReturnContestEffect } from "../../outputs/CreateManyAndReturnContestEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestEffect)
export class CreateManyAndReturnContestEffectResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnContestEffect], {
    nullable: false
  })
  async createManyAndReturnContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnContestEffectArgs): Promise<CreateManyAndReturnContestEffect[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestEffects.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
