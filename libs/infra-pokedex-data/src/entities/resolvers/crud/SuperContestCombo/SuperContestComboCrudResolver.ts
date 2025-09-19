import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSuperContestComboArgs } from "./args/AggregateSuperContestComboArgs";
import { CreateManyAndReturnSuperContestComboArgs } from "./args/CreateManyAndReturnSuperContestComboArgs";
import { CreateManySuperContestComboArgs } from "./args/CreateManySuperContestComboArgs";
import { CreateOneSuperContestComboArgs } from "./args/CreateOneSuperContestComboArgs";
import { DeleteManySuperContestComboArgs } from "./args/DeleteManySuperContestComboArgs";
import { DeleteOneSuperContestComboArgs } from "./args/DeleteOneSuperContestComboArgs";
import { FindFirstSuperContestComboArgs } from "./args/FindFirstSuperContestComboArgs";
import { FindFirstSuperContestComboOrThrowArgs } from "./args/FindFirstSuperContestComboOrThrowArgs";
import { FindManySuperContestComboArgs } from "./args/FindManySuperContestComboArgs";
import { FindUniqueSuperContestComboArgs } from "./args/FindUniqueSuperContestComboArgs";
import { FindUniqueSuperContestComboOrThrowArgs } from "./args/FindUniqueSuperContestComboOrThrowArgs";
import { GroupBySuperContestComboArgs } from "./args/GroupBySuperContestComboArgs";
import { UpdateManySuperContestComboArgs } from "./args/UpdateManySuperContestComboArgs";
import { UpdateOneSuperContestComboArgs } from "./args/UpdateOneSuperContestComboArgs";
import { UpsertOneSuperContestComboArgs } from "./args/UpsertOneSuperContestComboArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { SuperContestCombo } from "../../../models/SuperContestCombo";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSuperContestCombo } from "../../outputs/AggregateSuperContestCombo";
import { CreateManyAndReturnSuperContestCombo } from "../../outputs/CreateManyAndReturnSuperContestCombo";
import { SuperContestComboGroupBy } from "../../outputs/SuperContestComboGroupBy";

@TypeGraphQL.Resolver(_of => SuperContestCombo)
export class SuperContestComboCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateSuperContestCombo, {
    nullable: false
  })
  async aggregateSuperContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSuperContestComboArgs): Promise<AggregateSuperContestCombo> {
    return getPrismaFromContext(ctx).superContestCombos.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySuperContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySuperContestComboArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnSuperContestCombo], {
    nullable: false
  })
  async createManyAndReturnSuperContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnSuperContestComboArgs): Promise<CreateManyAndReturnSuperContestCombo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SuperContestCombo, {
    nullable: false
  })
  async createOneSuperContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSuperContestComboArgs): Promise<SuperContestCombo> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySuperContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySuperContestComboArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SuperContestCombo, {
    nullable: true
  })
  async deleteOneSuperContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSuperContestComboArgs): Promise<SuperContestCombo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestCombo, {
    nullable: true
  })
  async findFirstSuperContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSuperContestComboArgs): Promise<SuperContestCombo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestCombo, {
    nullable: true
  })
  async findFirstSuperContestComboOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSuperContestComboOrThrowArgs): Promise<SuperContestCombo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SuperContestCombo], {
    nullable: false
  })
  async superContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySuperContestComboArgs): Promise<SuperContestCombo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestCombo, {
    nullable: true
  })
  async superContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSuperContestComboArgs): Promise<SuperContestCombo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestCombo, {
    nullable: true
  })
  async getSuperContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSuperContestComboOrThrowArgs): Promise<SuperContestCombo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SuperContestComboGroupBy], {
    nullable: false
  })
  async groupBySuperContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySuperContestComboArgs): Promise<SuperContestComboGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySuperContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySuperContestComboArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SuperContestCombo, {
    nullable: true
  })
  async updateOneSuperContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSuperContestComboArgs): Promise<SuperContestCombo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SuperContestCombo, {
    nullable: false
  })
  async upsertOneSuperContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSuperContestComboArgs): Promise<SuperContestCombo> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
