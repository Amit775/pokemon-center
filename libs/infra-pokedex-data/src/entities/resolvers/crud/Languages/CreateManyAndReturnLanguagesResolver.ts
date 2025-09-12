import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnLanguagesArgs } from "./args/CreateManyAndReturnLanguagesArgs";
import { Languages } from "../../../models/Languages";
import { CreateManyAndReturnLanguages } from "../../outputs/CreateManyAndReturnLanguages";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Languages)
export class CreateManyAndReturnLanguagesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLanguages], {
    nullable: false
  })
  async createManyAndReturnLanguages(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnLanguagesArgs): Promise<CreateManyAndReturnLanguages[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).languages.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
