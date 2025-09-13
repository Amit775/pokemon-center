import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ContestEffects } from "../../../models/ContestEffects";
import { Moves } from "../../../models/Moves";
import { ContestEffectsMovesArgs } from "./args/ContestEffectsMovesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestEffects)
export class ContestEffectsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Moves], {
    nullable: false
  })
  async moves(@TypeGraphQL.Root() contestEffects: ContestEffects, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ContestEffectsMovesArgs): Promise<Moves[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestEffects.findUniqueOrThrow({
      where: {
        id: contestEffects.id,
      },
    }).moves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
