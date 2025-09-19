import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstStatOrThrowArgs } from "./args/FindFirstStatOrThrowArgs";
import { Stat } from "../../../models/Stat";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Stat)
export class FindFirstStatOrThrowResolver {
  @TypeGraphQL.Query(_returns => Stat, {
    nullable: true
  })
  async findFirstStatOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstStatOrThrowArgs): Promise<Stat | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).stats.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
