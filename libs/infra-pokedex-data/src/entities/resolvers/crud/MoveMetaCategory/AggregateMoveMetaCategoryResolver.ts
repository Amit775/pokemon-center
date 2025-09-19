import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveMetaCategoryArgs } from "./args/AggregateMoveMetaCategoryArgs";
import { MoveMetaCategory } from "../../../models/MoveMetaCategory";
import { AggregateMoveMetaCategory } from "../../outputs/AggregateMoveMetaCategory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaCategory)
export class AggregateMoveMetaCategoryResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveMetaCategory, {
    nullable: false
  })
  async aggregateMoveMetaCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveMetaCategoryArgs): Promise<AggregateMoveMetaCategory> {
    return getPrismaFromContext(ctx).moveMetaCategories.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
