import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMoveEffectArgs } from "./args/CreateManyAndReturnMoveEffectArgs";
import { MoveEffect } from "../../../models/MoveEffect";
import { CreateManyAndReturnMoveEffect } from "../../outputs/CreateManyAndReturnMoveEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveEffect)
export class CreateManyAndReturnMoveEffectResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoveEffect], {
    nullable: false
  })
  async createManyAndReturnMoveEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveEffectArgs): Promise<CreateManyAndReturnMoveEffect[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveEffects.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
