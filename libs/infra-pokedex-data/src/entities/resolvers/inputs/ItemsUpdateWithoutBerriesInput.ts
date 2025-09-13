import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsUpdateManyWithoutBabyTriggerItemNestedInput } from "../inputs/EvolutionChainsUpdateManyWithoutBabyTriggerItemNestedInput";
import { ItemCategoriesUpdateOneRequiredWithoutItemsNestedInput } from "../inputs/ItemCategoriesUpdateOneRequiredWithoutItemsNestedInput";
import { ItemFlagMapUpdateManyWithoutItemNestedInput } from "../inputs/ItemFlagMapUpdateManyWithoutItemNestedInput";
import { ItemFlingEffectsUpdateOneWithoutItemsNestedInput } from "../inputs/ItemFlingEffectsUpdateOneWithoutItemsNestedInput";
import { ItemGameIndicesUpdateManyWithoutItemNestedInput } from "../inputs/ItemGameIndicesUpdateManyWithoutItemNestedInput";
import { MachinesUpdateManyWithoutItemNestedInput } from "../inputs/MachinesUpdateManyWithoutItemNestedInput";
import { PokemonEvolutionUpdateManyWithoutHeldItemNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutHeldItemNestedInput";
import { PokemonEvolutionUpdateManyWithoutTriggerItemNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutTriggerItemNestedInput";
import { PokemonItemsUpdateManyWithoutItemNestedInput } from "../inputs/PokemonItemsUpdateManyWithoutItemNestedInput";

@TypeGraphQL.InputType("ItemsUpdateWithoutBerriesInput", {})
export class ItemsUpdateWithoutBerriesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  cost?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  fling_power?: number | undefined;

  @TypeGraphQL.Field(_type => ItemCategoriesUpdateOneRequiredWithoutItemsNestedInput, {
    nullable: true
  })
  category?: ItemCategoriesUpdateOneRequiredWithoutItemsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectsUpdateOneWithoutItemsNestedInput, {
    nullable: true
  })
  flingEffect?: ItemFlingEffectsUpdateOneWithoutItemsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsUpdateManyWithoutItemNestedInput, {
    nullable: true
  })
  pokemonItems?: PokemonItemsUpdateManyWithoutItemNestedInput | undefined;

  @TypeGraphQL.Field(_type => MachinesUpdateManyWithoutItemNestedInput, {
    nullable: true
  })
  machines?: MachinesUpdateManyWithoutItemNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndicesUpdateManyWithoutItemNestedInput, {
    nullable: true
  })
  gameIndices?: ItemGameIndicesUpdateManyWithoutItemNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapUpdateManyWithoutItemNestedInput, {
    nullable: true
  })
  flagMap?: ItemFlagMapUpdateManyWithoutItemNestedInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsUpdateManyWithoutBabyTriggerItemNestedInput, {
    nullable: true
  })
  babyTriggerItems?: EvolutionChainsUpdateManyWithoutBabyTriggerItemNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyWithoutTriggerItemNestedInput, {
    nullable: true
  })
  triggerItems?: PokemonEvolutionUpdateManyWithoutTriggerItemNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyWithoutHeldItemNestedInput, {
    nullable: true
  })
  heldItems?: PokemonEvolutionUpdateManyWithoutHeldItemNestedInput | undefined;
}
