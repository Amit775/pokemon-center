import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonGameIndexArgs } from "./args/CreateManyAndReturnPokemonGameIndexArgs";
import { PokemonGameIndex } from "../../../models/PokemonGameIndex";
import { CreateManyAndReturnPokemonGameIndex } from "../../outputs/CreateManyAndReturnPokemonGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonGameIndex)
export class CreateManyAndReturnPokemonGameIndexResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonGameIndex], {
    nullable: false
  })
  async createManyAndReturnPokemonGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonGameIndexArgs): Promise<CreateManyAndReturnPokemonGameIndex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
