import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneItemFlagArgs } from "./args/CreateOneItemFlagArgs";
import { ItemFlag } from "../../../models/ItemFlag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlag)
export class CreateOneItemFlagResolver {
  @TypeGraphQL.Mutation(_returns => ItemFlag, {
    nullable: false
  })
  async createOneItemFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneItemFlagArgs): Promise<ItemFlag> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlags.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
