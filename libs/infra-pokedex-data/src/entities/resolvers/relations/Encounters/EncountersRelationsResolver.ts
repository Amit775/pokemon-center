import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EncounterConditionValueMap } from "../../../models/EncounterConditionValueMap";
import { EncounterSlots } from "../../../models/EncounterSlots";
import { Encounters } from "../../../models/Encounters";
import { LocationAreas } from "../../../models/LocationAreas";
import { Pokemon } from "../../../models/Pokemon";
import { Versions } from "../../../models/Versions";
import { EncountersConditionValueMapArgs } from "./args/EncountersConditionValueMapArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Encounters)
export class EncountersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Versions, {
    nullable: false
  })
  async version(@TypeGraphQL.Root() encounters: Encounters, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Versions> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findUniqueOrThrow({
      where: {
        id: encounters.id,
      },
    }).version({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => LocationAreas, {
    nullable: false
  })
  async locationArea(@TypeGraphQL.Root() encounters: Encounters, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<LocationAreas> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findUniqueOrThrow({
      where: {
        id: encounters.id,
      },
    }).locationArea({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => EncounterSlots, {
    nullable: false
  })
  async encounterSlot(@TypeGraphQL.Root() encounters: Encounters, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<EncounterSlots> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findUniqueOrThrow({
      where: {
        id: encounters.id,
      },
    }).encounterSlot({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Pokemon, {
    nullable: false
  })
  async pokemon(@TypeGraphQL.Root() encounters: Encounters, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Pokemon> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findUniqueOrThrow({
      where: {
        id: encounters.id,
      },
    }).pokemon({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [EncounterConditionValueMap], {
    nullable: false
  })
  async conditionValueMap(@TypeGraphQL.Root() encounters: Encounters, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EncountersConditionValueMapArgs): Promise<EncounterConditionValueMap[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounters.findUniqueOrThrow({
      where: {
        id: encounters.id,
      },
    }).conditionValueMap({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
