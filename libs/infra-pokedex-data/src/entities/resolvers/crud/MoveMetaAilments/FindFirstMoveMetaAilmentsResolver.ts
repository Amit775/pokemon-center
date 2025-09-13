import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoveMetaAilmentsArgs } from "./args/FindFirstMoveMetaAilmentsArgs";
import { MoveMetaAilments } from "../../../models/MoveMetaAilments";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaAilments)
export class FindFirstMoveMetaAilmentsResolver {
  @TypeGraphQL.Query(_returns => MoveMetaAilments, {
    nullable: true
  })
  async findFirstMoveMetaAilments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaAilmentsArgs): Promise<MoveMetaAilments | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
