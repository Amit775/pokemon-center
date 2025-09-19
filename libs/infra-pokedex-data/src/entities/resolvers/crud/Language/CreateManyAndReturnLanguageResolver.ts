import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnLanguageArgs } from "./args/CreateManyAndReturnLanguageArgs";
import { Language } from "../../../models/Language";
import { CreateManyAndReturnLanguage } from "../../outputs/CreateManyAndReturnLanguage";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Language)
export class CreateManyAndReturnLanguageResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLanguage], {
    nullable: false
  })
  async createManyAndReturnLanguage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnLanguageArgs): Promise<CreateManyAndReturnLanguage[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).languages.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
