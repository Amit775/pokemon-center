import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveMetaCategoriesArgs } from "./args/AggregateMoveMetaCategoriesArgs";
import { MoveMetaCategories } from "../../../models/MoveMetaCategories";
import { AggregateMoveMetaCategories } from "../../outputs/AggregateMoveMetaCategories";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaCategories)
export class AggregateMoveMetaCategoriesResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveMetaCategories, {
    nullable: false
  })
  async aggregateMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveMetaCategoriesArgs): Promise<AggregateMoveMetaCategories> {
    return getPrismaFromContext(ctx).moveMetaCategories.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
