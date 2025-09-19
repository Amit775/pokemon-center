import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Encounter } from "../../../models/Encounter";
import { LocationAreaEncounterRate } from "../../../models/LocationAreaEncounterRate";
import { PokemonGameIndex } from "../../../models/PokemonGameIndex";
import { PokemonItem } from "../../../models/PokemonItem";
import { Version } from "../../../models/Version";
import { VersionGroup } from "../../../models/VersionGroup";
import { VersionEncountersArgs } from "./args/VersionEncountersArgs";
import { VersionLocationAreaEncounterRatesArgs } from "./args/VersionLocationAreaEncounterRatesArgs";
import { VersionPokemonGameIndicesArgs } from "./args/VersionPokemonGameIndicesArgs";
import { VersionPokemonItemsArgs } from "./args/VersionPokemonItemsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Version)
export class VersionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => VersionGroup, {
    nullable: false
  })
  async versionGroup(@TypeGraphQL.Root() version: Version, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<VersionGroup> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versions.findUniqueOrThrow({
      where: {
        id: version.id,
      },
    }).versionGroup({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Encounter], {
    nullable: false
  })
  async encounters(@TypeGraphQL.Root() version: Version, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionEncountersArgs): Promise<Encounter[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versions.findUniqueOrThrow({
      where: {
        id: version.id,
      },
    }).encounters({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonItem], {
    nullable: false
  })
  async pokemonItems(@TypeGraphQL.Root() version: Version, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionPokemonItemsArgs): Promise<PokemonItem[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versions.findUniqueOrThrow({
      where: {
        id: version.id,
      },
    }).pokemonItems({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonGameIndex], {
    nullable: false
  })
  async pokemonGameIndices(@TypeGraphQL.Root() version: Version, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionPokemonGameIndicesArgs): Promise<PokemonGameIndex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versions.findUniqueOrThrow({
      where: {
        id: version.id,
      },
    }).pokemonGameIndices({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [LocationAreaEncounterRate], {
    nullable: false
  })
  async locationAreaEncounterRates(@TypeGraphQL.Root() version: Version, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionLocationAreaEncounterRatesArgs): Promise<LocationAreaEncounterRate[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versions.findUniqueOrThrow({
      where: {
        id: version.id,
      },
    }).locationAreaEncounterRates({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
