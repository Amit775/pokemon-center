import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonHabitatsArgs } from "./args/CreateManyAndReturnPokemonHabitatsArgs";
import { PokemonHabitats } from "../../../models/PokemonHabitats";
import { CreateManyAndReturnPokemonHabitats } from "../../outputs/CreateManyAndReturnPokemonHabitats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonHabitats)
export class CreateManyAndReturnPokemonHabitatsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonHabitats], {
    nullable: false
  })
  async createManyAndReturnPokemonHabitats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonHabitatsArgs): Promise<CreateManyAndReturnPokemonHabitats[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
