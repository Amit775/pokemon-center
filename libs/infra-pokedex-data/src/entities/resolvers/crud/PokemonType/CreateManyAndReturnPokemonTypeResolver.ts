import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonTypeArgs } from "./args/CreateManyAndReturnPokemonTypeArgs";
import { PokemonType } from "../../../models/PokemonType";
import { CreateManyAndReturnPokemonType } from "../../outputs/CreateManyAndReturnPokemonType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonType)
export class CreateManyAndReturnPokemonTypeResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonType], {
    nullable: false
  })
  async createManyAndReturnPokemonType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonTypeArgs): Promise<CreateManyAndReturnPokemonType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
