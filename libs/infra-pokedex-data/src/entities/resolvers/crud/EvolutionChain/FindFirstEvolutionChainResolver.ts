import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEvolutionChainArgs } from "./args/FindFirstEvolutionChainArgs";
import { EvolutionChain } from "../../../models/EvolutionChain";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionChain)
export class FindFirstEvolutionChainResolver {
  @TypeGraphQL.Query(_returns => EvolutionChain, {
    nullable: true
  })
  async findFirstEvolutionChain(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEvolutionChainArgs): Promise<EvolutionChain | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
