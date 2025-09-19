import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoveFlagMapOrThrowArgs } from "./args/FindFirstMoveFlagMapOrThrowArgs";
import { MoveFlagMap } from "../../../models/MoveFlagMap";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveFlagMap)
export class FindFirstMoveFlagMapOrThrowResolver {
  @TypeGraphQL.Query(_returns => MoveFlagMap, {
    nullable: true
  })
  async findFirstMoveFlagMapOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveFlagMapOrThrowArgs): Promise<MoveFlagMap | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlagMap.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
