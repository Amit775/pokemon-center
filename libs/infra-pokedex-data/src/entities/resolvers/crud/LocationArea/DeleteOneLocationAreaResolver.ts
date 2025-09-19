import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneLocationAreaArgs } from "./args/DeleteOneLocationAreaArgs";
import { LocationArea } from "../../../models/LocationArea";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationArea)
export class DeleteOneLocationAreaResolver {
  @TypeGraphQL.Mutation(_returns => LocationArea, {
    nullable: true
  })
  async deleteOneLocationArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneLocationAreaArgs): Promise<LocationArea | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
