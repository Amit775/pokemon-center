import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MoveMeta } from "../../../models/MoveMeta";
import { MoveMetaAilments } from "../../../models/MoveMetaAilments";
import { MoveMetaCategories } from "../../../models/MoveMetaCategories";
import { MoveMetaStatChanges } from "../../../models/MoveMetaStatChanges";
import { Moves } from "../../../models/Moves";
import { MoveMetaMetaAilmentArgs } from "./args/MoveMetaMetaAilmentArgs";
import { MoveMetaStatChangesArgs } from "./args/MoveMetaStatChangesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMeta)
export class MoveMetaRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Moves, {
    nullable: false
  })
  async move(@TypeGraphQL.Root() moveMeta: MoveMeta, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Moves> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMeta.findUniqueOrThrow({
      where: {
        move_id: moveMeta.move_id,
      },
    }).move({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MoveMetaCategories, {
    nullable: false
  })
  async metaCategory(@TypeGraphQL.Root() moveMeta: MoveMeta, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MoveMetaCategories> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMeta.findUniqueOrThrow({
      where: {
        move_id: moveMeta.move_id,
      },
    }).metaCategory({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MoveMetaAilments, {
    nullable: true
  })
  async metaAilment(@TypeGraphQL.Root() moveMeta: MoveMeta, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveMetaMetaAilmentArgs): Promise<MoveMetaAilments | null> {
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
