import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOnePokemonFormTypeArgs } from "./args/UpsertOnePokemonFormTypeArgs";
import { PokemonFormType } from "../../../models/PokemonFormType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormType)
export class UpsertOnePokemonFormTypeResolver {
  @TypeGraphQL.Mutation(_returns => PokemonFormType, {
    nullable: false
  })
  async upsertOnePokemonFormType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePokemonFormTypeArgs): Promise<PokemonFormType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
