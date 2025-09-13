import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueItemPocketsOrThrowArgs } from "./args/FindUniqueItemPocketsOrThrowArgs";
import { ItemPockets } from "../../../models/ItemPockets";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemPockets)
export class FindUniqueItemPocketsOrThrowResolver {
  @TypeGraphQL.Query(_returns => ItemPockets, {
    nullable: true
  })
  async findUniqueItemPocketsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemPocketsOrThrowArgs): Promise<ItemPockets | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
