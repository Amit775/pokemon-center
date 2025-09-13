import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCharacteristicsArgs } from "./args/FindUniqueCharacteristicsArgs";
import { Characteristics } from "../../../models/Characteristics";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Characteristics)
export class FindUniqueCharacteristicsResolver {
  @TypeGraphQL.Query(_returns => Characteristics, {
    nullable: true
  })
  async findUniqueCharacteristics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCharacteristicsArgs): Promise<Characteristics | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
