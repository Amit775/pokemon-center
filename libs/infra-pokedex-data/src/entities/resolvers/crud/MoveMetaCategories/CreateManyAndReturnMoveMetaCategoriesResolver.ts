import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMoveMetaCategoriesArgs } from "./args/CreateManyAndReturnMoveMetaCategoriesArgs";
import { MoveMetaCategories } from "../../../models/MoveMetaCategories";
import { CreateManyAndReturnMoveMetaCategories } from "../../outputs/CreateManyAndReturnMoveMetaCategories";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaCategories)
export class CreateManyAndReturnMoveMetaCategoriesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoveMetaCategories], {
    nullable: false
  })
  async createManyAndReturnMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveMetaCategoriesArgs): Promise<CreateManyAndReturnMoveMetaCategories[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
