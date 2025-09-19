import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVersionGroupArgs } from "./args/AggregateVersionGroupArgs";
import { CreateManyAndReturnVersionGroupArgs } from "./args/CreateManyAndReturnVersionGroupArgs";
import { CreateManyVersionGroupArgs } from "./args/CreateManyVersionGroupArgs";
import { CreateOneVersionGroupArgs } from "./args/CreateOneVersionGroupArgs";
import { DeleteManyVersionGroupArgs } from "./args/DeleteManyVersionGroupArgs";
import { DeleteOneVersionGroupArgs } from "./args/DeleteOneVersionGroupArgs";
import { FindFirstVersionGroupArgs } from "./args/FindFirstVersionGroupArgs";
import { FindFirstVersionGroupOrThrowArgs } from "./args/FindFirstVersionGroupOrThrowArgs";
import { FindManyVersionGroupArgs } from "./args/FindManyVersionGroupArgs";
import { FindUniqueVersionGroupArgs } from "./args/FindUniqueVersionGroupArgs";
import { FindUniqueVersionGroupOrThrowArgs } from "./args/FindUniqueVersionGroupOrThrowArgs";
import { GroupByVersionGroupArgs } from "./args/GroupByVersionGroupArgs";
import { UpdateManyVersionGroupArgs } from "./args/UpdateManyVersionGroupArgs";
import { UpdateOneVersionGroupArgs } from "./args/UpdateOneVersionGroupArgs";
import { UpsertOneVersionGroupArgs } from "./args/UpsertOneVersionGroupArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { VersionGroup } from "../../../models/VersionGroup";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateVersionGroup } from "../../outputs/AggregateVersionGroup";
import { CreateManyAndReturnVersionGroup } from "../../outputs/CreateManyAndReturnVersionGroup";
import { VersionGroupGroupBy } from "../../outputs/VersionGroupGroupBy";

@TypeGraphQL.Resolver(_of => VersionGroup)
export class VersionGroupCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateVersionGroup, {
    nullable: false
  })
  async aggregateVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVersionGroupArgs): Promise<AggregateVersionGroup> {
    return getPrismaFromContext(ctx).versionGroups.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyVersionGroupArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnVersionGroup], {
    nullable: false
  })
  async createManyAndReturnVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnVersionGroupArgs): Promise<CreateManyAndReturnVersionGroup[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VersionGroup, {
    nullable: false
  })
  async createOneVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneVersionGroupArgs): Promise<VersionGroup> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyVersionGroupArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VersionGroup, {
    nullable: true
  })
  async deleteOneVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneVersionGroupArgs): Promise<VersionGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroup, {
    nullable: true
  })
  async findFirstVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVersionGroupArgs): Promise<VersionGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroup, {
    nullable: true
  })
  async findFirstVersionGroupOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVersionGroupOrThrowArgs): Promise<VersionGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VersionGroup], {
    nullable: false
  })
  async versionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyVersionGroupArgs): Promise<VersionGroup[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroup, {
    nullable: true
  })
  async versionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVersionGroupArgs): Promise<VersionGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroup, {
    nullable: true
  })
  async getVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVersionGroupOrThrowArgs): Promise<VersionGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VersionGroupGroupBy], {
    nullable: false
  })
  async groupByVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVersionGroupArgs): Promise<VersionGroupGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyVersionGroupArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VersionGroup, {
    nullable: true
  })
  async updateOneVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneVersionGroupArgs): Promise<VersionGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VersionGroup, {
    nullable: false
  })
  async upsertOneVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneVersionGroupArgs): Promise<VersionGroup> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
