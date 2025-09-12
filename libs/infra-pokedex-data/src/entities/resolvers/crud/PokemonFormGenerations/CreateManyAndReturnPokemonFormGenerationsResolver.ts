import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonFormGenerationsArgs } from "./args/CreateManyAndReturnPokemonFormGenerationsArgs";
import { PokemonFormGenerations } from "../../../models/PokemonFormGenerations";
import { CreateManyAndReturnPokemonFormGenerations } from "../../outputs/CreateManyAndReturnPokemonFormGenerations";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormGenerations)
export class CreateManyAndReturnPokemonFormGenerationsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonFormGenerations], {
    nullable: false
  })
  async createManyAndReturnPokemonFormGenerations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonFormGenerationsArgs): Promise<CreateManyAndReturnPokemonFormGenerations[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
