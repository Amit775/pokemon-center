import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyItemPocketsArgs } from "./args/FindManyItemPocketsArgs";
import { ItemPockets } from "../../../models/ItemPockets";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemPockets)
export class FindManyItemPocketsResolver {
  @TypeGraphQL.Query(_returns => [ItemPockets], {
    nullable: false
  })
  async findManyItemPockets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyItemPocketsArgs): Promise<ItemPockets[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
