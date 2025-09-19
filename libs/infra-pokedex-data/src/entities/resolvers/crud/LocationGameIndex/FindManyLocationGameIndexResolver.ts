import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyLocationGameIndexArgs } from "./args/FindManyLocationGameIndexArgs";
import { LocationGameIndex } from "../../../models/LocationGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationGameIndex)
export class FindManyLocationGameIndexResolver {
  @TypeGraphQL.Query(_returns => [LocationGameIndex], {
    nullable: false
  })
  async locationGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyLocationGameIndexArgs): Promise<LocationGameIndex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
