import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonFormTypesArgs } from "./args/FindUniquePokemonFormTypesArgs";
import { PokemonFormTypes } from "../../../models/PokemonFormTypes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormTypes)
export class FindUniquePokemonFormTypesResolver {
  @TypeGraphQL.Query(_returns => PokemonFormTypes, {
    nullable: true
  })
  async findUniquePokemonFormTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonFormTypesArgs): Promise<PokemonFormTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
