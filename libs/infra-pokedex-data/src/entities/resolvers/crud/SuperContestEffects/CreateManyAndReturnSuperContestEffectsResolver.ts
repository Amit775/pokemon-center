import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnSuperContestEffectsArgs } from "./args/CreateManyAndReturnSuperContestEffectsArgs";
import { SuperContestEffects } from "../../../models/SuperContestEffects";
import { CreateManyAndReturnSuperContestEffects } from "../../outputs/CreateManyAndReturnSuperContestEffects";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestEffects)
export class CreateManyAndReturnSuperContestEffectsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnSuperContestEffects], {
    nullable: false
  })
  async createManyAndReturnSuperContestEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnSuperContestEffectsArgs): Promise<CreateManyAndReturnSuperContestEffects[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
