import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMoveMetaCategoriesArgs } from "./args/CreateOneMoveMetaCategoriesArgs";
import { MoveMetaCategories } from "../../../models/MoveMetaCategories";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaCategories)
export class CreateOneMoveMetaCategoriesResolver {
  @TypeGraphQL.Mutation(_returns => MoveMetaCategories, {
    nullable: false
  })
  async createOneMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneMoveMetaCategoriesArgs): Promise<MoveMetaCategories> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
