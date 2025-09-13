import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonItemsOrThrowArgs } from "./args/FindUniquePokemonItemsOrThrowArgs";
import { PokemonItems } from "../../../models/PokemonItems";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonItems)
export class FindUniquePokemonItemsOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonItems, {
    nullable: true
  })
  async findUniquePokemonItemsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonItemsOrThrowArgs): Promise<PokemonItems | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
