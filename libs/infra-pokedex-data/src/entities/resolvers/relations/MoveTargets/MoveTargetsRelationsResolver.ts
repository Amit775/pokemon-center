import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MoveTargets } from "../../../models/MoveTargets";
import { Moves } from "../../../models/Moves";
import { MoveTargetsMovesArgs } from "./args/MoveTargetsMovesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveTargets)
export class MoveTargetsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Moves], {
    nullable: false
  })
  async moves(@TypeGraphQL.Root() moveTargets: MoveTargets, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveTargetsMovesArgs): Promise<Moves[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveTargets.findUniqueOrThrow({
      where: {
        id: moveTargets.id,
      },
    }).moves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
