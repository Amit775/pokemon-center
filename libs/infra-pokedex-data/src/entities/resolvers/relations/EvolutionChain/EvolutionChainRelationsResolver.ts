import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EvolutionChain } from "../../../models/EvolutionChain";
import { Item } from "../../../models/Item";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { EvolutionChainBabyTriggerItemArgs } from "./args/EvolutionChainBabyTriggerItemArgs";
import { EvolutionChainSpeciesArgs } from "./args/EvolutionChainSpeciesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionChain)
export class EvolutionChainRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Item, {
    nullable: true
  })
  async babyTriggerItem(@TypeGraphQL.Root() evolutionChain: EvolutionChain, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EvolutionChainBabyTriggerItemArgs): Promise<Item | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findUniqueOrThrow({
      where: {
        id: evolutionChain.id,
      },
    }).babyTriggerItem({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonSpecies], {
    nullable: false
  })
  async species(@TypeGraphQL.Root() evolutionChain: EvolutionChain, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EvolutionChainSpeciesArgs): Promise<PokemonSpecies[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findUniqueOrThrow({
      where: {
        id: evolutionChain.id,
      },
    }).species({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
