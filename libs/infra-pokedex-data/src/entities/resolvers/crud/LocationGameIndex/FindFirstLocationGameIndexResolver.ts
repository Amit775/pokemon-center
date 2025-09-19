import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLocationGameIndexArgs } from "./args/FindFirstLocationGameIndexArgs";
import { LocationGameIndex } from "../../../models/LocationGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationGameIndex)
export class FindFirstLocationGameIndexResolver {
  @TypeGraphQL.Query(_returns => LocationGameIndex, {
    nullable: true
  })
  async findFirstLocationGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationGameIndexArgs): Promise<LocationGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
