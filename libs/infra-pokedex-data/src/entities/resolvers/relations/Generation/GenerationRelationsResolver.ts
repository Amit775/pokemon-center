import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Ability } from "../../../models/Ability";
import { Generation } from "../../../models/Generation";
import { ItemGameIndex } from "../../../models/ItemGameIndex";
import { LocationGameIndex } from "../../../models/LocationGameIndex";
import { Move } from "../../../models/Move";
import { PokemonFormGeneration } from "../../../models/PokemonFormGeneration";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { Region } from "../../../models/Region";
import { Type } from "../../../models/Type";
import { TypeGameIndex } from "../../../models/TypeGameIndex";
import { VersionGroup } from "../../../models/VersionGroup";
import { GenerationAbilitiesArgs } from "./args/GenerationAbilitiesArgs";
import { GenerationItemGameIndicesArgs } from "./args/GenerationItemGameIndicesArgs";
import { GenerationLocationGameIndicesArgs } from "./args/GenerationLocationGameIndicesArgs";
import { GenerationMovesArgs } from "./args/GenerationMovesArgs";
import { GenerationPokemonFormGenerationsArgs } from "./args/GenerationPokemonFormGenerationsArgs";
import { GenerationPokemonSpeciesArgs } from "./args/GenerationPokemonSpeciesArgs";
import { GenerationTypeGameIndicesArgs } from "./args/GenerationTypeGameIndicesArgs";
import { GenerationTypesArgs } from "./args/GenerationTypesArgs";
import { GenerationVersionGroupsArgs } from "./args/GenerationVersionGroupsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Generation)
export class GenerationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Region, {
    nullable: false
  })
  async region(@TypeGraphQL.Root() generation: Generation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Region> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      where: {
        id: generation.id,
      },
    }).region({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonSpecies], {
    nullable: false
  })
  async pokemonSpecies(@TypeGraphQL.Root() generation: Generation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GenerationPokemonSpeciesArgs): Promise<PokemonSpecies[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      where: {
        id: generation.id,
      },
    }).pokemonSpecies({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Move], {
    nullable: false
  })
  async moves(@TypeGraphQL.Root() generation: Generation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GenerationMovesArgs): Promise<Move[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      where: {
        id: generation.id,
      },
    }).moves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Type], {
    nullable: false
  })
  async types(@TypeGraphQL.Root() generation: Generation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GenerationTypesArgs): Promise<Type[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      where: {
        id: generation.id,
      },
    }).types({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Ability], {
    nullable: false
  })
  async abilities(@TypeGraphQL.Root() generation: Generation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GenerationAbilitiesArgs): Promise<Ability[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      where: {
        id: generation.id,
      },
    }).abilities({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonFormGeneration], {
    nullable: false
  })
  async pokemonFormGenerations(@TypeGraphQL.Root() generation: Generation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GenerationPokemonFormGenerationsArgs): Promise<PokemonFormGeneration[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      where: {
        id: generation.id,
      },
    }).pokemonFormGenerations({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ItemGameIndex], {
    nullable: false
  })
  async itemGameIndices(@TypeGraphQL.Root() generation: Generation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GenerationItemGameIndicesArgs): Promise<ItemGameIndex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      where: {
        id: generation.id,
      },
    }).itemGameIndices({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [TypeGameIndex], {
    nullable: false
  })
  async typeGameIndices(@TypeGraphQL.Root() generation: Generation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GenerationTypeGameIndicesArgs): Promise<TypeGameIndex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      where: {
        id: generation.id,
      },
    }).typeGameIndices({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [LocationGameIndex], {
    nullable: false
  })
  async locationGameIndices(@TypeGraphQL.Root() generation: Generation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GenerationLocationGameIndicesArgs): Promise<LocationGameIndex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      where: {
        id: generation.id,
      },
    }).locationGameIndices({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [VersionGroup], {
    nullable: false
  })
  async versionGroups(@TypeGraphQL.Root() generation: Generation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GenerationVersionGroupsArgs): Promise<VersionGroup[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      where: {
        id: generation.id,
      },
    }).versionGroups({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
