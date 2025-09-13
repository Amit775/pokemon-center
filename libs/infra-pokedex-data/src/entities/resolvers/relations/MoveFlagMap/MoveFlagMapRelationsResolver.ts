import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MoveFlagMap } from "../../../models/MoveFlagMap";
import { MoveFlags } from "../../../models/MoveFlags";
import { Moves } from "../../../models/Moves";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveFlagMap)
export class MoveFlagMapRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Moves, {
    nullable: false
  })
  async move(@TypeGraphQL.Root() moveFlagMap: MoveFlagMap, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Moves> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlagMap.findUniqueOrThrow({
      where: {
        move_id: moveFlagMap.move_id,
      },
    }).move({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MoveFlags, {
    nullable: false
  })
  async flag(@TypeGraphQL.Root() moveFlagMap: MoveFlagMap, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MoveFlags> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlagMap.findUniqueOrThrow({
      where: {
        move_id: moveFlagMap.move_id,
      },
    }).flag({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
