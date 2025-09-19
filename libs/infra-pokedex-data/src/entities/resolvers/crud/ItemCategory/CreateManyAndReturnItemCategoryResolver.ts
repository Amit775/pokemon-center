import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnItemCategoryArgs } from "./args/CreateManyAndReturnItemCategoryArgs";
import { ItemCategory } from "../../../models/ItemCategory";
import { CreateManyAndReturnItemCategory } from "../../outputs/CreateManyAndReturnItemCategory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemCategory)
export class CreateManyAndReturnItemCategoryResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnItemCategory], {
    nullable: false
  })
  async createManyAndReturnItemCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnItemCategoryArgs): Promise<CreateManyAndReturnItemCategory[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
