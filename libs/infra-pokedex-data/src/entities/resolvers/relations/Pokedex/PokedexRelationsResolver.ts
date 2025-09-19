import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Pokedex } from "../../../models/Pokedex";
import { PokedexVersionGroup } from "../../../models/PokedexVersionGroup";
import { PokemonDexNumber } from "../../../models/PokemonDexNumber";
import { Region } from "../../../models/Region";
import { PokedexDexNumbersArgs } from "./args/PokedexDexNumbersArgs";
import { PokedexRegionArgs } from "./args/PokedexRegionArgs";
import { PokedexVersionGroupsArgs } from "./args/PokedexVersionGroupsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pokedex)
export class PokedexRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Region, {
    nullable: true
  })
  async region(@TypeGraphQL.Root() pokedex: Pokedex, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokedexRegionArgs): Promise<Region | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexes.findUniqueOrThrow({
      where: {
        id: pokedex.id,
      },
    }).region({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonDexNumber], {
    nullable: false
  })
  async dexNumbers(@TypeGraphQL.Root() pokedex: Pokedex, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokedexDexNumbersArgs): Promise<PokemonDexNumber[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexes.findUniqueOrThrow({
      where: {
        id: pokedex.id,
      },
    }).dexNumbers({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokedexVersionGroup], {
    nullable: false
  })
  async versionGroups(@TypeGraphQL.Root() pokedex: Pokedex, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokedexVersionGroupsArgs): Promise<PokedexVersionGroup[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexes.findUniqueOrThrow({
      where: {
        id: pokedex.id,
      },
    }).versionGroups({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
