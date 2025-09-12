import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonColorsArgs } from "./args/CreateManyAndReturnPokemonColorsArgs";
import { PokemonColors } from "../../../models/PokemonColors";
import { CreateManyAndReturnPokemonColors } from "../../outputs/CreateManyAndReturnPokemonColors";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonColors)
export class CreateManyAndReturnPokemonColorsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonColors], {
    nullable: false
  })
  async createManyAndReturnPokemonColors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonColorsArgs): Promise<CreateManyAndReturnPokemonColors[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
