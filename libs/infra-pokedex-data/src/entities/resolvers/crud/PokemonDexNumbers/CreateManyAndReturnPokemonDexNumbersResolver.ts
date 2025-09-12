import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonDexNumbersArgs } from "./args/CreateManyAndReturnPokemonDexNumbersArgs";
import { PokemonDexNumbers } from "../../../models/PokemonDexNumbers";
import { CreateManyAndReturnPokemonDexNumbers } from "../../outputs/CreateManyAndReturnPokemonDexNumbers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonDexNumbers)
export class CreateManyAndReturnPokemonDexNumbersResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonDexNumbers], {
    nullable: false
  })
  async createManyAndReturnPokemonDexNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonDexNumbersArgs): Promise<CreateManyAndReturnPokemonDexNumbers[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
