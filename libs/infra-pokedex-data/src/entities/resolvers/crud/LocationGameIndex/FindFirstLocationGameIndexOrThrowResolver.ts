import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLocationGameIndexOrThrowArgs } from "./args/FindFirstLocationGameIndexOrThrowArgs";
import { LocationGameIndex } from "../../../models/LocationGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationGameIndex)
export class FindFirstLocationGameIndexOrThrowResolver {
  @TypeGraphQL.Query(_returns => LocationGameIndex, {
    nullable: true
  })
  async findFirstLocationGameIndexOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationGameIndexOrThrowArgs): Promise<LocationGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
