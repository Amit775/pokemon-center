import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMoveEffectsOrThrowArgs } from "./args/FindUniqueMoveEffectsOrThrowArgs";
import { MoveEffects } from "../../../models/MoveEffects";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveEffects)
export class FindUniqueMoveEffectsOrThrowResolver {
  @TypeGraphQL.Query(_returns => MoveEffects, {
    nullable: true
  })
  async findUniqueMoveEffectsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveEffectsOrThrowArgs): Promise<MoveEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveEffects.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
