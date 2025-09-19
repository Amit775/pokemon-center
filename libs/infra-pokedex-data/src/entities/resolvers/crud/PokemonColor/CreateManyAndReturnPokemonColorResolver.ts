import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonColorArgs } from "./args/CreateManyAndReturnPokemonColorArgs";
import { PokemonColor } from "../../../models/PokemonColor";
import { CreateManyAndReturnPokemonColor } from "../../outputs/CreateManyAndReturnPokemonColor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonColor)
export class CreateManyAndReturnPokemonColorResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonColor], {
    nullable: false
  })
  async createManyAndReturnPokemonColor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonColorArgs): Promise<CreateManyAndReturnPokemonColor[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
