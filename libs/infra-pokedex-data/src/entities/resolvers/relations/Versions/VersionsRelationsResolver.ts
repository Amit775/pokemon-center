import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Encounters } from "../../../models/Encounters";
import { LocationAreaEncounterRates } from "../../../models/LocationAreaEncounterRates";
import { PokemonGameIndices } from "../../../models/PokemonGameIndices";
import { PokemonItems } from "../../../models/PokemonItems";
import { VersionGroups } from "../../../models/VersionGroups";
import { Versions } from "../../../models/Versions";
import { VersionsEncountersArgs } from "./args/VersionsEncountersArgs";
import { VersionsLocationAreaEncounterRatesArgs } from "./args/VersionsLocationAreaEncounterRatesArgs";
import { VersionsPokemonGameIndicesArgs } from "./args/VersionsPokemonGameIndicesArgs";
import { VersionsPokemonItemsArgs } from "./args/VersionsPokemonItemsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Versions)
export class VersionsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => VersionGroups, {
    nullable: false
  })
  async versionGroup(@TypeGraphQL.Root() versions: Versions, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<VersionGroups> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versions.findUniqueOrThrow({
      where: {
        id: versions.id,
      },
    }).versionGroup({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Encounters], {
    nullable: false
  })
  async encounters(@TypeGraphQL.Root() versions: Versions, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionsEncountersArgs): Promise<Encounters[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versions.findUniqueOrThrow({
      where: {
        id: versions.id,
      },
    }).encounters({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonItems], {
    nullable: false
  })
  async pokemonItems(@TypeGraphQL.Root() versions: Versions, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionsPokemonItemsArgs): Promise<PokemonItems[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versions.findUniqueOrThrow({
      where: {
        id: versions.id,
      },
    }).pokemonItems({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonGameIndices], {
    nullable: false
  })
  async pokemonGameIndices(@TypeGraphQL.Root() versions: Versions, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionsPokemonGameIndicesArgs): Promise<PokemonGameIndices[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versions.findUniqueOrThrow({
      where: {
        id: versions.id,
      },
    }).pokemonGameIndices({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [LocationAreaEncounterRates], {
    nullable: false
  })
  async locationAreaEncounterRates(@TypeGraphQL.Root() versions: Versions, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: VersionsLocationAreaEncounterRatesArgs): Promise<LocationAreaEncounterRates[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versions.findUniqueOrThrow({
      where: {
        id: versions.id,
      },
    }).locationAreaEncounterRates({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
