import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueRegionOrThrowArgs } from "./args/FindUniqueRegionOrThrowArgs";
import { Region } from "../../../models/Region";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Region)
export class FindUniqueRegionOrThrowResolver {
  @TypeGraphQL.Query(_returns => Region, {
    nullable: true
  })
  async getRegion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueRegionOrThrowArgs): Promise<Region | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).regions.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
