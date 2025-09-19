import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstItemPocketOrThrowArgs } from "./args/FindFirstItemPocketOrThrowArgs";
import { ItemPocket } from "../../../models/ItemPocket";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemPocket)
export class FindFirstItemPocketOrThrowResolver {
  @TypeGraphQL.Query(_returns => ItemPocket, {
    nullable: true
  })
  async findFirstItemPocketOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemPocketOrThrowArgs): Promise<ItemPocket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
