import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EggGroup } from "../../../models/EggGroup";
import { PokemonEggGroup } from "../../../models/PokemonEggGroup";
import { EggGroupSpeciesArgs } from "./args/EggGroupSpeciesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EggGroup)
export class EggGroupRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [PokemonEggGroup], {
    nullable: false
  })
  async species(@TypeGraphQL.Root() eggGroup: EggGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EggGroupSpeciesArgs): Promise<PokemonEggGroup[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.findUniqueOrThrow({
      where: {
        id: eggGroup.id,
      },
    }).species({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
