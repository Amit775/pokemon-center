import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnEvolutionChainArgs } from "./args/CreateManyAndReturnEvolutionChainArgs";
import { EvolutionChain } from "../../../models/EvolutionChain";
import { CreateManyAndReturnEvolutionChain } from "../../outputs/CreateManyAndReturnEvolutionChain";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionChain)
export class CreateManyAndReturnEvolutionChainResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEvolutionChain], {
    nullable: false
  })
  async createManyAndReturnEvolutionChain(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEvolutionChainArgs): Promise<CreateManyAndReturnEvolutionChain[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
