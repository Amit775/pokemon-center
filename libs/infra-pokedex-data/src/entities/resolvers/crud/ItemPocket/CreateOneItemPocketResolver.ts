import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneItemPocketArgs } from "./args/CreateOneItemPocketArgs";
import { ItemPocket } from "../../../models/ItemPocket";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemPocket)
export class CreateOneItemPocketResolver {
  @TypeGraphQL.Mutation(_returns => ItemPocket, {
    nullable: false
  })
  async createOneItemPocket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneItemPocketArgs): Promise<ItemPocket> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
