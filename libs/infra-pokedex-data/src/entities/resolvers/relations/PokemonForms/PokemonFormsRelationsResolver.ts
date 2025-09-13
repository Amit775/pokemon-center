import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonFormGenerations } from "../../../models/PokemonFormGenerations";
import { PokemonFormTypes } from "../../../models/PokemonFormTypes";
import { PokemonForms } from "../../../models/PokemonForms";
import { VersionGroups } from "../../../models/VersionGroups";
import { PokemonFormsGenerationsArgs } from "./args/PokemonFormsGenerationsArgs";
import { PokemonFormsTypesArgs } from "./args/PokemonFormsTypesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonForms)
export class PokemonFormsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Pokemon, {
    nullable: false
  })
  async pokemon(@TypeGraphQL.Root() pokemonForms: PokemonForms, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Pokemon> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.findUniqueOrThrow({
      where: {
        id: pokemonForms.id,
      },
    }).pokemon({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => VersionGroups, {
    nullable: false
  })
  async versionGroup(@TypeGraphQL.Root() pokemonForms: PokemonForms, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<VersionGroups> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.findUniqueOrThrow({
      where: {
        id: pokemonForms.id,
      },
    }).versionGroup({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonFormGenerations], {
    nullable: false
  })
  async generations(@TypeGraphQL.Root() pokemonForms: PokemonForms, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonFormsGenerationsArgs): Promise<PokemonFormGenerations[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.findUniqueOrThrow({
      where: {
        id: pokemonForms.id,
      },
    }).generations({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonFormTypes], {
    nullable: false
  })
  async types(@TypeGraphQL.Root() pokemonForms: PokemonForms, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonFormsTypesArgs): Promise<PokemonFormTypes[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.findUniqueOrThrow({
      where: {
        id: pokemonForms.id,
      },
    }).types({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
