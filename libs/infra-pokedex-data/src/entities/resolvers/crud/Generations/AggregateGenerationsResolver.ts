import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateGenerationsArgs } from "./args/AggregateGenerationsArgs";
import { Generations } from "../../../models/Generations";
import { AggregateGenerations } from "../../outputs/AggregateGenerations";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Generations)
export class AggregateGenerationsResolver {
  @TypeGraphQL.Query(_returns => AggregateGenerations, {
    nullable: false
  })
  async aggregateGenerations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGenerationsArgs): Promise<AggregateGenerations> {
    return getPrismaFromContext(ctx).generations.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
