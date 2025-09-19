import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Move } from "../../../models/Move";
import { MoveMeta } from "../../../models/MoveMeta";
import { MoveMetaAilment } from "../../../models/MoveMetaAilment";
import { MoveMetaCategory } from "../../../models/MoveMetaCategory";
import { MoveMetaStatChanges } from "../../../models/MoveMetaStatChanges";
import { MoveMetaMetaAilmentArgs } from "./args/MoveMetaMetaAilmentArgs";
import { MoveMetaStatChangesArgs } from "./args/MoveMetaStatChangesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMeta)
export class MoveMetaRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Move, {
    nullable: false
  })
  async move(@TypeGraphQL.Root() moveMeta: MoveMeta, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Move> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMeta.findUniqueOrThrow({
      where: {
        move_id: moveMeta.move_id,
      },
    }).move({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MoveMetaCategory, {
    nullable: false
  })
  async metaCategory(@TypeGraphQL.Root() moveMeta: MoveMeta, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MoveMetaCategory> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMeta.findUniqueOrThrow({
      where: {
        move_id: moveMeta.move_id,
      },
    }).metaCategory({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MoveMetaAilment, {
    nullable: true
  })
  async metaAilment(@TypeGraphQL.Root() moveMeta: MoveMeta, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveMetaMetaAilmentArgs): Promise<MoveMetaAilment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMeta.findUniqueOrThrow({
      where: {
        move_id: moveMeta.move_id,
      },
    }).metaAilment({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [MoveMetaStatChanges], {
    nullable: false
  })
  async statChanges(@TypeGraphQL.Root() moveMeta: MoveMeta, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveMetaStatChangesArgs): Promise<MoveMetaStatChanges[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMeta.findUniqueOrThrow({
      where: {
        move_id: moveMeta.move_id,
      },
    }).statChanges({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
