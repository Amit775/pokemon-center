import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonDexNumberArgs } from "./args/CreateManyAndReturnPokemonDexNumberArgs";
import { PokemonDexNumber } from "../../../models/PokemonDexNumber";
import { CreateManyAndReturnPokemonDexNumber } from "../../outputs/CreateManyAndReturnPokemonDexNumber";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonDexNumber)
export class CreateManyAndReturnPokemonDexNumberResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonDexNumber], {
    nullable: false
  })
  async createManyAndReturnPokemonDexNumber(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonDexNumberArgs): Promise<CreateManyAndReturnPokemonDexNumber[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
