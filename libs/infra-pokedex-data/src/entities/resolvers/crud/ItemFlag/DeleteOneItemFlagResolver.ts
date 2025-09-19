import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneItemFlagArgs } from "./args/DeleteOneItemFlagArgs";
import { ItemFlag } from "../../../models/ItemFlag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlag)
export class DeleteOneItemFlagResolver {
  @TypeGraphQL.Mutation(_returns => ItemFlag, {
    nullable: true
  })
  async deleteOneItemFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneItemFlagArgs): Promise<ItemFlag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlags.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
