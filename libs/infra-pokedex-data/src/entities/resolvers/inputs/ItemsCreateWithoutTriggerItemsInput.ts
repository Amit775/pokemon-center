import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCreateNestedManyWithoutItemInput } from "../inputs/BerriesCreateNestedManyWithoutItemInput";
import { EvolutionChainsCreateNestedManyWithoutBabyTriggerItemInput } from "../inputs/EvolutionChainsCreateNestedManyWithoutBabyTriggerItemInput";
import { ItemCategoriesCreateNestedOneWithoutItemsInput } from "../inputs/ItemCategoriesCreateNestedOneWithoutItemsInput";
import { ItemFlagMapCreateNestedManyWithoutItemInput } from "../inputs/ItemFlagMapCreateNestedManyWithoutItemInput";
import { ItemFlingEffectsCreateNestedOneWithoutItemsInput } from "../inputs/ItemFlingEffectsCreateNestedOneWithoutItemsInput";
import { ItemGameIndicesCreateNestedManyWithoutItemInput } from "../inputs/ItemGameIndicesCreateNestedManyWithoutItemInput";
import { MachinesCreateNestedManyWithoutItemInput } from "../inputs/MachinesCreateNestedManyWithoutItemInput";
import { PokemonEvolutionCreateNestedManyWithoutHeldItemInput } from "../inputs/PokemonEvolutionCreateNestedManyWithoutHeldItemInput";
import { PokemonItemsCreateNestedManyWithoutItemInput } from "../inputs/PokemonItemsCreateNestedManyWithoutItemInput";

@TypeGraphQL.InputType("ItemsCreateWithoutTriggerItemsInput", {})
export class ItemsCreateWithoutTriggerItemsInput {
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

  @TypeGraphQL.Field(_type => ItemCategoriesCreateNestedOneWithoutItemsInput, {
    nullable: false
  })
  category!: ItemCategoriesCreateNestedOneWithoutItemsInput;

  @TypeGraphQL.Field(_type => ItemFlingEffectsCreateNestedOneWithoutItemsInput, {
    nullable: true
  })
  flingEffect?: ItemFlingEffectsCreateNestedOneWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsCreateNestedManyWithoutItemInput, {
    nullable: true
  })
  pokemonItems?: PokemonItemsCreateNestedManyWithoutItemInput | undefined;

  @TypeGraphQL.Field(_type => MachinesCreateNestedManyWithoutItemInput, {
    nullable: true
  })
  machines?: MachinesCreateNestedManyWithoutItemInput | undefined;

  @TypeGraphQL.Field(_type => BerriesCreateNestedManyWithoutItemInput, {
    nullable: true
  })
  berries?: BerriesCreateNestedManyWithoutItemInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndicesCreateNestedManyWithoutItemInput, {
    nullable: true
  })
  gameIndices?: ItemGameIndicesCreateNestedManyWithoutItemInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapCreateNestedManyWithoutItemInput, {
    nullable: true
  })
  flagMap?: ItemFlagMapCreateNestedManyWithoutItemInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsCreateNestedManyWithoutBabyTriggerItemInput, {
    nullable: true
  })
  babyTriggerItems?: EvolutionChainsCreateNestedManyWithoutBabyTriggerItemInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateNestedManyWithoutHeldItemInput, {
    nullable: true
  })
  heldItems?: PokemonEvolutionCreateNestedManyWithoutHeldItemInput | undefined;
}
