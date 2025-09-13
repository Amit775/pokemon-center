import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueEvolutionChainsOrThrowArgs } from "./args/FindUniqueEvolutionChainsOrThrowArgs";
import { EvolutionChains } from "../../../models/EvolutionChains";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionChains)
export class FindUniqueEvolutionChainsOrThrowResolver {
  @TypeGraphQL.Query(_returns => EvolutionChains, {
    nullable: true
  })
  async findUniqueEvolutionChainsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEvolutionChainsOrThrowArgs): Promise<EvolutionChains | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
