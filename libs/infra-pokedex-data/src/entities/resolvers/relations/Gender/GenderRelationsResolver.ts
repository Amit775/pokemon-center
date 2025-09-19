import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Gender } from "../../../models/Gender";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { GenderEvolutionArgs } from "./args/GenderEvolutionArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Gender)
export class GenderRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [PokemonEvolution], {
    nullable: false
  })
  async evolution(@TypeGraphQL.Root() gender: Gender, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GenderEvolutionArgs): Promise<PokemonEvolution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).genders.findUniqueOrThrow({
      where: {
        id: gender.id,
      },
    }).evolution({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
