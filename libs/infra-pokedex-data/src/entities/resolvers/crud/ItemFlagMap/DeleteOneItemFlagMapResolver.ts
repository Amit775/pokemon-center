import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneItemFlagMapArgs } from "./args/DeleteOneItemFlagMapArgs";
import { ItemFlagMap } from "../../../models/ItemFlagMap";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlagMap)
export class DeleteOneItemFlagMapResolver {
  @TypeGraphQL.Mutation(_returns => ItemFlagMap, {
    nullable: true
  })
  async deleteOneItemFlagMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneItemFlagMapArgs): Promise<ItemFlagMap | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlagMap.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
