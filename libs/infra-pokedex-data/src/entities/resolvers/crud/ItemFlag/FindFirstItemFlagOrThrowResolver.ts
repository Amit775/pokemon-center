import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstItemFlagOrThrowArgs } from "./args/FindFirstItemFlagOrThrowArgs";
import { ItemFlag } from "../../../models/ItemFlag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlag)
export class FindFirstItemFlagOrThrowResolver {
  @TypeGraphQL.Query(_returns => ItemFlag, {
    nullable: true
  })
  async findFirstItemFlagOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemFlagOrThrowArgs): Promise<ItemFlag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlags.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
