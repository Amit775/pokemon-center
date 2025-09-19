import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneEvolutionChainArgs } from "./args/CreateOneEvolutionChainArgs";
import { EvolutionChain } from "../../../models/EvolutionChain";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionChain)
export class CreateOneEvolutionChainResolver {
  @TypeGraphQL.Mutation(_returns => EvolutionChain, {
    nullable: false
  })
  async createOneEvolutionChain(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEvolutionChainArgs): Promise<EvolutionChain> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
