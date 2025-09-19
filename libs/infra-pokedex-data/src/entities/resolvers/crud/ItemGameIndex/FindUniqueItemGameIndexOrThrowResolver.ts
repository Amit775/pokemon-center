import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueItemGameIndexOrThrowArgs } from "./args/FindUniqueItemGameIndexOrThrowArgs";
import { ItemGameIndex } from "../../../models/ItemGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemGameIndex)
export class FindUniqueItemGameIndexOrThrowResolver {
  @TypeGraphQL.Query(_returns => ItemGameIndex, {
    nullable: true
  })
  async getItemGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemGameIndexOrThrowArgs): Promise<ItemGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
