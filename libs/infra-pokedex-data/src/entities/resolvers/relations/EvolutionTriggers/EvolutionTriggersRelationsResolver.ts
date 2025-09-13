import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EvolutionTriggers } from "../../../models/EvolutionTriggers";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { EvolutionTriggersEvolutionArgs } from "./args/EvolutionTriggersEvolutionArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionTriggers)
export class EvolutionTriggersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [PokemonEvolution], {
    nullable: false
  })
  async evolution(@TypeGraphQL.Root() evolutionTriggers: EvolutionTriggers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EvolutionTriggersEvolutionArgs): Promise<PokemonEvolution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.findUniqueOrThrow({
      where: {
        id: evolutionTriggers.id,
      },
    }).evolution({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
