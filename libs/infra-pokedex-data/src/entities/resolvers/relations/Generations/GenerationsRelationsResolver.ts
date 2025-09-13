import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Abilities } from "../../../models/Abilities";
import { Generations } from "../../../models/Generations";
import { ItemGameIndices } from "../../../models/ItemGameIndices";
import { LocationGameIndices } from "../../../models/LocationGameIndices";
import { Moves } from "../../../models/Moves";
import { PokemonFormGenerations } from "../../../models/PokemonFormGenerations";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { Regions } from "../../../models/Regions";
import { TypeGameIndices } from "../../../models/TypeGameIndices";
import { Types } from "../../../models/Types";
import { VersionGroups } from "../../../models/VersionGroups";
import { GenerationsAbilitiesArgs } from "./args/GenerationsAbilitiesArgs";
import { GenerationsItemGameIndicesArgs } from "./args/GenerationsItemGameIndicesArgs";
import { GenerationsLocationGameIndicesArgs } from "./args/GenerationsLocationGameIndicesArgs";
import { GenerationsMovesArgs } from "./args/GenerationsMovesArgs";
import { GenerationsPokemonFormGenerationsArgs } from "./args/GenerationsPokemonFormGenerationsArgs";
import { GenerationsPokemonSpeciesArgs } from "./args/GenerationsPokemonSpeciesArgs";
import { GenerationsTypeGameIndicesArgs } from "./args/GenerationsTypeGameIndicesArgs";
import { GenerationsTypesArgs } from "./args/GenerationsTypesArgs";
import { GenerationsVersionGroupsArgs } from "./args/GenerationsVersionGroupsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Generations)
export class GenerationsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Regions, {
    nullable: false
  })
  async region(@TypeGraphQL.Root() generations: Generations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Regions> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      where: {
        id: generations.id,
      },
    }).region({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonSpecies], {
    nullable: false
  })
  async pokemonSpecies(@TypeGraphQL.Root() generations: Generations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GenerationsPokemonSpeciesArgs): Promise<PokemonSpecies[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      where: {
        id: generations.id,
      },
    }).pokemonSpecies({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Moves], {
    nullable: false
  })
  async moves(@TypeGraphQL.Root() generations: Generations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GenerationsMovesArgs): Promise<Moves[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      where: {
        id: generations.id,
      },
    }).moves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Types], {
    nullable: false
  })
  async types(@TypeGraphQL.Root() generations: Generations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GenerationsTypesArgs): Promise<Types[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      where: {
        id: generations.id,
      },
    }).types({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Abilities], {
    nullable: false
  })
  async abilities(@TypeGraphQL.Root() generations: Generations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GenerationsAbilitiesArgs): Promise<Abilities[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      where: {
        id: generations.id,
      },
    }).abilities({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonFormGenerations], {
    nullable: false
  })
  async pokemonFormGenerations(@TypeGraphQL.Root() generations: Generations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GenerationsPokemonFormGenerationsArgs): Promise<PokemonFormGenerations[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      where: {
        id: generations.id,
      },
    }).pokemonFormGenerations({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ItemGameIndices], {
    nullable: false
  })
  async itemGameIndices(@TypeGraphQL.Root() generations: Generations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GenerationsItemGameIndicesArgs): Promise<ItemGameIndices[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      where: {
        id: generations.id,
      },
    }).itemGameIndices({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [TypeGameIndices], {
    nullable: false
  })
  async typeGameIndices(@TypeGraphQL.Root() generations: Generations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GenerationsTypeGameIndicesArgs): Promise<TypeGameIndices[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      where: {
        id: generations.id,
      },
    }).typeGameIndices({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [LocationGameIndices], {
    nullable: false
  })
  async locationGameIndices(@TypeGraphQL.Root() generations: Generations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GenerationsLocationGameIndicesArgs): Promise<LocationGameIndices[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      where: {
        id: generations.id,
      },
    }).locationGameIndices({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [VersionGroups], {
    nullable: false
  })
  async versionGroups(@TypeGraphQL.Root() generations: Generations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GenerationsVersionGroupsArgs): Promise<VersionGroups[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).generations.findUniqueOrThrow({
      where: {
        id: generations.id,
      },
    }).versionGroups({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
