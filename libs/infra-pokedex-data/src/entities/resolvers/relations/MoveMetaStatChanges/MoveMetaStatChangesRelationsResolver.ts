import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Move } from "../../../models/Move";
import { MoveMeta } from "../../../models/MoveMeta";
import { MoveMetaStatChanges } from "../../../models/MoveMetaStatChanges";
import { Stat } from "../../../models/Stat";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaStatChanges)
export class MoveMetaStatChangesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Move, {
    nullable: false
  })
  async move(@TypeGraphQL.Root() moveMetaStatChanges: MoveMetaStatChanges, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Move> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaStatChanges.findUniqueOrThrow({
      where: {
        move_id_stat_id: {
          move_id: moveMetaStatChanges.move_id,
          stat_id: moveMetaStatChanges.stat_id,
        },
      },
    }).move({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Stat, {
    nullable: false
  })
  async stat(@TypeGraphQL.Root() moveMetaStatChanges: MoveMetaStatChanges, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Stat> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaStatChanges.findUniqueOrThrow({
      where: {
        move_id_stat_id: {
          move_id: moveMetaStatChanges.move_id,
          stat_id: moveMetaStatChanges.stat_id,
        },
      },
    }).stat({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MoveMeta, {
    nullable: false
  })
  async meta(@TypeGraphQL.Root() moveMetaStatChanges: MoveMetaStatChanges, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MoveMeta> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaStatChanges.findUniqueOrThrow({
      where: {
        move_id_stat_id: {
          move_id: moveMetaStatChanges.move_id,
          stat_id: moveMetaStatChanges.stat_id,
        },
      },
    }).meta({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
