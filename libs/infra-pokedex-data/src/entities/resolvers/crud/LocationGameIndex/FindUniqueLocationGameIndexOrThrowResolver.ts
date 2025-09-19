import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLocationGameIndexOrThrowArgs } from "./args/FindUniqueLocationGameIndexOrThrowArgs";
import { LocationGameIndex } from "../../../models/LocationGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationGameIndex)
export class FindUniqueLocationGameIndexOrThrowResolver {
  @TypeGraphQL.Query(_returns => LocationGameIndex, {
    nullable: true
  })
  async getLocationGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationGameIndexOrThrowArgs): Promise<LocationGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
