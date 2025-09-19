import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSuperContestEffectArgs } from "./args/AggregateSuperContestEffectArgs";
import { CreateManyAndReturnSuperContestEffectArgs } from "./args/CreateManyAndReturnSuperContestEffectArgs";
import { CreateManySuperContestEffectArgs } from "./args/CreateManySuperContestEffectArgs";
import { CreateOneSuperContestEffectArgs } from "./args/CreateOneSuperContestEffectArgs";
import { DeleteManySuperContestEffectArgs } from "./args/DeleteManySuperContestEffectArgs";
import { DeleteOneSuperContestEffectArgs } from "./args/DeleteOneSuperContestEffectArgs";
import { FindFirstSuperContestEffectArgs } from "./args/FindFirstSuperContestEffectArgs";
import { FindFirstSuperContestEffectOrThrowArgs } from "./args/FindFirstSuperContestEffectOrThrowArgs";
import { FindManySuperContestEffectArgs } from "./args/FindManySuperContestEffectArgs";
import { FindUniqueSuperContestEffectArgs } from "./args/FindUniqueSuperContestEffectArgs";
import { FindUniqueSuperContestEffectOrThrowArgs } from "./args/FindUniqueSuperContestEffectOrThrowArgs";
import { GroupBySuperContestEffectArgs } from "./args/GroupBySuperContestEffectArgs";
import { UpdateManySuperContestEffectArgs } from "./args/UpdateManySuperContestEffectArgs";
import { UpdateOneSuperContestEffectArgs } from "./args/UpdateOneSuperContestEffectArgs";
import { UpsertOneSuperContestEffectArgs } from "./args/UpsertOneSuperContestEffectArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { SuperContestEffect } from "../../../models/SuperContestEffect";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSuperContestEffect } from "../../outputs/AggregateSuperContestEffect";
import { CreateManyAndReturnSuperContestEffect } from "../../outputs/CreateManyAndReturnSuperContestEffect";
import { SuperContestEffectGroupBy } from "../../outputs/SuperContestEffectGroupBy";

@TypeGraphQL.Resolver(_of => SuperContestEffect)
export class SuperContestEffectCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateSuperContestEffect, {
    nullable: false
  })
  async aggregateSuperContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSuperContestEffectArgs): Promise<AggregateSuperContestEffect> {
    return getPrismaFromContext(ctx).superContestEffects.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySuperContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySuperContestEffectArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnSuperContestEffect], {
    nullable: false
  })
  async createManyAndReturnSuperContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnSuperContestEffectArgs): Promise<CreateManyAndReturnSuperContestEffect[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SuperContestEffect, {
    nullable: false
  })
  async createOneSuperContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSuperContestEffectArgs): Promise<SuperContestEffect> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySuperContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySuperContestEffectArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SuperContestEffect, {
    nullable: true
  })
  async deleteOneSuperContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSuperContestEffectArgs): Promise<SuperContestEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestEffect, {
    nullable: true
  })
  async findFirstSuperContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSuperContestEffectArgs): Promise<SuperContestEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestEffect, {
    nullable: true
  })
  async findFirstSuperContestEffectOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSuperContestEffectOrThrowArgs): Promise<SuperContestEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SuperContestEffect], {
    nullable: false
  })
  async superContestEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySuperContestEffectArgs): Promise<SuperContestEffect[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestEffect, {
    nullable: true
  })
  async superContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSuperContestEffectArgs): Promise<SuperContestEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestEffect, {
    nullable: true
  })
  async getSuperContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSuperContestEffectOrThrowArgs): Promise<SuperContestEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SuperContestEffectGroupBy], {
    nullable: false
  })
  async groupBySuperContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySuperContestEffectArgs): Promise<SuperContestEffectGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySuperContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySuperContestEffectArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SuperContestEffect, {
    nullable: true
  })
  async updateOneSuperContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSuperContestEffectArgs): Promise<SuperContestEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SuperContestEffect, {
    nullable: false
  })
  async upsertOneSuperContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSuperContestEffectArgs): Promise<SuperContestEffect> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
