import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEvolutionTriggerOrThrowArgs } from "./args/FindUniqueEvolutionTriggerOrThrowArgs";
import { EvolutionTrigger } from "../../../models/EvolutionTrigger";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionTrigger)
export class FindUniqueEvolutionTriggerOrThrowResolver {
  @TypeGraphQL.Query(_returns => EvolutionTrigger, {
    nullable: true
  })
  async getEvolutionTrigger(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEvolutionTriggerOrThrowArgs): Promise<EvolutionTrigger | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
