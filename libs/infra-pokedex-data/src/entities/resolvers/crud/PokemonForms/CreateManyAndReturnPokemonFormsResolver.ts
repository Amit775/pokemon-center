import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonFormsArgs } from "./args/CreateManyAndReturnPokemonFormsArgs";
import { PokemonForms } from "../../../models/PokemonForms";
import { CreateManyAndReturnPokemonForms } from "../../outputs/CreateManyAndReturnPokemonForms";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonForms)
export class CreateManyAndReturnPokemonFormsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonForms], {
    nullable: false
  })
  async createManyAndReturnPokemonForms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonFormsArgs): Promise<CreateManyAndReturnPokemonForms[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
