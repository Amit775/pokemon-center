import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMoveMetaCategoryArgs } from "./args/CreateManyAndReturnMoveMetaCategoryArgs";
import { MoveMetaCategory } from "../../../models/MoveMetaCategory";
import { CreateManyAndReturnMoveMetaCategory } from "../../outputs/CreateManyAndReturnMoveMetaCategory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaCategory)
export class CreateManyAndReturnMoveMetaCategoryResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoveMetaCategory], {
    nullable: false
  })
  async createManyAndReturnMoveMetaCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveMetaCategoryArgs): Promise<CreateManyAndReturnMoveMetaCategory[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
