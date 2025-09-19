import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneItemFlagMapArgs } from "./args/UpdateOneItemFlagMapArgs";
import { ItemFlagMap } from "../../../models/ItemFlagMap";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlagMap)
export class UpdateOneItemFlagMapResolver {
  @TypeGraphQL.Mutation(_returns => ItemFlagMap, {
    nullable: true
  })
  async updateOneItemFlagMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneItemFlagMapArgs): Promise<ItemFlagMap | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlagMap.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
