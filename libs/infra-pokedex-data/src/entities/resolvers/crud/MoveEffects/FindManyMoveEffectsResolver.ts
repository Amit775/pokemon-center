import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMoveEffectsArgs } from "./args/FindManyMoveEffectsArgs";
import { MoveEffects } from "../../../models/MoveEffects";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveEffects)
export class FindManyMoveEffectsResolver {
  @TypeGraphQL.Query(_returns => [MoveEffects], {
    nullable: false
  })
  async findManyMoveEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveEffectsArgs): Promise<MoveEffects[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveEffects.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
