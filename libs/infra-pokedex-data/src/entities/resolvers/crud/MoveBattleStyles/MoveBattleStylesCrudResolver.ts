import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveBattleStylesArgs } from "./args/AggregateMoveBattleStylesArgs";
import { CreateManyAndReturnMoveBattleStylesArgs } from "./args/CreateManyAndReturnMoveBattleStylesArgs";
import { CreateManyMoveBattleStylesArgs } from "./args/CreateManyMoveBattleStylesArgs";
import { CreateOneMoveBattleStylesArgs } from "./args/CreateOneMoveBattleStylesArgs";
import { DeleteManyMoveBattleStylesArgs } from "./args/DeleteManyMoveBattleStylesArgs";
import { DeleteOneMoveBattleStylesArgs } from "./args/DeleteOneMoveBattleStylesArgs";
import { FindFirstMoveBattleStylesArgs } from "./args/FindFirstMoveBattleStylesArgs";
import { FindFirstMoveBattleStylesOrThrowArgs } from "./args/FindFirstMoveBattleStylesOrThrowArgs";
import { FindManyMoveBattleStylesArgs } from "./args/FindManyMoveBattleStylesArgs";
import { FindUniqueMoveBattleStylesArgs } from "./args/FindUniqueMoveBattleStylesArgs";
import { FindUniqueMoveBattleStylesOrThrowArgs } from "./args/FindUniqueMoveBattleStylesOrThrowArgs";
import { GroupByMoveBattleStylesArgs } from "./args/GroupByMoveBattleStylesArgs";
import { UpdateManyMoveBattleStylesArgs } from "./args/UpdateManyMoveBattleStylesArgs";
import { UpdateOneMoveBattleStylesArgs } from "./args/UpdateOneMoveBattleStylesArgs";
import { UpsertOneMoveBattleStylesArgs } from "./args/UpsertOneMoveBattleStylesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MoveBattleStyles } from "../../../models/MoveBattleStyles";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMoveBattleStyles } from "../../outputs/AggregateMoveBattleStyles";
import { CreateManyAndReturnMoveBattleStyles } from "../../outputs/CreateManyAndReturnMoveBattleStyles";
import { MoveBattleStylesGroupBy } from "../../outputs/MoveBattleStylesGroupBy";

@TypeGraphQL.Resolver(_of => MoveBattleStyles)
export class MoveBattleStylesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveBattleStyles, {
    nullable: false
  })
  async aggregateMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveBattleStylesArgs): Promise<AggregateMoveBattleStyles> {
    return getPrismaFromContext(ctx).moveBattleStyles.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyMoveBattleStylesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoveBattleStyles], {
    nullable: false
  })
  async createManyAndReturnMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveBattleStylesArgs): Promise<CreateManyAndReturnMoveBattleStyles[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MoveBattleStyles, {
    nullable: false
  })
  async createOneMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneMoveBattleStylesArgs): Promise<MoveBattleStyles> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyMoveBattleStylesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MoveBattleStyles, {
    nullable: true
  })
  async deleteOneMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMoveBattleStylesArgs): Promise<MoveBattleStyles | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveBattleStyles, {
    nullable: true
  })
  async findFirstMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveBattleStylesArgs): Promise<MoveBattleStyles | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveBattleStyles, {
    nullable: true
  })
  async findFirstMoveBattleStylesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveBattleStylesOrThrowArgs): Promise<MoveBattleStyles | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveBattleStyles], {
    nullable: false
  })
  async findManyMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveBattleStylesArgs): Promise<MoveBattleStyles[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveBattleStyles, {
    nullable: true
  })
  async findUniqueMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveBattleStylesArgs): Promise<MoveBattleStyles | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveBattleStyles, {
    nullable: true
  })
  async findUniqueMoveBattleStylesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveBattleStylesOrThrowArgs): Promise<MoveBattleStyles | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveBattleStylesGroupBy], {
    nullable: false
  })
  async groupByMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveBattleStylesArgs): Promise<MoveBattleStylesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyMoveBattleStylesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MoveBattleStyles, {
    nullable: true
  })
  async updateOneMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMoveBattleStylesArgs): Promise<MoveBattleStyles | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MoveBattleStyles, {
    nullable: false
  })
  async upsertOneMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMoveBattleStylesArgs): Promise<MoveBattleStyles> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
