import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MoveMeta } from "../../../models/MoveMeta";
import { MoveMetaStatChanges } from "../../../models/MoveMetaStatChanges";
import { Moves } from "../../../models/Moves";
import { Stats } from "../../../models/Stats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaStatChanges)
export class MoveMetaStatChangesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Moves, {
    nullable: false
  })
  async move(@TypeGraphQL.Root() moveMetaStatChanges: MoveMetaStatChanges, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Moves> {
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

  @TypeGraphQL.FieldResolver(_type => Stats, {
    nullable: false
  })
  async stat(@TypeGraphQL.Root() moveMetaStatChanges: MoveMetaStatChanges, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Stats> {
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
