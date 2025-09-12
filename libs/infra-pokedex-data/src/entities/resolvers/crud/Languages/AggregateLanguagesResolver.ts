import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLanguagesArgs } from "./args/AggregateLanguagesArgs";
import { Languages } from "../../../models/Languages";
import { AggregateLanguages } from "../../outputs/AggregateLanguages";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Languages)
export class AggregateLanguagesResolver {
  @TypeGraphQL.Query(_returns => AggregateLanguages, {
    nullable: false
  })
  async aggregateLanguages(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLanguagesArgs): Promise<AggregateLanguages> {
    return getPrismaFromContext(ctx).languages.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
