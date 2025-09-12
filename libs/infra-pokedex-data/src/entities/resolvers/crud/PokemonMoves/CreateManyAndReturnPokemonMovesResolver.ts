import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonMovesArgs } from "./args/CreateManyAndReturnPokemonMovesArgs";
import { PokemonMoves } from "../../../models/PokemonMoves";
import { CreateManyAndReturnPokemonMoves } from "../../outputs/CreateManyAndReturnPokemonMoves";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoves)
export class CreateManyAndReturnPokemonMovesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonMoves], {
    nullable: false
  })
  async createManyAndReturnPokemonMoves(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonMovesArgs): Promise<CreateManyAndReturnPokemonMoves[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoves.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
