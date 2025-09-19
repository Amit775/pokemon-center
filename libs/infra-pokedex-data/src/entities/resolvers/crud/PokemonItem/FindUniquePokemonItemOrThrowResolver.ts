import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonItemOrThrowArgs } from "./args/FindUniquePokemonItemOrThrowArgs";
import { PokemonItem } from "../../../models/PokemonItem";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonItem)
export class FindUniquePokemonItemOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonItem, {
    nullable: true
  })
  async getPokemonItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonItemOrThrowArgs): Promise<PokemonItem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
