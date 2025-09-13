import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EggGroups } from "../../../models/EggGroups";
import { PokemonEggGroups } from "../../../models/PokemonEggGroups";
import { EggGroupsSpeciesArgs } from "./args/EggGroupsSpeciesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EggGroups)
export class EggGroupsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [PokemonEggGroups], {
    nullable: false
  })
  async species(@TypeGraphQL.Root() eggGroups: EggGroups, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EggGroupsSpeciesArgs): Promise<PokemonEggGroups[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.findUniqueOrThrow({
      where: {
        id: eggGroups.id,
      },
    }).species({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
