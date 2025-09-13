import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMoveMetaAilmentsArgs } from "./args/FindManyMoveMetaAilmentsArgs";
import { MoveMetaAilments } from "../../../models/MoveMetaAilments";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaAilments)
export class FindManyMoveMetaAilmentsResolver {
  @TypeGraphQL.Query(_returns => [MoveMetaAilments], {
    nullable: false
  })
  async findManyMoveMetaAilments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveMetaAilmentsArgs): Promise<MoveMetaAilments[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
