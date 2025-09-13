import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEvolutionChainsOrThrowArgs } from "./args/FindFirstEvolutionChainsOrThrowArgs";
import { EvolutionChains } from "../../../models/EvolutionChains";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionChains)
export class FindFirstEvolutionChainsOrThrowResolver {
  @TypeGraphQL.Query(_returns => EvolutionChains, {
    nullable: true
  })
  async findFirstEvolutionChainsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEvolutionChainsOrThrowArgs): Promise<EvolutionChains | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
