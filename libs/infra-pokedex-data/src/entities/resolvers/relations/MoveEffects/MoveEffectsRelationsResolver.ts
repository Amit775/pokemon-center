import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MoveEffects } from "../../../models/MoveEffects";
import { Moves } from "../../../models/Moves";
import { MoveEffectsMovesArgs } from "./args/MoveEffectsMovesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveEffects)
export class MoveEffectsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Moves], {
    nullable: false
  })
  async moves(@TypeGraphQL.Root() moveEffects: MoveEffects, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveEffectsMovesArgs): Promise<Moves[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveEffects.findUniqueOrThrow({
      where: {
        id: moveEffects.id,
      },
    }).moves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
