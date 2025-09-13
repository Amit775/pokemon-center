import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { PokemonMoveMethods } from "../../../models/PokemonMoveMethods";
import { PokemonMoves } from "../../../models/PokemonMoves";
import { VersionGroupPokemonMoveMethods } from "../../../models/VersionGroupPokemonMoveMethods";
import { PokemonMoveMethodsPokemonMovesArgs } from "./args/PokemonMoveMethodsPokemonMovesArgs";
import { PokemonMoveMethodsVersionGroupsArgs } from "./args/PokemonMoveMethodsVersionGroupsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoveMethods)
export class PokemonMoveMethodsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [PokemonMoves], {
    nullable: false
  })
  async pokemonMoves(@TypeGraphQL.Root() pokemonMoveMethods: PokemonMoveMethods, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonMoveMethodsPokemonMovesArgs): Promise<PokemonMoves[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findUniqueOrThrow({
      where: {
        id: pokemonMoveMethods.id,
      },
    }).pokemonMoves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [VersionGroupPokemonMoveMethods], {
    nullable: false
  })
  async versionGroups(@TypeGraphQL.Root() pokemonMoveMethods: PokemonMoveMethods, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonMoveMethodsVersionGroupsArgs): Promise<VersionGroupPokemonMoveMethods[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findUniqueOrThrow({
      where: {
        id: pokemonMoveMethods.id,
      },
    }).versionGroups({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
