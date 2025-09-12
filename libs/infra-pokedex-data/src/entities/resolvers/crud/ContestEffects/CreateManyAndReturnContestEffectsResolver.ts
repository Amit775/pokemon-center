import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnContestEffectsArgs } from "./args/CreateManyAndReturnContestEffectsArgs";
import { ContestEffects } from "../../../models/ContestEffects";
import { CreateManyAndReturnContestEffects } from "../../outputs/CreateManyAndReturnContestEffects";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestEffects)
export class CreateManyAndReturnContestEffectsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnContestEffects], {
    nullable: false
  })
  async createManyAndReturnContestEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnContestEffectsArgs): Promise<CreateManyAndReturnContestEffects[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestEffects.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
