import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoveFlagArgs } from "./args/FindFirstMoveFlagArgs";
import { MoveFlag } from "../../../models/MoveFlag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveFlag)
export class FindFirstMoveFlagResolver {
  @TypeGraphQL.Query(_returns => MoveFlag, {
    nullable: true
  })
  async findFirstMoveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveFlagArgs): Promise<MoveFlag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
