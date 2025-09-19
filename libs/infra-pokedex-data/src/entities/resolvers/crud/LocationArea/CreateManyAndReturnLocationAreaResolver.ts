import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnLocationAreaArgs } from "./args/CreateManyAndReturnLocationAreaArgs";
import { LocationArea } from "../../../models/LocationArea";
import { CreateManyAndReturnLocationArea } from "../../outputs/CreateManyAndReturnLocationArea";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationArea)
export class CreateManyAndReturnLocationAreaResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLocationArea], {
    nullable: false
  })
  async createManyAndReturnLocationArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnLocationAreaArgs): Promise<CreateManyAndReturnLocationArea[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
