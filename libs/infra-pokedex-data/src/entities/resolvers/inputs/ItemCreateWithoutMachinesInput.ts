import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryCreateNestedManyWithoutItemInput } from "../inputs/BerryCreateNestedManyWithoutItemInput";
import { EvolutionChainCreateNestedManyWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainCreateNestedManyWithoutBabyTriggerItemInput";
import { ItemCategoryCreateNestedOneWithoutItemsInput } from "../inputs/ItemCategoryCreateNestedOneWithoutItemsInput";
import { ItemFlagMapCreateNestedManyWithoutItemInput } from "../inputs/ItemFlagMapCreateNestedManyWithoutItemInput";
import { ItemFlingEffectCreateNestedOneWithoutItemsInput } from "../inputs/ItemFlingEffectCreateNestedOneWithoutItemsInput";
import { ItemGameIndexCreateNestedManyWithoutItemInput } from "../inputs/ItemGameIndexCreateNestedManyWithoutItemInput";
import { PokemonEvolutionCreateNestedManyWithoutHeldItemInput } from "../inputs/PokemonEvolutionCreateNestedManyWithoutHeldItemInput";
import { PokemonEvolutionCreateNestedManyWithoutTriggerItemInput } from "../inputs/PokemonEvolutionCreateNestedManyWithoutTriggerItemInput";
import { PokemonItemCreateNestedManyWithoutItemInput } from "../inputs/PokemonItemCreateNestedManyWithoutItemInput";

@TypeGraphQL.InputType("ItemCreateWithoutMachinesInput", {})
export class ItemCreateWithoutMachinesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cost!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  fling_power?: number | undefined;

  @TypeGraphQL.Field(_type => ItemCategoryCreateNestedOneWithoutItemsInput, {
    nullable: false
  })
  category!: ItemCategoryCreateNestedOneWithoutItemsInput;

  @TypeGraphQL.Field(_type => ItemFlingEffectCreateNestedOneWithoutItemsInput, {
    nullable: true
  })
  flingEffect?: ItemFlingEffectCreateNestedOneWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemCreateNestedManyWithoutItemInput, {
    nullable: true
  })
  pokemonItems?: PokemonItemCreateNestedManyWithoutItemInput | undefined;

  @TypeGraphQL.Field(_type => BerryCreateNestedManyWithoutItemInput, {
    nullable: true
  })
  berries?: BerryCreateNestedManyWithoutItemInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexCreateNestedManyWithoutItemInput, {
    nullable: true
  })
  gameIndices?: ItemGameIndexCreateNestedManyWithoutItemInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapCreateNestedManyWithoutItemInput, {
    nullable: true
  })
  flagMap?: ItemFlagMapCreateNestedManyWithoutItemInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainCreateNestedManyWithoutBabyTriggerItemInput, {
    nullable: true
  })
  babyTriggerItems?: EvolutionChainCreateNestedManyWithoutBabyTriggerItemInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateNestedManyWithoutTriggerItemInput, {
    nullable: true
  })
  triggerItems?: PokemonEvolutionCreateNestedManyWithoutTriggerItemInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateNestedManyWithoutHeldItemInput, {
    nullable: true
  })
  heldItems?: PokemonEvolutionCreateNestedManyWithoutHeldItemInput | undefined;
}
