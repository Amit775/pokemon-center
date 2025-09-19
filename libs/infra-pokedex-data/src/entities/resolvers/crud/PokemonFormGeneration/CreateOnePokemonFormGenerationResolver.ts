import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOnePokemonFormGenerationArgs } from "./args/CreateOnePokemonFormGenerationArgs";
import { PokemonFormGeneration } from "../../../models/PokemonFormGeneration";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormGeneration)
export class CreateOnePokemonFormGenerationResolver {
  @TypeGraphQL.Mutation(_returns => PokemonFormGeneration, {
    nullable: false
  })
  async createOnePokemonFormGeneration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePokemonFormGenerationArgs): Promise<PokemonFormGeneration> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
