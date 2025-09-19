import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Encounter } from "../../../models/Encounter";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonAbility } from "../../../models/PokemonAbility";
import { PokemonForm } from "../../../models/PokemonForm";
import { PokemonGameIndex } from "../../../models/PokemonGameIndex";
import { PokemonItem } from "../../../models/PokemonItem";
import { PokemonMove } from "../../../models/PokemonMove";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { PokemonStat } from "../../../models/PokemonStat";
import { PokemonType } from "../../../models/PokemonType";
import { PokemonAbilitiesArgs } from "./args/PokemonAbilitiesArgs";
import { PokemonEncountersArgs } from "./args/PokemonEncountersArgs";
import { PokemonFormsArgs } from "./args/PokemonFormsArgs";
import { PokemonGameIndicesArgs } from "./args/PokemonGameIndicesArgs";
import { PokemonItemsArgs } from "./args/PokemonItemsArgs";
import { PokemonMovesArgs } from "./args/PokemonMovesArgs";
import { PokemonStatsArgs } from "./args/PokemonStatsArgs";
import { PokemonTypesArgs } from "./args/PokemonTypesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pokemon)
export class PokemonRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => PokemonSpecies, {
    nullable: false
  })
  async species(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<PokemonSpecies> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemon.findUniqueOrThrow({
      where: {
        id: pokemon.id,
      },
    }).species({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonForm], {
    nullable: false
  })
  async forms(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonFormsArgs): Promise<PokemonForm[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemon.findUniqueOrThrow({
      where: {
        id: pokemon.id,
      },
    }).forms({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonAbility], {
    nullable: false
  })
  async abilities(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonAbilitiesArgs): Promise<PokemonAbility[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemon.findUniqueOrThrow({
      where: {
        id: pokemon.id,
      },
    }).abilities({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonMove], {
    nullable: false
  })
  async moves(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonMovesArgs): Promise<PokemonMove[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemon.findUniqueOrThrow({
      where: {
        id: pokemon.id,
      },
    }).moves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonStat], {
    nullable: false
  })
  async stats(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonStatsArgs): Promise<PokemonStat[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemon.findUniqueOrThrow({
      where: {
        id: pokemon.id,
      },
    }).stats({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonType], {
    nullable: false
  })
  async types(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonTypesArgs): Promise<PokemonType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemon.findUniqueOrThrow({
      where: {
        id: pokemon.id,
      },
    }).types({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonItem], {
    nullable: false
  })
  async items(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonItemsArgs): Promise<PokemonItem[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemon.findUniqueOrThrow({
      where: {
        id: pokemon.id,
      },
    }).items({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonGameIndex], {
    nullable: false
  })
  async gameIndices(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonGameIndicesArgs): Promise<PokemonGameIndex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemon.findUniqueOrThrow({
      where: {
        id: pokemon.id,
      },
    }).gameIndices({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Encounter], {
    nullable: false
  })
  async encounters(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonEncountersArgs): Promise<Encounter[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemon.findUniqueOrThrow({
      where: {
        id: pokemon.id,
      },
    }).encounters({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
