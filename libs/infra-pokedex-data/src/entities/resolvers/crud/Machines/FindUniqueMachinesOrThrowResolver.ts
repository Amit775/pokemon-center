import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMachinesOrThrowArgs } from "./args/FindUniqueMachinesOrThrowArgs";
import { Machines } from "../../../models/Machines";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Machines)
export class FindUniqueMachinesOrThrowResolver {
  @TypeGraphQL.Query(_returns => Machines, {
    nullable: true
  })
  async findUniqueMachinesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMachinesOrThrowArgs): Promise<Machines | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).machines.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
