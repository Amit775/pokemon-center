import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByCharacteristicsArgs } from "./args/GroupByCharacteristicsArgs";
import { Characteristics } from "../../../models/Characteristics";
import { CharacteristicsGroupBy } from "../../outputs/CharacteristicsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Characteristics)
export class GroupByCharacteristicsResolver {
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
