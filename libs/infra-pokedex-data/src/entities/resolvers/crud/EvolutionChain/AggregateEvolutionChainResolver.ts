import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEvolutionChainArgs } from "./args/AggregateEvolutionChainArgs";
import { EvolutionChain } from "../../../models/EvolutionChain";
import { AggregateEvolutionChain } from "../../outputs/AggregateEvolutionChain";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionChain)
export class AggregateEvolutionChainResolver {
  @TypeGraphQL.Query(_returns => AggregateEvolutionChain, {
    nullable: false
  })
  async aggregateEvolutionChain(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEvolutionChainArgs): Promise<AggregateEvolutionChain> {
    return getPrismaFromContext(ctx).evolutionChains.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
