import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnGenerationArgs } from "./args/CreateManyAndReturnGenerationArgs";
import { Generation } from "../../../models/Generation";
import { CreateManyAndReturnGeneration } from "../../outputs/CreateManyAndReturnGeneration";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Generation)
export class CreateManyAndReturnGenerationResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnGeneration], {
    nullable: false
  })
  async createManyAndReturnGeneration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnGenerationArgs): Promise<CreateManyAndReturnGeneration[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
