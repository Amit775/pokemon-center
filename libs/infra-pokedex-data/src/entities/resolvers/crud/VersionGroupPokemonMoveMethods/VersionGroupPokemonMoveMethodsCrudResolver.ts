import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVersionGroupPokemonMoveMethodsArgs } from "./args/AggregateVersionGroupPokemonMoveMethodsArgs";
import { CreateManyAndReturnVersionGroupPokemonMoveMethodsArgs } from "./args/CreateManyAndReturnVersionGroupPokemonMoveMethodsArgs";
import { CreateManyVersionGroupPokemonMoveMethodsArgs } from "./args/CreateManyVersionGroupPokemonMoveMethodsArgs";
import { CreateOneVersionGroupPokemonMoveMethodsArgs } from "./args/CreateOneVersionGroupPokemonMoveMethodsArgs";
import { DeleteManyVersionGroupPokemonMoveMethodsArgs } from "./args/DeleteManyVersionGroupPokemonMoveMethodsArgs";
import { DeleteOneVersionGroupPokemonMoveMethodsArgs } from "./args/DeleteOneVersionGroupPokemonMoveMethodsArgs";
import { FindFirstVersionGroupPokemonMoveMethodsArgs } from "./args/FindFirstVersionGroupPokemonMoveMethodsArgs";
import { FindFirstVersionGroupPokemonMoveMethodsOrThrowArgs } from "./args/FindFirstVersionGroupPokemonMoveMethodsOrThrowArgs";
import { FindManyVersionGroupPokemonMoveMethodsArgs } from "./args/FindManyVersionGroupPokemonMoveMethodsArgs";
import { FindUniqueVersionGroupPokemonMoveMethodsArgs } from "./args/FindUniqueVersionGroupPokemonMoveMethodsArgs";
import { FindUniqueVersionGroupPokemonMoveMethodsOrThrowArgs } from "./args/FindUniqueVersionGroupPokemonMoveMethodsOrThrowArgs";
import { GroupByVersionGroupPokemonMoveMethodsArgs } from "./args/GroupByVersionGroupPokemonMoveMethodsArgs";
import { UpdateManyVersionGroupPokemonMoveMethodsArgs } from "./args/UpdateManyVersionGroupPokemonMoveMethodsArgs";
import { UpdateOneVersionGroupPokemonMoveMethodsArgs } from "./args/UpdateOneVersionGroupPokemonMoveMethodsArgs";
import { UpsertOneVersionGroupPokemonMoveMethodsArgs } from "./args/UpsertOneVersionGroupPokemonMoveMethodsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { VersionGroupPokemonMoveMethods } from "../../../models/VersionGroupPokemonMoveMethods";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateVersionGroupPokemonMoveMethods } from "../../outputs/AggregateVersionGroupPokemonMoveMethods";
import { CreateManyAndReturnVersionGroupPokemonMoveMethods } from "../../outputs/CreateManyAndReturnVersionGroupPokemonMoveMethods";
import { VersionGroupPokemonMoveMethodsGroupBy } from "../../outputs/VersionGroupPokemonMoveMethodsGroupBy";

@TypeGraphQL.Resolver(_of => VersionGroupPokemonMoveMethods)
export class VersionGroupPokemonMoveMethodsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateVersionGroupPokemonMoveMethods, {
    nullable: false
  })
  async aggregateVersionGroupPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVersionGroupPokemonMoveMethodsArgs): Promise<AggregateVersionGroupPokemonMoveMethods> {
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyVersionGroupPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyVersionGroupPokemonMoveMethodsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnVersionGroupPokemonMoveMethods], {
    nullable: false
  })
  async createManyAndReturnVersionGroupPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnVersionGroupPokemonMoveMethodsArgs): Promise<CreateManyAndReturnVersionGroupPokemonMoveMethods[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VersionGroupPokemonMoveMethods, {
    nullable: false
  })
  async createOneVersionGroupPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneVersionGroupPokemonMoveMethodsArgs): Promise<VersionGroupPokemonMoveMethods> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyVersionGroupPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyVersionGroupPokemonMoveMethodsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VersionGroupPokemonMoveMethods, {
    nullable: true
  })
  async deleteOneVersionGroupPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneVersionGroupPokemonMoveMethodsArgs): Promise<VersionGroupPokemonMoveMethods | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroupPokemonMoveMethods, {
    nullable: true
  })
  async findFirstVersionGroupPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVersionGroupPokemonMoveMethodsArgs): Promise<VersionGroupPokemonMoveMethods | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroupPokemonMoveMethods, {
    nullable: true
  })
  async findFirstVersionGroupPokemonMoveMethodsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVersionGroupPokemonMoveMethodsOrThrowArgs): Promise<VersionGroupPokemonMoveMethods | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VersionGroupPokemonMoveMethods], {
    nullable: false
  })
  async findManyVersionGroupPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyVersionGroupPokemonMoveMethodsArgs): Promise<VersionGroupPokemonMoveMethods[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroupPokemonMoveMethods, {
    nullable: true
  })
  async findUniqueVersionGroupPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVersionGroupPokemonMoveMethodsArgs): Promise<VersionGroupPokemonMoveMethods | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroupPokemonMoveMethods, {
    nullable: true
  })
  async findUniqueVersionGroupPokemonMoveMethodsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVersionGroupPokemonMoveMethodsOrThrowArgs): Promise<VersionGroupPokemonMoveMethods | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VersionGroupPokemonMoveMethodsGroupBy], {
    nullable: false
  })
  async groupByVersionGroupPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVersionGroupPokemonMoveMethodsArgs): Promise<VersionGroupPokemonMoveMethodsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyVersionGroupPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyVersionGroupPokemonMoveMethodsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VersionGroupPokemonMoveMethods, {
    nullable: true
  })
  async updateOneVersionGroupPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneVersionGroupPokemonMoveMethodsArgs): Promise<VersionGroupPokemonMoveMethods | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VersionGroupPokemonMoveMethods, {
    nullable: false
  })
  async upsertOneVersionGroupPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneVersionGroupPokemonMoveMethodsArgs): Promise<VersionGroupPokemonMoveMethods> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
