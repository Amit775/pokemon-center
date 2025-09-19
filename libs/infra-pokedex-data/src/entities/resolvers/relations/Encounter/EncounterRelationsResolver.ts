import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Encounter } from "../../../models/Encounter";
import { EncounterConditionValueMap } from "../../../models/EncounterConditionValueMap";
import { EncounterSlot } from "../../../models/EncounterSlot";
import { LocationArea } from "../../../models/LocationArea";
import { Pokemon } from "../../../models/Pokemon";
import { Version } from "../../../models/Version";
import { EncounterConditionValueMapArgs } from "./args/EncounterConditionValueMapArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Encounter)
export class EncounterRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Version, {
    nullable: false
  })
  async version(@TypeGraphQL.Root() encounter: Encounter, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Version> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findUniqueOrThrow({
      where: {
        id: encounter.id,
      },
    }).version({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => LocationArea, {
    nullable: false
  })
  async locationArea(@TypeGraphQL.Root() encounter: Encounter, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<LocationArea> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findUniqueOrThrow({
      where: {
        id: encounter.id,
      },
    }).locationArea({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => EncounterSlot, {
    nullable: false
  })
  async encounterSlot(@TypeGraphQL.Root() encounter: Encounter, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<EncounterSlot> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findUniqueOrThrow({
      where: {
        id: encounter.id,
      },
    }).encounterSlot({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Pokemon, {
    nullable: false
  })
  async pokemon(@TypeGraphQL.Root() encounter: Encounter, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Pokemon> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findUniqueOrThrow({
      where: {
        id: encounter.id,
      },
    }).pokemon({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [EncounterConditionValueMap], {
    nullable: false
  })
  async conditionValueMap(@TypeGraphQL.Root() encounter: Encounter, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EncounterConditionValueMapArgs): Promise<EncounterConditionValueMap[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findUniqueOrThrow({
      where: {
        id: encounter.id,
      },
    }).conditionValueMap({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
