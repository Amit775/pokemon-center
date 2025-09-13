import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLanguagesArgs } from "./args/AggregateLanguagesArgs";
import { FindFirstLanguagesArgs } from "./args/FindFirstLanguagesArgs";
import { FindFirstLanguagesOrThrowArgs } from "./args/FindFirstLanguagesOrThrowArgs";
import { FindManyLanguagesArgs } from "./args/FindManyLanguagesArgs";
import { FindUniqueLanguagesArgs } from "./args/FindUniqueLanguagesArgs";
import { FindUniqueLanguagesOrThrowArgs } from "./args/FindUniqueLanguagesOrThrowArgs";
import { GroupByLanguagesArgs } from "./args/GroupByLanguagesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Languages } from "../../../models/Languages";
import { AggregateLanguages } from "../../outputs/AggregateLanguages";
import { LanguagesGroupBy } from "../../outputs/LanguagesGroupBy";

@TypeGraphQL.Resolver(_of => Languages)
export class LanguagesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateLanguages, {
    nullable: false
  })
  async aggregateLanguages(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLanguagesArgs): Promise<AggregateLanguages> {
    return getPrismaFromContext(ctx).languages.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => Languages, {
    nullable: true
  })
  async findFirstLanguages(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLanguagesArgs): Promise<Languages | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).languages.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Languages, {
    nullable: true
  })
  async findFirstLanguagesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLanguagesOrThrowArgs): Promise<Languages | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).languages.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Languages], {
    nullable: false
  })
  async findManyLanguages(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyLanguagesArgs): Promise<Languages[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).languages.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Languages, {
    nullable: true
  })
  async findUniqueLanguages(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLanguagesArgs): Promise<Languages | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).languages.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Languages, {
    nullable: true
  })
  async findUniqueLanguagesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLanguagesOrThrowArgs): Promise<Languages | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).languages.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [LanguagesGroupBy], {
    nullable: false
  })
  async groupByLanguages(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLanguagesArgs): Promise<LanguagesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).languages.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}