import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { PokemonMove } from "../../../models/PokemonMove";
import { PokemonMoveMethod } from "../../../models/PokemonMoveMethod";
import { VersionGroupPokemonMoveMethod } from "../../../models/VersionGroupPokemonMoveMethod";
import { PokemonMoveMethodPokemonMovesArgs } from "./args/PokemonMoveMethodPokemonMovesArgs";
import { PokemonMoveMethodVersionGroupsArgs } from "./args/PokemonMoveMethodVersionGroupsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoveMethod)
export class PokemonMoveMethodRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [PokemonMove], {
    nullable: false
  })
  async pokemonMoves(@TypeGraphQL.Root() pokemonMoveMethod: PokemonMoveMethod, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonMoveMethodPokemonMovesArgs): Promise<PokemonMove[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findUniqueOrThrow({
      where: {
        id: pokemonMoveMethod.id,
      },
    }).pokemonMoves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [VersionGroupPokemonMoveMethod], {
    nullable: false
  })
  async versionGroups(@TypeGraphQL.Root() pokemonMoveMethod: PokemonMoveMethod, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonMoveMethodVersionGroupsArgs): Promise<VersionGroupPokemonMoveMethod[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findUniqueOrThrow({
      where: {
        id: pokemonMoveMethod.id,
      },
    }).versionGroups({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
