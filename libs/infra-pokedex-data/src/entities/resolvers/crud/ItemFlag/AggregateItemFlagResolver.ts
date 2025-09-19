import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemFlagArgs } from "./args/AggregateItemFlagArgs";
import { ItemFlag } from "../../../models/ItemFlag";
import { AggregateItemFlag } from "../../outputs/AggregateItemFlag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlag)
export class AggregateItemFlagResolver {
  @TypeGraphQL.Query(_returns => AggregateItemFlag, {
    nullable: false
  })
  async aggregateItemFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemFlagArgs): Promise<AggregateItemFlag> {
    return getPrismaFromContext(ctx).itemFlags.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
