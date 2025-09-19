import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOnePokemonHabitatArgs } from "./args/UpsertOnePokemonHabitatArgs";
import { PokemonHabitat } from "../../../models/PokemonHabitat";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonHabitat)
export class UpsertOnePokemonHabitatResolver {
  @TypeGraphQL.Mutation(_returns => PokemonHabitat, {
    nullable: false
  })
  async upsertOnePokemonHabitat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePokemonHabitatArgs): Promise<PokemonHabitat> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
