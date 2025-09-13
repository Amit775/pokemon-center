import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLocationGameIndicesOrThrowArgs } from "./args/FindUniqueLocationGameIndicesOrThrowArgs";
import { LocationGameIndices } from "../../../models/LocationGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationGameIndices)
export class FindUniqueLocationGameIndicesOrThrowResolver {
  @TypeGraphQL.Query(_returns => LocationGameIndices, {
    nullable: true
  })
  async findUniqueLocationGameIndicesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLocationGameIndicesOrThrowArgs): Promise<LocationGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
