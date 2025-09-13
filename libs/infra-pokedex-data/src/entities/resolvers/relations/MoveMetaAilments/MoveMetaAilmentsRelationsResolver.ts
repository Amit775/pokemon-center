import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MoveMeta } from "../../../models/MoveMeta";
import { MoveMetaAilments } from "../../../models/MoveMetaAilments";
import { MoveMetaAilmentsMetaArgs } from "./args/MoveMetaAilmentsMetaArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaAilments)
export class MoveMetaAilmentsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [MoveMeta], {
    nullable: false
  })
  async meta(@TypeGraphQL.Root() moveMetaAilments: MoveMetaAilments, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveMetaAilmentsMetaArgs): Promise<MoveMeta[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findUniqueOrThrow({
      where: {
        id: moveMetaAilments.id,
      },
    }).meta({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
