import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMoveFlagMapArgs } from "./args/UpdateOneMoveFlagMapArgs";
import { MoveFlagMap } from "../../../models/MoveFlagMap";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveFlagMap)
export class UpdateOneMoveFlagMapResolver {
  @TypeGraphQL.Mutation(_returns => MoveFlagMap, {
    nullable: true
  })
  async updateOneMoveFlagMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMoveFlagMapArgs): Promise<MoveFlagMap | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlagMap.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
