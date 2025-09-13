import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMoveFlagsOrThrowArgs } from "./args/FindUniqueMoveFlagsOrThrowArgs";
import { MoveFlags } from "../../../models/MoveFlags";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveFlags)
export class FindUniqueMoveFlagsOrThrowResolver {
  @TypeGraphQL.Query(_returns => MoveFlags, {
    nullable: true
  })
  async findUniqueMoveFlagsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveFlagsOrThrowArgs): Promise<MoveFlags | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
