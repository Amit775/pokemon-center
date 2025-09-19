import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonStatArgs } from "./args/CreateManyAndReturnPokemonStatArgs";
import { PokemonStat } from "../../../models/PokemonStat";
import { CreateManyAndReturnPokemonStat } from "../../outputs/CreateManyAndReturnPokemonStat";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonStat)
export class CreateManyAndReturnPokemonStatResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonStat], {
    nullable: false
  })
  async createManyAndReturnPokemonStat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonStatArgs): Promise<CreateManyAndReturnPokemonStat[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
