import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Move } from "../../../models/Move";
import { MoveFlag } from "../../../models/MoveFlag";
import { MoveFlagMap } from "../../../models/MoveFlagMap";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveFlagMap)
export class MoveFlagMapRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Move, {
    nullable: false
  })
  async move(@TypeGraphQL.Root() moveFlagMap: MoveFlagMap, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Move> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlagMap.findUniqueOrThrow({
      where: {
        move_id: moveFlagMap.move_id,
      },
    }).move({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MoveFlag, {
    nullable: false
  })
  async flag(@TypeGraphQL.Root() moveFlagMap: MoveFlagMap, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MoveFlag> {
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
