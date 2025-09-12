import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnStatsArgs } from "./args/CreateManyAndReturnStatsArgs";
import { Stats } from "../../../models/Stats";
import { CreateManyAndReturnStats } from "../../outputs/CreateManyAndReturnStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Stats)
export class CreateManyAndReturnStatsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnStats], {
    nullable: false
  })
  async createManyAndReturnStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnStatsArgs): Promise<CreateManyAndReturnStats[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).stats.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
