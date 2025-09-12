import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnEvolutionChainsArgs } from "./args/CreateManyAndReturnEvolutionChainsArgs";
import { EvolutionChains } from "../../../models/EvolutionChains";
import { CreateManyAndReturnEvolutionChains } from "../../outputs/CreateManyAndReturnEvolutionChains";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionChains)
export class CreateManyAndReturnEvolutionChainsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEvolutionChains], {
    nullable: false
  })
  async createManyAndReturnEvolutionChains(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEvolutionChainsArgs): Promise<CreateManyAndReturnEvolutionChains[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
