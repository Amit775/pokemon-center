import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMoveFlagArgs } from "./args/CreateManyAndReturnMoveFlagArgs";
import { MoveFlag } from "../../../models/MoveFlag";
import { CreateManyAndReturnMoveFlag } from "../../outputs/CreateManyAndReturnMoveFlag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveFlag)
export class CreateManyAndReturnMoveFlagResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoveFlag], {
    nullable: false
  })
  async createManyAndReturnMoveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveFlagArgs): Promise<CreateManyAndReturnMoveFlag[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
