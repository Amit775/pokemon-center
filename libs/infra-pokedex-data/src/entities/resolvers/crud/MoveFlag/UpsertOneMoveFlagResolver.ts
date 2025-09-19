import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMoveFlagArgs } from "./args/UpsertOneMoveFlagArgs";
import { MoveFlag } from "../../../models/MoveFlag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveFlag)
export class UpsertOneMoveFlagResolver {
  @TypeGraphQL.Mutation(_returns => MoveFlag, {
    nullable: false
  })
  async upsertOneMoveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMoveFlagArgs): Promise<MoveFlag> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
