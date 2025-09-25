import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboCreateNestedManyWithoutFirstMoveInput } from "../inputs/ContestComboCreateNestedManyWithoutFirstMoveInput";
import { ContestComboCreateNestedManyWithoutSecondMoveInput } from "../inputs/ContestComboCreateNestedManyWithoutSecondMoveInput";
import { ContestEffectCreateNestedOneWithoutMovesInput } from "../inputs/ContestEffectCreateNestedOneWithoutMovesInput";
import { ContestTypeCreateNestedOneWithoutMovesInput } from "../inputs/ContestTypeCreateNestedOneWithoutMovesInput";
import { GenerationCreateNestedOneWithoutMovesInput } from "../inputs/GenerationCreateNestedOneWithoutMovesInput";
import { MachineCreateNestedManyWithoutMoveInput } from "../inputs/MachineCreateNestedManyWithoutMoveInput";
import { MoveDamageClassCreateNestedOneWithoutMovesInput } from "../inputs/MoveDamageClassCreateNestedOneWithoutMovesInput";
import { MoveEffectCreateNestedOneWithoutMovesInput } from "../inputs/MoveEffectCreateNestedOneWithoutMovesInput";
import { MoveFlagMapCreateNestedManyWithoutMoveInput } from "../inputs/MoveFlagMapCreateNestedManyWithoutMoveInput";
import { MoveMetaCreateNestedManyWithoutMoveInput } from "../inputs/MoveMetaCreateNestedManyWithoutMoveInput";
import { MoveTargetCreateNestedOneWithoutMovesInput } from "../inputs/MoveTargetCreateNestedOneWithoutMovesInput";
import { PokemonEvolutionCreateNestedManyWithoutKnownMoveInput } from "../inputs/PokemonEvolutionCreateNestedManyWithoutKnownMoveInput";
import { PokemonMoveCreateNestedManyWithoutMoveInput } from "../inputs/PokemonMoveCreateNestedManyWithoutMoveInput";
import { SuperContestComboCreateNestedManyWithoutFirstMoveInput } from "../inputs/SuperContestComboCreateNestedManyWithoutFirstMoveInput";
import { SuperContestEffectCreateNestedOneWithoutMovesInput } from "../inputs/SuperContestEffectCreateNestedOneWithoutMovesInput";
import { TypeCreateNestedOneWithoutMovesInput } from "../inputs/TypeCreateNestedOneWithoutMovesInput";

@TypeGraphQL.InputType("MoveCreateWithoutSuperContestCombosSecondInput", {})
export class MoveCreateWithoutSuperContestCombosSecondInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  power?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pp?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  accuracy?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  priority!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  effect_chance?: number | undefined;

  @TypeGraphQL.Field(_type => GenerationCreateNestedOneWithoutMovesInput, {
    nullable: false
  })
  generation!: GenerationCreateNestedOneWithoutMovesInput;

  @TypeGraphQL.Field(_type => TypeCreateNestedOneWithoutMovesInput, {
    nullable: false
  })
  type!: TypeCreateNestedOneWithoutMovesInput;

  @TypeGraphQL.Field(_type => MoveTargetCreateNestedOneWithoutMovesInput, {
    nullable: false
  })
  target!: MoveTargetCreateNestedOneWithoutMovesInput;

  @TypeGraphQL.Field(_type => MoveDamageClassCreateNestedOneWithoutMovesInput, {
    nullable: false
  })
  damageClass!: MoveDamageClassCreateNestedOneWithoutMovesInput;

  @TypeGraphQL.Field(_type => MoveEffectCreateNestedOneWithoutMovesInput, {
    nullable: true
  })
  effect?: MoveEffectCreateNestedOneWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeCreateNestedOneWithoutMovesInput, {
    nullable: true
  })
  contestType?: ContestTypeCreateNestedOneWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestEffectCreateNestedOneWithoutMovesInput, {
    nullable: true
  })
  contestEffect?: ContestEffectCreateNestedOneWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectCreateNestedOneWithoutMovesInput, {
    nullable: true
  })
  superContestEffect?: SuperContestEffectCreateNestedOneWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveCreateNestedManyWithoutMoveInput, {
    nullable: true
  })
  pokemonMoves?: PokemonMoveCreateNestedManyWithoutMoveInput | undefined;

  @TypeGraphQL.Field(_type => MachineCreateNestedManyWithoutMoveInput, {
    nullable: true
  })
  machines?: MachineCreateNestedManyWithoutMoveInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaCreateNestedManyWithoutMoveInput, {
    nullable: true
  })
  meta?: MoveMetaCreateNestedManyWithoutMoveInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagMapCreateNestedManyWithoutMoveInput, {
    nullable: true
  })
  flagMap?: MoveFlagMapCreateNestedManyWithoutMoveInput | undefined;

  @TypeGraphQL.Field(_type => ContestComboCreateNestedManyWithoutFirstMoveInput, {
    nullable: true
  })
  contestCombos?: ContestComboCreateNestedManyWithoutFirstMoveInput | undefined;

  @TypeGraphQL.Field(_type => ContestComboCreateNestedManyWithoutSecondMoveInput, {
    nullable: true
  })
  contestCombosSecond?: ContestComboCreateNestedManyWithoutSecondMoveInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestComboCreateNestedManyWithoutFirstMoveInput, {
    nullable: true
  })
  superContestCombos?: SuperContestComboCreateNestedManyWithoutFirstMoveInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateNestedManyWithoutKnownMoveInput, {
    nullable: true
  })
  knownMoves?: PokemonEvolutionCreateNestedManyWithoutKnownMoveInput | undefined;
}
