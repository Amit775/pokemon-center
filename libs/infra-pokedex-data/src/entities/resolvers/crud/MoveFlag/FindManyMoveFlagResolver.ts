import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMoveFlagArgs } from "./args/FindManyMoveFlagArgs";
import { MoveFlag } from "../../../models/MoveFlag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveFlag)
export class FindManyMoveFlagResolver {
  @TypeGraphQL.Query(_returns => [MoveFlag], {
    nullable: false
  })
  async moveFlags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveFlagArgs): Promise<MoveFlag[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
