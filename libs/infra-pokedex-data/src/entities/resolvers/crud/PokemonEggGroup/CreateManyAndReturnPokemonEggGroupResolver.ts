import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonEggGroupArgs } from "./args/CreateManyAndReturnPokemonEggGroupArgs";
import { PokemonEggGroup } from "../../../models/PokemonEggGroup";
import { CreateManyAndReturnPokemonEggGroup } from "../../outputs/CreateManyAndReturnPokemonEggGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEggGroup)
export class CreateManyAndReturnPokemonEggGroupResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonEggGroup], {
    nullable: false
  })
  async createManyAndReturnPokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEggGroupArgs): Promise<CreateManyAndReturnPokemonEggGroup[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
