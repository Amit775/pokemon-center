import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMoveMetaAilmentArgs } from "./args/FindManyMoveMetaAilmentArgs";
import { MoveMetaAilment } from "../../../models/MoveMetaAilment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaAilment)
export class FindManyMoveMetaAilmentResolver {
  @TypeGraphQL.Query(_returns => [MoveMetaAilment], {
    nullable: false
  })
  async moveMetaAilments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveMetaAilmentArgs): Promise<MoveMetaAilment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
