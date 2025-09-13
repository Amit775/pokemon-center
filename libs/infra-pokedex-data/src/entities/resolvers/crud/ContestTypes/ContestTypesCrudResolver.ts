import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateContestTypesArgs } from "./args/AggregateContestTypesArgs";
import { FindFirstContestTypesArgs } from "./args/FindFirstContestTypesArgs";
import { FindFirstContestTypesOrThrowArgs } from "./args/FindFirstContestTypesOrThrowArgs";
import { FindManyContestTypesArgs } from "./args/FindManyContestTypesArgs";
import { FindUniqueContestTypesArgs } from "./args/FindUniqueContestTypesArgs";
import { FindUniqueContestTypesOrThrowArgs } from "./args/FindUniqueContestTypesOrThrowArgs";
import { GroupByContestTypesArgs } from "./args/GroupByContestTypesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ContestTypes } from "../../../models/ContestTypes";
import { AggregateContestTypes } from "../../outputs/AggregateContestTypes";
import { ContestTypesGroupBy } from "../../outputs/ContestTypesGroupBy";

@TypeGraphQL.Resolver(_of => ContestTypes)
export class ContestTypesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateContestTypes, {
    nullable: false
  })
  async aggregateContestTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateContestTypesArgs): Promise<AggregateContestTypes> {
    return getPrismaFromContext(ctx).contestTypes.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => ContestTypes, {
    nullable: true
  })
  async findFirstContestTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstContestTypesArgs): Promise<ContestTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ContestTypes, {
    nullable: true
  })
  async findFirstContestTypesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstContestTypesOrThrowArgs): Promise<ContestTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ContestTypes], {
    nullable: false
  })
  async findManyContestTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyContestTypesArgs): Promise<ContestTypes[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ContestTypes, {
    nullable: true
  })
  async findUniqueContestTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueContestTypesArgs): Promise<ContestTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ContestTypes, {
    nullable: true
  })
  async findUniqueContestTypesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueContestTypesOrThrowArgs): Promise<ContestTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ContestTypesGroupBy], {
    nullable: false
  })
  async groupByContestTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByContestTypesArgs): Promise<ContestTypesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}