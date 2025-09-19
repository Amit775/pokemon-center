import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePokemonHabitatArgs } from "./args/DeleteOnePokemonHabitatArgs";
import { PokemonHabitat } from "../../../models/PokemonHabitat";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonHabitat)
export class DeleteOnePokemonHabitatResolver {
  @TypeGraphQL.Mutation(_returns => PokemonHabitat, {
    nullable: true
  })
  async deleteOnePokemonHabitat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePokemonHabitatArgs): Promise<PokemonHabitat | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
