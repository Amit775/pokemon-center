import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSuperContestCombosArgs } from "./args/AggregateSuperContestCombosArgs";
import { CreateManyAndReturnSuperContestCombosArgs } from "./args/CreateManyAndReturnSuperContestCombosArgs";
import { CreateManySuperContestCombosArgs } from "./args/CreateManySuperContestCombosArgs";
import { CreateOneSuperContestCombosArgs } from "./args/CreateOneSuperContestCombosArgs";
import { DeleteManySuperContestCombosArgs } from "./args/DeleteManySuperContestCombosArgs";
import { DeleteOneSuperContestCombosArgs } from "./args/DeleteOneSuperContestCombosArgs";
import { FindFirstSuperContestCombosArgs } from "./args/FindFirstSuperContestCombosArgs";
import { FindFirstSuperContestCombosOrThrowArgs } from "./args/FindFirstSuperContestCombosOrThrowArgs";
import { FindManySuperContestCombosArgs } from "./args/FindManySuperContestCombosArgs";
import { FindUniqueSuperContestCombosArgs } from "./args/FindUniqueSuperContestCombosArgs";
import { FindUniqueSuperContestCombosOrThrowArgs } from "./args/FindUniqueSuperContestCombosOrThrowArgs";
import { GroupBySuperContestCombosArgs } from "./args/GroupBySuperContestCombosArgs";
import { UpdateManySuperContestCombosArgs } from "./args/UpdateManySuperContestCombosArgs";
import { UpdateOneSuperContestCombosArgs } from "./args/UpdateOneSuperContestCombosArgs";
import { UpsertOneSuperContestCombosArgs } from "./args/UpsertOneSuperContestCombosArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { SuperContestCombos } from "../../../models/SuperContestCombos";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSuperContestCombos } from "../../outputs/AggregateSuperContestCombos";
import { CreateManyAndReturnSuperContestCombos } from "../../outputs/CreateManyAndReturnSuperContestCombos";
import { SuperContestCombosGroupBy } from "../../outputs/SuperContestCombosGroupBy";

@TypeGraphQL.Resolver(_of => SuperContestCombos)
export class SuperContestCombosCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateSuperContestCombos, {
    nullable: false
  })
  async aggregateSuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSuperContestCombosArgs): Promise<AggregateSuperContestCombos> {
    return getPrismaFromContext(ctx).superContestCombos.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManySuperContestCombosArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnSuperContestCombos], {
    nullable: false
  })
  async createManyAndReturnSuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnSuperContestCombosArgs): Promise<CreateManyAndReturnSuperContestCombos[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SuperContestCombos, {
    nullable: false
  })
  async createOneSuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSuperContestCombosArgs): Promise<SuperContestCombos> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManySuperContestCombosArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SuperContestCombos, {
    nullable: true
  })
  async deleteOneSuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSuperContestCombosArgs): Promise<SuperContestCombos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestCombos, {
    nullable: true
  })
  async findFirstSuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSuperContestCombosArgs): Promise<SuperContestCombos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestCombos, {
    nullable: true
  })
  async findFirstSuperContestCombosOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSuperContestCombosOrThrowArgs): Promise<SuperContestCombos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SuperContestCombos], {
    nullable: false
  })
  async findManySuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySuperContestCombosArgs): Promise<SuperContestCombos[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestCombos, {
    nullable: true
  })
  async findUniqueSuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSuperContestCombosArgs): Promise<SuperContestCombos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestCombos, {
    nullable: true
  })
  async findUniqueSuperContestCombosOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSuperContestCombosOrThrowArgs): Promise<SuperContestCombos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SuperContestCombosGroupBy], {
    nullable: false
  })
  async groupBySuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySuperContestCombosArgs): Promise<SuperContestCombosGroupBy[]> {
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
  async updateManySuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManySuperContestCombosArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SuperContestCombos, {
    nullable: true
  })
  async updateOneSuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneSuperContestCombosArgs): Promise<SuperContestCombos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => SuperContestCombos, {
    nullable: false
  })
  async upsertOneSuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSuperContestCombosArgs): Promise<SuperContestCombos> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
