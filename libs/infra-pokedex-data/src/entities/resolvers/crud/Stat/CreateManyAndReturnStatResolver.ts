import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnStatArgs } from "./args/CreateManyAndReturnStatArgs";
import { Stat } from "../../../models/Stat";
import { CreateManyAndReturnStat } from "../../outputs/CreateManyAndReturnStat";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Stat)
export class CreateManyAndReturnStatResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnStat], {
    nullable: false
  })
  async createManyAndReturnStat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnStatArgs): Promise<CreateManyAndReturnStat[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).stats.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
