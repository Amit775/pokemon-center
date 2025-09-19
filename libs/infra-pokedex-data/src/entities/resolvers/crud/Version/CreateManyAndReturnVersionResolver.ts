import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnVersionArgs } from "./args/CreateManyAndReturnVersionArgs";
import { Version } from "../../../models/Version";
import { CreateManyAndReturnVersion } from "../../outputs/CreateManyAndReturnVersion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Version)
export class CreateManyAndReturnVersionResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnVersion], {
    nullable: false
  })
  async createManyAndReturnVersion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnVersionArgs): Promise<CreateManyAndReturnVersion[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versions.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
