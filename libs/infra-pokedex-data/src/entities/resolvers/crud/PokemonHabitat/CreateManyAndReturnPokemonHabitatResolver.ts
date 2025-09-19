import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonHabitatArgs } from "./args/CreateManyAndReturnPokemonHabitatArgs";
import { PokemonHabitat } from "../../../models/PokemonHabitat";
import { CreateManyAndReturnPokemonHabitat } from "../../outputs/CreateManyAndReturnPokemonHabitat";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonHabitat)
export class CreateManyAndReturnPokemonHabitatResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonHabitat], {
    nullable: false
  })
  async createManyAndReturnPokemonHabitat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonHabitatArgs): Promise<CreateManyAndReturnPokemonHabitat[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
