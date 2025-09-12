import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonArgs } from "./args/CreateManyAndReturnPokemonArgs";
import { Pokemon } from "../../../models/Pokemon";
import { CreateManyAndReturnPokemon } from "../../outputs/CreateManyAndReturnPokemon";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pokemon)
export class CreateManyAndReturnPokemonResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemon], {
    nullable: false
  })
  async createManyAndReturnPokemon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonArgs): Promise<CreateManyAndReturnPokemon[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemon.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
