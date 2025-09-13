import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstItemPocketsOrThrowArgs } from "./args/FindFirstItemPocketsOrThrowArgs";
import { ItemPockets } from "../../../models/ItemPockets";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemPockets)
export class FindFirstItemPocketsOrThrowResolver {
  @TypeGraphQL.Query(_returns => ItemPockets, {
    nullable: true
  })
  async findFirstItemPocketsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemPocketsOrThrowArgs): Promise<ItemPockets | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
