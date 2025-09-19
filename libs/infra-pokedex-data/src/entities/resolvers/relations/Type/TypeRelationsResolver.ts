import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Berry } from "../../../models/Berry";
import { BerryFlavor } from "../../../models/BerryFlavor";
import { Generation } from "../../../models/Generation";
import { Move } from "../../../models/Move";
import { MoveDamageClass } from "../../../models/MoveDamageClass";
import { Nature } from "../../../models/Nature";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { PokemonFormType } from "../../../models/PokemonFormType";
import { PokemonType } from "../../../models/PokemonType";
import { Type } from "../../../models/Type";
import { TypeEfficacy } from "../../../models/TypeEfficacy";
import { TypeGameIndex } from "../../../models/TypeGameIndex";
import { TypeBerryFlavorsArgs } from "./args/TypeBerryFlavorsArgs";
import { TypeDamageClassArgs } from "./args/TypeDamageClassArgs";
import { TypeEfficacyArgs } from "./args/TypeEfficacyArgs";
import { TypeEfficacyTargetArgs } from "./args/TypeEfficacyTargetArgs";
import { TypeFormTypesArgs } from "./args/TypeFormTypesArgs";
import { TypeGameIndicesArgs } from "./args/TypeGameIndicesArgs";
import { TypeKnownMoveTypesArgs } from "./args/TypeKnownMoveTypesArgs";
import { TypeMovesArgs } from "./args/TypeMovesArgs";
import { TypeNaturalGiftTypesArgs } from "./args/TypeNaturalGiftTypesArgs";
import { TypeNaturesArgs } from "./args/TypeNaturesArgs";
import { TypeNaturesIncreasedArgs } from "./args/TypeNaturesIncreasedArgs";
import { TypePartyTypesArgs } from "./args/TypePartyTypesArgs";
import { TypePokemonTypesArgs } from "./args/TypePokemonTypesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Type)
export class TypeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Generation, {
    nullable: false
  })
  async generation(@TypeGraphQL.Root() type: Type, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Generation> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: type.id,
      },
    }).generation({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MoveDamageClass, {
    nullable: true
  })
  async damageClass(@TypeGraphQL.Root() type: Type, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypeDamageClassArgs): Promise<MoveDamageClass | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: type.id,
      },
    }).damageClass({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Move], {
    nullable: false
  })
  async moves(@TypeGraphQL.Root() type: Type, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypeMovesArgs): Promise<Move[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: type.id,
      },
    }).moves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonType], {
    nullable: false
  })
  async pokemonTypes(@TypeGraphQL.Root() type: Type, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypePokemonTypesArgs): Promise<PokemonType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: type.id,
      },
    }).pokemonTypes({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonFormType], {
    nullable: false
  })
  async formTypes(@TypeGraphQL.Root() type: Type, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypeFormTypesArgs): Promise<PokemonFormType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: type.id,
      },
    }).formTypes({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [TypeGameIndex], {
    nullable: false
  })
  async gameIndices(@TypeGraphQL.Root() type: Type, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypeGameIndicesArgs): Promise<TypeGameIndex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: type.id,
      },
    }).gameIndices({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [TypeEfficacy], {
    nullable: false
  })
  async efficacy(@TypeGraphQL.Root() type: Type, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypeEfficacyArgs): Promise<TypeEfficacy[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: type.id,
      },
    }).efficacy({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [TypeEfficacy], {
    nullable: false
  })
  async efficacyTarget(@TypeGraphQL.Root() type: Type, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypeEfficacyTargetArgs): Promise<TypeEfficacy[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: type.id,
      },
    }).efficacyTarget({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [BerryFlavor], {
    nullable: false
  })
  async berryFlavors(@TypeGraphQL.Root() type: Type, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypeBerryFlavorsArgs): Promise<BerryFlavor[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: type.id,
      },
    }).berryFlavors({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Nature], {
    nullable: false
  })
  async natures(@TypeGraphQL.Root() type: Type, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypeNaturesArgs): Promise<Nature[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: type.id,
      },
    }).natures({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Nature], {
    nullable: false
  })
  async naturesIncreased(@TypeGraphQL.Root() type: Type, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypeNaturesIncreasedArgs): Promise<Nature[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: type.id,
      },
    }).naturesIncreased({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonEvolution], {
    nullable: false
  })
  async knownMoveTypes(@TypeGraphQL.Root() type: Type, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypeKnownMoveTypesArgs): Promise<PokemonEvolution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: type.id,
      },
    }).knownMoveTypes({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonEvolution], {
    nullable: false
  })
  async partyTypes(@TypeGraphQL.Root() type: Type, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypePartyTypesArgs): Promise<PokemonEvolution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: type.id,
      },
    }).partyTypes({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Berry], {
    nullable: false
  })
  async naturalGiftTypes(@TypeGraphQL.Root() type: Type, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TypeNaturalGiftTypesArgs): Promise<Berry[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).types.findUniqueOrThrow({
      where: {
        id: type.id,
      },
    }).naturalGiftTypes({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
