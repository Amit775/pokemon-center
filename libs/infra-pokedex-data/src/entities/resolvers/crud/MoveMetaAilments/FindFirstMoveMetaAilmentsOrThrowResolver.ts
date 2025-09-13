import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoveMetaAilmentsOrThrowArgs } from "./args/FindFirstMoveMetaAilmentsOrThrowArgs";
import { MoveMetaAilments } from "../../../models/MoveMetaAilments";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaAilments)
export class FindFirstMoveMetaAilmentsOrThrowResolver {
  @TypeGraphQL.Query(_returns => MoveMetaAilments, {
    nullable: true
  })
  async findFirstMoveMetaAilmentsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaAilmentsOrThrowArgs): Promise<MoveMetaAilments | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
