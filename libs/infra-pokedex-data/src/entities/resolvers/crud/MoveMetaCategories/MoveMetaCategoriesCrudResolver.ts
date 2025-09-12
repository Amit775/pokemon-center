import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveMetaCategoriesArgs } from "./args/AggregateMoveMetaCategoriesArgs";
import { CreateManyAndReturnMoveMetaCategoriesArgs } from "./args/CreateManyAndReturnMoveMetaCategoriesArgs";
import { CreateManyMoveMetaCategoriesArgs } from "./args/CreateManyMoveMetaCategoriesArgs";
import { CreateOneMoveMetaCategoriesArgs } from "./args/CreateOneMoveMetaCategoriesArgs";
import { DeleteManyMoveMetaCategoriesArgs } from "./args/DeleteManyMoveMetaCategoriesArgs";
import { DeleteOneMoveMetaCategoriesArgs } from "./args/DeleteOneMoveMetaCategoriesArgs";
import { FindFirstMoveMetaCategoriesArgs } from "./args/FindFirstMoveMetaCategoriesArgs";
import { FindFirstMoveMetaCategoriesOrThrowArgs } from "./args/FindFirstMoveMetaCategoriesOrThrowArgs";
import { FindManyMoveMetaCategoriesArgs } from "./args/FindManyMoveMetaCategoriesArgs";
import { FindUniqueMoveMetaCategoriesArgs } from "./args/FindUniqueMoveMetaCategoriesArgs";
import { FindUniqueMoveMetaCategoriesOrThrowArgs } from "./args/FindUniqueMoveMetaCategoriesOrThrowArgs";
import { GroupByMoveMetaCategoriesArgs } from "./args/GroupByMoveMetaCategoriesArgs";
import { UpdateManyMoveMetaCategoriesArgs } from "./args/UpdateManyMoveMetaCategoriesArgs";
import { UpdateOneMoveMetaCategoriesArgs } from "./args/UpdateOneMoveMetaCategoriesArgs";
import { UpsertOneMoveMetaCategoriesArgs } from "./args/UpsertOneMoveMetaCategoriesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MoveMetaCategories } from "../../../models/MoveMetaCategories";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMoveMetaCategories } from "../../outputs/AggregateMoveMetaCategories";
import { CreateManyAndReturnMoveMetaCategories } from "../../outputs/CreateManyAndReturnMoveMetaCategories";
import { MoveMetaCategoriesGroupBy } from "../../outputs/MoveMetaCategoriesGroupBy";

@TypeGraphQL.Resolver(_of => MoveMetaCategories)
export class MoveMetaCategoriesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveMetaCategories, {
    nullable: false
  })
  async aggregateMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveMetaCategoriesArgs): Promise<AggregateMoveMetaCategories> {
    return getPrismaFromContext(ctx).moveMetaCategories.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyMoveMetaCategoriesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoveMetaCategories], {
    nullable: false
  })
  async createManyAndReturnMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveMetaCategoriesArgs): Promise<CreateManyAndReturnMoveMetaCategories[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MoveMetaCategories, {
    nullable: false
  })
  async createOneMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneMoveMetaCategoriesArgs): Promise<MoveMetaCategories> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyMoveMetaCategoriesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MoveMetaCategories, {
    nullable: true
  })
  async deleteOneMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMoveMetaCategoriesArgs): Promise<MoveMetaCategories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaCategories, {
    nullable: true
  })
  async findFirstMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaCategoriesArgs): Promise<MoveMetaCategories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaCategories, {
    nullable: true
  })
  async findFirstMoveMetaCategoriesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaCategoriesOrThrowArgs): Promise<MoveMetaCategories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveMetaCategories], {
    nullable: false
  })
  async findManyMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveMetaCategoriesArgs): Promise<MoveMetaCategories[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaCategories, {
    nullable: true
  })
  async findUniqueMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveMetaCategoriesArgs): Promise<MoveMetaCategories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaCategories, {
    nullable: true
  })
  async findUniqueMoveMetaCategoriesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveMetaCategoriesOrThrowArgs): Promise<MoveMetaCategories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveMetaCategoriesGroupBy], {
    nullable: false
  })
  async groupByMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveMetaCategoriesArgs): Promise<MoveMetaCategoriesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyMoveMetaCategoriesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MoveMetaCategories, {
    nullable: true
  })
  async updateOneMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMoveMetaCategoriesArgs): Promise<MoveMetaCategories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MoveMetaCategories, {
    nullable: false
  })
  async upsertOneMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMoveMetaCategoriesArgs): Promise<MoveMetaCategories> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
