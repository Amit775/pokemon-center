import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMoveEffectsArgs } from "./args/CreateManyAndReturnMoveEffectsArgs";
import { MoveEffects } from "../../../models/MoveEffects";
import { CreateManyAndReturnMoveEffects } from "../../outputs/CreateManyAndReturnMoveEffects";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveEffects)
export class CreateManyAndReturnMoveEffectsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoveEffects], {
    nullable: false
  })
  async createManyAndReturnMoveEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveEffectsArgs): Promise<CreateManyAndReturnMoveEffects[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveEffects.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
