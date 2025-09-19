import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMachineOrThrowArgs } from "./args/FindFirstMachineOrThrowArgs";
import { Machine } from "../../../models/Machine";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Machine)
export class FindFirstMachineOrThrowResolver {
  @TypeGraphQL.Query(_returns => Machine, {
    nullable: true
  })
  async findFirstMachineOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMachineOrThrowArgs): Promise<Machine | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).machines.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
