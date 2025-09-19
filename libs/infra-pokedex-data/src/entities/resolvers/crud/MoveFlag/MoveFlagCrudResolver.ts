import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveFlagArgs } from "./args/AggregateMoveFlagArgs";
import { CreateManyAndReturnMoveFlagArgs } from "./args/CreateManyAndReturnMoveFlagArgs";
import { CreateManyMoveFlagArgs } from "./args/CreateManyMoveFlagArgs";
import { CreateOneMoveFlagArgs } from "./args/CreateOneMoveFlagArgs";
import { DeleteManyMoveFlagArgs } from "./args/DeleteManyMoveFlagArgs";
import { DeleteOneMoveFlagArgs } from "./args/DeleteOneMoveFlagArgs";
import { FindFirstMoveFlagArgs } from "./args/FindFirstMoveFlagArgs";
import { FindFirstMoveFlagOrThrowArgs } from "./args/FindFirstMoveFlagOrThrowArgs";
import { FindManyMoveFlagArgs } from "./args/FindManyMoveFlagArgs";
import { FindUniqueMoveFlagArgs } from "./args/FindUniqueMoveFlagArgs";
import { FindUniqueMoveFlagOrThrowArgs } from "./args/FindUniqueMoveFlagOrThrowArgs";
import { GroupByMoveFlagArgs } from "./args/GroupByMoveFlagArgs";
import { UpdateManyMoveFlagArgs } from "./args/UpdateManyMoveFlagArgs";
import { UpdateOneMoveFlagArgs } from "./args/UpdateOneMoveFlagArgs";
import { UpsertOneMoveFlagArgs } from "./args/UpsertOneMoveFlagArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MoveFlag } from "../../../models/MoveFlag";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMoveFlag } from "../../outputs/AggregateMoveFlag";
import { CreateManyAndReturnMoveFlag } from "../../outputs/CreateManyAndReturnMoveFlag";
import { MoveFlagGroupBy } from "../../outputs/MoveFlagGroupBy";

@TypeGraphQL.Resolver(_of => MoveFlag)
export class MoveFlagCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveFlag, {
    nullable: false
  })
  async aggregateMoveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveFlagArgs): Promise<AggregateMoveFlag> {
    return getPrismaFromContext(ctx).moveFlags.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMoveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyMoveFlagArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoveFlag], {
    nullable: false
  })
  async createManyAndReturnMoveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveFlagArgs): Promise<CreateManyAndReturnMoveFlag[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MoveFlag, {
    nullable: false
  })
  async createOneMoveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneMoveFlagArgs): Promise<MoveFlag> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMoveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyMoveFlagArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MoveFlag, {
    nullable: true
  })
  async deleteOneMoveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMoveFlagArgs): Promise<MoveFlag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveFlag, {
    nullable: true
  })
  async findFirstMoveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveFlagArgs): Promise<MoveFlag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveFlag, {
    nullable: true
  })
  async findFirstMoveFlagOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveFlagOrThrowArgs): Promise<MoveFlag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveFlag], {
    nullable: false
  })
  async moveFlags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveFlagArgs): Promise<MoveFlag[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveFlag, {
    nullable: true
  })
  async moveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveFlagArgs): Promise<MoveFlag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveFlag, {
    nullable: true
  })
  async getMoveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveFlagOrThrowArgs): Promise<MoveFlag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveFlagGroupBy], {
    nullable: false
  })
  async groupByMoveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveFlagArgs): Promise<MoveFlagGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMoveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyMoveFlagArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MoveFlag, {
    nullable: true
  })
  async updateOneMoveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMoveFlagArgs): Promise<MoveFlag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MoveFlag, {
    nullable: false
  })
  async upsertOneMoveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMoveFlagArgs): Promise<MoveFlag> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
