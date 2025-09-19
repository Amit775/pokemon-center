import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonItemArgs } from "./args/CreateManyAndReturnPokemonItemArgs";
import { PokemonItem } from "../../../models/PokemonItem";
import { CreateManyAndReturnPokemonItem } from "../../outputs/CreateManyAndReturnPokemonItem";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonItem)
export class CreateManyAndReturnPokemonItemResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonItem], {
    nullable: false
  })
  async createManyAndReturnPokemonItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonItemArgs): Promise<CreateManyAndReturnPokemonItem[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
