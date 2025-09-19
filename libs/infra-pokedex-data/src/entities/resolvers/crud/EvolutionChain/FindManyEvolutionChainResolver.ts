import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyEvolutionChainArgs } from "./args/FindManyEvolutionChainArgs";
import { EvolutionChain } from "../../../models/EvolutionChain";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionChain)
export class FindManyEvolutionChainResolver {
  @TypeGraphQL.Query(_returns => [EvolutionChain], {
    nullable: false
  })
  async evolutionChains(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEvolutionChainArgs): Promise<EvolutionChain[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
