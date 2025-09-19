import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMoveBattleStyleArgs } from "./args/CreateManyAndReturnMoveBattleStyleArgs";
import { MoveBattleStyle } from "../../../models/MoveBattleStyle";
import { CreateManyAndReturnMoveBattleStyle } from "../../outputs/CreateManyAndReturnMoveBattleStyle";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveBattleStyle)
export class CreateManyAndReturnMoveBattleStyleResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoveBattleStyle], {
    nullable: false
  })
  async createManyAndReturnMoveBattleStyle(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveBattleStyleArgs): Promise<CreateManyAndReturnMoveBattleStyle[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
