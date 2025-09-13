import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyCharacteristicsArgs } from "./args/FindManyCharacteristicsArgs";
import { Characteristics } from "../../../models/Characteristics";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Characteristics)
export class FindManyCharacteristicsResolver {
  @TypeGraphQL.Query(_returns => [Characteristics], {
    nullable: false
  })
  async findManyCharacteristics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCharacteristicsArgs): Promise<Characteristics[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
