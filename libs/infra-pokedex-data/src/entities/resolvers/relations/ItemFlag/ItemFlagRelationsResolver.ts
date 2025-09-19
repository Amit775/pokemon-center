import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ItemFlag } from "../../../models/ItemFlag";
import { ItemFlagMap } from "../../../models/ItemFlagMap";
import { ItemFlagFlagMapArgs } from "./args/ItemFlagFlagMapArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlag)
export class ItemFlagRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ItemFlagMap], {
    nullable: false
  })
  async flagMap(@TypeGraphQL.Root() itemFlag: ItemFlag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ItemFlagFlagMapArgs): Promise<ItemFlagMap[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlags.findUniqueOrThrow({
      where: {
        id: itemFlag.id,
      },
    }).flagMap({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
