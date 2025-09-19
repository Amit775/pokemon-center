import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnSuperContestEffectArgs } from "./args/CreateManyAndReturnSuperContestEffectArgs";
import { SuperContestEffect } from "../../../models/SuperContestEffect";
import { CreateManyAndReturnSuperContestEffect } from "../../outputs/CreateManyAndReturnSuperContestEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestEffect)
export class CreateManyAndReturnSuperContestEffectResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnSuperContestEffect], {
    nullable: false
  })
  async createManyAndReturnSuperContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnSuperContestEffectArgs): Promise<CreateManyAndReturnSuperContestEffect[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
