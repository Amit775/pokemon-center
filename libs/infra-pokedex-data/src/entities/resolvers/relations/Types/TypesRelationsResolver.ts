import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Berries } from "../../../models/Berries";
import { BerryFlavors } from "../../../models/BerryFlavors";
import { Generations } from "../../../models/Generations";
import { MoveDamageClasses } from "../../../models/MoveDamageClasses";
import { Moves } from "../../../models/Moves";
import { Natures } from "../../../models/Natures";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { PokemonFormTypes } from "../../../models/PokemonFormTypes";
import { PokemonTypes } from "../../../models/PokemonTypes";
import { TypeEfficacy } from "../../../models/TypeEfficacy";
import { TypeGameIndices } from "../../../models/TypeGameIndices";
import { Types } from "../../../models/Types";
import { TypesBerryFlavorsArgs } from "./args/TypesBerryFlavorsArgs";
import { TypesDamageClassArgs } from "./args/TypesDamageClassArgs";
import { TypesEfficacyArgs } from "./args/TypesEfficacyArgs";
import { TypesEfficacyTargetArgs } from "./args/TypesEfficacyTargetArgs";
import { TypesFormTypesArgs } from "./args/TypesFormTypesArgs";
import { TypesGameIndicesArgs } from "./args/TypesGameIndicesArgs";
import { TypesKnownMoveTypesArgs } from "./args/TypesKnownMoveTypesArgs";
import { TypesMovesArgs } from "./args/TypesMovesArgs";
import { TypesNaturalGiftTypesArgs } from "./args/TypesNaturalGiftTypesArgs";
import { TypesNaturesArgs } from "./args/TypesNaturesArgs";
import { TypesNaturesIncreasedArgs } from "./args/TypesNaturesIncreasedArgs";
import { TypesPartyTypesArgs } from "./args/TypesPartyTypesArgs";
import { TypesPokemonTypesArgs } from "./args/TypesPokemonTypesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Types)
export class TypesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Generations, {
    nullable: false
  })
  async generation(@TypeGraphQL.Root() types: Types, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Generations> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: types.id,
      },
    }).generation({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MoveDamageClasses, {
    nullable: true
  })
  async damageClass(@TypeGraphQL.Root() types: Types, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypesDamageClassArgs): Promise<MoveDamageClasses | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: types.id,
      },
    }).damageClass({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Moves], {
    nullable: false
  })
  async moves(@TypeGraphQL.Root() types: Types, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypesMovesArgs): Promise<Moves[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: types.id,
      },
    }).moves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonTypes], {
    nullable: false
  })
  async pokemonTypes(@TypeGraphQL.Root() types: Types, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypesPokemonTypesArgs): Promise<PokemonTypes[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: types.id,
      },
    }).pokemonTypes({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonFormTypes], {
    nullable: false
  })
  async formTypes(@TypeGraphQL.Root() types: Types, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypesFormTypesArgs): Promise<PokemonFormTypes[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: types.id,
      },
    }).formTypes({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [TypeGameIndices], {
    nullable: false
  })
  async gameIndices(@TypeGraphQL.Root() types: Types, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypesGameIndicesArgs): Promise<TypeGameIndices[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: types.id,
      },
    }).gameIndices({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [TypeEfficacy], {
    nullable: false
  })
  async efficacy(@TypeGraphQL.Root() types: Types, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypesEfficacyArgs): Promise<TypeEfficacy[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: types.id,
      },
    }).efficacy({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [TypeEfficacy], {
    nullable: false
  })
  async efficacyTarget(@TypeGraphQL.Root() types: Types, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypesEfficacyTargetArgs): Promise<TypeEfficacy[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: types.id,
      },
    }).efficacyTarget({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [BerryFlavors], {
    nullable: false
  })
  async berryFlavors(@TypeGraphQL.Root() types: Types, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypesBerryFlavorsArgs): Promise<BerryFlavors[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: types.id,
      },
    }).berryFlavors({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Natures], {
    nullable: false
  })
  async natures(@TypeGraphQL.Root() types: Types, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypesNaturesArgs): Promise<Natures[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: types.id,
      },
    }).natures({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Natures], {
    nullable: false
  })
  async naturesIncreased(@TypeGraphQL.Root() types: Types, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypesNaturesIncreasedArgs): Promise<Natures[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: types.id,
      },
    }).naturesIncreased({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonEvolution], {
    nullable: false
  })
  async knownMoveTypes(@TypeGraphQL.Root() types: Types, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypesKnownMoveTypesArgs): Promise<PokemonEvolution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: types.id,
      },
    }).knownMoveTypes({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonEvolution], {
    nullable: false
  })
  async partyTypes(@TypeGraphQL.Root() types: Types, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypesPartyTypesArgs): Promise<PokemonEvolution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: types.id,
      },
    }).partyTypes({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Berries], {
    nullable: false
  })
  async naturalGiftTypes(@TypeGraphQL.Root() types: Types, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypesNaturalGiftTypesArgs): Promise<Berries[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: types.id,
      },
    }).naturalGiftTypes({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
