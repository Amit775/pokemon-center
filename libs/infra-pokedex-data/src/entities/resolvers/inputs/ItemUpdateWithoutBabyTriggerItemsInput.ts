import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryUpdateManyWithoutItemNestedInput } from "../inputs/BerryUpdateManyWithoutItemNestedInput";
import { ItemCategoryUpdateOneRequiredWithoutItemsNestedInput } from "../inputs/ItemCategoryUpdateOneRequiredWithoutItemsNestedInput";
import { ItemFlagMapUpdateManyWithoutItemNestedInput } from "../inputs/ItemFlagMapUpdateManyWithoutItemNestedInput";
import { ItemFlingEffectUpdateOneWithoutItemsNestedInput } from "../inputs/ItemFlingEffectUpdateOneWithoutItemsNestedInput";
import { ItemGameIndexUpdateManyWithoutItemNestedInput } from "../inputs/ItemGameIndexUpdateManyWithoutItemNestedInput";
import { MachineUpdateManyWithoutItemNestedInput } from "../inputs/MachineUpdateManyWithoutItemNestedInput";
import { PokemonEvolutionUpdateManyWithoutHeldItemNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutHeldItemNestedInput";
import { PokemonEvolutionUpdateManyWithoutTriggerItemNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutTriggerItemNestedInput";
import { PokemonItemUpdateManyWithoutItemNestedInput } from "../inputs/PokemonItemUpdateManyWithoutItemNestedInput";

@TypeGraphQL.InputType("ItemUpdateWithoutBabyTriggerItemsInput", {})
export class ItemUpdateWithoutBabyTriggerItemsInput {
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

  @TypeGraphQL.Field(_type => ItemCategoryUpdateOneRequiredWithoutItemsNestedInput, {
    nullable: true
  })
  category?: ItemCategoryUpdateOneRequiredWithoutItemsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlingEffectUpdateOneWithoutItemsNestedInput, {
    nullable: true
  })
  flingEffect?: ItemFlingEffectUpdateOneWithoutItemsNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemUpdateManyWithoutItemNestedInput, {
    nullable: true
  })
  pokemonItems?: PokemonItemUpdateManyWithoutItemNestedInput | undefined;

  @TypeGraphQL.Field(_type => MachineUpdateManyWithoutItemNestedInput, {
    nullable: true
  })
  machines?: MachineUpdateManyWithoutItemNestedInput | undefined;

  @TypeGraphQL.Field(_type => BerryUpdateManyWithoutItemNestedInput, {
    nullable: true
  })
  berries?: BerryUpdateManyWithoutItemNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexUpdateManyWithoutItemNestedInput, {
    nullable: true
  })
  gameIndices?: ItemGameIndexUpdateManyWithoutItemNestedInput | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapUpdateManyWithoutItemNestedInput, {
    nullable: true
  })
  flagMap?: ItemFlagMapUpdateManyWithoutItemNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyWithoutTriggerItemNestedInput, {
    nullable: true
  })
  triggerItems?: PokemonEvolutionUpdateManyWithoutTriggerItemNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyWithoutHeldItemNestedInput, {
    nullable: true
  })
  heldItems?: PokemonEvolutionUpdateManyWithoutHeldItemNestedInput | undefined;
}
