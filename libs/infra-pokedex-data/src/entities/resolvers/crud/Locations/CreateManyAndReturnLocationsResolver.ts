import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnLocationsArgs } from "./args/CreateManyAndReturnLocationsArgs";
import { Locations } from "../../../models/Locations";
import { CreateManyAndReturnLocations } from "../../outputs/CreateManyAndReturnLocations";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Locations)
export class CreateManyAndReturnLocationsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLocations], {
    nullable: false
  })
  async createManyAndReturnLocations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnLocationsArgs): Promise<CreateManyAndReturnLocations[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locations.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
