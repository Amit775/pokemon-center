import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLocationGameIndicesArgs } from "./args/FindFirstLocationGameIndicesArgs";
import { LocationGameIndices } from "../../../models/LocationGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationGameIndices)
export class FindFirstLocationGameIndicesResolver {
  @TypeGraphQL.Query(_returns => LocationGameIndices, {
    nullable: true
  })
  async findFirstLocationGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLocationGameIndicesArgs): Promise<LocationGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
