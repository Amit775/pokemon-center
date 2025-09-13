import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateWithoutTriggerItemInput } from "../inputs/PokemonEvolutionCreateWithoutTriggerItemInput";
import { PokemonEvolutionUpdateWithoutTriggerItemInput } from "../inputs/PokemonEvolutionUpdateWithoutTriggerItemInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpsertWithWhereUniqueWithoutTriggerItemInput", {})
export class PokemonEvolutionUpsertWithWhereUniqueWithoutTriggerItemInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateWithoutTriggerItemInput, {
    nullable: false
  })
  update!: PokemonEvolutionUpdateWithoutTriggerItemInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateWithoutTriggerItemInput, {
    nullable: false
  })
  create!: PokemonEvolutionCreateWithoutTriggerItemInput;
}
