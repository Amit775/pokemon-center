import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMoveFlagsArgs } from "./args/CreateManyAndReturnMoveFlagsArgs";
import { MoveFlags } from "../../../models/MoveFlags";
import { CreateManyAndReturnMoveFlags } from "../../outputs/CreateManyAndReturnMoveFlags";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveFlags)
export class CreateManyAndReturnMoveFlagsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoveFlags], {
    nullable: false
  })
  async createManyAndReturnMoveFlags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveFlagsArgs): Promise<CreateManyAndReturnMoveFlags[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
