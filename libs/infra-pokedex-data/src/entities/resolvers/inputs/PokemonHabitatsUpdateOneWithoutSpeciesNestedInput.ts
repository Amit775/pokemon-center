import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonHabitatsCreateOrConnectWithoutSpeciesInput } from "../inputs/PokemonHabitatsCreateOrConnectWithoutSpeciesInput";
import { PokemonHabitatsCreateWithoutSpeciesInput } from "../inputs/PokemonHabitatsCreateWithoutSpeciesInput";
import { PokemonHabitatsUpdateToOneWithWhereWithoutSpeciesInput } from "../inputs/PokemonHabitatsUpdateToOneWithWhereWithoutSpeciesInput";
import { PokemonHabitatsUpsertWithoutSpeciesInput } from "../inputs/PokemonHabitatsUpsertWithoutSpeciesInput";
import { PokemonHabitatsWhereInput } from "../inputs/PokemonHabitatsWhereInput";
import { PokemonHabitatsWhereUniqueInput } from "../inputs/PokemonHabitatsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonHabitatsUpdateOneWithoutSpeciesNestedInput", {})
export class PokemonHabitatsUpdateOneWithoutSpeciesNestedInput {
  @TypeGraphQL.Field(_type => PokemonHabitatsCreateWithoutSpeciesInput, {
    nullable: true
  })
  create?: PokemonHabitatsCreateWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatsCreateOrConnectWithoutSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonHabitatsCreateOrConnectWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatsUpsertWithoutSpeciesInput, {
    nullable: true
  })
  upsert?: PokemonHabitatsUpsertWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatsWhereInput, {
    nullable: true
  })
  disconnect?: PokemonHabitatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatsWhereInput, {
    nullable: true
  })
  delete?: PokemonHabitatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatsWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonHabitatsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatsUpdateToOneWithWhereWithoutSpeciesInput, {
    nullable: true
  })
  update?: PokemonHabitatsUpdateToOneWithWhereWithoutSpeciesInput | undefined;
}
