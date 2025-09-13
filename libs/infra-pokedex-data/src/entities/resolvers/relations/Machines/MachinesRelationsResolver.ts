import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Items } from "../../../models/Items";
import { Machines } from "../../../models/Machines";
import { Moves } from "../../../models/Moves";
import { VersionGroups } from "../../../models/VersionGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Machines)
export class MachinesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => VersionGroups, {
    nullable: false
  })
  async versionGroup(@TypeGraphQL.Root() machines: Machines, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<VersionGroups> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).machines.findUniqueOrThrow({
      where: {
        machine_number_version_group_id: {
          machine_number: machines.machine_number,
          version_group_id: machines.version_group_id,
        },
      },
    }).versionGroup({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Items, {
    nullable: false
  })
  async item(@TypeGraphQL.Root() machines: Machines, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Items> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).machines.findUniqueOrThrow({
      where: {
        machine_number_version_group_id: {
          machine_number: machines.machine_number,
          version_group_id: machines.version_group_id,
        },
      },
    }).item({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Moves, {
    nullable: false
  })
  async move(@TypeGraphQL.Root() machines: Machines, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Moves> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).machines.findUniqueOrThrow({
      where: {
        machine_number_version_group_id: {
          machine_number: machines.machine_number,
          version_group_id: machines.version_group_id,
        },
      },
    }).move({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
