import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueItemFlagOrThrowArgs } from "./args/FindUniqueItemFlagOrThrowArgs";
import { ItemFlag } from "../../../models/ItemFlag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlag)
export class FindUniqueItemFlagOrThrowResolver {
  @TypeGraphQL.Query(_returns => ItemFlag, {
    nullable: true
  })
  async getItemFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemFlagOrThrowArgs): Promise<ItemFlag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlags.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
