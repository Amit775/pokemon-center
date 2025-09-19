import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMoveMetaAilmentOrThrowArgs } from "./args/FindUniqueMoveMetaAilmentOrThrowArgs";
import { MoveMetaAilment } from "../../../models/MoveMetaAilment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaAilment)
export class FindUniqueMoveMetaAilmentOrThrowResolver {
  @TypeGraphQL.Query(_returns => MoveMetaAilment, {
    nullable: true
  })
  async getMoveMetaAilment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveMetaAilmentOrThrowArgs): Promise<MoveMetaAilment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
