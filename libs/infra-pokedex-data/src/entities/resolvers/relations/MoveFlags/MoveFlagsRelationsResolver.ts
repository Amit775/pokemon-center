import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MoveFlagMap } from "../../../models/MoveFlagMap";
import { MoveFlags } from "../../../models/MoveFlags";
import { MoveFlagsFlagMapArgs } from "./args/MoveFlagsFlagMapArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveFlags)
export class MoveFlagsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [MoveFlagMap], {
    nullable: false
  })
  async flagMap(@TypeGraphQL.Root() moveFlags: MoveFlags, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveFlagsFlagMapArgs): Promise<MoveFlagMap[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.findUniqueOrThrow({
      where: {
        id: moveFlags.id,
      },
    }).flagMap({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
