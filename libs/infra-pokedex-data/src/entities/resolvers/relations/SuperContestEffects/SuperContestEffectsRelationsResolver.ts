import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Moves } from "../../../models/Moves";
import { SuperContestEffects } from "../../../models/SuperContestEffects";
import { SuperContestEffectsMovesArgs } from "./args/SuperContestEffectsMovesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestEffects)
export class SuperContestEffectsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Moves], {
    nullable: false
  })
  async moves(@TypeGraphQL.Root() superContestEffects: SuperContestEffects, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: SuperContestEffectsMovesArgs): Promise<Moves[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.findUniqueOrThrow({
      where: {
        id: superContestEffects.id,
      },
    }).moves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
