import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MoveFlag } from "../../../models/MoveFlag";
import { MoveFlagMap } from "../../../models/MoveFlagMap";
import { MoveFlagFlagMapArgs } from "./args/MoveFlagFlagMapArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveFlag)
export class MoveFlagRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [MoveFlagMap], {
    nullable: false
  })
  async flagMap(@TypeGraphQL.Root() moveFlag: MoveFlag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveFlagFlagMapArgs): Promise<MoveFlagMap[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.findUniqueOrThrow({
      where: {
        id: moveFlag.id,
      },
    }).flagMap({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
