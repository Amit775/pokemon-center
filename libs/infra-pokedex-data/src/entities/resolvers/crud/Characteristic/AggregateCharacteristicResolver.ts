import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCharacteristicArgs } from "./args/AggregateCharacteristicArgs";
import { Characteristic } from "../../../models/Characteristic";
import { AggregateCharacteristic } from "../../outputs/AggregateCharacteristic";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Characteristic)
export class AggregateCharacteristicResolver {
  @TypeGraphQL.Query(_returns => AggregateCharacteristic, {
    nullable: false
  })
  async aggregateCharacteristic(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCharacteristicArgs): Promise<AggregateCharacteristic> {
    return getPrismaFromContext(ctx).characteristics.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
