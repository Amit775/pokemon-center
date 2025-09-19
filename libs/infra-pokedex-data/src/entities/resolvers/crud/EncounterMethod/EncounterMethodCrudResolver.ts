import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncounterMethodArgs } from "./args/AggregateEncounterMethodArgs";
import { CreateManyAndReturnEncounterMethodArgs } from "./args/CreateManyAndReturnEncounterMethodArgs";
import { CreateManyEncounterMethodArgs } from "./args/CreateManyEncounterMethodArgs";
import { CreateOneEncounterMethodArgs } from "./args/CreateOneEncounterMethodArgs";
import { DeleteManyEncounterMethodArgs } from "./args/DeleteManyEncounterMethodArgs";
import { DeleteOneEncounterMethodArgs } from "./args/DeleteOneEncounterMethodArgs";
import { FindFirstEncounterMethodArgs } from "./args/FindFirstEncounterMethodArgs";
import { FindFirstEncounterMethodOrThrowArgs } from "./args/FindFirstEncounterMethodOrThrowArgs";
import { FindManyEncounterMethodArgs } from "./args/FindManyEncounterMethodArgs";
import { FindUniqueEncounterMethodArgs } from "./args/FindUniqueEncounterMethodArgs";
import { FindUniqueEncounterMethodOrThrowArgs } from "./args/FindUniqueEncounterMethodOrThrowArgs";
import { GroupByEncounterMethodArgs } from "./args/GroupByEncounterMethodArgs";
import { UpdateManyEncounterMethodArgs } from "./args/UpdateManyEncounterMethodArgs";
import { UpdateOneEncounterMethodArgs } from "./args/UpdateOneEncounterMethodArgs";
import { UpsertOneEncounterMethodArgs } from "./args/UpsertOneEncounterMethodArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { EncounterMethod } from "../../../models/EncounterMethod";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateEncounterMethod } from "../../outputs/AggregateEncounterMethod";
import { CreateManyAndReturnEncounterMethod } from "../../outputs/CreateManyAndReturnEncounterMethod";
import { EncounterMethodGroupBy } from "../../outputs/EncounterMethodGroupBy";

@TypeGraphQL.Resolver(_of => EncounterMethod)
export class EncounterMethodCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateEncounterMethod, {
    nullable: false
  })
  async aggregateEncounterMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEncounterMethodArgs): Promise<AggregateEncounterMethod> {
    return getPrismaFromContext(ctx).encounterMethods.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyEncounterMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyEncounterMethodArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEncounterMethod], {
    nullable: false
  })
  async createManyAndReturnEncounterMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEncounterMethodArgs): Promise<CreateManyAndReturnEncounterMethod[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EncounterMethod, {
    nullable: false
  })
  async createOneEncounterMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEncounterMethodArgs): Promise<EncounterMethod> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyEncounterMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyEncounterMethodArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EncounterMethod, {
    nullable: true
  })
  async deleteOneEncounterMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneEncounterMethodArgs): Promise<EncounterMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterMethod, {
    nullable: true
  })
  async findFirstEncounterMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterMethodArgs): Promise<EncounterMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterMethod, {
    nullable: true
  })
  async findFirstEncounterMethodOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEncounterMethodOrThrowArgs): Promise<EncounterMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EncounterMethod], {
    nullable: false
  })
  async encounterMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEncounterMethodArgs): Promise<EncounterMethod[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterMethod, {
    nullable: true
  })
  async encounterMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterMethodArgs): Promise<EncounterMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EncounterMethod, {
    nullable: true
  })
  async getEncounterMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEncounterMethodOrThrowArgs): Promise<EncounterMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EncounterMethodGroupBy], {
    nullable: false
  })
  async groupByEncounterMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEncounterMethodArgs): Promise<EncounterMethodGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyEncounterMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyEncounterMethodArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EncounterMethod, {
    nullable: true
  })
  async updateOneEncounterMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneEncounterMethodArgs): Promise<EncounterMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EncounterMethod, {
    nullable: false
  })
  async upsertOneEncounterMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEncounterMethodArgs): Promise<EncounterMethod> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
