import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicCreateNestedManyWithoutStatInput } from "../inputs/CharacteristicCreateNestedManyWithoutStatInput";
import { MoveMetaStatChangesCreateNestedManyWithoutStatInput } from "../inputs/MoveMetaStatChangesCreateNestedManyWithoutStatInput";
import { NatureCreateNestedManyWithoutDecreasedStatInput } from "../inputs/NatureCreateNestedManyWithoutDecreasedStatInput";
import { NatureCreateNestedManyWithoutIncreasedStatInput } from "../inputs/NatureCreateNestedManyWithoutIncreasedStatInput";
import { PokemonStatCreateNestedManyWithoutStatInput } from "../inputs/PokemonStatCreateNestedManyWithoutStatInput";

@TypeGraphQL.InputType("StatCreateInput", {})
export class StatCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  damage_class_id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_battle_only!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  game_index?: number | undefined;

  @TypeGraphQL.Field(_type => PokemonStatCreateNestedManyWithoutStatInput, {
    nullable: true
  })
  pokemonStats?: PokemonStatCreateNestedManyWithoutStatInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesCreateNestedManyWithoutStatInput, {
    nullable: true
  })
  moveMetaStatChanges?: MoveMetaStatChangesCreateNestedManyWithoutStatInput | undefined;

  @TypeGraphQL.Field(_type => CharacteristicCreateNestedManyWithoutStatInput, {
    nullable: true
  })
  characteristics?: CharacteristicCreateNestedManyWithoutStatInput | undefined;

  @TypeGraphQL.Field(_type => NatureCreateNestedManyWithoutDecreasedStatInput, {
    nullable: true
  })
  natures?: NatureCreateNestedManyWithoutDecreasedStatInput | undefined;

  @TypeGraphQL.Field(_type => NatureCreateNestedManyWithoutIncreasedStatInput, {
    nullable: true
  })
  naturesIncreased?: NatureCreateNestedManyWithoutIncreasedStatInput | undefined;
}
