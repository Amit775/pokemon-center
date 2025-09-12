import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokedexVersionGroupsArgs } from "./args/AggregatePokedexVersionGroupsArgs";
import { CreateManyAndReturnPokedexVersionGroupsArgs } from "./args/CreateManyAndReturnPokedexVersionGroupsArgs";
import { CreateManyPokedexVersionGroupsArgs } from "./args/CreateManyPokedexVersionGroupsArgs";
import { CreateOnePokedexVersionGroupsArgs } from "./args/CreateOnePokedexVersionGroupsArgs";
import { DeleteManyPokedexVersionGroupsArgs } from "./args/DeleteManyPokedexVersionGroupsArgs";
import { DeleteOnePokedexVersionGroupsArgs } from "./args/DeleteOnePokedexVersionGroupsArgs";
import { FindFirstPokedexVersionGroupsArgs } from "./args/FindFirstPokedexVersionGroupsArgs";
import { FindFirstPokedexVersionGroupsOrThrowArgs } from "./args/FindFirstPokedexVersionGroupsOrThrowArgs";
import { FindManyPokedexVersionGroupsArgs } from "./args/FindManyPokedexVersionGroupsArgs";
import { FindUniquePokedexVersionGroupsArgs } from "./args/FindUniquePokedexVersionGroupsArgs";
import { FindUniquePokedexVersionGroupsOrThrowArgs } from "./args/FindUniquePokedexVersionGroupsOrThrowArgs";
import { GroupByPokedexVersionGroupsArgs } from "./args/GroupByPokedexVersionGroupsArgs";
import { UpdateManyPokedexVersionGroupsArgs } from "./args/UpdateManyPokedexVersionGroupsArgs";
import { UpdateOnePokedexVersionGroupsArgs } from "./args/UpdateOnePokedexVersionGroupsArgs";
import { UpsertOnePokedexVersionGroupsArgs } from "./args/UpsertOnePokedexVersionGroupsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PokedexVersionGroups } from "../../../models/PokedexVersionGroups";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePokedexVersionGroups } from "../../outputs/AggregatePokedexVersionGroups";
import { CreateManyAndReturnPokedexVersionGroups } from "../../outputs/CreateManyAndReturnPokedexVersionGroups";
import { PokedexVersionGroupsGroupBy } from "../../outputs/PokedexVersionGroupsGroupBy";

@TypeGraphQL.Resolver(_of => PokedexVersionGroups)
export class PokedexVersionGroupsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePokedexVersionGroups, {
    nullable: false
  })
  async aggregatePokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokedexVersionGroupsArgs): Promise<AggregatePokedexVersionGroups> {
    return getPrismaFromContext(ctx).pokedexVersionGroups.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyPokedexVersionGroupsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokedexVersionGroups], {
    nullable: false
  })
  async createManyAndReturnPokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokedexVersionGroupsArgs): Promise<CreateManyAndReturnPokedexVersionGroups[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokedexVersionGroups, {
    nullable: false
  })
  async createOnePokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePokedexVersionGroupsArgs): Promise<PokedexVersionGroups> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyPokedexVersionGroupsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokedexVersionGroups, {
    nullable: true
  })
  async deleteOnePokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePokedexVersionGroupsArgs): Promise<PokedexVersionGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokedexVersionGroups, {
    nullable: true
  })
  async findFirstPokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokedexVersionGroupsArgs): Promise<PokedexVersionGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokedexVersionGroups, {
    nullable: true
  })
  async findFirstPokedexVersionGroupsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokedexVersionGroupsOrThrowArgs): Promise<PokedexVersionGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokedexVersionGroups], {
    nullable: false
  })
  async findManyPokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokedexVersionGroupsArgs): Promise<PokedexVersionGroups[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokedexVersionGroups, {
    nullable: true
  })
  async findUniquePokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokedexVersionGroupsArgs): Promise<PokedexVersionGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PokedexVersionGroups, {
    nullable: true
  })
  async findUniquePokedexVersionGroupsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokedexVersionGroupsOrThrowArgs): Promise<PokedexVersionGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PokedexVersionGroupsGroupBy], {
    nullable: false
  })
  async groupByPokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokedexVersionGroupsArgs): Promise<PokedexVersionGroupsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyPokedexVersionGroupsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokedexVersionGroups, {
    nullable: true
  })
  async updateOnePokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePokedexVersionGroupsArgs): Promise<PokedexVersionGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PokedexVersionGroups, {
    nullable: false
  })
  async upsertOnePokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePokedexVersionGroupsArgs): Promise<PokedexVersionGroups> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
