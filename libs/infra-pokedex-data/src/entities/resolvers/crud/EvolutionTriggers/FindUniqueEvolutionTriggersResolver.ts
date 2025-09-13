import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEvolutionTriggersArgs } from "./args/FindUniqueEvolutionTriggersArgs";
import { EvolutionTriggers } from "../../../models/EvolutionTriggers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionTriggers)
export class FindUniqueEvolutionTriggersResolver {
  @TypeGraphQL.Query(_returns => EvolutionTriggers, {
    nullable: true
  })
  async findUniqueEvolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEvolutionTriggersArgs): Promise<EvolutionTriggers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
