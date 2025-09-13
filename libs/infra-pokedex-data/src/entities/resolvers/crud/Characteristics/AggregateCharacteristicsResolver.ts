import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCharacteristicsArgs } from "./args/AggregateCharacteristicsArgs";
import { Characteristics } from "../../../models/Characteristics";
import { AggregateCharacteristics } from "../../outputs/AggregateCharacteristics";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Characteristics)
export class AggregateCharacteristicsResolver {
  @TypeGraphQL.Query(_returns => AggregateCharacteristics, {
    nullable: false
  })
  async aggregateCharacteristics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCharacteristicsArgs): Promise<AggregateCharacteristics> {
    return getPrismaFromContext(ctx).characteristics.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
