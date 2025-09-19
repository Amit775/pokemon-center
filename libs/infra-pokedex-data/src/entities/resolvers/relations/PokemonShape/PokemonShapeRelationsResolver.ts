import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { PokemonShape } from "../../../models/PokemonShape";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { PokemonShapeSpeciesArgs } from "./args/PokemonShapeSpeciesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonShape)
export class PokemonShapeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [PokemonSpecies], {
    nullable: false
  })
  async species(@TypeGraphQL.Root() pokemonShape: PokemonShape, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonShapeSpeciesArgs): Promise<PokemonSpecies[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.findUniqueOrThrow({
      where: {
        id: pokemonShape.id,
      },
    }).species({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
