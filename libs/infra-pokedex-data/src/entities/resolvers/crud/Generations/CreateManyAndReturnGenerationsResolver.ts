import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnGenerationsArgs } from "./args/CreateManyAndReturnGenerationsArgs";
import { Generations } from "../../../models/Generations";
import { CreateManyAndReturnGenerations } from "../../outputs/CreateManyAndReturnGenerations";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Generations)
export class CreateManyAndReturnGenerationsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnGenerations], {
    nullable: false
  })
  async createManyAndReturnGenerations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnGenerationsArgs): Promise<CreateManyAndReturnGenerations[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
