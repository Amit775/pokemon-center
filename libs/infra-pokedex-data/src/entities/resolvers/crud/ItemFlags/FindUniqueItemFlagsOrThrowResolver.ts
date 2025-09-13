import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueItemFlagsOrThrowArgs } from "./args/FindUniqueItemFlagsOrThrowArgs";
import { ItemFlags } from "../../../models/ItemFlags";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlags)
export class FindUniqueItemFlagsOrThrowResolver {
  @TypeGraphQL.Query(_returns => ItemFlags, {
    nullable: true
  })
  async findUniqueItemFlagsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemFlagsOrThrowArgs): Promise<ItemFlags | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlags.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
