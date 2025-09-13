import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMoveMetaAilmentsArgs } from "./args/FindUniqueMoveMetaAilmentsArgs";
import { MoveMetaAilments } from "../../../models/MoveMetaAilments";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaAilments)
export class FindUniqueMoveMetaAilmentsResolver {
  @TypeGraphQL.Query(_returns => MoveMetaAilments, {
    nullable: true
  })
  async findUniqueMoveMetaAilments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveMetaAilmentsArgs): Promise<MoveMetaAilments | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
