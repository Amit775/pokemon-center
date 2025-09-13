import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueItemGameIndicesOrThrowArgs } from "./args/FindUniqueItemGameIndicesOrThrowArgs";
import { ItemGameIndices } from "../../../models/ItemGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemGameIndices)
export class FindUniqueItemGameIndicesOrThrowResolver {
  @TypeGraphQL.Query(_returns => ItemGameIndices, {
    nullable: true
  })
  async findUniqueItemGameIndicesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemGameIndicesOrThrowArgs): Promise<ItemGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
