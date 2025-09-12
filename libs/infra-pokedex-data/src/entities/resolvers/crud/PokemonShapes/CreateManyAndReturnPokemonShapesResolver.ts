import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonShapesArgs } from "./args/CreateManyAndReturnPokemonShapesArgs";
import { PokemonShapes } from "../../../models/PokemonShapes";
import { CreateManyAndReturnPokemonShapes } from "../../outputs/CreateManyAndReturnPokemonShapes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonShapes)
export class CreateManyAndReturnPokemonShapesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonShapes], {
    nullable: false
  })
  async createManyAndReturnPokemonShapes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonShapesArgs): Promise<CreateManyAndReturnPokemonShapes[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
