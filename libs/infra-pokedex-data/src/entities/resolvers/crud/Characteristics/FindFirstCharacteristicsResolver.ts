import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCharacteristicsArgs } from "./args/FindFirstCharacteristicsArgs";
import { Characteristics } from "../../../models/Characteristics";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Characteristics)
export class FindFirstCharacteristicsResolver {
  @TypeGraphQL.Query(_returns => Characteristics, {
    nullable: true
  })
  async findFirstCharacteristics(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCharacteristicsArgs): Promise<Characteristics | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
