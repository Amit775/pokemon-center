import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonShapeArgs } from "./args/CreateManyAndReturnPokemonShapeArgs";
import { PokemonShape } from "../../../models/PokemonShape";
import { CreateManyAndReturnPokemonShape } from "../../outputs/CreateManyAndReturnPokemonShape";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonShape)
export class CreateManyAndReturnPokemonShapeResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonShape], {
    nullable: false
  })
  async createManyAndReturnPokemonShape(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonShapeArgs): Promise<CreateManyAndReturnPokemonShape[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
