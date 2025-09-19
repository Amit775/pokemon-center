import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnItemPocketArgs } from "./args/CreateManyAndReturnItemPocketArgs";
import { ItemPocket } from "../../../models/ItemPocket";
import { CreateManyAndReturnItemPocket } from "../../outputs/CreateManyAndReturnItemPocket";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemPocket)
export class CreateManyAndReturnItemPocketResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnItemPocket], {
    nullable: false
  })
  async createManyAndReturnItemPocket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnItemPocketArgs): Promise<CreateManyAndReturnItemPocket[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
