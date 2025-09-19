import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMoveFlagMapArgs } from "./args/UpsertOneMoveFlagMapArgs";
import { MoveFlagMap } from "../../../models/MoveFlagMap";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveFlagMap)
export class UpsertOneMoveFlagMapResolver {
  @TypeGraphQL.Mutation(_returns => MoveFlagMap, {
    nullable: false
  })
  async upsertOneMoveFlagMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMoveFlagMapArgs): Promise<MoveFlagMap> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlagMap.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
