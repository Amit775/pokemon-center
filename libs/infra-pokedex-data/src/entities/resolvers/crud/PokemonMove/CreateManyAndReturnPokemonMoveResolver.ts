import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonMoveArgs } from "./args/CreateManyAndReturnPokemonMoveArgs";
import { PokemonMove } from "../../../models/PokemonMove";
import { CreateManyAndReturnPokemonMove } from "../../outputs/CreateManyAndReturnPokemonMove";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMove)
export class CreateManyAndReturnPokemonMoveResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonMove], {
    nullable: false
  })
  async createManyAndReturnPokemonMove(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonMoveArgs): Promise<CreateManyAndReturnPokemonMove[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoves.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
