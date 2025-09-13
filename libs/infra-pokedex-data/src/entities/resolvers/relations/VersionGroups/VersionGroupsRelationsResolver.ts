import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EncounterSlots } from "../../../models/EncounterSlots";
import { Generations } from "../../../models/Generations";
import { Machines } from "../../../models/Machines";
import { PokedexVersionGroups } from "../../../models/PokedexVersionGroups";
import { PokemonForms } from "../../../models/PokemonForms";
import { PokemonMoves } from "../../../models/PokemonMoves";
import { VersionGroupPokemonMoveMethods } from "../../../models/VersionGroupPokemonMoveMethods";
import { VersionGroupRegions } from "../../../models/VersionGroupRegions";
import { VersionGroups } from "../../../models/VersionGroups";
import { Versions } from "../../../models/Versions";
import { VersionGroupsEncounterSlotsArgs } from "./args/VersionGroupsEncounterSlotsArgs";
import { VersionGroupsMachinesArgs } from "./args/VersionGroupsMachinesArgs";
import { VersionGroupsPokedexVersionGroupsArgs } from "./args/VersionGroupsPokedexVersionGroupsArgs";
import { VersionGroupsPokemonFormsArgs } from "./args/VersionGroupsPokemonFormsArgs";
import { VersionGroupsPokemonMovesArgs } from "./args/VersionGroupsPokemonMovesArgs";
import { VersionGroupsVersionGroupPokemonMoveMethodsArgs } from "./args/VersionGroupsVersionGroupPokemonMoveMethodsArgs";
import { VersionGroupsVersionGroupRegionsArgs } from "./args/VersionGroupsVersionGroupRegionsArgs";
import { VersionGroupsVersionsArgs } from "./args/VersionGroupsVersionsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroups)
export class VersionGroupsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Generations, {
    nullable: false
  })
  async generation(@TypeGraphQL.Root() versionGroups: VersionGroups, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Generations> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      where: {
        id: versionGroups.id,
      },
    }).generation({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Versions], {
    nullable: false
  })
  async versions(@TypeGraphQL.Root() versionGroups: VersionGroups, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionGroupsVersionsArgs): Promise<Versions[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      where: {
        id: versionGroups.id,
      },
    }).versions({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [EncounterSlots], {
    nullable: false
  })
  async encounterSlots(@TypeGraphQL.Root() versionGroups: VersionGroups, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionGroupsEncounterSlotsArgs): Promise<EncounterSlots[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      where: {
        id: versionGroups.id,
      },
    }).encounterSlots({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Machines], {
    nullable: false
  })
  async machines(@TypeGraphQL.Root() versionGroups: VersionGroups, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionGroupsMachinesArgs): Promise<Machines[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      where: {
        id: versionGroups.id,
      },
    }).machines({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [VersionGroupPokemonMoveMethods], {
    nullable: false
  })
  async versionGroupPokemonMoveMethods(@TypeGraphQL.Root() versionGroups: VersionGroups, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionGroupsVersionGroupPokemonMoveMethodsArgs): Promise<VersionGroupPokemonMoveMethods[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      where: {
        id: versionGroups.id,
      },
    }).versionGroupPokemonMoveMethods({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [VersionGroupRegions], {
    nullable: false
  })
  async versionGroupRegions(@TypeGraphQL.Root() versionGroups: VersionGroups, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionGroupsVersionGroupRegionsArgs): Promise<VersionGroupRegions[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      where: {
        id: versionGroups.id,
      },
    }).versionGroupRegions({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokedexVersionGroups], {
    nullable: false
  })
  async pokedexVersionGroups(@TypeGraphQL.Root() versionGroups: VersionGroups, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionGroupsPokedexVersionGroupsArgs): Promise<PokedexVersionGroups[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      where: {
        id: versionGroups.id,
      },
    }).pokedexVersionGroups({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonMoves], {
    nullable: false
  })
  async pokemonMoves(@TypeGraphQL.Root() versionGroups: VersionGroups, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionGroupsPokemonMovesArgs): Promise<PokemonMoves[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      where: {
        id: versionGroups.id,
      },
    }).pokemonMoves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonForms], {
    nullable: false
  })
  async pokemonForms(@TypeGraphQL.Root() versionGroups: VersionGroups, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionGroupsPokemonFormsArgs): Promise<PokemonForms[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      where: {
        id: versionGroups.id,
      },
    }).pokemonForms({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
