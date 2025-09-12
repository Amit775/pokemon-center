import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnBerriesArgs } from "./args/CreateManyAndReturnBerriesArgs";
import { Berries } from "../../../models/Berries";
import { CreateManyAndReturnBerries } from "../../outputs/CreateManyAndReturnBerries";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Berries)
export class CreateManyAndReturnBerriesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnBerries], {
    nullable: false
  })
  async createManyAndReturnBerries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnBerriesArgs): Promise<CreateManyAndReturnBerries[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berries.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
