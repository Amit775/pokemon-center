import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MoveMeta } from "../../../models/MoveMeta";
import { MoveMetaAilment } from "../../../models/MoveMetaAilment";
import { MoveMetaAilmentMetaArgs } from "./args/MoveMetaAilmentMetaArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaAilment)
export class MoveMetaAilmentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [MoveMeta], {
    nullable: false
  })
  async meta(@TypeGraphQL.Root() moveMetaAilment: MoveMetaAilment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveMetaAilmentMetaArgs): Promise<MoveMeta[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findUniqueOrThrow({
      where: {
        id: moveMetaAilment.id,
      },
    }).meta({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
