import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateGenerationArgs } from "./args/AggregateGenerationArgs";
import { Generation } from "../../../models/Generation";
import { AggregateGeneration } from "../../outputs/AggregateGeneration";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Generation)
export class AggregateGenerationResolver {
  @TypeGraphQL.Query(_returns => AggregateGeneration, {
    nullable: false
  })
  async aggregateGeneration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGenerationArgs): Promise<AggregateGeneration> {
    return getPrismaFromContext(ctx).generations.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
