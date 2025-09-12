import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveDamageClassesArgs } from "./args/AggregateMoveDamageClassesArgs";
import { CreateManyAndReturnMoveDamageClassesArgs } from "./args/CreateManyAndReturnMoveDamageClassesArgs";
import { CreateManyMoveDamageClassesArgs } from "./args/CreateManyMoveDamageClassesArgs";
import { CreateOneMoveDamageClassesArgs } from "./args/CreateOneMoveDamageClassesArgs";
import { DeleteManyMoveDamageClassesArgs } from "./args/DeleteManyMoveDamageClassesArgs";
import { DeleteOneMoveDamageClassesArgs } from "./args/DeleteOneMoveDamageClassesArgs";
import { FindFirstMoveDamageClassesArgs } from "./args/FindFirstMoveDamageClassesArgs";
import { FindFirstMoveDamageClassesOrThrowArgs } from "./args/FindFirstMoveDamageClassesOrThrowArgs";
import { FindManyMoveDamageClassesArgs } from "./args/FindManyMoveDamageClassesArgs";
import { FindUniqueMoveDamageClassesArgs } from "./args/FindUniqueMoveDamageClassesArgs";
import { FindUniqueMoveDamageClassesOrThrowArgs } from "./args/FindUniqueMoveDamageClassesOrThrowArgs";
import { GroupByMoveDamageClassesArgs } from "./args/GroupByMoveDamageClassesArgs";
import { UpdateManyMoveDamageClassesArgs } from "./args/UpdateManyMoveDamageClassesArgs";
import { UpdateOneMoveDamageClassesArgs } from "./args/UpdateOneMoveDamageClassesArgs";
import { UpsertOneMoveDamageClassesArgs } from "./args/UpsertOneMoveDamageClassesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MoveDamageClasses } from "../../../models/MoveDamageClasses";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMoveDamageClasses } from "../../outputs/AggregateMoveDamageClasses";
import { CreateManyAndReturnMoveDamageClasses } from "../../outputs/CreateManyAndReturnMoveDamageClasses";
import { MoveDamageClassesGroupBy } from "../../outputs/MoveDamageClassesGroupBy";

@TypeGraphQL.Resolver(_of => MoveDamageClasses)
export class MoveDamageClassesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveDamageClasses, {
    nullable: false
  })
  async aggregateMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveDamageClassesArgs): Promise<AggregateMoveDamageClasses> {
    return getPrismaFromContext(ctx).moveDamageClasses.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyMoveDamageClassesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoveDamageClasses], {
    nullable: false
  })
  async createManyAndReturnMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveDamageClassesArgs): Promise<CreateManyAndReturnMoveDamageClasses[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MoveDamageClasses, {
    nullable: false
  })
  async createOneMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneMoveDamageClassesArgs): Promise<MoveDamageClasses> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyMoveDamageClassesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MoveDamageClasses, {
    nullable: true
  })
  async deleteOneMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMoveDamageClassesArgs): Promise<MoveDamageClasses | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveDamageClasses, {
    nullable: true
  })
  async findFirstMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveDamageClassesArgs): Promise<MoveDamageClasses | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveDamageClasses, {
    nullable: true
  })
  async findFirstMoveDamageClassesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveDamageClassesOrThrowArgs): Promise<MoveDamageClasses | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveDamageClasses], {
    nullable: false
  })
  async findManyMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveDamageClassesArgs): Promise<MoveDamageClasses[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveDamageClasses, {
    nullable: true
  })
  async findUniqueMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveDamageClassesArgs): Promise<MoveDamageClasses | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveDamageClasses, {
    nullable: true
  })
  async findUniqueMoveDamageClassesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveDamageClassesOrThrowArgs): Promise<MoveDamageClasses | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveDamageClassesGroupBy], {
    nullable: false
  })
  async groupByMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveDamageClassesArgs): Promise<MoveDamageClassesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyMoveDamageClassesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MoveDamageClasses, {
    nullable: true
  })
  async updateOneMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMoveDamageClassesArgs): Promise<MoveDamageClasses | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => MoveDamageClasses, {
    nullable: false
  })
  async upsertOneMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMoveDamageClassesArgs): Promise<MoveDamageClasses> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
