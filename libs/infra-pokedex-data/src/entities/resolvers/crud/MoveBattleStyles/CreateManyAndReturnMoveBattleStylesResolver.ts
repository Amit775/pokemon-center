import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMoveBattleStylesArgs } from "./args/CreateManyAndReturnMoveBattleStylesArgs";
import { MoveBattleStyles } from "../../../models/MoveBattleStyles";
import { CreateManyAndReturnMoveBattleStyles } from "../../outputs/CreateManyAndReturnMoveBattleStyles";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveBattleStyles)
export class CreateManyAndReturnMoveBattleStylesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoveBattleStyles], {
    nullable: false
  })
  async createManyAndReturnMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveBattleStylesArgs): Promise<CreateManyAndReturnMoveBattleStyles[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
