import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnItemCategoriesArgs } from "./args/CreateManyAndReturnItemCategoriesArgs";
import { ItemCategories } from "../../../models/ItemCategories";
import { CreateManyAndReturnItemCategories } from "../../outputs/CreateManyAndReturnItemCategories";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemCategories)
export class CreateManyAndReturnItemCategoriesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnItemCategories], {
    nullable: false
  })
  async createManyAndReturnItemCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnItemCategoriesArgs): Promise<CreateManyAndReturnItemCategories[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
