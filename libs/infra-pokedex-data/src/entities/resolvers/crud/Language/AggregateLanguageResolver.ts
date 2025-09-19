import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLanguageArgs } from "./args/AggregateLanguageArgs";
import { Language } from "../../../models/Language";
import { AggregateLanguage } from "../../outputs/AggregateLanguage";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Language)
export class AggregateLanguageResolver {
  @TypeGraphQL.Query(_returns => AggregateLanguage, {
    nullable: false
  })
  async aggregateLanguage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLanguageArgs): Promise<AggregateLanguage> {
    return getPrismaFromContext(ctx).languages.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
