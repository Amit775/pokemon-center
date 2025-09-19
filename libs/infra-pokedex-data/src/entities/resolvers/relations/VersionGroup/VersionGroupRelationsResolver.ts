import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EncounterSlot } from "../../../models/EncounterSlot";
import { Generation } from "../../../models/Generation";
import { Machine } from "../../../models/Machine";
import { PokedexVersionGroup } from "../../../models/PokedexVersionGroup";
import { PokemonForm } from "../../../models/PokemonForm";
import { PokemonMove } from "../../../models/PokemonMove";
import { Version } from "../../../models/Version";
import { VersionGroup } from "../../../models/VersionGroup";
import { VersionGroupPokemonMoveMethod } from "../../../models/VersionGroupPokemonMoveMethod";
import { VersionGroupRegion } from "../../../models/VersionGroupRegion";
import { VersionGroupEncounterSlotsArgs } from "./args/VersionGroupEncounterSlotsArgs";
import { VersionGroupMachinesArgs } from "./args/VersionGroupMachinesArgs";
import { VersionGroupPokedexVersionGroupsArgs } from "./args/VersionGroupPokedexVersionGroupsArgs";
import { VersionGroupPokemonFormsArgs } from "./args/VersionGroupPokemonFormsArgs";
import { VersionGroupPokemonMovesArgs } from "./args/VersionGroupPokemonMovesArgs";
import { VersionGroupVersionGroupPokemonMoveMethodsArgs } from "./args/VersionGroupVersionGroupPokemonMoveMethodsArgs";
import { VersionGroupVersionGroupRegionsArgs } from "./args/VersionGroupVersionGroupRegionsArgs";
import { VersionGroupVersionsArgs } from "./args/VersionGroupVersionsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroup)
export class VersionGroupRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Generation, {
    nullable: false
  })
  async generation(@TypeGraphQL.Root() versionGroup: VersionGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Generation> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      where: {
        id: versionGroup.id,
      },
    }).generation({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Version], {
    nullable: false
  })
  async versions(@TypeGraphQL.Root() versionGroup: VersionGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionGroupVersionsArgs): Promise<Version[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      where: {
        id: versionGroup.id,
      },
    }).versions({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [EncounterSlot], {
    nullable: false
  })
  async encounterSlots(@TypeGraphQL.Root() versionGroup: VersionGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionGroupEncounterSlotsArgs): Promise<EncounterSlot[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      where: {
        id: versionGroup.id,
      },
    }).encounterSlots({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Machine], {
    nullable: false
  })
  async machines(@TypeGraphQL.Root() versionGroup: VersionGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionGroupMachinesArgs): Promise<Machine[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      where: {
        id: versionGroup.id,
      },
    }).machines({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [VersionGroupPokemonMoveMethod], {
    nullable: false
  })
  async versionGroupPokemonMoveMethods(@TypeGraphQL.Root() versionGroup: VersionGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionGroupVersionGroupPokemonMoveMethodsArgs): Promise<VersionGroupPokemonMoveMethod[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      where: {
        id: versionGroup.id,
      },
    }).versionGroupPokemonMoveMethods({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [VersionGroupRegion], {
    nullable: false
  })
  async versionGroupRegions(@TypeGraphQL.Root() versionGroup: VersionGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionGroupVersionGroupRegionsArgs): Promise<VersionGroupRegion[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      where: {
        id: versionGroup.id,
      },
    }).versionGroupRegions({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokedexVersionGroup], {
    nullable: false
  })
  async pokedexVersionGroups(@TypeGraphQL.Root() versionGroup: VersionGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionGroupPokedexVersionGroupsArgs): Promise<PokedexVersionGroup[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      where: {
        id: versionGroup.id,
      },
    }).pokedexVersionGroups({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonMove], {
    nullable: false
  })
  async pokemonMoves(@TypeGraphQL.Root() versionGroup: VersionGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionGroupPokemonMovesArgs): Promise<PokemonMove[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      where: {
        id: versionGroup.id,
      },
    }).pokemonMoves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonForm], {
    nullable: false
  })
  async pokemonForms(@TypeGraphQL.Root() versionGroup: VersionGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionGroupPokemonFormsArgs): Promise<PokemonForm[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      where: {
        id: versionGroup.id,
      },
    }).pokemonForms({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
