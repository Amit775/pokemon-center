import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstItemPocketsArgs } from "./args/FindFirstItemPocketsArgs";
import { ItemPockets } from "../../../models/ItemPockets";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemPockets)
export class FindFirstItemPocketsResolver {
  @TypeGraphQL.Query(_returns => ItemPockets, {
    nullable: true
  })
  async findFirstItemPockets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemPocketsArgs): Promise<ItemPockets | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
