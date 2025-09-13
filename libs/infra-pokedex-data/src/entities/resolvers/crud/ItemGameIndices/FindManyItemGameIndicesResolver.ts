import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyItemGameIndicesArgs } from "./args/FindManyItemGameIndicesArgs";
import { ItemGameIndices } from "../../../models/ItemGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemGameIndices)
export class FindManyItemGameIndicesResolver {
  @TypeGraphQL.Query(_returns => [ItemGameIndices], {
    nullable: false
  })
  async findManyItemGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyItemGameIndicesArgs): Promise<ItemGameIndices[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
