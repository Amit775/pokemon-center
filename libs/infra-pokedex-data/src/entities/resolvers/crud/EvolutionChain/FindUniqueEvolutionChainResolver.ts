import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEvolutionChainArgs } from "./args/FindUniqueEvolutionChainArgs";
import { EvolutionChain } from "../../../models/EvolutionChain";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionChain)
export class FindUniqueEvolutionChainResolver {
  @TypeGraphQL.Query(_returns => EvolutionChain, {
    nullable: true
  })
  async evolutionChain(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEvolutionChainArgs): Promise<EvolutionChain | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
