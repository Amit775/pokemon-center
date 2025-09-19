import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMoveBattleStyleArgs } from "./args/DeleteOneMoveBattleStyleArgs";
import { MoveBattleStyle } from "../../../models/MoveBattleStyle";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveBattleStyle)
export class DeleteOneMoveBattleStyleResolver {
  @TypeGraphQL.Mutation(_returns => MoveBattleStyle, {
    nullable: true
  })
  async deleteOneMoveBattleStyle(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMoveBattleStyleArgs): Promise<MoveBattleStyle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
