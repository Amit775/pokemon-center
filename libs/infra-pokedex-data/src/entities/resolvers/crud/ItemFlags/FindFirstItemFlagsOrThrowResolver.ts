import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstItemFlagsOrThrowArgs } from "./args/FindFirstItemFlagsOrThrowArgs";
import { ItemFlags } from "../../../models/ItemFlags";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlags)
export class FindFirstItemFlagsOrThrowResolver {
  @TypeGraphQL.Query(_returns => ItemFlags, {
    nullable: true
  })
  async findFirstItemFlagsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemFlagsOrThrowArgs): Promise<ItemFlags | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlags.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
