import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstRegionsOrThrowArgs } from "./args/FindFirstRegionsOrThrowArgs";
import { Regions } from "../../../models/Regions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Regions)
export class FindFirstRegionsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Regions, {
    nullable: true
  })
  async findFirstRegionsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstRegionsOrThrowArgs): Promise<Regions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).regions.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
