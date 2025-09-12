import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnNaturesArgs } from "./args/CreateManyAndReturnNaturesArgs";
import { Natures } from "../../../models/Natures";
import { CreateManyAndReturnNatures } from "../../outputs/CreateManyAndReturnNatures";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Natures)
export class CreateManyAndReturnNaturesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnNatures], {
    nullable: false
  })
  async createManyAndReturnNatures(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnNaturesArgs): Promise<CreateManyAndReturnNatures[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
