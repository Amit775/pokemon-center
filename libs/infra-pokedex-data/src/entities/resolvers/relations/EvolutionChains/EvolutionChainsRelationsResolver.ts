import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EvolutionChains } from "../../../models/EvolutionChains";
import { Items } from "../../../models/Items";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { EvolutionChainsBabyTriggerItemArgs } from "./args/EvolutionChainsBabyTriggerItemArgs";
import { EvolutionChainsSpeciesArgs } from "./args/EvolutionChainsSpeciesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionChains)
export class EvolutionChainsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Items, {
    nullable: true
  })
  async babyTriggerItem(@TypeGraphQL.Root() evolutionChains: EvolutionChains, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EvolutionChainsBabyTriggerItemArgs): Promise<Items | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findUniqueOrThrow({
      where: {
        id: evolutionChains.id,
      },
    }).babyTriggerItem({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonSpecies], {
    nullable: false
  })
  async species(@TypeGraphQL.Root() evolutionChains: EvolutionChains, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EvolutionChainsSpeciesArgs): Promise<PokemonSpecies[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findUniqueOrThrow({
      where: {
        id: evolutionChains.id,
      },
    }).species({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
