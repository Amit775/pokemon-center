import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateContestTypeArgs } from "./args/AggregateContestTypeArgs";
import { FindFirstContestTypeArgs } from "./args/FindFirstContestTypeArgs";
import { FindFirstContestTypeOrThrowArgs } from "./args/FindFirstContestTypeOrThrowArgs";
import { FindManyContestTypeArgs } from "./args/FindManyContestTypeArgs";
import { FindUniqueContestTypeArgs } from "./args/FindUniqueContestTypeArgs";
import { FindUniqueContestTypeOrThrowArgs } from "./args/FindUniqueContestTypeOrThrowArgs";
import { GroupByContestTypeArgs } from "./args/GroupByContestTypeArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ContestType } from "../../../models/ContestType";
import { AggregateContestType } from "../../outputs/AggregateContestType";
import { ContestTypeGroupBy } from "../../outputs/ContestTypeGroupBy";

@TypeGraphQL.Resolver(_of => ContestType)
export class ContestTypeCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateContestType, {
    nullable: false
  })
  async aggregateContestType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateContestTypeArgs): Promise<AggregateContestType> {
    return getPrismaFromContext(ctx).contestTypes.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => ContestType, {
    nullable: true
  })
  async findFirstContestType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstContestTypeArgs): Promise<ContestType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ContestType, {
    nullable: true
  })
  async findFirstContestTypeOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstContestTypeOrThrowArgs): Promise<ContestType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ContestType], {
    nullable: false
  })
  async contestTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyContestTypeArgs): Promise<ContestType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ContestType, {
    nullable: true
  })
  async contestType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueContestTypeArgs): Promise<ContestType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ContestType, {
    nullable: true
  })
  async getContestType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueContestTypeOrThrowArgs): Promise<ContestType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ContestTypeGroupBy], {
    nullable: false
  })
  async groupByContestType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByContestTypeArgs): Promise<ContestTypeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestTypes.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}