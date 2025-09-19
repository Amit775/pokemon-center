import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoveMetaAilmentOrThrowArgs } from "./args/FindFirstMoveMetaAilmentOrThrowArgs";
import { MoveMetaAilment } from "../../../models/MoveMetaAilment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaAilment)
export class FindFirstMoveMetaAilmentOrThrowResolver {
  @TypeGraphQL.Query(_returns => MoveMetaAilment, {
    nullable: true
  })
  async findFirstMoveMetaAilmentOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaAilmentOrThrowArgs): Promise<MoveMetaAilment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
