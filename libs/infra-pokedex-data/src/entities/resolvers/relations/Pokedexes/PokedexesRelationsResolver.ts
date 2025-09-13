import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { PokedexVersionGroups } from "../../../models/PokedexVersionGroups";
import { Pokedexes } from "../../../models/Pokedexes";
import { PokemonDexNumbers } from "../../../models/PokemonDexNumbers";
import { Regions } from "../../../models/Regions";
import { PokedexesDexNumbersArgs } from "./args/PokedexesDexNumbersArgs";
import { PokedexesRegionArgs } from "./args/PokedexesRegionArgs";
import { PokedexesVersionGroupsArgs } from "./args/PokedexesVersionGroupsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pokedexes)
export class PokedexesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Regions, {
    nullable: true
  })
  async region(@TypeGraphQL.Root() pokedexes: Pokedexes, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokedexesRegionArgs): Promise<Regions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexes.findUniqueOrThrow({
      where: {
        id: pokedexes.id,
      },
    }).region({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonDexNumbers], {
    nullable: false
  })
  async dexNumbers(@TypeGraphQL.Root() pokedexes: Pokedexes, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokedexesDexNumbersArgs): Promise<PokemonDexNumbers[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexes.findUniqueOrThrow({
      where: {
        id: pokedexes.id,
      },
    }).dexNumbers({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokedexVersionGroups], {
    nullable: false
  })
  async versionGroups(@TypeGraphQL.Root() pokedexes: Pokedexes, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokedexesVersionGroupsArgs): Promise<PokedexVersionGroups[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexes.findUniqueOrThrow({
      where: {
        id: pokedexes.id,
      },
    }).versionGroups({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
