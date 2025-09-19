import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstEvolutionChainOrThrowArgs } from "./args/FindFirstEvolutionChainOrThrowArgs";
import { EvolutionChain } from "../../../models/EvolutionChain";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionChain)
export class FindFirstEvolutionChainOrThrowResolver {
  @TypeGraphQL.Query(_returns => EvolutionChain, {
    nullable: true
  })
  async findFirstEvolutionChainOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEvolutionChainOrThrowArgs): Promise<EvolutionChain | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
