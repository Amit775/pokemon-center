import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Encounters } from "../../../models/Encounters";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonAbilities } from "../../../models/PokemonAbilities";
import { PokemonForms } from "../../../models/PokemonForms";
import { PokemonGameIndices } from "../../../models/PokemonGameIndices";
import { PokemonItems } from "../../../models/PokemonItems";
import { PokemonMoves } from "../../../models/PokemonMoves";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { PokemonStats } from "../../../models/PokemonStats";
import { PokemonTypes } from "../../../models/PokemonTypes";
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

  @TypeGraphQL.FieldResolver(_type => [PokemonForms], {
    nullable: false
  })
  async forms(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonFormsArgs): Promise<PokemonForms[]> {
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

  @TypeGraphQL.FieldResolver(_type => [PokemonAbilities], {
    nullable: false
  })
  async abilities(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonAbilitiesArgs): Promise<PokemonAbilities[]> {
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

  @TypeGraphQL.FieldResolver(_type => [PokemonMoves], {
    nullable: false
  })
  async moves(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonMovesArgs): Promise<PokemonMoves[]> {
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

  @TypeGraphQL.FieldResolver(_type => [PokemonStats], {
    nullable: false
  })
  async stats(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonStatsArgs): Promise<PokemonStats[]> {
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

  @TypeGraphQL.FieldResolver(_type => [PokemonTypes], {
    nullable: false
  })
  async types(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonTypesArgs): Promise<PokemonTypes[]> {
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

  @TypeGraphQL.FieldResolver(_type => [PokemonItems], {
    nullable: false
  })
  async items(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonItemsArgs): Promise<PokemonItems[]> {
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

  @TypeGraphQL.FieldResolver(_type => [PokemonGameIndices], {
    nullable: false
  })
  async gameIndices(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonGameIndicesArgs): Promise<PokemonGameIndices[]> {
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

  @TypeGraphQL.FieldResolver(_type => [Encounters], {
    nullable: false
  })
  async encounters(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonEncountersArgs): Promise<Encounters[]> {
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
