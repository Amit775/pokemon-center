import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonFormGenerationArgs } from "./args/CreateManyAndReturnPokemonFormGenerationArgs";
import { PokemonFormGeneration } from "../../../models/PokemonFormGeneration";
import { CreateManyAndReturnPokemonFormGeneration } from "../../outputs/CreateManyAndReturnPokemonFormGeneration";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormGeneration)
export class CreateManyAndReturnPokemonFormGenerationResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonFormGeneration], {
    nullable: false
  })
  async createManyAndReturnPokemonFormGeneration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonFormGenerationArgs): Promise<CreateManyAndReturnPokemonFormGeneration[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
