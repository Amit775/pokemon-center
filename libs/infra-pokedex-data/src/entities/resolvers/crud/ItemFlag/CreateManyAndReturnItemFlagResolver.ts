import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnItemFlagArgs } from "./args/CreateManyAndReturnItemFlagArgs";
import { ItemFlag } from "../../../models/ItemFlag";
import { CreateManyAndReturnItemFlag } from "../../outputs/CreateManyAndReturnItemFlag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlag)
export class CreateManyAndReturnItemFlagResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnItemFlag], {
    nullable: false
  })
  async createManyAndReturnItemFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnItemFlagArgs): Promise<CreateManyAndReturnItemFlag[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlags.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
