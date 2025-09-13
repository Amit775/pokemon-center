import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCharacteristicsOrThrowArgs } from "./args/FindFirstCharacteristicsOrThrowArgs";
import { Characteristics } from "../../../models/Characteristics";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Characteristics)
export class FindFirstCharacteristicsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Characteristics, {
    nullable: true
  })
  async findFirstCharacteristicsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCharacteristicsOrThrowArgs): Promise<Characteristics | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
