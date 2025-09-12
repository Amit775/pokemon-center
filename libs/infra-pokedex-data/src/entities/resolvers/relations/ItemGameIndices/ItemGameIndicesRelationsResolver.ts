import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Generations } from "../../../models/Generations";
import { ItemGameIndices } from "../../../models/ItemGameIndices";
import { Items } from "../../../models/Items";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemGameIndices)
export class ItemGameIndicesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Items, {
    nullable: false
  })
  async item(@TypeGraphQL.Root() itemGameIndices: ItemGameIndices, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Items> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.findUniqueOrThrow({
      where: {
        item_id_generation_id: {
          item_id: itemGameIndices.item_id,
          generation_id: itemGameIndices.generation_id,
        },
      },
    }).item({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Generations, {
    nullable: false
  })
  async generation(@TypeGraphQL.Root() itemGameIndices: ItemGameIndices, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Generations> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.findUniqueOrThrow({
      where: {
        item_id_generation_id: {
          item_id: itemGameIndices.item_id,
          generation_id: itemGameIndices.generation_id,
        },
      },
    }).generation({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
