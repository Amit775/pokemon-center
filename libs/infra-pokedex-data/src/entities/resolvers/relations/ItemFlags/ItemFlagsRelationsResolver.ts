import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ItemFlagMap } from "../../../models/ItemFlagMap";
import { ItemFlags } from "../../../models/ItemFlags";
import { ItemFlagsFlagMapArgs } from "./args/ItemFlagsFlagMapArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlags)
export class ItemFlagsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ItemFlagMap], {
    nullable: false
  })
  async flagMap(@TypeGraphQL.Root() itemFlags: ItemFlags, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemFlagsFlagMapArgs): Promise<ItemFlagMap[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlags.findUniqueOrThrow({
      where: {
        id: itemFlags.id,
      },
    }).flagMap({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
