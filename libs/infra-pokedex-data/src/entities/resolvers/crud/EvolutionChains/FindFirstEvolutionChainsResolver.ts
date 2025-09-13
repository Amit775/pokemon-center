import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEvolutionChainsArgs } from "./args/FindFirstEvolutionChainsArgs";
import { EvolutionChains } from "../../../models/EvolutionChains";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionChains)
export class FindFirstEvolutionChainsResolver {
  @TypeGraphQL.Query(_returns => EvolutionChains, {
    nullable: true
  })
  async findFirstEvolutionChains(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEvolutionChainsArgs): Promise<EvolutionChains | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
