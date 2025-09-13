import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEvolutionTriggersOrThrowArgs } from "./args/FindUniqueEvolutionTriggersOrThrowArgs";
import { EvolutionTriggers } from "../../../models/EvolutionTriggers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionTriggers)
export class FindUniqueEvolutionTriggersOrThrowResolver {
  @TypeGraphQL.Query(_returns => EvolutionTriggers, {
    nullable: true
  })
  async findUniqueEvolutionTriggersOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEvolutionTriggersOrThrowArgs): Promise<EvolutionTriggers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
