import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnLocationAreasArgs } from "./args/CreateManyAndReturnLocationAreasArgs";
import { LocationAreas } from "../../../models/LocationAreas";
import { CreateManyAndReturnLocationAreas } from "../../outputs/CreateManyAndReturnLocationAreas";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreas)
export class CreateManyAndReturnLocationAreasResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLocationAreas], {
    nullable: false
  })
  async createManyAndReturnLocationAreas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnLocationAreasArgs): Promise<CreateManyAndReturnLocationAreas[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
