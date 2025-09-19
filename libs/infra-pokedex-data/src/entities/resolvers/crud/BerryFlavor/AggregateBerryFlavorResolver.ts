import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateBerryFlavorArgs } from "./args/AggregateBerryFlavorArgs";
import { BerryFlavor } from "../../../models/BerryFlavor";
import { AggregateBerryFlavor } from "../../outputs/AggregateBerryFlavor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFlavor)
export class AggregateBerryFlavorResolver {
  @TypeGraphQL.Query(_returns => AggregateBerryFlavor, {
    nullable: false
  })
  async aggregateBerryFlavor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBerryFlavorArgs): Promise<AggregateBerryFlavor> {
    return getPrismaFromContext(ctx).berryFlavors.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
