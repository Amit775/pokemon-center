import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstItemFlagsArgs } from "./args/FindFirstItemFlagsArgs";
import { ItemFlags } from "../../../models/ItemFlags";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlags)
export class FindFirstItemFlagsResolver {
  @TypeGraphQL.Query(_returns => ItemFlags, {
    nullable: true
  })
  async findFirstItemFlags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemFlagsArgs): Promise<ItemFlags | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlags.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
