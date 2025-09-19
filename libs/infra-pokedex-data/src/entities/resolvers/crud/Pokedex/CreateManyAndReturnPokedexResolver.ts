import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokedexArgs } from "./args/CreateManyAndReturnPokedexArgs";
import { Pokedex } from "../../../models/Pokedex";
import { CreateManyAndReturnPokedex } from "../../outputs/CreateManyAndReturnPokedex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pokedex)
export class CreateManyAndReturnPokedexResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokedex], {
    nullable: false
  })
  async createManyAndReturnPokedex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokedexArgs): Promise<CreateManyAndReturnPokedex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexes.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
