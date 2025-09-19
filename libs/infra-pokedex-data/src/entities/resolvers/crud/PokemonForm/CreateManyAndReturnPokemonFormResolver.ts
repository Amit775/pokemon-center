import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonFormArgs } from "./args/CreateManyAndReturnPokemonFormArgs";
import { PokemonForm } from "../../../models/PokemonForm";
import { CreateManyAndReturnPokemonForm } from "../../outputs/CreateManyAndReturnPokemonForm";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonForm)
export class CreateManyAndReturnPokemonFormResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonForm], {
    nullable: false
  })
  async createManyAndReturnPokemonForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonFormArgs): Promise<CreateManyAndReturnPokemonForm[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
