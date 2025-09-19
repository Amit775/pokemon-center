import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMoveMetaAilmentArgs } from "./args/FindUniqueMoveMetaAilmentArgs";
import { MoveMetaAilment } from "../../../models/MoveMetaAilment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaAilment)
export class FindUniqueMoveMetaAilmentResolver {
  @TypeGraphQL.Query(_returns => MoveMetaAilment, {
    nullable: true
  })
  async moveMetaAilment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveMetaAilmentArgs): Promise<MoveMetaAilment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
