import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCharacteristicArgs } from "./args/AggregateCharacteristicArgs";
import { FindFirstCharacteristicArgs } from "./args/FindFirstCharacteristicArgs";
import { FindFirstCharacteristicOrThrowArgs } from "./args/FindFirstCharacteristicOrThrowArgs";
import { FindManyCharacteristicArgs } from "./args/FindManyCharacteristicArgs";
import { FindUniqueCharacteristicArgs } from "./args/FindUniqueCharacteristicArgs";
import { FindUniqueCharacteristicOrThrowArgs } from "./args/FindUniqueCharacteristicOrThrowArgs";
import { GroupByCharacteristicArgs } from "./args/GroupByCharacteristicArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Characteristic } from "../../../models/Characteristic";
import { AggregateCharacteristic } from "../../outputs/AggregateCharacteristic";
import { CharacteristicGroupBy } from "../../outputs/CharacteristicGroupBy";

@TypeGraphQL.Resolver(_of => Characteristic)
export class CharacteristicCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateCharacteristic, {
    nullable: false
  })
  async aggregateCharacteristic(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCharacteristicArgs): Promise<AggregateCharacteristic> {
    return getPrismaFromContext(ctx).characteristics.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => Characteristic, {
    nullable: true
  })
  async findFirstCharacteristic(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCharacteristicArgs): Promise<Characteristic | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Characteristic, {
    nullable: true
  })
  async findFirstCharacteristicOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCharacteristicOrThrowArgs): Promise<Characteristic | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Characteristic], {
    nullable: false
  })
  async characteristics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCharacteristicArgs): Promise<Characteristic[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Characteristic, {
    nullable: true
  })
  async characteristic(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCharacteristicArgs): Promise<Characteristic | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Characteristic, {
    nullable: true
  })
  async getCharacteristic(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCharacteristicOrThrowArgs): Promise<Characteristic | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CharacteristicGroupBy], {
    nullable: false
  })
  async groupByCharacteristic(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCharacteristicArgs): Promise<CharacteristicGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}