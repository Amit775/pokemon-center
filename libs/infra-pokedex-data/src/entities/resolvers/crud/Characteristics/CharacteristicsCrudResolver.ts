import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCharacteristicsArgs } from "./args/AggregateCharacteristicsArgs";
import { FindFirstCharacteristicsArgs } from "./args/FindFirstCharacteristicsArgs";
import { FindFirstCharacteristicsOrThrowArgs } from "./args/FindFirstCharacteristicsOrThrowArgs";
import { FindManyCharacteristicsArgs } from "./args/FindManyCharacteristicsArgs";
import { FindUniqueCharacteristicsArgs } from "./args/FindUniqueCharacteristicsArgs";
import { FindUniqueCharacteristicsOrThrowArgs } from "./args/FindUniqueCharacteristicsOrThrowArgs";
import { GroupByCharacteristicsArgs } from "./args/GroupByCharacteristicsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Characteristics } from "../../../models/Characteristics";
import { AggregateCharacteristics } from "../../outputs/AggregateCharacteristics";
import { CharacteristicsGroupBy } from "../../outputs/CharacteristicsGroupBy";

@TypeGraphQL.Resolver(_of => Characteristics)
export class CharacteristicsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateCharacteristics, {
    nullable: false
  })
  async aggregateCharacteristics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCharacteristicsArgs): Promise<AggregateCharacteristics> {
    return getPrismaFromContext(ctx).characteristics.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => Characteristics, {
    nullable: true
  })
  async findFirstCharacteristics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCharacteristicsArgs): Promise<Characteristics | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Characteristics, {
    nullable: true
  })
  async findFirstCharacteristicsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCharacteristicsOrThrowArgs): Promise<Characteristics | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Characteristics], {
    nullable: false
  })
  async findManyCharacteristics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCharacteristicsArgs): Promise<Characteristics[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Characteristics, {
    nullable: true
  })
  async findUniqueCharacteristics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCharacteristicsArgs): Promise<Characteristics | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Characteristics, {
    nullable: true
  })
  async findUniqueCharacteristicsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCharacteristicsOrThrowArgs): Promise<Characteristics | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CharacteristicsGroupBy], {
    nullable: false
  })
  async groupByCharacteristics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCharacteristicsArgs): Promise<CharacteristicsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}