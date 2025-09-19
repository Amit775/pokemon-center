import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneItemGameIndexArgs } from "./args/CreateOneItemGameIndexArgs";
import { ItemGameIndex } from "../../../models/ItemGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemGameIndex)
export class CreateOneItemGameIndexResolver {
  @TypeGraphQL.Mutation(_returns => ItemGameIndex, {
    nullable: false
  })
  async createOneItemGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneItemGameIndexArgs): Promise<ItemGameIndex> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
