import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EncounterMethods } from "../../../models/EncounterMethods";
import { EncounterSlots } from "../../../models/EncounterSlots";
import { Encounters } from "../../../models/Encounters";
import { VersionGroups } from "../../../models/VersionGroups";
import { EncounterSlotsEncountersArgs } from "./args/EncounterSlotsEncountersArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterSlots)
export class EncounterSlotsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => VersionGroups, {
    nullable: false
  })
  async versionGroup(@TypeGraphQL.Root() encounterSlots: EncounterSlots, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<VersionGroups> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.findUniqueOrThrow({
      where: {
        id: encounterSlots.id,
      },
    }).versionGroup({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => EncounterMethods, {
    nullable: false
  })
  async encounterMethod(@TypeGraphQL.Root() encounterSlots: EncounterSlots, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<EncounterMethods> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.findUniqueOrThrow({
      where: {
        id: encounterSlots.id,
      },
    }).encounterMethod({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Encounters], {
    nullable: false
  })
  async encounters(@TypeGraphQL.Root() encounterSlots: EncounterSlots, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EncounterSlotsEncountersArgs): Promise<Encounters[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterSlots.findUniqueOrThrow({
      where: {
        id: encounterSlots.id,
      },
    }).encounters({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
