import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneEvolutionChainsArgs } from "./args/UpsertOneEvolutionChainsArgs";
import { EvolutionChains } from "../../../models/EvolutionChains";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionChains)
export class UpsertOneEvolutionChainsResolver {
  @TypeGraphQL.Mutation(_returns => EvolutionChains, {
    nullable: false
  })
  async upsertOneEvolutionChains(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEvolutionChainsArgs): Promise<EvolutionChains> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
