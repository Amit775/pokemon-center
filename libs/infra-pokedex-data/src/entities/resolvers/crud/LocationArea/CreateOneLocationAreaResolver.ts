import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneLocationAreaArgs } from "./args/CreateOneLocationAreaArgs";
import { LocationArea } from "../../../models/LocationArea";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationArea)
export class CreateOneLocationAreaResolver {
  @TypeGraphQL.Mutation(_returns => LocationArea, {
    nullable: false
  })
  async createOneLocationArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneLocationAreaArgs): Promise<LocationArea> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
