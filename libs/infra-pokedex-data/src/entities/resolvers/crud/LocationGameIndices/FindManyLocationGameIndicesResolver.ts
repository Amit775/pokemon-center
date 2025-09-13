import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyLocationGameIndicesArgs } from "./args/FindManyLocationGameIndicesArgs";
import { LocationGameIndices } from "../../../models/LocationGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationGameIndices)
export class FindManyLocationGameIndicesResolver {
  @TypeGraphQL.Query(_returns => [LocationGameIndices], {
    nullable: false
  })
  async findManyLocationGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyLocationGameIndicesArgs): Promise<LocationGameIndices[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
