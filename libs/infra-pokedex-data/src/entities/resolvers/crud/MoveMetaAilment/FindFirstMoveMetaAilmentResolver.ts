import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoveMetaAilmentArgs } from "./args/FindFirstMoveMetaAilmentArgs";
import { MoveMetaAilment } from "../../../models/MoveMetaAilment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaAilment)
export class FindFirstMoveMetaAilmentResolver {
  @TypeGraphQL.Query(_returns => MoveMetaAilment, {
    nullable: true
  })
  async findFirstMoveMetaAilment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaAilmentArgs): Promise<MoveMetaAilment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
