import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueItemGameIndicesArgs } from "./args/FindUniqueItemGameIndicesArgs";
import { ItemGameIndices } from "../../../models/ItemGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemGameIndices)
export class FindUniqueItemGameIndicesResolver {
  @TypeGraphQL.Query(_returns => ItemGameIndices, {
    nullable: true
  })
  async findUniqueItemGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemGameIndicesArgs): Promise<ItemGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
