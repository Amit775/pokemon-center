import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCharacteristicsOrThrowArgs } from "./args/FindUniqueCharacteristicsOrThrowArgs";
import { Characteristics } from "../../../models/Characteristics";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Characteristics)
export class FindUniqueCharacteristicsOrThrowResolver {
  @TypeGraphQL.Query(_returns => Characteristics, {
    nullable: true
  })
  async findUniqueCharacteristicsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCharacteristicsOrThrowArgs): Promise<Characteristics | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).characteristics.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
