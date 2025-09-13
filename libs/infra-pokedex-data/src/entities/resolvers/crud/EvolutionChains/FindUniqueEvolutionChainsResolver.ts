import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEvolutionChainsArgs } from "./args/FindUniqueEvolutionChainsArgs";
import { EvolutionChains } from "../../../models/EvolutionChains";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionChains)
export class FindUniqueEvolutionChainsResolver {
  @TypeGraphQL.Query(_returns => EvolutionChains, {
    nullable: true
  })
  async findUniqueEvolutionChains(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEvolutionChainsArgs): Promise<EvolutionChains | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
